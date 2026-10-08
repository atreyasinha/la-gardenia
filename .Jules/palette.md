## 2026-07-25 - Adding IDs to Labels in ContactModal\n**Learning:** Missing 'htmlFor' and 'id' associations for form elements reduces accessibility for screen readers and breaks click-to-focus behavior for labels. While ARIA labels are good, semantic HTML labels with 'id' associations are the standard approach for simple forms.\n**Action:** Ensure all form inputs (<input>, <select>, <textarea>) have unique 'id' attributes and their corresponding <label> elements have matching 'htmlFor' attributes.

## 2024-10-08 - Visual Parity for Keyboard Users
**Learning:** Icon-only floating action buttons often rely on hover states (like scaling) for interactivity cues, which are completely invisible to keyboard users when navigating via keyboard focus.
**Action:** Replicate hover-triggered visual changes using onFocus and onBlur event handlers to ensure visual parity, alongside adding explicit aria-labels for screen readers.
