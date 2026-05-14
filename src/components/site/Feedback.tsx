import { useState } from "react";
import { Reveal } from "./Reveal";
import { Star, Send } from "lucide-react";

export function Feedback() {
  const [sent, setSent] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section id="feedback" className="py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Feedback
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Share your <em className="italic text-accent font-light">thoughts</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Every single of your words was the most precious diamond to us.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-16 text-left space-y-10"
          >
            <label className="block">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Your name
              </span>
              <input
                required
                type="text"
                placeholder="How shall we address you"
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </label>

            <div className="block">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Your impression
              </span>
              <div className="flex gap-2 pt-4">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    type="button"
                    key={n}
                    onMouseEnter={() => setHover(n)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(n)}
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-7 w-7 transition-colors ${
                        n <= (hover || rating)
                          ? "fill-accent text-accent"
                          : "text-border"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Your feedback
              </span>
              <textarea
                required
                rows={4}
                placeholder="What we did well, what we could do better…"
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 resize-none transition-colors"
              />
            </label>

            <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
              <p className="text-xs text-muted-foreground">
                Your words are read by hand, not by algorithm.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
              >
                {sent ? "Thank you — received with care" : "Send feedback"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}