## 2024-08-04 - [Lightbox Keyboard Accessibility]
**Learning:** Custom interactive overlays (like lightboxes/modals) often lack keyboard navigation (Escape to close, arrows to navigate) natively, unlike standard HTML dialogs. This is a common accessibility trap in React applications that rely heavily on `div` overlays.
**Action:** Always add explicit global keyboard event listeners (handling 'Escape', 'ArrowLeft', 'ArrowRight') when implementing custom modal or lightbox components to ensure keyboard users and screen readers are not trapped and can easily navigate.
