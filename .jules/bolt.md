## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-07-28 - Preserving Exit Animations with Code-Split Modals

**Learning:** When code-splitting modals (like `ContactModal.jsx`) using `React.lazy` and `Suspense`, simply conditionally rendering them based on their open state (e.g., `isOpen && <Modal />`) will cause them to unmount immediately upon closing, destroying any built-in CSS exit animations.

**Action:** Use a state latch (e.g., `hasOpenedModal`) that permanently turns `true` upon the first open request. Render the `Suspense`-wrapped component conditionally on this latch, but pass the actual `isOpen` boolean as a prop. This defers the initial network request until needed, but preserves the component in the DOM (with `isOpen={false}`) on close to allow exit animations to complete.
