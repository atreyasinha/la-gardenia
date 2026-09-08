## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-09-08 - [Missing Input Length Limits (DoS Risk)]
**Vulnerability:** Found unconstrained user input sizes in frontend form elements (`name`, `phone`, `notes` in `ContactModal.jsx`) which are subsequently used to construct a WhatsApp external URL.
**Learning:** Frontend forms that collect user input to construct external URLs (such as `wa.me`) can be vulnerable to client-side DoS or excessively large payload injections if input sizes are not properly bounded. Browsers and OS handlers have URL length limits, and excessive lengths can cause performance issues or unexpected behavior.
**Prevention:** Strictly enforce `maxLength` attributes on input and textarea elements, especially when those inputs are collected and interpolated into URLs, to limit payload size and mitigate client-side DoS vulnerabilities.
