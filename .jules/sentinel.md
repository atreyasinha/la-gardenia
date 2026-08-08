## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2025-02-28 - [Missing Input Limits Leading to Potential URL Overflow]
**Vulnerability:** User inputs (`name`, `phone`, `notes`) in `ContactModal.jsx` lacked length constraints. These inputs were directly interpolated into a `wa.me` URL passed to `window.open`. Unconstrained input size could cause the resulting URL to exceed browser length limits (typically ~2000 characters), leading to integration failures or client-side DoS.
**Learning:** When generating dynamic URLs based on user inputs, it's critical to enforce input length limits (`maxLength`) on the client-side to prevent URL overflow, in addition to standard input validation.
**Prevention:** Always add sensible `maxLength` attributes to form inputs, especially when their values are used to construct external URLs. Add pattern validation to inputs like phone numbers to restrict character sets.
