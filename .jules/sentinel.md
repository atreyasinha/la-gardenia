## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-09-13 - [Missing Input Length Limits on External URL Construction]
**Vulnerability:** `input` and `textarea` fields in `ContactModal.jsx` lacked `maxLength` constraints while their values were used to construct external WhatsApp URLs.
**Learning:** Without `maxLength`, attackers or users can input massive strings causing excessively large payload injections or client-side DoS during `encodeURIComponent` and string interpolation for URL generation.
**Prevention:** Always enforce strict `maxLength` attributes on frontend form inputs, especially when collecting user input for external URL construction.
