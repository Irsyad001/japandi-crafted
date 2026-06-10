import { useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

const residenceTypes = ["Apartment", "House", "Villa", "Office", "Other"];
const furnitureTypes = ["Dining", "Living", "Kitchen", "Workspace", "Bedroom", "Other"];

export function Inquiry() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");
  const [residence, setResidence] = useState("Apartment");
  const [furniture, setFurniture] = useState("Dining");
  const [reference, setReference] = useState("");

  return (
    <section id="contact" className="py-20 lg:py-40 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 text-center">
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
            onSubmit={async (e) => {
              e.preventDefault();
              setSubmitting(true);
              try {
                const fd = new FormData();
                fd.append("name", name);
                fd.append("email", email);
                fd.append("phone", phone);
                fd.append("address", address);
                fd.append("residence", residence);
                fd.append("furniture", furniture);
                fd.append("budget", budget);
                fd.append("date", date);
                if (reference) fd.append("reference", reference);
                await fetch("https://hook.us2.make.com/b5bsbst9vp2ttcqiasxtcnk5xoeelya8", {
                  method: "POST",
                  body: fd,
                });
                setSent(true);
              } catch (err) {
                console.error("Webhook submission failed", err);
              } finally {
                setSubmitting(false);
              }
            }}
            className="mt-12 sm:mt-16 text-left space-y-8 sm:space-y-10"
          >
            <Field label="Your name">
              <input
                required
                type="text"
                placeholder="Mei Tanaka"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </Field>

            <Field label="Phone number">
              <input
                required
                type="tel"
                placeholder="+62 812 3456 7890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </Field>

            <Field label="Email">
              <input
                required
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </Field>

            <Field label="Address">
              <textarea
                required
                rows={2}
                placeholder="Street, city, postal code"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                    className={`px-4 py-2.5 min-h-11 rounded-full text-sm border transition-colors ${
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
                    className={`px-4 py-2.5 min-h-11 rounded-full text-sm border transition-colors ${
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

            <Field label="Reference picture link (optional)">
              <input
                type="url"
                placeholder="Paste image URL (e.g. https://...)"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </Field>

            <Field label="Budget (optional)">
              <input
                type="text"
                placeholder="e.g. $2,000 – $4,000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </Field>

            <Field label="Preferred date">
              <input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent outline-none py-3 text-lg placeholder:text-muted-foreground/60 transition-colors"
              />
            </Field>

            <div className="pt-4 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                By submitting you agree to our quiet, no-spam policy.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 min-h-12 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors w-full sm:w-auto"
              >
                {sent ? "Thank you — we'll be in touch" : submitting ? "Submitting..." : "Submit"}
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