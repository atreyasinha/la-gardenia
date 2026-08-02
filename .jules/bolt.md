## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-05-24 - React Main Component Re-rendering Bottleneck

**Learning:** Global modal state (e.g., `isBookingModalOpen`) located at the top root component (`App.jsx`) without properly memoized children can cause unnecessary full-page render cascades. When dealing with numerous heavy and static visual components like heroes, galleries, and image-heavy grids, avoiding these full-page updates drastically improves UI responsiveness.

**Action:** Whenever introducing togglable global components (like Modals or Drawers) at the top component of a heavy component tree, strictly memoize layout and visual elements using `useMemo` and the callback handlers using `useCallback` to stop expensive UI reflows on state toggle.
