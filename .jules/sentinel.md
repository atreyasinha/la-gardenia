## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-09-07 - [Missing input length limits (DoS risk)]
**Vulnerability:** The form in `ContactModal.jsx` used to collect user inputs for generating a WhatsApp URL lacked `maxLength` attributes.
**Learning:** Frontend forms that collect inputs for external URL construction (or downstream processing) must strictly enforce length limits to prevent client-side DoS vulnerabilities and excessively large payload injections.
**Prevention:** Always enforce `maxLength` attributes on text inputs and textareas that collect user input.
