## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-01 - [Input Length Missing on External URL Construction]
**Vulnerability:** The ContactModal form inputs (`name`, `phone`, `notes`) lacked `maxLength` constraints, allowing excessively large payloads to be injected into the dynamically constructed WhatsApp URL (`wa.me`).
**Learning:** Even without backend execution, frontend forms that construct external URLs or pass data to third-party services must enforce input length limits to prevent client-side DoS or excessively large payload injections.
**Prevention:** Always implement `maxLength` attributes on input and textarea elements that collect user data, especially when constructing dynamic external links.
