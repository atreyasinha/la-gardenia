## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-07-28 - Unnecessary Full-Page Re-renders via Root State
**Learning:** In this architecture (`App.jsx`), a simple boolean modal toggle state (`isBookingModalOpen`) is stored at the very root level. Without memoization, every time the user clicks "Book Venue" to open the modal, React re-renders the *entire* heavy component tree (Hero, Venues, Gallery, etc.), causing measurable jank on low-end devices.
**Action:** When placing modal or drawer state at the root of a large page, either extract the modal logic into a separate sibling tree or strictly use `useMemo` for the heavy, static `<main>` content and `useCallback` for the handler functions to prevent cascading re-renders.
