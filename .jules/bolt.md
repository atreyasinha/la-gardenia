## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-01 - Cascading Re-renders from Top-Level Modal State

**Learning:** When managing modal visibility state (e.g., `isBookingModalOpen`) at the very top of the component tree (like in `App.jsx`), toggling that state causes the entire application tree to re-render. In a heavy, monolithic landing page with 10+ complex components, this causes significant UI jank when opening/closing the modal.

**Action:** Always decouple heavy, static main content from volatile UI state like modals. Wrap the main static component tree in `useMemo` and memoize callbacks passed to it with `useCallback` to prevent the entire page from unnecessarily re-rendering just to show a modal overlay.
