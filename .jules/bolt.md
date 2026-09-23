## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.
## 2024-10-24 - Memoizing Expensive Derived State

**Learning:** When navigating through a lightbox in `src/components/Gallery.jsx`, the component re-renders on every index change. Without memoization, derived state like `filteredItems` array is needlessly recalculated (filtered) on every render, wasting CPU cycles and causing array reallocation, even if the actual filter hasn't changed.

**Action:** Consistently use `useMemo` to cache the results of expensive calculations or array filters when computing derived state, especially when unrelated state changes (like a lightbox index) frequently trigger component re-renders.
