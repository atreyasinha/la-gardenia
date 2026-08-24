## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-07-28 - Lazy Loading Modals with a State Latch

**Learning:** When code-splitting modals using `React.lazy` and `Suspense` in this React codebase, conditionally rendering the Suspense boundary solely on an `isOpen` boolean causes the component to unmount entirely when closed. This destroys any built-in CSS exit animations.

**Action:** Implement a state latch (e.g., `hasOpenedModal`) that becomes `true` when the modal is first requested. Conditionally render the `React.Suspense` block based on the latch, but pass the actual `isOpen` state as a prop to the loaded modal component. This defers the initial network request for the bundle while preserving the component's mounted state and exit animations once loaded.
