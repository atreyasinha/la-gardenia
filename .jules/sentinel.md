## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-07-28 - [Missing Input Length Constraints]
**Vulnerability:** Found `name`, `phone`, and `notes` inputs in `ContactModal.jsx` lacked `maxLength` constraints while their values were used to construct external WhatsApp links.
**Learning:** Frontend forms collecting user input for external URL construction (such as WhatsApp links) should strictly enforce `maxLength` attributes to prevent client-side DoS vulnerabilities and excessively large payload injections.
**Prevention:** Always define explicit `maxLength` limits on user-facing inputs to restrict input sizes before utilizing them dynamically.
