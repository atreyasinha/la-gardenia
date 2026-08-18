## 2026-07-25 - Adding IDs to Labels in ContactModal\n**Learning:** Missing 'htmlFor' and 'id' associations for form elements reduces accessibility for screen readers and breaks click-to-focus behavior for labels. While ARIA labels are good, semantic HTML labels with 'id' associations are the standard approach for simple forms.\n**Action:** Ensure all form inputs (<input>, <select>, <textarea>) have unique 'id' attributes and their corresponding <label> elements have matching 'htmlFor' attributes.

## 2024-08-18 - [ARIA State on Standard Buttons Used as Toggles]
**Learning:** Custom UI controls in the project often use standard `<button>` elements acting as toggle groups or tabs. Screen readers don't natively understand these act as a stateful toggle unless explicit ARIA attributes are provided.
**Action:** Always append `aria-pressed` (or `aria-selected` depending on the role) when standard buttons are used to control a selected state in a list or toggle group.
