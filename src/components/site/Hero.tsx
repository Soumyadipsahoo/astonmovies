import { Download, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "./Particles";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Cinematic video background — disabled on mobile for performance */}
      {!isMobile && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-50 animate-cinematic-zoom"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster=""
        />
      )}

      {/* Vignette + gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.08_0.01_60/0.6)_60%,oklch(0.06_0.01_60)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />

      {/* Gold particles — fewer on mobile */}
      <Particles count={isMobile ? 10 : 28} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold sm:text-xs"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          Premium Download · Android APK
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-[2.25rem] font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          <span className="block text-foreground">Download Unlimited</span>
          <span className="block text-gradient-gold">Movie HD</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-lg"
        >
          Hollywood, Bollywood, Tollywood, web series & live TV — all in one cinematic
          experience. Download the <span className="text-gold">Aston Movies</span> app and
          step into the show.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href="#download"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold-strong animate-gold-pulse transition-transform hover:scale-[1.04] sm:px-8 sm:py-4 sm:text-base"
          >
            <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            Download App Now
          </a>
          <a
            href="https://t.me/Astonmovie_Official"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-gold/40 hover:text-gold sm:px-8 sm:py-4 sm:text-base"
          >
            <Send className="h-5 w-5" />
            Join Telegram
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] text-muted-foreground sm:mt-14 sm:gap-x-10 sm:text-xs"
        >
          <Stat value="10K+" label="Movies" />
          <Divider />
          <Stat value="4K" label="HD Quality" />
          <Divider />
          <Stat value="100%" label="Free" />
          <Divider />
          <Stat value="24/7" label="Downloads" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-gold/40 p-1">
          <span className="h-2 w-1 animate-float rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-base font-bold text-gradient-gold sm:text-xl">
        {value}
      </span>
      <span className="uppercase tracking-widest">{label}</span>
    </div>
  );
}

function Divider() {
  return <span className="hidden h-6 w-px bg-border sm:block" />;
}
