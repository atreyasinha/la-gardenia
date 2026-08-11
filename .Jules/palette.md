## 2026-07-25 - Adding IDs to Labels in ContactModal\n**Learning:** Missing 'htmlFor' and 'id' associations for form elements reduces accessibility for screen readers and breaks click-to-focus behavior for labels. While ARIA labels are good, semantic HTML labels with 'id' associations are the standard approach for simple forms.\n**Action:** Ensure all form inputs (<input>, <select>, <textarea>) have unique 'id' attributes and their corresponding <label> elements have matching 'htmlFor' attributes.

## 2024-05-18 - [Add aria-pressed to Custom Toggle Buttons]
**Learning:** Custom UI toggle buttons/tabs built with standard `<button>` elements require explicit ARIA state attributes (like `aria-pressed` or `aria-selected`) in this codebase for proper screen reader accessibility, as they lack native state semantics.
**Action:** Always add `aria-pressed={isActive}` or equivalent to `<button>` elements acting as toggles or tabs.
