## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-07-28 - [Missing Input Length Limits]
**Vulnerability:** Forms collecting user input for external URL construction (WhatsApp links) lacked `maxLength` constraints.
**Learning:** Without input length limits, frontend forms are susceptible to client-side DoS vulnerabilities and excessively large payload injections, especially when those inputs are interpolated into URLs.
**Prevention:** Always strictly enforce `maxLength` attributes on text inputs and textareas that feed into external links or APIs.
