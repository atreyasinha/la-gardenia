## 2024-07-26 - Global Modal State Re-renders
**Learning:** Found a performance bottleneck specific to this codebase's architecture where global state for a modal (`isBookingModalOpen` in `App.jsx`) triggered full re-renders of the entire application, including heavy components like `Gallery` and `CateringMenu`.
**Action:** Used `useMemo` to memoize the static layout components in `App.jsx`, preventing them from re-rendering when only the modal's state changes.
