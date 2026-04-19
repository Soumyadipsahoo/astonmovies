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
      { title: "Aston Movies — Watch Unlimited HD Movies on Android" },
      {
        name: "description",
        content:
          "Download Aston Movies APK to stream unlimited Hollywood, Bollywood, Tollywood movies, web series and TV shows in HD on Android. Free, ad-light, premium.",
      },
      { property: "og:title", content: "Aston Movies — Premium HD Streaming for Android" },
      {
        property: "og:description",
        content:
          "Unlimited movies, web series and TV shows in HD. Download the official Aston Movies APK now.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aston Movies — HD Streaming App" },
      {
        name: "twitter:description",
        content: "Stream Hollywood, Bollywood, Tollywood and more — free on Android.",
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
