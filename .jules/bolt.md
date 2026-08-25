## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.
## 2024-05-20 - Code-Splitting Modals and Exit Animations
**Learning:** When lazy loading modals using `React.lazy` and `Suspense`, simply conditionally rendering the Suspense boundary based on `isOpen` can cause the modal to instantly unmount when closed, destroying any built-in CSS exit animations.
**Action:** Use a state latch (e.g., `hasOpened`) to defer the initial dynamic import until the first interaction. Once loaded, keep the component mounted within the DOM tree and rely on the modal's internal `isOpen` prop to handle visibility and exit animations gracefully.
