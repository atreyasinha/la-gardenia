## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-05-18 - Client-Side DoS via External URL Construction
**Vulnerability:** User inputs (`name`, `phone`, `notes`) used to construct external WhatsApp URLs in `ContactModal.jsx` lacked length constraints. An attacker could input extremely large strings, leading to excessively long URLs that could crash the user's browser, trigger client-side DoS, or exploit URL length limits in external applications.
**Learning:** Even purely frontend static applications are vulnerable if they construct external URLs using unsanitized or unbounded user inputs. This specific vulnerability pattern exists because the form directly populates a `window.open` call without server-side validation.
**Prevention:** Always enforce strict `maxLength` attributes on input fields that construct external URLs or payloads to prevent excessively large payload injections.
