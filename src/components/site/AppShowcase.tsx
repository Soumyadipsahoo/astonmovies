import { motion } from "framer-motion";
import { Smartphone, Sparkles } from "lucide-react";
import appHome from "@/assets/app-home.png";
import appSettings from "@/assets/app-settings.png";
import appProfile from "@/assets/app-profile.png";
import appSignup from "@/assets/app-signup.png";
import appDetail from "@/assets/app-detail.png";

const screens = [
  { src: appSignup, label: "Sign Up", hint: "Create account • Referral" },
  { src: appSettings, label: "Settings", hint: "Theme • App Lock" },
  { src: appHome, label: "Home Screen", hint: "Trending • Recent Uploads" },
  { src: appDetail, label: "Movie Detail", hint: "Trailer • Download • Cast" },
  { src: appProfile, label: "Profile", hint: "Referrals • VIP" },
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
            Real screenshots of the Aston Movies Android app — clean, cinematic,
            and built for blazing-fast downloads.
          </motion.p>
        </div>

        {/* Featured large screenshot */}
        <div className="mb-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[240px] sm:w-[280px] md:w-[320px]"
          >
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2.2rem] border-[5px] border-foreground/15 bg-card shadow-cinematic sm:rounded-[2.5rem] sm:border-[6px]">
              {/* Notch */}
              <div className="absolute left-1/2 top-2 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-background sm:top-3 sm:h-5 sm:w-20" />
              <img
                src={appHome}
                alt="Aston Movies app home screen"
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
              {/* Gold edge glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-gold/30 sm:rounded-[2.1rem]" />
            </div>
            {/* Outer glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] bg-gold/20 blur-3xl" />
          </motion.div>
        </div>

        {/* Horizontally scrollable screenshot strip */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent" />

          <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pl-2 pr-2 sm:gap-6">
            {screens.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex-shrink-0 snap-start"
              >
                <div className="relative w-[140px] sm:w-[170px] md:w-[190px]">
                  {/* Phone frame */}
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[1.6rem] border-[3px] border-foreground/15 bg-card shadow-cinematic transition-all duration-500 group-hover:scale-[1.04] group-hover:border-gold/40 sm:rounded-[1.8rem] sm:border-[4px]">
                    {/* Notch */}
                    <div className="absolute left-1/2 top-1.5 z-20 h-2.5 w-10 -translate-x-1/2 rounded-full bg-background sm:top-2 sm:h-3 sm:w-12" />
                    <img
                      src={s.src}
                      alt={`Aston Movies app — ${s.label}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                    {/* Gold edge */}
                    <div className="pointer-events-none absolute inset-0 rounded-[1.3rem] ring-1 ring-inset ring-gold/20 sm:rounded-[1.5rem]" />
                  </div>

                  {/* Caption */}
                  <div className="mt-3 text-center">
                    <p className="font-display text-xs font-semibold text-foreground sm:text-sm">
                      {s.label}
                    </p>
                    <p className="text-[10px] text-muted-foreground sm:text-xs">
                      {s.hint}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 rounded-full glass px-5 py-2.5 text-center text-xs text-muted-foreground"
        >
          <Smartphone className="h-3.5 w-3.5 text-gold" />
          Available now on Android — APK download below
        </motion.div>
      </div>
    </section>
  );
}
