import { useMemo } from "react";

export function Particles({ count = 24 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 18,
        size: 1 + Math.random() * 3,
        opacity: 0.25 + Math.random() * 0.45,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.left}%`,
            bottom: 0,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `particle-rise ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            boxShadow: "0 0 8px var(--gold-glow)",
          }}
        />
      ))}
    </div>
  );
}
