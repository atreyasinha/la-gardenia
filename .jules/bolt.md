## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-20 - Code-splitting modals with preserved exit animations
**Learning:** In a codebase using React lazy loading for modals (`React.lazy` and `Suspense`), unmounting the lazy-loaded component immediately on close can strip built-in exit animations, and loading the component too early impacts bundle size.
**Action:** When code-splitting modals in this codebase, use a state latch (e.g., tracking if it has ever been opened, like `hasOpenedModal`) to defer the initial network request until first open, without conditionally unmounting the component on close, preserving any built-in CSS exit animations.
