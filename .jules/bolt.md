## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-05-18 - Memoizing Filtered Collections During Modal State Changes
**Learning:** In interactive components like galleries, lightweight state changes (like opening a modal or updating a lightbox index) trigger re-renders that can inadvertently recalculate expensive derived state, such as filtering large lists, even if the primary filter criteria hasn't changed.
**Action:** Consistently use `useMemo` for derived array calculations (e.g., `filteredItems = galleryItems.filter(...)`) in functional components where secondary state interactions are frequent, ensuring dependencies are strictly limited to the variables that actually dictate the calculation.
