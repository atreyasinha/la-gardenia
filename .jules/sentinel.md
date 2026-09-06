## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-09-06 - [Missing maxLength attributes leading to DoS risks]
**Vulnerability:** Found unconstrained user input fields (`name`, `phone`, `notes`) in `ContactModal.jsx` being used to construct an external WhatsApp URL.
**Learning:** Frontend forms collecting user input for external URL construction must strictly enforce `maxLength` attributes. Without these limits, maliciously large payloads could be pasted, leading to excessively long URLs that cause client-side DoS, browser freezing, or external service rejection.
**Prevention:** Always enforce strict `maxLength` attributes on input and textarea elements, especially when their values are concatenated into external URLs or `window.open` calls.
