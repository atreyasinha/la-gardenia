## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-05-27 - [Missing Input Length Limits]
**Vulnerability:** Found unconstrained length limits on form fields (`name`, `phone`, `notes`) inside `ContactModal.jsx`. While this is a frontend only app without backend API calls, unbounded input length limits leave forms susceptible to overly large payload injections, such as building very large user input string for `wa.me` links, potentially crashing user's device.
**Learning:** For frontend applications that create URIs to third-party domains utilizing user input forms, missing `maxLength` limit restrictions can result in Denial of Service or URL injection attacks.
**Prevention:** Include validation strategies and constraints like `maxLength` attributes to form fields.
