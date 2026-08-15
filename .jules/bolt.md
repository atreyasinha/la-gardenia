## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-15 - Lazy Loading Modals with State Latch
**Learning:** When code-splitting modals using `React.lazy` and `Suspense` in this codebase, conditionally rendering the Suspense wrapper directly on the boolean `isOpen` prop causes the component to unmount entirely when closed, destroying any built-in CSS exit animations or transitions.
**Action:** Use a "state latch" (e.g., `hasOpenedModal` state that becomes true on first open and stays true) to defer the initial network request. This ensures the component is lazy-loaded, but once loaded, it stays mounted and relies on the `isOpen` prop to control visibility/exit animations gracefully.
