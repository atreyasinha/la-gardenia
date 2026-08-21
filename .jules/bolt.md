## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-07-28 - Code-splitting Modals with State Latch
**Learning:** Code-splitting a modal component with `React.lazy` and `Suspense` directly based on its `isOpen` prop can cause the component to unmount entirely when closed, interrupting any built-in CSS exit animations.
**Action:** Use a state latch (e.g., `hasOpenedBooking`) to track if the modal has ever been opened. Only render the `Suspense` boundary after the latch is true, deferring the initial network request, but keeping the component mounted (hidden via its `isOpen` prop) on close to preserve animations.
