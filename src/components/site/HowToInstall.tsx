import { motion } from "framer-motion";
import {
  Search,
  DownloadCloud,
  Hourglass,
  FolderOpen,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { APK_DOWNLOAD_URL } from "@/lib/constants";
import { DownloadButton } from "./DownloadButton";

const steps = [
  {
    icon: Search,
    title: "Locate the official source",
    desc: "Visit this page from your Android device — only download from the official Aston Movies site.",
  },
  {
    icon: DownloadCloud,
    title: "Download the latest APK",
    desc: "Tap the gold Download button. The latest signed version will start downloading automatically.",
  },
  {
    icon: Hourglass,
    title: "Wait for download to finish",
    desc: "Make sure you have a stable connection. Once complete, a notification will appear.",
  },
  {
    icon: FolderOpen,
    title: "Open file manager",
    desc: "Navigate to the Downloads folder and tap the AstonMovies.apk file.",
  },
  {
    icon: ShieldCheck,
    title: "Enable unknown sources",
    desc: "Allow installation from unknown sources in Settings → Security if prompted.",
  },
  {
    icon: Smartphone,
    title: "Install and open",
    desc: "Tap Install, wait a few seconds, then open Aston Movies and enjoy unlimited HD streaming.",
  },
];

export function HowToInstall() {
  return (
    <section id="how-to" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Installation Guide
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            How to Download &amp; Install the{" "}
            <span className="text-gradient-gold">Aston Movies APK</span> for Android
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Aston Movies is a premium streaming platform offering free access to movies,
            web series, and TV shows in HD. Follow these six simple steps to get started.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 md:left-1/2 md:block" />

          <ol className="space-y-6 md:space-y-12">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${
                    isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`md:text-right ${isLeft ? "" : "md:text-left"}`}>
                    <div
                      className={`flex items-center gap-4 ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl glass-gold shadow-gold">
                        <Icon className="h-6 w-6 text-gold" />
                        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-gold text-[11px] font-bold text-gold-foreground shadow-gold">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold sm:text-xl">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <div className="md:pt-3">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {s.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <DownloadButton
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold text-gold-foreground shadow-gold-strong transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_hsl(var(--gold)/0.65)] data-[loading=true]:pointer-events-none data-[loading=true]:opacity-80"
            hideIcon
          >
            Download App Now
          </DownloadButton>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-gold/90">
            Safe APK · No Virus · Verified
          </p>
        </motion.div>
      </div>
    </section>
  );
}
