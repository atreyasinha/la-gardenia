## 2024-07-27 - Throttling Scroll Listeners in React

**Learning:** When attaching `scroll` event listeners to `window` in a `useEffect` inside a React component (like `src/components/Header.jsx`), the frequent event fires can cause main thread blocking, particularly if triggering state updates that lead to re-renders.

**Action:** Consistently use `requestAnimationFrame` to throttle `scroll` handlers to browser paint frames, and provide the `{ passive: true }` option to `window.addEventListener('scroll', ...)` to explicitly inform the browser that the event handler will not call `preventDefault()`, allowing composite threads to scroll smoothly.

## 2024-08-08 - Code Splitting Single Page Layouts
**Learning:** For a single-page marketing site architecture where many large components are stacked vertically (Hero, About, Venues, etc.), eagerly importing everything inflates the initial JS bundle drastically.
**Action:** Always use `React.lazy` and `Suspense` for sections that render "below the fold". Eagerly load only the initial viewport components (e.g., Header, Hero) to optimize the Time to Interactive (TTI) and First Contentful Paint (FCP).
