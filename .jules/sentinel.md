## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-29 - [Oversized Payload Injection via Unbounded Inputs]
**Vulnerability:** Found unconstrained user inputs (`name`, `phone`, `notes`) used to construct external `wa.me` WhatsApp URLs in `ContactModal.jsx`. This lack of input length limits can lead to excessively large payloads when the URL is constructed.
**Learning:** Frontend forms collecting user input for external URL construction (such as WhatsApp links) should strictly enforce `maxLength` attributes to prevent client-side DoS vulnerabilities and oversized payload injections.
**Prevention:** Always implement `maxLength` attributes on input fields that are interpolated into dynamic external links to restrict payload size.
