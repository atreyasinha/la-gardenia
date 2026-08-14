## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-14 - Code Splitting Modals with State Latch
**Learning:** When lazy loading UI components that rely on exit animations (like modals), using a simple conditional rendering logic based directly on the state (e.g. `isOpen && <Modal />`) causes the component to immediately unmount from the DOM upon closing, bypassing any CSS exit animations.
**Action:** Use a "state latch" boolean flag (e.g. `hasOpenedModal`) that becomes true when the modal is first opened and never resets to false. Conditionally render the `Suspense` boundary based on this latch, while passing the actual toggling state (e.g. `isOpen`) directly down as a prop to the modal component, preserving its internal ability to gracefully animate its exit.
