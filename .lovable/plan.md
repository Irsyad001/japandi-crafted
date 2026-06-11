## Problem

The navbar links point to `/#collection`, `/#process`, and `/#contact`. But `src/routes/index.tsx` runs this on mount:

```tsx
useEffect(() => {
  if (typeof window !== "undefined" && window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }
}, []);
```

This strips the hash and force-scrolls to the top every time the home route mounts — so clicking Collection/Process/Contact does navigate to the hash, but the effect immediately erases it and jumps back to Home.

## Fix

In `src/routes/index.tsx`, remove the hash-stripping `useEffect` so the browser's native anchor scrolling works. When already on `/`, clicking `/#collection` will jump to the section; when on another route (e.g. `/portfolio`), it will load `/` and scroll to the section.

No other files need changes. The anchor IDs (`#collection` on Collection, `#process` on Process, `#contact` on Inquiry) are already in place.
