## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-13 - [CSP Implementation via Meta Tag for Static Frontend]
**Vulnerability:** Missing Content Security Policy (CSP), which leaves the static application vulnerable to Cross-Site Scripting (XSS) and content injection if any input handling is misconfigured or a dependency is compromised.
**Learning:** For a statically served frontend application (like this Vite React build), HTTP headers are not easily definable or enforceable by the application code itself since it relies on the hosting environment's configuration (e.g., Nginx, S3, Vercel). Therefore, the most reliable way to ship a baseline CSP as part of the source code is via a `<meta http-equiv="Content-Security-Policy">` tag in `index.html`.
**Prevention:** Always include a baseline restrictive CSP `<meta>` tag in `index.html` for frontend-only static sites to enforce defense-in-depth, even if server-side headers are not under our direct control.
