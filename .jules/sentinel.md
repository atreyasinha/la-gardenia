## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-05-18 - [Missing Input Validation in Client-Side Forms]
**Vulnerability:** Forms rendering external links (like WhatsApp generation) were missing character limits and input constraints (e.g. `maxLength`, `pattern`), which could lead to excessively large payloads or injection if unchecked.
**Learning:** Even though this application doesn't submit to a backend API, generating external links from unbounded user input can create unwieldy URLs, cause local browser issues, or be used for abuse.
**Prevention:** Always implement basic client-side validation (`maxLength`, `pattern`, logical limits like `min` for dates) on all input fields, even for static or form-to-URL implementations.
