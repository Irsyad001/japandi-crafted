import { Instagram, Linkedin, Send, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+810000000000";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-3 gap-12">
        <div>
          <a href="#home" className="font-serif text-3xl">
            Aoki<span className="text-accent">.</span>
          </a>
          <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
            A bespoke furniture studio practising the patient craft of Japandi
            design from a small atelier in Kyoto.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIcon href="#" label="Instagram"><Instagram className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="#" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={WHATSAPP_URL} label="WhatsApp"><MessageCircle className="h-4 w-4" /></SocialIcon>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp: {WHATSAPP_NUMBER}</span>
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Studio</p>
          <ul className="space-y-3 text-sm">
            <li><a href="#collection" className="hover:text-accent">Collection</a></li>
            <li><a href="#process" className="hover:text-accent">Process</a></li>
            <li><a href="#contact" className="hover:text-accent">Commission</a></li>
            <li><a href="#" className="hover:text-accent">Visit the atelier</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Quiet letters</p>
          <p className="text-sm text-muted-foreground mb-4">
            Four times a year. New pieces, atelier notes.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center border-b border-border focus-within:border-accent transition-colors"
          >
            <input
              type="email"
              required
              placeholder="you@studio.com"
              className="flex-1 bg-transparent outline-none py-3 text-sm placeholder:text-muted-foreground/60"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="p-2 hover:text-accent transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aoki Studio. Made slowly.</p>
          <p>Kuala Lumpur, Malaysia</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
}