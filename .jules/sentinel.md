## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-09-01 - [Missing Input Length Limits (Client-side DoS)]
**Vulnerability:** Forms collecting user input used for external URL construction (WhatsApp) lack `maxLength` limitations on `input` and `textarea` fields.
**Learning:** Without length constraints on frontend forms, an attacker can input excessively large strings, causing client-side processing delays or generating URLs that exceed browser/application limits when constructing dynamic external links, leading to a localized Denial of Service or application crash.
**Prevention:** Always enforce strict `maxLength` attributes on user input fields, especially when those inputs are interpolated into URLs or external service calls.
