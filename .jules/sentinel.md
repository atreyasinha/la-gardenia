## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-07-31 - Unbounded Input in Client-Side Forms for URL Generation
**Vulnerability:** Client-side forms passing data directly into WhatsApp URLs lacked length limits (`maxLength`) and pattern validation, posing a risk of payload bloat and unvalidated input (e.g., extremely long strings in `notes` or arbitrary characters in `phone` fields).
**Learning:** Even in purely client-side static sites without backend DBs, data passed to external services (like `https://wa.me/...`) must be bounded and validated on the frontend to prevent client-side denial of service, malformed URLs, and payload bloat.
**Prevention:** Always apply `maxLength` restrictions on text/textarea fields and use `pattern` attributes for formatted fields (like phone numbers) on client-side forms.
