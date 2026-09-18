## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-09-18 - [Missing Input Length Constraints for URL Payload Construction]
**Vulnerability:** Found missing input length constraints (`maxLength`) on form fields (`name`, `phone`, `notes`) in `ContactModal.jsx` which are subsequently used to construct a WhatsApp URL payload.
**Learning:** When user input is used to dynamically build URLs or external links, the lack of length constraints creates a risk of excessively large payload injection. This can lead to client-side Denial of Service (DoS) due to browser lag or the construction of invalidly large URLs.
**Prevention:** Always explicitly define `maxLength` attributes on form inputs, especially when the collected data will be concatenated into a URL or an external payload.
