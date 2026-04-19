import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#movies", label: "Movies" },
  { href: "#download", label: "Download" },
  { href: "#how-to", label: "Install Guide" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "glass rounded-2xl mx-3 sm:mx-6 px-4 py-2" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Aston Movies logo" width={36} height={36} className="h-9 w-9" />
          <span className="font-display text-lg font-bold tracking-wider text-gradient-gold">
            ASTON
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="hidden items-center gap-2 rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105 md:inline-flex"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-foreground glass md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-3 mt-2 rounded-2xl glass p-4">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-gold/10 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold"
              >
                <Download className="h-4 w-4" /> Download App
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
