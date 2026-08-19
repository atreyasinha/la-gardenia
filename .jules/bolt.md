## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-07-28 - Code-splitting modals with State Latch
**Learning:** When code-splitting modals using `React.lazy` and `Suspense`, simply conditionally rendering the Suspense boundary based on `isOpen` can cause the modal to unmount completely when closed, destroying any CSS exit animations.

**Action:** Use a state latch (e.g., `hasOpened`) that turns true on the first open and stays true. Render the Suspense boundary based on this latch, allowing the modal to manage its own `isOpen` state for proper exit animations while still keeping the initial bundle size small.
