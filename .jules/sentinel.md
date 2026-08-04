## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2025-02-23 - [Input Validation]
**Vulnerability:** Found lack of input validation and length constraints on form inputs that dynamically generate WhatsApp links.
**Learning:** Even entirely static, un-backed frontend forms require length and pattern validation. Without it, excessive string lengths can be used for client-side DoS or to construct maliciously oversized payloads when navigating to third-party endpoints (e.g., via `window.open`).
**Prevention:** Always add `maxLength` constraints and appropriate regex `pattern` attributes to form inputs, even in completely static applications relying on `mailto:` or `wa.me` links.
