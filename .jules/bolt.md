## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-07 - Memoizing filtered arrays in Gallery Component

**Learning:** When using state to track the active item in a modal (e.g., `lightboxIndex`), every change to this index (like clicking Next/Prev) causes the entire component to re-render. If a derived array is calculated on every render (e.g., `filteredItems`), this can cause unnecessary array operations and impact performance, particularly on larger lists.

**Action:** Always wrap derived datasets like filtered or sorted arrays in a `useMemo` hook, especially when the component contains unrelated state (like modal toggles or index counters) that update frequently.
