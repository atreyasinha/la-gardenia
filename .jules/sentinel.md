## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-10-25 - Prevent External Payload DoS
**Vulnerability:** Unbounded user input was directly appended to an external URL (WhatsApp link), allowing potential client-side DoS or excessively large payload injections.
**Learning:** Even when using `encodeURIComponent`, forms collecting input for external URL generation must strictly enforce bounds to prevent malicious usage of application state.
**Prevention:** Always enforce strict `maxLength` attributes on input fields that contribute to external link or payload construction.
