import { Download, ShieldCheck, Zap, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { APK_DOWNLOAD_URL } from "@/lib/constants";
import { DownloadButton } from "./DownloadButton";

export function DownloadSection() {
  return (
    <section id="download" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl glass-gold p-8 shadow-cinematic sm:p-14"
        >
          {/* Decorative glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Available now · Android
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
                Download <span className="text-gradient-gold">Aston Movies</span> APK
              </h2>
              <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                A premium cinematic download experience packed into one lightweight Android
                app. No ads. No sign-ups. Just movies.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Tag icon={<HardDrive className="h-3.5 w-3.5" />} label="10 MB" />
                <Tag icon={<Zap className="h-3.5 w-3.5" />} label="v1.0.0" />
                <Tag icon={<ShieldCheck className="h-3.5 w-3.5" />} label="Safe & Verified" />
              </div>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <DownloadButton
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base font-bold text-gold-foreground shadow-gold-strong animate-gold-pulse transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_hsl(var(--gold)/0.65)] data-[loading=true]:pointer-events-none data-[loading=true]:opacity-80"
                  iconClassName="h-5 w-5 transition-transform group-hover:translate-y-0.5"
                >
                  Download APK Now
                </DownloadButton>
                <span className="text-xs text-muted-foreground">
                  Android 6.0+ · Updated April 2026
                </span>
              </div>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-gold/90">
                Safe APK · No Virus · Verified
              </p>
            </div>

            {/* Phone mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto hidden h-72 w-44 sm:block"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-gold p-[2px] shadow-gold-strong">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[2.4rem] bg-card p-6">
                  <img src={logo} alt="" width={80} height={80} className="h-20 w-20 rounded-full object-cover ring-2 ring-gold/40 shadow-gold" />
                  <span className="mt-3 font-display text-sm font-bold text-gradient-gold">
                    ASTON MOVIES
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    v3.4.1
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Tag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 font-medium text-foreground/90">
      <span className="text-gold">{icon}</span>
      {label}
    </span>
  );
}
