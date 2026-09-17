## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-25 - [Missing Input Length Limits in External URL Construction]
**Vulnerability:** Found form inputs (`name`, `phone`, `notes`) lacking `maxLength` attributes in `ContactModal.jsx`, where user input is directly used to construct external WhatsApp URLs.
**Learning:** In applications that construct external URLs or payloads based on client-side input, missing length limits can lead to excessively large payload injections or client-side DoS vulnerabilities.
**Prevention:** Always enforce strict `maxLength` attributes on frontend form inputs, especially those used for external URL construction or third-party integrations.
