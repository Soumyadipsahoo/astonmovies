import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, Download, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { movies, type Movie } from "@/data/movies";

export function MovieSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Movie | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  // Auto-scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const tick = () => {
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + 220;
      if (next >= max - 4) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollTo({ left: next, behavior: "smooth" });
    };
    autoplayRef.current = window.setInterval(tick, 4000);
    const stop = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
    el.addEventListener("pointerdown", stop, { once: true });
    el.addEventListener("wheel", stop, { once: true });
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  return (
    <section id="movies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Trending Now
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              Featured <span className="text-gradient-gold">Cinematic</span> Picks
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Swipe through the most-watched titles streaming right now on Aston Movies.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="rounded-full glass p-3 text-foreground transition-all hover:border-gold/40 hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="rounded-full glass p-3 text-foreground transition-all hover:border-gold/40 hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />

          <div
            ref={scrollerRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pl-1 pr-1"
          >
            {movies.map((m, i) => (
              <motion.button
                key={m.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setActive(m)}
                className="group relative aspect-[2/3] w-[140px] flex-shrink-0 snap-start overflow-hidden rounded-2xl shadow-cinematic transition-all duration-500 hover:scale-[1.04] hover:shadow-gold sm:w-[200px] md:w-[240px] lg:w-[260px]"
              >
                <img
                  src={m.poster}
                  alt={m.title}
                  loading="lazy"
                  width={512}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-2.5 text-left sm:p-4">
                  <div className="mb-1 flex items-center gap-1.5 text-[10px] text-gold sm:text-[11px]">
                    <Star className="h-2.5 w-2.5 fill-current sm:h-3 sm:w-3" />
                    {m.rating} · {m.year}
                  </div>
                  <h3 className="font-display text-sm font-bold leading-tight text-foreground sm:text-lg">
                    {m.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground sm:text-xs">{m.genre}</p>
                </div>
                <div className="absolute right-3 top-3 rounded-full glass-gold px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  HD
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <MovieModal movie={active} onClose={() => setActive(null)} />
    </section>
  );
}

function MovieModal({ movie, onClose }: { movie: Movie | null; onClose: () => void }) {
  useEffect(() => {
    if (movie) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [movie]);

  return (
    <AnimatePresence>
      {movie && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-4xl overflow-hidden rounded-3xl glass shadow-cinematic md:grid-cols-[300px_1fr]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full glass p-2 text-foreground transition-colors hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[2/3] md:aspect-auto">
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1 text-gold">
                  <Star className="h-3.5 w-3.5 fill-current" /> {movie.rating}
                </span>
                <span>·</span>
                <span>{movie.year}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {movie.duration}
                </span>
                <span>·</span>
                <span className="rounded-full glass-gold px-2 py-0.5 text-gold">
                  {movie.genre}
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold sm:text-4xl">
                <span className="text-gradient-gold">{movie.title}</span>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {movie.description}
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105"
                >
                  <Download className="h-4 w-4" /> Download in App
                </a>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground hover:text-gold"
                >
                  <Play className="h-4 w-4 fill-current" /> Watch Trailer
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
