## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2025-05-18 - Missing Content Security Policy Header
**Vulnerability:** Found a lack of Content-Security-Policy (CSP) headers in `index.html` for a client-side React app.
**Learning:** Static site single-page applications often neglect HTTP-level security configurations if they aren't served from a server that defines these headers. Providing a CSP as a `<meta>` tag is a simple defense-in-depth security enhancement to mitigate XSS risks on static hosting.
**Prevention:** Always implement a default CSP using a meta tag for statically exported or frontend-only React apps, restricting script execution and style resources to known sources.
