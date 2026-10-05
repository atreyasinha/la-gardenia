## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.
## 2024-10-05 - Gallery Lightbox Re-renders
**Learning:** Navigating through images in a lightbox updates local state (`lightboxIndex`), triggering a re-render of the entire component. Without memoization, expensive operations like array filtering (`filteredItems`) are re-run on every navigation click.
**Action:** Always memoize derived state (like filtered arrays) using `useMemo` when a component contains interactive elements that frequently update unrelated local state (like a modal or lightbox index).
