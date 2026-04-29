#!/usr/bin/env node
/**
 * Lightweight performance budget checker.
 *
 * Scans the build output and warns if any image or script exceeds the
 * mobile-friendly size budget. Run AFTER `bun run build`:
 *
 *   node scripts/check-asset-sizes.mjs
 *
 * Exit code:
 *   0 — all assets within budget (warnings allowed)
 *   1 — one or more assets exceed the HARD limit
 */
import { readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, relative } from "node:path";

// ---- Budgets (mobile-friendly) ----
const KB = 1024;
const BUDGETS = {
  image: { warn: 300 * KB, fail: 600 * KB }, // posters, photos
  script: { warn: 250 * KB, fail: 500 * KB }, // single JS chunk
  css: { warn: 80 * KB, fail: 150 * KB },
  video: { warn: 2 * 1024 * KB, fail: 5 * 1024 * KB },
};

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);
const SCRIPT_EXT = new Set([".js", ".mjs"]);
const CSS_EXT = new Set([".css"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov"]);

// Try common build output locations
const CANDIDATES = [".output/public", "dist", "build", "public"];
const root = CANDIDATES.find((p) => existsSync(p));

if (!root) {
  console.error("❌ No build output found. Run `bun run build` first.");
  console.error(`   Looked in: ${CANDIDATES.join(", ")}`);
  process.exit(1);
}

console.log(`\n🔍 Scanning ${root} for oversized assets…\n`);

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) yield* walk(full);
    else yield { path: full, size: st.size };
  }
}

function classify(file) {
  const ext = extname(file).toLowerCase();
  if (IMAGE_EXT.has(ext)) return "image";
  if (SCRIPT_EXT.has(ext)) return "script";
  if (CSS_EXT.has(ext)) return "css";
  if (VIDEO_EXT.has(ext)) return "video";
  return null;
}

const fmt = (b) => (b >= KB * KB ? `${(b / KB / KB).toFixed(2)} MB` : `${(b / KB).toFixed(1)} KB`);

const warnings = [];
const failures = [];

for (const { path, size } of walk(root)) {
  const kind = classify(path);
  if (!kind) continue;
  const budget = BUDGETS[kind];
  const rel = relative(process.cwd(), path);
  if (size > budget.fail) failures.push({ rel, size, kind, limit: budget.fail });
  else if (size > budget.warn) warnings.push({ rel, size, kind, limit: budget.warn });
}

if (warnings.length) {
  console.log(`⚠️  ${warnings.length} asset(s) over the WARN budget:`);
  for (const w of warnings)
    console.log(`   • [${w.kind}] ${w.rel} — ${fmt(w.size)} (warn > ${fmt(w.limit)})`);
  console.log("");
}

if (failures.length) {
  console.log(`❌ ${failures.length} asset(s) over the HARD budget:`);
  for (const f of failures)
    console.log(`   • [${f.kind}] ${f.rel} — ${fmt(f.size)} (fail > ${fmt(f.limit)})`);
  console.log("\n💡 Tip: compress images to ~300 KB (posters), or convert to .webp.\n");
  process.exit(1);
}

if (!warnings.length) console.log("✅ All assets within mobile-friendly budgets.\n");
else console.log("✅ No hard-budget violations (warnings above are advisory).\n");
