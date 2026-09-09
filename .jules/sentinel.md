## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-07-28 - [Input Length Limits Missing]
**Vulnerability:** Forms collecting user input used to construct external URLs lacked `maxLength` attributes, allowing excessively large inputs.
**Learning:** Without input length limits, malicious actors can provide huge inputs leading to client-side DoS vulnerabilities or issues with generating URLs.
**Prevention:** Always enforce strict `maxLength` attributes on frontend form inputs, particularly those used for external URL construction or payload generation.
