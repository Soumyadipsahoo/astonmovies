import { motion } from "framer-motion";
import { Film, Globe2, Tv, Sparkles, Clapperboard, Languages } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    title: "Movies Streaming App",
    desc: "Aston Movies brings the ultimate streaming experience — a hand-curated catalog of films and shows, all in stunning HD, anywhere on your Android device.",
  },
  {
    icon: Globe2,
    title: "Hollywood",
    desc: "A massive collection of Hollywood blockbusters, indies, and timeless classics — all available with crisp visuals and immersive sound.",
  },
  {
    icon: Film,
    title: "Bollywood",
    desc: "From the latest Hindi releases to the golden classics — the best of Bollywood, ready to stream the moment you open the app.",
  },
  {
    icon: Languages,
    title: "Tollywood",
    desc: "An ever-expanding Telugu cinema collection. Action epics, romances, dramas — the heart of Tollywood, beautifully presented.",
  },
  {
    icon: Tv,
    title: "Web Series",
    desc: "Bingeable web series across genres and languages, with new episodes added every week. Your next obsession is one tap away.",
  },
  {
    icon: Clapperboard,
    title: "TV Shows",
    desc: "Live TV channels and on-demand shows — from news to entertainment, sports to lifestyle, all under one cinematic roof.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            About Aston Movies
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            One App. <span className="text-gradient-gold">Endless Cinema.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Aston Movies is built for movie lovers who want a clean, fast, premium experience —
            without subscriptions or sign-ups.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-gold"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/15" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl glass-gold">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
