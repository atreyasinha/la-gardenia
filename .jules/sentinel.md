## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-17 - [Missing Input Length Limits (DoS Risk)]
**Vulnerability:** Found multiple form inputs in `ContactModal.jsx` without length limits. Specifically, when these values are used to construct `wa.me` links via `encodeURIComponent`, excessively long inputs could cause application slowdown, unexpected behavior, or browser errors.
**Learning:** Frontend forms that collect user input for URL construction or general use should always enforce `maxLength` limits to mitigate client-side Denial of Service risks and to ensure data sanity.
**Prevention:** Always define `maxLength` attributes on text, tel, and textarea inputs during component development.
