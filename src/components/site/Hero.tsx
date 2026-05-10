import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroChair from "@/assets/hero-chair.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
          >
            — Bespoke furniture, est. 2014
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight"
          >
            Crafting <em className="italic text-accent font-light">timeless</em>
            <br />
            comfort.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-md text-base lg:text-lg text-muted-foreground leading-relaxed"
          >
            A small studio shaping sustainably sourced oak into furniture meant
            to outlive trends. Quietly designed, patiently built — one piece at
            a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#process"
              className="text-sm font-medium underline-offset-8 hover:underline"
            >
              See our craft
            </a>
          </motion.div>

          <div className="mt-16 flex items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground">
            <div>
              <div className="font-serif text-3xl text-foreground normal-case tracking-tight">
                12<span className="text-accent">+</span>
              </div>
              <div className="mt-1">Years of craft</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-3xl text-foreground normal-case tracking-tight">
                FSC
              </div>
              <div className="mt-1">Certified oak</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-6 bg-secondary rounded-[2rem] -z-10" />
          <img
            src={heroChair}
            alt="Handcrafted oak lounge chair with linen cushion"
            width={1024}
            height={1280}
            className="w-full h-[520px] lg:h-[640px] object-cover rounded-2xl shadow-[0_30px_80px_-30px_rgba(45,45,45,0.25)]"
          />
          <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl px-5 py-4 shadow-lg max-w-[200px]">
            <p className="font-serif italic text-sm">"Sora" Lounge Chair</p>
            <p className="text-xs text-muted-foreground mt-1">
              Solid oak · Linen cushion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}