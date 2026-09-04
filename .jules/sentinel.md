## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-01 - [Input Length Missing on External URL Construction]
**Vulnerability:** Text inputs and textareas used to construct external URLs (like WhatsApp links) in `ContactModal.jsx` lacked length constraints.
**Learning:** Without `maxLength` attributes, excessively long strings can be pasted or typed into form fields. When these massive payloads are passed into `encodeURIComponent` and `window.open`, they can cause the browser to freeze or crash due to client-side DoS, or fail when the URL exceeds browser length limits.
**Prevention:** Strictly enforce `maxLength` attributes on all user input fields, especially when those inputs dictate the size of a dynamically constructed URL payload.
