## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-07-28 - Code Splitting Modals with State Latch
**Learning:** When code-splitting modals using `React.lazy` and `Suspense`, conventionally conditional rendering (`{isOpen && <Modal/>}`) can cause the component to mount/unmount entirely, losing built-in exit animations or internal state.
**Action:** Use a "state latch" (e.g., `hasOpenedModal`) that flips to `true` on the first open request to trigger the dynamic import. Then continue rendering the `Suspense` boundary while passing the actual `isOpen` prop to the lazy component. This defers the network request and initial bundle size without disrupting CSS exit animations.
