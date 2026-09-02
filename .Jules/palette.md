## 2026-07-25 - Adding IDs to Labels in ContactModal\n**Learning:** Missing 'htmlFor' and 'id' associations for form elements reduces accessibility for screen readers and breaks click-to-focus behavior for labels. While ARIA labels are good, semantic HTML labels with 'id' associations are the standard approach for simple forms.\n**Action:** Ensure all form inputs (<input>, <select>, <textarea>) have unique 'id' attributes and their corresponding <label> elements have matching 'htmlFor' attributes.

## 2024-05-18 - Icon-Only Button Accessibility
**Learning:** Icon-only links (like floating action buttons) require explicit `aria-label` attributes to ensure proper screen reader accessibility, even if a `title` attribute is present, because `title` attributes are not consistently announced by assistive technologies.
**Action:** Always verify that icon-only buttons or links have an explicit, descriptive `aria-label`.
