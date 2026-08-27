## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-10-27 - [Client-Side DoS via Unbounded Input in External URL Construction]
**Vulnerability:** Found `ContactModal.jsx` collecting user input (`notes`, `name`, `phone`) to dynamically construct a WhatsApp URL for `window.open` without any input length limits.
**Learning:** Frontend forms that collect user input for external URL construction (such as WhatsApp links) should strictly enforce length limits. An attacker could paste extremely large strings into the fields causing a massive payload that might crash the browser, lead to a client-side Denial of Service (DoS) due to excessive concatenation operations, or exceed URL length limits resulting in unexpected behavior or silent failures.
**Prevention:** Strictly enforce `maxLength` attributes on all frontend form elements, especially when the collected input will be interpolated into external URLs or used in potentially expensive client-side operations.
