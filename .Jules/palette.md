## 2026-07-25 - Adding IDs to Labels in ContactModal\n**Learning:** Missing 'htmlFor' and 'id' associations for form elements reduces accessibility for screen readers and breaks click-to-focus behavior for labels. While ARIA labels are good, semantic HTML labels with 'id' associations are the standard approach for simple forms.\n**Action:** Ensure all form inputs (<input>, <select>, <textarea>) have unique 'id' attributes and their corresponding <label> elements have matching 'htmlFor' attributes.

## 2026-08-24 - Adding aria-label to icon-only links
**Learning:** Icon-only links, such as floating action buttons (FABs), lack visible text content, making them inaccessible to screen reader users. While a `title` attribute provides a tooltip on hover, it's not consistently announced by screen readers.
**Action:** Always ensure icon-only links and buttons have an explicit `aria-label` attribute to clearly communicate their purpose and action to assistive technologies.
