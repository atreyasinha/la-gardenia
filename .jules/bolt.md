## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.
## 2024-05-23 - State-Latched Lazy Loading for Modals
**Learning:** When code-splitting modals using `React.lazy` and `Suspense`, simply conditionally rendering the `<Suspense>` boundary based on `isOpen` causes the component to unmount immediately on close. This destroys any built-in CSS exit animations or transitions on the modal.
**Action:** Use a "state latch" (e.g., `hasOpened`) that becomes `true` on the first open and never reverts to `false`. Wrap the lazy modal in this latch, so the initial network request is deferred, but the component remains mounted (with `isOpen=false`) on close, preserving exit animations.
