import { useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

const residenceTypes = ["Apartment", "House", "Villa", "Office", "Other"];
const furnitureTypes = ["Dining", "Living", "Workspace", "Bedroom", "Other"];

export function Inquiry() {
  const [sent, setSent] = useState(false);
  const [residence, setResidence] = useState("Apartment");
  const [furniture, setFurniture] = useState("Dining");
  const [reference, setReference] = useState<File | null>(null);

  return (
    <section id="contact" className="py-28 lg:py-40 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Inquiry
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Schedule A Site Visit
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Tell us a little about the piece you imagine. We reply within two working days.
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
            <Field label="Your name">
              <input
                required
                type="text"
                placeholder="Mei Tanaka"
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </Field>

            <Field label="Phone number">
              <input
                required
                type="tel"
                placeholder="+62 812 3456 7890"
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </Field>

            <Field label="Address">
              <textarea
                required
                rows={2}
                placeholder="Street, city, postal code"
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 resize-none transition-colors"
              />
            </Field>

            <Field label="Type of residence">
              <div className="flex flex-wrap gap-2 pt-3">
                {residenceTypes.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setResidence(t)}
                    className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                      residence === t
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-accent/60"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Type of furniture">
              <div className="flex flex-wrap gap-2 pt-3">
                {furnitureTypes.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setFurniture(t)}
                    className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                      furniture === t
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-accent/60"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Reference picture (optional)">
              <div className="pt-3">
                <label className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border hover:border-accent/60 cursor-pointer text-sm transition-colors">
                  <span>{reference ? "Change file" : "Upload image"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setReference(e.target.files?.[0] ?? null)}
                  />
                </label>
                {reference && (
                  <span className="ml-3 text-sm text-muted-foreground">{reference.name}</span>
                )}
              </div>
            </Field>

            <Field label="Budget (optional)">
              <input
                type="text"
                placeholder="e.g. $2,000 – $4,000"
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </Field>

            <Field label="Preferred date">
              <input
                required
                type="date"
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </Field>

            <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
              <p className="text-xs text-muted-foreground">
                By submitting you agree to our quiet, no-spam policy.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
              >
                {sent ? "Thank you — we'll be in touch" : "Send inquiry"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}