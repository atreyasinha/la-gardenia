## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.
## 2024-05-24 - [React Code-Splitting Optimization & Mount Considerations]
**Learning:** Initial bundle size in this static single-page React app could be reduced by lazy loading heavy components like `ContactModal`. However, simply wrapping `<ContactModal />` in `React.lazy` and `Suspense` will still eagerly fetch the chunk on initial load if the component is mounted (even if it visually hides itself via an `isOpen={false}` prop).
**Action:** Conditionally mount the lazily-loaded component (e.g., `{isBookingModalOpen && <Suspense><ContactModal /></Suspense>}`) to defer the network request until the component is actually needed. Note that this causes immediate unmounting on close, which might skip exit animations if they exist.
## 2024-05-24 - [Lazy Loading Modals & Animation State Preservation]
**Learning:** Conditionally mounting a lazy-loaded modal (`isBookingModalOpen && <Modal />`) causes instant unmounting, which skips any built-in exit/close CSS animations.
**Action:** Implement a `hasBeenOpened` state latch. Conditionally render the Suspense boundary based on this latch (`hasBeenOpened && <Modal isOpen={...} />`) to defer the initial network request while allowing the modal to remain mounted and gracefully handle its own unmount/close animations thereafter.
