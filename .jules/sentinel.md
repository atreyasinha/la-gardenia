## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-10-13 - [Missing Input Length Limits (DoS / Resource Exhaustion Risk)]
**Vulnerability:** The `<input>` and `<textarea>` fields in `ContactModal.jsx` lacked `maxLength` attributes, allowing unlimited text entry.
**Learning:** React form elements inherently do not restrict input lengths unless explicitly instructed. Missing limits can allow users to input exceptionally large strings that could exhaust client resources, create extremely long UI/UX breaking payloads (like URLs), or overwhelm backend/API endpoints.
**Prevention:** Always set explicit `maxLength` limits on standard textual `<input>` and `<textarea>` components in forms based on reasonable expected data constraints.
