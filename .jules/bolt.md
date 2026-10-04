## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-10-04 - Memoizing Filter Computed Arrays in React

**Learning:** Calculating derived state by filtering arrays in the main render body of a React functional component can cause unnecessary processing overhead on every re-render (like when interacting with an unrelated UI element, such as a lightbox index).

**Action:** Consistently use `useMemo` to memoize the resulting filtered array, adding the filter state as a dependency. This ensures the array is only recalculated when the active filter actually changes.
