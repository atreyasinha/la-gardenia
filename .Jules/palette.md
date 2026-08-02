## 2026-07-25 - Adding IDs to Labels in ContactModal\n**Learning:** Missing 'htmlFor' and 'id' associations for form elements reduces accessibility for screen readers and breaks click-to-focus behavior for labels. While ARIA labels are good, semantic HTML labels with 'id' associations are the standard approach for simple forms.\n**Action:** Ensure all form inputs (<input>, <select>, <textarea>) have unique 'id' attributes and their corresponding <label> elements have matching 'htmlFor' attributes.

## 2026-08-02 - Form Accessibility with Focus States
**Learning:** Using `outline: 'none'` on form inputs in inline styles without providing a `:focus` fallback styling removes all visual indication of keyboard focus, breaking keyboard navigation and accessibility.
**Action:** Always provide a clear `:focus` or `:focus-visible` state using `outline` or `box-shadow` when styling forms, and define global fallback rules for interactive elements.
