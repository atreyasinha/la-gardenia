## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-07-28 - Lazy Loading Modals with State Latches
**Learning:** When code-splitting modals using `React.lazy` and `Suspense`, simply conditionally rendering the Suspense boundary based on `isOpen` can cause the modal to fully unmount when closed, interrupting any built-in CSS exit animations and potentially losing internal state.
**Action:** Use a state latch (e.g., `hasOpened`) that flips to true the first time the modal is opened, and use this latch to render the `Suspense` wrapper. This defers the initial network request but prevents the component from unmounting on close, preserving exit animations.
