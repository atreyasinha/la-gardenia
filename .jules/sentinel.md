## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-06 - [MEDIUM] WhatsApp URL Payload DoS via Missing Input Length Limits
**Vulnerability:** Found unbounded inputs in ContactModal.jsx (`name`, `phone`, `notes` fields). The form generates a `mailto:`/`wa.me` URL string on submission using these fields directly. Since browsers and WhatsApp API have length limitations on URLs (typically ~2000 chars), sending an extremely large payload could crash the user's browser tab or silently fail to open the WhatsApp chat, breaking core business functionality.
**Learning:** In purely frontend architectures that rely on URL scheme protocols (`mailto:`, `tel:`, `whatsapp:`) for "submission", form fields act as URL query parameters. Lack of standard backend payload size limits means the application is vulnerable to client-side Denial of Service (DoS) via oversized URL generation.
**Prevention:** Always set strict `maxLength` attributes on textareas and inputs that are directly embedded into client-side URL generated string actions to guarantee they cannot exceed safe protocol URI boundaries.
