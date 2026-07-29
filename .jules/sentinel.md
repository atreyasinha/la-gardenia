## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-11-20 - [Added Form Input Length Limits]
**Vulnerability:** Unbounded form inputs (name, phone, notes) were fed directly into a `window.open` WhatsApp URL.
**Learning:** WhatsApp URLs have length limits (~2000 chars). Excessively long inputs could lead to Denial of Service or URL manipulation limits. Since this is a frontend-only app, validating input lengths on the client is the only line of defense for outbound URL generation.
**Prevention:** Always add `maxLength` attributes to form fields that populate external URLs or APIs, even if there is no backend server.
