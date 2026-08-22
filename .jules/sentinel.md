## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-05-20 - Client-Side DoS via Unbounded Input in URL Construction
**Vulnerability:** Forms collecting user input (like name, phone, notes) that were directly concatenated into an external URL (WhatsApp link via `window.open`) lacked input length limits, allowing potentially huge payload injections that could cause client-side Denial of Service or unhandled large parameter errors.
**Learning:** Even entirely static sites with no backend risk injection/DoS if user input is unbounded and passed to browser APIs (like URL construction or DOM insertion). Relying only on `encodeURIComponent` secures against parameter tampering but not against excessive length.
**Prevention:** Always enforce strict `maxLength` attributes on all form inputs and textareas that collect data for external usage or URL parameters.
