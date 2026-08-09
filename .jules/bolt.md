## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-15 - Lazy Loading Offscreen Images
**Learning:** Images in components like `EventTypes.jsx` and `CateringMenu.jsx` that are not immediately visible on initial page load (below the fold) can significantly impact initial load times if loaded eagerly.
**Action:** Always apply `loading="lazy"` and `decoding="async"` to `<img>` tags that are offscreen to defer their loading until they are about to enter the viewport, saving bandwidth and improving LCP.
