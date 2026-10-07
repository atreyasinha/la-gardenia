## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.
## 2024-05-28 - Component Tree Bailout with Element Memoization
**Learning:** Managing global state (like modal visibility) at the root App component inadvertently forces the entire child component tree (Hero, Venues, Gallery, etc.) to re-render when the state toggles, as they lack React.memo.
**Action:** Instead of applying React.memo to every individual child component, wrap the static component structure in a useMemo block (element memoization) to allow React to bail out of rendering them entirely.
