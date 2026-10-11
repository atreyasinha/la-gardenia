## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-10-24 - Decoupling Lightbox State from Gallery Filtering
**Learning:** In the `Gallery` component, navigating through lightbox images updates `lightboxIndex` state, which unintentionally triggers a re-filter of the `galleryItems` array on every render. This codebase-specific pattern of mixing interaction state (lightbox) with data state (filtering) in the same component body causes unnecessary array iterations during simple UI navigation.
**Action:** Decouple interaction state updates from data transformations by wrapping the filtering logic in `useMemo` with only `[filter]` as a dependency, preventing lightbox navigation from causing re-filters.
