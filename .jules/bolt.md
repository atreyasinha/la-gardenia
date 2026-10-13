## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.
## 2024-10-13 - Memoizing Derived State in Lightbox Components

**Learning:** When a component manages both a "filter" state (which derives a new subset of data) and a high-frequency "interaction" state (like a lightbox index), failing to memoize the derived data causes unnecessary array reallocations on every interaction frame. In `src/components/Gallery.jsx`, navigating the lightbox triggered a full re-filter of the image array because the data calculation wasn't wrapped in `useMemo`.

**Action:** Always wrap array filtering operations in `useMemo` when a component handles decoupled state updates (like modals or lightboxes) to ensure data is only recalculated when the underlying filter parameter actually changes.
