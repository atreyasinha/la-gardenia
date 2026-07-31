## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-10-27 - Preventing Global Re-renders in Top-Level React Components

**Learning:** When a state variable (like a modal toggle) exists in a top-level component (like `App.jsx`), updating it triggers a re-render of the entire component tree, including heavy components that don't depend on that state (like large image galleries or venue lists).

**Action:** Wrap the static structure of the layout (excluding the component that depends on the state) in a `useMemo` block, and wrap any handler functions passed down as props in `useCallback`. This tells React to skip reconciling the unchanged heavy components when the isolated state changes.
