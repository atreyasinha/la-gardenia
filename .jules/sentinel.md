## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-31 - [Client-Side DoS via Unrestricted Input Lengths in External URLs]
**Vulnerability:** Found `name`, `phone`, and `notes` inputs in `ContactModal.jsx` lacked length restrictions. These inputs are concatenated to construct a `wa.me` external URL. Extremely large inputs could cause application slowdown or browser hangs.
**Learning:** Frontend forms that collect user input to construct external URLs (like WhatsApp integration) can be vulnerable to client-side Denial-of-Service if the input size is not restricted, especially when creating large strings and appending them to `window.open`.
**Prevention:** Strictly enforce `maxLength` attributes on input and textarea elements to prevent excessively large payload injections.
