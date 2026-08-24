## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-24 - [Client-Side DoS via Unrestricted Input in External URL Construction]
**Vulnerability:** Found `name`, `phone`, and `notes` input fields in `ContactModal.jsx` without `maxLength` attributes. These inputs are used directly in constructing a WhatsApp URL.
**Learning:** Frontend forms that collect user input for dynamic external URL construction (like `wa.me`) can be vulnerable to client-side DoS or excessively large payload injections if input length isn't restricted. An attacker could potentially paste massive amounts of text, causing the browser to freeze or crash when attempting to render or open the excessively long URL.
**Prevention:** Always enforce strict `maxLength` attributes on user input fields, especially when those inputs are interpolated into URLs or external service calls.
