## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2026-08-12 - [Add Content Security Policy]
**Vulnerability:** The static HTML frontend lacked a Content Security Policy (CSP), leaving the application more vulnerable to Cross-Site Scripting (XSS) and unauthorized resource loading, especially since it doesn't have a backend to set HTTP headers.
**Learning:** In purely static frontend React/Vite applications deployed without server-side configuration, CSP can and must be implemented via a `<meta http-equiv="Content-Security-Policy">` tag in the `index.html` entry point.
**Prevention:** Always include a restrictive CSP meta tag in static `index.html` files to explicitly whitelist allowed resource origins (e.g., self, specific Google Fonts APIs, expected iframe targets) and prevent inline execution if not strictly necessary.
