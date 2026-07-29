## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.
## 2024-05-24 - [State Bottleneck: Modal Toggling Causes Full Page Re-Renders]
**Learning:** In a single-page React architecture like this where all sections are rendered at the root (`App.jsx`), a top-level state used only for a UI overlay (like `isBookingModalOpen`) forces a re-render of the entire component tree (Hero, Venues, Gallery, etc.) every time it toggles. This is a severe performance anti-pattern.
**Action:** Use `useMemo` on the static page layout to shield it from unrelated state changes, or move the modal state down into a dedicated provider/wrapper component.
