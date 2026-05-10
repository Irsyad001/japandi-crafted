import { Reveal } from "./Reveal";
import dining from "@/assets/collection-dining.jpg";
import living from "@/assets/collection-living.jpg";
import workspace from "@/assets/collection-workspace.jpg";
import process from "@/assets/process-build.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { src: dining, label: "Dining", count: "08 pieces", span: "row-span-2" },
  { src: living, label: "Living", count: "12 pieces", span: "" },
  { src: workspace, label: "Workspace", count: "06 pieces", span: "" },
  { src: process, label: "Atelier", count: "Behind the craft", span: "" },
];

export function Collection() {
  return (
    <section id="collection" className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
                Curated Collection
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                Pieces for <em className="italic text-accent font-light">slow</em> living.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a href="#contact" className="text-sm underline-offset-8 hover:underline inline-flex items-center gap-1">
              Commission a piece <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto] gap-5 md:auto-rows-[260px]">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.08} className={`${it.span} group relative overflow-hidden rounded-2xl bg-secondary`}>
              <div className="absolute inset-0">
                <img
                  src={it.src}
                  alt={`${it.label} furniture`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-foreground/0 opacity-90" />
              </div>
              <div className="relative h-full min-h-[260px] flex flex-col justify-end p-6 lg:p-8 text-background">
                <p className="text-xs uppercase tracking-widest opacity-80">{it.count}</p>
                <div className="flex items-end justify-between mt-1">
                  <h3 className="font-serif text-3xl lg:text-4xl text-background">{it.label}</h3>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}