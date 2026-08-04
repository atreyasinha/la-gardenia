## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-04 - Pausing Off-Screen Animations with IntersectionObserver

**Learning:** Continuous timers (like `setInterval` for an auto-advancing image slider) running while a component is out of the viewport can cause unnecessary React state updates, virtual DOM diffs, and CSS transition repaints, which waste CPU cycles and battery.

**Action:** Use an `IntersectionObserver` to track the visibility of the component and pause the animation/timer when the component is not in the viewport.
