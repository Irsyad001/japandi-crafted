import { TreePine, PencilRuler, Hammer } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: TreePine,
    title: "Source",
    text: "We work directly with FSC-certified mills, selecting each oak board for grain, character, and age.",
  },
  {
    n: "02",
    icon: PencilRuler,
    title: "Design",
    text: "Hand sketches become 3D models, refined with you over slow conversation — never rushed.",
  },
  {
    n: "03",
    icon: Hammer,
    title: "Build",
    text: "Joined, hand-finished, and oiled in our atelier. Signed by the maker, delivered with care.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 lg:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
              The Craft
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Three movements, <em className="italic font-light" style={{ color: "#AED9E0" }}>one </em>
              quiet philosophy.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="group relative h-full p-8 lg:p-10 bg-background rounded-2xl border border-border/60 hover:border-accent/40 hover:shadow-[0_20px_60px_-30px_rgba(139,94,60,0.35)] transition-all duration-500">
                <div className="flex items-baseline justify-between mb-10">
                  <span className="font-serif text-5xl text-accent/80">{s.n}</span>
                  <s.icon className="h-6 w-6 text-foreground/60 group-hover:text-accent transition-colors" strokeWidth={1.4} />
                </div>
                <h3 className="font-serif text-3xl mb-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}