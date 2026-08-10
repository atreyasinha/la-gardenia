## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.
## 2024-10-27 - Unnecessary computations in React Renders
**Learning:** Arrays derived via methods like `.filter()` or `.map()` at the component scope are recalculated entirely on every render. If these recalculations happen on unrelated state changes (e.g., navigating a lightbox index), it can lead to redundant CPU overhead.
**Action:** Use `useMemo` for derived arrays that depend on infrequently changing state parameters (like a category filter) to ensure calculations are only re-run when their explicit dependencies change.
