import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

type Category = "Kitchen Cabinet" | "TV Cabinet" | "Wardrobe";
type Filter = "All" | Category;

type Project = {
  id: string;
  category: Category;
  location: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "p1",
    category: "Kitchen Cabinet",
    location: "Shah Alam, Selangor",
    description:
      "Custom melamine kitchen cabinet with full upper and lower units.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "p2",
    category: "Kitchen Cabinet",
    location: "Petaling Jaya, Selangor",
    description: "Modern L-shape kitchen with solid surface countertop.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "p3",
    category: "TV Cabinet",
    location: "Mont Kiara, Kuala Lumpur",
    description: "Floor-to-ceiling TV feature wall in oak veneer.",
    image:
      "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "p4",
    category: "Wardrobe",
    location: "Bangsar, Kuala Lumpur",
    description: "4-door sliding wardrobe with internal organisers.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "p5",
    category: "Kitchen Cabinet",
    location: "Subang Jaya, Selangor",
    description: "Minimalist white kitchen with handleless doors.",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&q=80&auto=format&fit=crop",
  },
];

const filters: Filter[] = ["All", "Kitchen Cabinet", "TV Cabinet", "Wardrobe"];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-black mb-6">
              Portfolio
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
              Our <em className="italic font-light" style={{ color: "#AED9E0" }}>Work</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              15 years of crafting custom furniture across Selangor &amp; Kuala
              Lumpur.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="flex gap-3 overflow-x-auto pb-2 mb-10 sm:mb-14 -mx-1 px-1">
              {filters.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`whitespace-nowrap min-h-11 px-5 py-2.5 rounded-full text-sm border transition-colors ${
                      active
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-foreground/70 hover:text-foreground hover:border-foreground/40"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-500 hover:shadow-[0_20px_60px_-30px_rgba(139,94,60,0.35)] hover:-translate-y-0.5 hover:scale-[1.01]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.category} in ${p.location}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-background text-sm uppercase tracking-[0.3em]">
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                      {p.category}
                    </p>
                    <p className="font-serif text-xl mb-2">{p.location}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05]">
              Like what you <em className="italic font-light" style={{ color: "#AED9E0" }}>see</em>?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base lg:text-lg text-background/70 leading-relaxed">
              Let us visit your space, take measurements, and give you a FREE
              consultation.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center px-6 py-3 rounded-xl bg-background text-foreground text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Book a Site Visit
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}