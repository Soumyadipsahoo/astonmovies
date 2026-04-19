import { motion } from "framer-motion";
import { Smartphone, Sparkles, ImageIcon } from "lucide-react";

const screens = [
  { label: "Home Screen", hint: "Trending • Hero Banner" },
  { label: "Player UI", hint: "4K • Subtitles • Cast" },
  { label: "Library", hint: "Movies • Series • TV" },
];

export function AppShowcase() {
  return (
    <section
      id="app-ui"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-gold"
          >
            <Sparkles className="h-3.5 w-3.5" /> App Preview
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold sm:text-5xl"
          >
            A Glimpse Inside <span className="text-gradient-gold">Aston Movies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base"
          >
            Sneak peek of the app's clean, cinematic interface — built for buttery
            smooth streaming on Android.
          </motion.p>
        </div>

        {/* Phone mockups */}
        <div className="flex items-end justify-center gap-3 sm:gap-6">
          {screens.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative ${
                i === 1
                  ? "z-10 w-[160px] sm:w-[220px] md:w-[260px]"
                  : "w-[120px] opacity-90 sm:w-[180px] md:w-[220px]"
              }`}
              style={{
                transform: i === 0 ? "translateY(20px) rotate(-6deg)" : i === 2 ? "translateY(20px) rotate(6deg)" : "",
              }}
            >
              {/* Phone frame */}
              <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] border-[3px] border-foreground/10 bg-card shadow-cinematic sm:rounded-[2.5rem] sm:border-[4px]">
                {/* Notch */}
                <div className="absolute left-1/2 top-2 z-20 h-3 w-12 -translate-x-1/2 rounded-full bg-background sm:top-3 sm:h-4 sm:w-16" />

                {/* Screen placeholder content - animated */}
                <div className="relative flex h-full w-full flex-col bg-gradient-to-b from-background via-card to-background">
                  {/* Animated shimmer */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
                  />

                  {/* Top bar */}
                  <div className="flex items-center justify-between px-3 pt-6 sm:pt-8">
                    <div className="h-2 w-12 rounded-full bg-gold/40" />
                    <div className="h-2 w-2 rounded-full bg-gold" />
                  </div>

                  {/* Hero block */}
                  <div className="mx-3 mt-3 aspect-[16/10] rounded-lg bg-gradient-to-br from-gold/30 via-gold/10 to-transparent">
                    <div className="flex h-full items-end p-2">
                      <div className="space-y-1">
                        <div className="h-1.5 w-10 rounded-full bg-foreground/60" />
                        <div className="h-1 w-6 rounded-full bg-foreground/30" />
                      </div>
                    </div>
                  </div>

                  {/* Grid cards */}
                  <div className="grid grid-cols-3 gap-1.5 p-3">
                    {[...Array(6)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.2,
                        }}
                        className="aspect-[2/3] rounded-md bg-gradient-to-b from-foreground/15 to-foreground/5"
                      />
                    ))}
                  </div>

                  {/* Placeholder icon */}
                  <div className="mt-auto flex flex-col items-center gap-1.5 pb-6 text-muted-foreground/40">
                    <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-[8px] uppercase tracking-wider sm:text-[9px]">
                      Screenshot
                    </span>
                  </div>
                </div>

                {/* Gold edge glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-gold/20 sm:rounded-[2.5rem]" />
              </div>

              {/* Caption */}
              <div className="mt-3 text-center sm:mt-4">
                <p className="font-display text-[11px] font-semibold text-foreground sm:text-sm">
                  {s.label}
                </p>
                <p className="text-[9px] text-muted-foreground sm:text-xs">
                  {s.hint}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 rounded-full glass px-5 py-2.5 text-center text-xs text-muted-foreground"
        >
          <Smartphone className="h-3.5 w-3.5 text-gold" />
          Real app screenshots coming soon
        </motion.div>
      </div>
    </section>
  );
}
