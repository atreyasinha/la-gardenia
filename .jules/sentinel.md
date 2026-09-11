## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-05-18 - [Missing Input Length Limits on External Payload Forms]
**Vulnerability:** Found unconstrained text inputs (`name`, `phone`, `notes`) in `ContactModal.jsx` which are used to construct external WhatsApp URLs.
**Learning:** Frontend forms that collect user input for external URL construction (such as WhatsApp links) without `maxLength` attributes expose the application to client-side DoS vulnerabilities and excessively large payload injections.
**Prevention:** Strictly enforce `maxLength` attributes on all form inputs and textareas that collect user input, especially when the data is used in external URLs or external payload constructions.
