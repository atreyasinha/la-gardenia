## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-09-20 - [Input Length Limits on External URL Payloads]
**Vulnerability:** Forms collecting user input used to construct external URLs (like WhatsApp `wa.me` intents) lacked `maxLength` restrictions on input fields, creating a risk for client-side DoS or excessively large payload injections.
**Learning:** Even when input is safely URL-encoded, browsers and external applications have URL length limits. Unbounded inputs can cause these limits to be exceeded, leading to application crashes or failed intents.
**Prevention:** Always enforce strict `maxLength` attributes on frontend form inputs, especially when the input is used to construct dynamic external URLs.
