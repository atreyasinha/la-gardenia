## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-07-28 - Memoizing Derived State in React

**Learning:** When filtering large arrays or calculating derived state in functional components (like `filteredItems` in `Gallery.jsx`), doing this synchronously on every render can cause unnecessary processing overhead, especially when unrelated state changes (like opening a lightbox index).

**Action:** Always wrap computationally expensive derived state calculations, like filtering or sorting arrays, inside a `useMemo` hook with the appropriate dependency array, ensuring the calculation only runs when the source data or filter criteria actually change.
