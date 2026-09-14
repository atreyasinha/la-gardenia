## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-07-29 - [Denial of Service via Unbounded Dynamic URL Inputs]
**Vulnerability:** Found `<input>` and `<textarea>` fields in `ContactModal.jsx` that were used to construct dynamic WhatsApp URLs but lacked `maxLength` constraints.
**Learning:** Forms that funnel user input directly into URL construction (like `window.open` queries) are susceptible to client-side Denial-of-Service (DoS) and excessive payload injections if a user pastes a massive string, which can crash the browser tab or hit URL length limits.
**Prevention:** Always enforce explicit `maxLength` properties on frontend text inputs, especially when that data is used directly on the client side without server-side validation to build dynamic links.
