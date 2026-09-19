## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-07-28 - [Client-Side DoS via Unrestricted Input Lengths]
**Vulnerability:** Input fields constructing external URLs (like WhatsApp links) lacked length limits, allowing potential client-side DoS or excessively large payload injections.
**Learning:** Even if data isn't saved to a database, frontend inputs used for dynamic actions (like URL construction or API calls) must have strict constraints to prevent browser crashing or payload abuse.
**Prevention:** Always enforce `maxLength` attributes on text inputs and textareas, especially those collecting unstructured user data.
