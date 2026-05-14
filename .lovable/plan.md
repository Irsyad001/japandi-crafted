## Why this happens

Your URL currently contains `/#contact` because you clicked the Contact link in the navbar. The browser remembers that hash, and on every refresh it jumps straight to the element with `id="contact"`. That's standard browser behavior, not a bug — but it's not what you want here.

## The fix

On the homepage, when the page first loads, detect if a hash is present in the URL. If it is, clear it and scroll to the top instead. Clicking nav links like "Contact" still scrolls to the section as expected — only a fresh page load / refresh is affected.

## Change

- Edit `src/routes/index.tsx`: add a small `useEffect` that runs once on mount. If `window.location.hash` exists, replace the URL with the clean path (no hash) using `history.replaceState`, and scroll to `(0, 0)`.

That's it — one tiny hook, no other files touched.
