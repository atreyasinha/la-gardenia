## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-07-28 - Lazy Loading Components in React

**Learning:** A standard React application bundles everything into a large JavaScript chunk which takes longer to download and parse resulting in a higher initial load time. A way to solve this issue is by introducing Code Splitting via React.lazy and Suspense. The `Suspense` fallback `div` used in code splitting for Flexbox requires `justifyContent: 'center'` and not `justifyItems: 'center'` which is generally used for CSS Grid. For Modals, unconditional rendering will still fetch its chunk on the initial page load (albeit in parallel, freeing up the main thread).

**Action:** Consistently use `React.lazy` and `Suspense` for components to improve initial load time.
