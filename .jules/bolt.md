## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-26 - Code Splitting Modals with State Latch
**Learning:** When code-splitting modals using `React.lazy` and `Suspense` in this codebase, defer the initial network request by using a state latch (e.g., tracking if it has ever been opened).
**Action:** Use a state latch boolean to conditionally render the `Suspense` boundary and modal. This defers loading until needed, but without conditionally unmounting the component on close, preserving any built-in CSS exit animations.
