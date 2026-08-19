## 2026-07-25 - Adding IDs to Labels in ContactModal\n**Learning:** Missing 'htmlFor' and 'id' associations for form elements reduces accessibility for screen readers and breaks click-to-focus behavior for labels. While ARIA labels are good, semantic HTML labels with 'id' associations are the standard approach for simple forms.\n**Action:** Ensure all form inputs (<input>, <select>, <textarea>) have unique 'id' attributes and their corresponding <label> elements have matching 'htmlFor' attributes.

## 2026-07-26 - ARIA States for Button Toggle Groups
**Learning:** Standard `<button>` elements are often used as custom UI controls like toggle groups or tabs (e.g., in `Venues.jsx` and `Gallery.jsx`). While styling indicates the active state visually, screen readers rely on explicit ARIA attributes.
**Action:** Always add `aria-pressed` (or `aria-selected` depending on the role) to button toggle groups to ensure screen readers announce the correct active state.
