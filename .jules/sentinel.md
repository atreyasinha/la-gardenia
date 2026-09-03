## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-07-28 - [Missing Input Length Limits]
**Vulnerability:** Found `name`, `phone`, and `notes` fields in `ContactModal.jsx` lacking `maxLength` constraints before being appended to an external URL.
**Learning:** Even without backend submission, frontend forms passing user input to external URLs (like `wa.me`) can be subject to client-side DoS or URL payload limit issues if massive payloads are injected.
**Prevention:** Always enforce strict `maxLength` attributes on input fields that build external URLs or trigger third-party actions to restrict excessively large payloads.
