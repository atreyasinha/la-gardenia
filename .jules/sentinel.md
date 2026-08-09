## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-09 - [DoS Risk / Unconstrained Input Lengths]
**Vulnerability:** Found unconstrained user input lengths (missing `maxLength` on `name`, `phone`, `notes`) in `ContactModal.jsx` which constructs a dynamic URL.
**Learning:** When user input is directly appended to URLs, unconstrained input lengths can lead to denial-of-service (DoS) vectors on the client side (e.g., crashing the browser or mobile app trying to open an excessively large URL).
**Prevention:** Always add sensible `maxLength` constraints to all user-facing inputs to prevent DoS via large payloads.
