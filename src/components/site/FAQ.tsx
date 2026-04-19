import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Aston Movies free?",
    a: "Yes — Aston Movies is 100% free to download and stream. No subscriptions, no hidden charges, no sign-up required.",
  },
  {
    q: "Is the APK safe to install?",
    a: "Absolutely. Every release is digitally signed and scanned for malware before being published on this site. Download only from the official link above to ensure authenticity.",
  },
  {
    q: "How do I update the app?",
    a: "Open the app and tap your profile icon — you'll be notified when a new version is available. You can also revisit this page and download the latest APK directly.",
  },
  {
    q: "Why is it not on the Play Store?",
    a: "Streaming apps like Aston Movies don't fit the Play Store's distribution model, so we publish directly via APK. This also lets us push updates faster and keep the app ad-free.",
  },
  {
    q: "Which Android versions are supported?",
    a: "Aston Movies works on Android 6.0 (Marshmallow) and above. For the smoothest 4K playback we recommend Android 9+ with at least 3 GB RAM.",
  },
  {
    q: "Does it work without internet?",
    a: "Streaming requires an active internet connection, but you can download titles within the app for offline viewing on the go.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Got <span className="text-gradient-gold">questions?</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Everything you need to know before downloading.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass p-2 sm:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border/40 last:border-0"
              >
                <AccordionTrigger className="px-3 text-left text-base font-semibold hover:text-gold sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
