import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { MovieSlider } from "@/components/site/MovieSlider";
import { AppShowcase } from "@/components/site/AppShowcase";
import { DownloadSection } from "@/components/site/DownloadSection";
import { HowToInstall } from "@/components/site/HowToInstall";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aston Movies — Download Unlimited HD Movies on Android" },
      {
        name: "description",
        content:
          "Download Aston Movies APK for unlimited Hollywood, Bollywood, Tollywood movies, web series and TV shows in HD on Android. Free, ad-light, premium downloads.",
      },
      { property: "og:title", content: "Aston Movies — Premium HD Downloads for Android" },
      {
        property: "og:description",
        content:
          "Unlimited movie downloads, web series and TV shows in HD. Get the official Aston Movies APK now.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aston Movies — HD Movie Download App" },
      {
        name: "twitter:description",
        content: "Download Hollywood, Bollywood, Tollywood movies and more — free on Android.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <MovieSlider />
      <AppShowcase />
      <DownloadSection />
      <HowToInstall />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
