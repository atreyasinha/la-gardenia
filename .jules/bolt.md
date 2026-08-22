## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-22 - Code-splitting Modals with State Latch
**Learning:** When code-splitting modals using `React.lazy` and `Suspense` in this codebase, directly returning the suspended component conditionally (`{isOpen && <Suspense><Modal/></Suspense>}`) can break built-in CSS exit animations because the component unmounts immediately when `isOpen` becomes false.
**Action:** Use a state latch (e.g., tracking if it has ever been opened: `hasOpenedModal`) to defer the initial network request. Once opened, conditionally render `hasOpenedModal && <Suspense><Modal isOpen={isOpen}/></Suspense>` without conditionally unmounting the component on close, preserving any built-in exit animations inside the modal itself.
