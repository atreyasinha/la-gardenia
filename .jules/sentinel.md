## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-10-25 - [Missing Input Limits on External URL Construction]
**Vulnerability:** Form fields (name, phone, notes) lacked `maxLength` constraints, allowing excessively large payloads to be passed into a `window.open` WhatsApp URL.
**Learning:** Client-side forms that feed into external URI constructions (like `wa.me`) can be vectors for client-side DoS if left unbounded, causing browser tab freezes when processing massive strings.
**Prevention:** Always enforce strict `maxLength` attributes on user inputs that will be interpolated into external links or API requests.
