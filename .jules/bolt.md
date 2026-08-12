## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-12 - Code-Splitting Modals using React.lazy

**Learning:** When using `React.lazy` and `Suspense` to code-split modals, relying entirely on the "open" boolean state to conditionally render the modal wrapper results in the component unmounting upon closing, preventing any CSS exit animations.

**Action:** Implement a state latch (e.g., `hasRendered`) that is toggled to `true` when the modal is first opened. Render the `Suspense` wrapper based on the latch, but pass the actual `isOpen` prop to the lazy-loaded modal component. This defers the network request until needed but preserves DOM mounting (and exit animations) after closing.
