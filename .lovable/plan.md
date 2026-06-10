## Portfolio Page Plan

Create a new route `/portfolio` showcasing completed projects, matching the existing Japandi aesthetic (serif headings, accent `#AED9E0`, soft borders, generous spacing) used across Hero/Collection/Process.

### Files to create
- `src/routes/portfolio.tsx` — TanStack route with `head()` SEO metadata (title, description, og:title, og:description).
- `src/components/site/Portfolio.tsx` — page body component (header + filter tabs + grid + CTA), keeps the route file thin and consistent with how `index.tsx` composes site sections.

### Files to update
- `src/components/site/Navbar.tsx` — add `{ href: "/portfolio", label: "Portfolio" }` to the `links` array so it appears in both desktop and mobile nav. Use TanStack `<Link>` for the portfolio entry (hash links stay as `<a>`).

### Page structure

**1. Header**
- Wrapped in `<Navbar />` + a `<Footer />` so the page matches site chrome.
- Section padded `pt-32 pb-12 lg:pt-40`, max-width `7xl`, px matches other sections (`px-5 sm:px-6 lg:px-10`).
- Eyebrow `text-xs uppercase tracking-[0.3em]` "Portfolio".
- H1 `font-serif text-4xl sm:text-5xl lg:text-6xl`: "Our Work".
- Subtitle muted: "15 years of crafting custom furniture across Selangor & Kuala Lumpur".
- Wrapped in `<Reveal>` like other sections.

**2. Filter tabs**
- Client state via `useState<'All' | 'Kitchen Cabinet' | 'TV Cabinet' | 'Wardrobe'>('All')`.
- Horizontal pill row, scrollable on mobile (`overflow-x-auto`), each pill `min-h-11 px-5 py-2.5 rounded-full text-sm border`.
- Inactive: `border-border text-foreground/70 hover:text-foreground`.
- Active: `bg-foreground text-background border-foreground` (matches existing CTA styling — the brand's primary contrast already used in Navbar's Inquire button).
- No URL sync; pure client filter, no reload.

**3. Project grid**
- `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`.
- 5 placeholder cards in a typed array `projects: { id, title, category, location, description, image }[]`:
  1. Kitchen Cabinet — Shah Alam, Selangor — "Custom melamine kitchen cabinet with full upper and lower units"
  2. Kitchen Cabinet — Petaling Jaya, Selangor — "Modern L-shape kitchen with solid surface countertop"
  3. TV Cabinet — Mont Kiara, KL — "Floor-to-ceiling TV feature wall in oak veneer"
  4. Wardrobe — Bangsar, KL — "4-door sliding wardrobe with internal organisers"
  5. Kitchen Cabinet — Subang Jaya, Selangor — "Minimalist white kitchen with handleless doors"
- Placeholder images: use Unsplash furniture URLs (stable `images.unsplash.com/photo-...?w=900&q=80&auto=format&fit=crop`) so the page looks real until photos arrive. Image is a single prop per item, easy to swap.
- Card markup:
  - `<article class="group relative overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-500 hover:shadow-[0_20px_60px_-30px_rgba(139,94,60,0.35)] hover:-translate-y-0.5">`
  - Image wrapper `aspect-[4/3] overflow-hidden`, `<img ... class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />`.
  - Hover overlay: absolutely-positioned div with `bg-foreground/40` and centered "View Project" text in `text-background`, opacity 0 → 100 on `group-hover`.
  - Body `p-5`: category eyebrow (`text-xs uppercase tracking-[0.25em] text-accent-foreground/70`), location (`text-sm text-muted-foreground`), description (`text-sm`).
- Filtering via `projects.filter(p => filter === 'All' || p.category === filter)`. Wrap grid in framer-motion `AnimatePresence` for soft fade on filter change (using existing `framer-motion` dep — already used by `Reveal`).

**4. CTA section**
- Full-width band, `bg-foreground text-background`, `py-20 lg:py-28`.
- Centered content max-w `3xl`: H2 `font-serif text-4xl sm:text-5xl` "Like what you see?", paragraph muted ("Let us visit your space, take measurements, and give you a FREE consultation."), button.
- Button: `<a href="https://wa.me/60123456789" target="_blank" rel="noopener">` styled like the existing Navbar Inquire CTA but inverted for dark bg: `inline-flex items-center px-6 py-3 rounded-xl bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium`.

### Out of scope
- No real photo uploads, no CMS, no backend.
- No project detail pages (the "View Project" overlay is visual only for now — can wire up later).
- No new colors, fonts, or design tokens.
