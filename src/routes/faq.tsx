import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RuixenMoonChat from "@/components/ui/ruixen-moon-chat";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Aoki Studio" },
      {
        name: "description",
        content:
          "Answers about our bespoke commissions, materials, lead times, shipping and atelier visits.",
      },
      { property: "og:title", content: "FAQ — Aoki Studio" },
      {
        property: "og:description",
        content:
          "Answers about our bespoke commissions, materials, lead times, shipping and atelier visits.",
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "How does a commission begin?",
    a: "It begins with a quiet conversation. Tell us about the room, the ritual, the feeling — we sketch from there. Most commissions take three to four exchanges before a single board is cut.",
  },
  {
    q: "What woods and materials do you work with?",
    a: "Primarily FSC-certified white oak, with occasional use of walnut, ash and reclaimed Japanese cedar. Cushions are linen or undyed wool from a small mill in Kyoto.",
  },
  {
    q: "What are your lead times?",
    a: "Bespoke pieces typically take 10 to 16 weeks from approval. We never rush a join — every piece is signed only when it is ready.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, by sea or air-freight in custom timber crates. We currently ship to Asia, Europe, North America and Oceania. A shipping quote is provided after the design is finalised.",
  },
  {
    q: "Can I visit the atelier?",
    a: "Of course — by appointment. Our small workshop is in Kuala Lumpur. Tea is included.",
  },
  {
    q: "How should I care for my piece?",
    a: "Soft cloth, no harsh chemicals. We re-oil with pure tung once a year on request, free of charge for the lifetime of the piece.",
  },
  {
    q: "Do you offer warranty?",
    a: "A lifetime structural guarantee against joinery failure. Wood is a living material — small movements with the seasons are part of its character, not a defect.",
  },
];

function FaqPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-black mb-6">
              Questions, answered
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Frequently <em className="italic text-accent font-light">asked</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              A small collection of the questions we hear most often — about
              materials, time, and the patient way we work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28 lg:pb-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="font-serif text-xl lg:text-2xl text-left py-6 hover:no-underline hover:text-accent">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <RuixenMoonChat />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}