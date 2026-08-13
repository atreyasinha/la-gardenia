## 2026-07-25 - Adding IDs to Labels in ContactModal\n**Learning:** Missing 'htmlFor' and 'id' associations for form elements reduces accessibility for screen readers and breaks click-to-focus behavior for labels. While ARIA labels are good, semantic HTML labels with 'id' associations are the standard approach for simple forms.\n**Action:** Ensure all form inputs (<input>, <select>, <textarea>) have unique 'id' attributes and their corresponding <label> elements have matching 'htmlFor' attributes.

## 2026-08-13 - Adding aria-pressed to Toggle Buttons
**Learning:** Custom UI controls using standard `<button>` elements that act as toggle groups or tabs require explicit ARIA state attributes (like `aria-pressed` or `aria-selected`) to properly communicate their active state to screen readers.
**Action:** Always verify if a button behaves as a toggle or tab, and include the appropriate `aria-pressed` or `aria-selected` attribute bound to its active state to ensure accessibility.
