## 2026-07-25 - Adding IDs to Labels in ContactModal\n**Learning:** Missing 'htmlFor' and 'id' associations for form elements reduces accessibility for screen readers and breaks click-to-focus behavior for labels. While ARIA labels are good, semantic HTML labels with 'id' associations are the standard approach for simple forms.\n**Action:** Ensure all form inputs (<input>, <select>, <textarea>) have unique 'id' attributes and their corresponding <label> elements have matching 'htmlFor' attributes.

## 2024-05-24 - Floating Action Buttons Need Focus Parity
**Learning:** Icon-only floating action buttons often rely on hover effects for interactive feedback, leaving keyboard users without visual cues during tabbing, and screen readers without context if aria-labels are missing.
**Action:** When adding or auditing icon-only buttons, ensure they have explicit ARIA labels and duplicate hover-triggered visual changes (like scaling) in `onFocus` and `onBlur` handlers for accessibility parity.
