## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-16 - Code Splitting Modals with a State Latch

**Learning:** When code-splitting modals (like `ContactModal.jsx`) using `React.lazy` and `Suspense`, simply conditionally rendering the lazily-loaded component based on the `isOpen` prop will unmount the component when closed, destroying any built-in CSS exit animations.

**Action:** Use a state latch (e.g., `hasMountedModal`) to defer the initial network request until the user first tries to open the modal. Once mounted, keep it in the DOM (hidden via CSS or its internal logic when `isOpen` is false) to preserve exit animations.
