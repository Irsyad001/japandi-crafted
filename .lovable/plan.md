## Goal
Resize the tree logo in the footer so it spans the full width of the section (like the GUCCI wordmark in the reference), instead of being centered at a small max height.

## Change
In `src/components/site/Footer.tsx`, update the logo wrapper:

- Remove `flex items-center justify-center py-10` from the container
- Remove `max-h-64 w-auto object-contain` from the `<img>`
- Apply `block w-full h-auto object-cover select-none pointer-events-none` so the logo stretches edge-to-edge

No other files, colors, or content change.