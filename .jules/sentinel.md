## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-07-28 - [Client-Side DoS via Unbounded Input]
**Vulnerability:** Form inputs used to construct third-party URLs (`wa.me`) lacked length restrictions.
**Learning:** Frontend forms that collect user input for external URL construction (such as WhatsApp links) can be vulnerable to client-side DoS and excessively large payload injections if input limits are not enforced.
**Prevention:** Strictly enforce `maxLength` attributes on text inputs and textareas that feed into URL construction logic to prevent excessively large payload injections.
