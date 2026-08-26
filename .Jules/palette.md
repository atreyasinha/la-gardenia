## 2026-07-25 - Adding IDs to Labels in ContactModal\n**Learning:** Missing 'htmlFor' and 'id' associations for form elements reduces accessibility for screen readers and breaks click-to-focus behavior for labels. While ARIA labels are good, semantic HTML labels with 'id' associations are the standard approach for simple forms.\n**Action:** Ensure all form inputs (<input>, <select>, <textarea>) have unique 'id' attributes and their corresponding <label> elements have matching 'htmlFor' attributes.

## 2024-05-18 - Missing ARIA label on WhatsApp floating action button
**Learning:** Even though the WhatsApp floating action button in `FloatingActions.jsx` has a `title` attribute ("Chat on WhatsApp (+91 9431911929)"), it is rendered as an icon-only link. A `title` attribute alone is not consistently announced by all screen readers.
**Action:** Added `aria-label="Chat on WhatsApp"` to ensure the link is properly accessible and announced correctly by assistive technologies.
