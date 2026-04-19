import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Aston Movies" width={32} height={32} className="h-8 w-8" />
            <div>
              <p className="font-display text-sm font-bold text-gradient-gold">
                ASTON MOVIES
              </p>
              <p className="text-xs text-muted-foreground">
                Premium cinematic streaming, made for Android.
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <a href="#movies" className="hover:text-gold">Movies</a>
            <a href="#download" className="hover:text-gold">Download</a>
            <a href="#how-to" className="hover:text-gold">Install</a>
            <a href="#about" className="hover:text-gold">About</a>
            <a href="#faq" className="hover:text-gold">FAQ</a>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aston Movies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
