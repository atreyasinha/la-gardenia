## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.
## 2024-10-20 - Memoizing Filtered Arrays in React

**Learning:** In components with local UI state (like `lightboxIndex` in `Gallery.jsx`), calculating filtered arrays directly in the render body causes unnecessary recalculations on every state update, even if the filter criteria hasn't changed.
**Action:** Use `useMemo` to cache derived data calculations (like array filtering) to prevent unnecessary re-computations when independent state variables change.
