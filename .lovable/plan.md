# Improve Mobile Comfort

Goal: make the site feel easier and more comfortable to use on phones — better spacing, bigger tap targets, less horizontal cramping, smoother scrolling, and a friendlier mobile nav.

## What I'll change

### 1. Hero (`src/components/site/Hero.tsx`)
- Reduce top/bottom padding on mobile (`pt-32 pb-20` → `pt-24 pb-14`) so the headline lands above the fold.
- Tone down the headline size on small screens (currently jumps to `text-5xl` which can wrap awkwardly with the Orange Avenue font).
- Make the hero image shorter on mobile (`h-[520px]` → `h-[420px]`) so users reach content faster.
- Reposition the "Sora Lounge Chair" card so it doesn't get clipped on narrow screens.
- Stack the two stat blocks (13 / FSC) more comfortably with a smaller divider on mobile.

### 2. Navbar (`src/components/site/Navbar.tsx`)
- Enlarge the hamburger tap target to a minimum 44×44px.
- Slightly shrink the "MM TREE Furniture" logo on small screens so it doesn't crowd the menu button.
- Add safer spacing and a subtle close-on-link-tap behavior (already partly there).

### 3. Collection (`src/components/site/Collection.tsx`)
- Reduce section padding on mobile (`py-28` → `py-20`).
- Use a taller, single-column auto height on mobile so card text doesn't get cramped against the image.
- Ensure the "row-span-2" first item doesn't create a giant empty tile on mobile.

### 4. Process (`src/components/site/Process.tsx`)
- Reduce padding and bottom margin (`mb-20` → `mb-12`) on mobile.
- Slightly smaller card padding on mobile (`p-8` → `p-6`) so the cards feel less boxy.

### 5. Inquiry & Feedback forms (`Inquiry.tsx`, `Feedback.tsx`)
- Increase input font size to 16px minimum (prevents iOS zoom-on-focus).
- Increase tap target height on the chip buttons (residence / furniture type) and star rating.
- Make the submit row stack cleanly on mobile (button full-width instead of squished beside the disclaimer).
- Reduce section vertical padding on mobile.

### 6. Footer (`src/components/site/Footer.tsx`)
- Tighten vertical padding on mobile (`py-20` → `py-14`).
- Ensure the address line wraps gracefully (the `·` separators currently look messy on narrow screens — switch to a stacked layout under `sm`).
- Make social icons slightly larger (`h-9 w-9` → `h-11 w-11`) for easier tapping.

### 7. Global polish (`src/styles.css`)
- Add `scroll-behavior: smooth` already exists — also add `overscroll-behavior-y: contain` on body to prevent rubber-band glitches.
- Ensure `text-base` minimum on body inputs to avoid iOS auto-zoom.

## Out of scope
- No backend / data changes.
- No new pages or routes.
- No redesign of brand, colors, or fonts.

Want me to proceed with all of the above, or focus on a specific section first (e.g. just Hero + Navbar, or just the forms)?
