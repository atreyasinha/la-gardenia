## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-08-26 - Prevent Client-Side DoS and URL Payload Injection in Forms
**Vulnerability:** Frontend forms collecting user input for external URL construction (such as WhatsApp links) lacked `maxLength` attributes, presenting a client-side DoS vulnerability and risk of excessively large payload injections.
**Learning:** Without length constraints on client-side text areas and inputs that build a `mailto:` or WhatsApp `text=` parameter, an attacker could potentially freeze the user's browser or construct malicious over-sized payloads.
**Prevention:** Always strictly enforce `maxLength` attributes on user inputs that are used in URL parameter strings or other sensitive client-side payload generations to limit input sizes.
