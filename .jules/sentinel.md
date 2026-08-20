## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2025-02-21 - [Client-Side DoS via Unbounded Input in WhatsApp Link Generation]
**Vulnerability:** Forms collecting user input (like `name`, `phone`, `notes` in `ContactModal.jsx`) that construct an external WhatsApp URL lacked length constraints. A malicious user could paste a massive payload, leading to excessively large URL generation and potential browser freezes (client-side DoS).
**Learning:** Even without backend submission, unbounded text inputs in purely client-side React apps can be abused if that text is injected into external links or client-side processing tasks.
**Prevention:** Always enforce strict `maxLength` attributes on native HTML inputs mapping to external payloads, preventing unnecessarily large inputs at the point of origin.
