## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-05-15 - Enforce Input Length Limits for External URLs
**Vulnerability:** Missing input length limits on form fields used to construct external WhatsApp URLs.
**Learning:** Frontend forms collecting user input for external URL construction can be exploited to construct excessively large payloads, leading to client-side DoS if `maxLength` limits are absent.
**Prevention:** Always enforce `maxLength` attributes on user input fields, especially when the data is used in client-side URL generation.
