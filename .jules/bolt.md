## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-07-27 - Code-Splitting Modals with a State Latch
**Learning:** When code-splitting modals using React.lazy and Suspense, dynamically loading them conditionally based on their "isOpen" state can destroy any CSS exit animations because the component unmounts immediately when closed.
**Action:** Use a state latch (e.g., tracking if it has ever been opened) to defer the initial network request. This ensures the component only mounts once requested, reducing initial bundle size, but remains in the tree afterward so its internal "isOpen" prop can handle smooth exit animations.
