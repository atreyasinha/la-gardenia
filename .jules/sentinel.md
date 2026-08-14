## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-07-28 - [Added Strict Content Security Policy]
**Vulnerability:** The application is a static React site without any Content Security Policy (CSP) headers or tags. This leaves it potentially vulnerable to XSS or data injection if a vulnerability is ever introduced.
**Learning:** Static frontend-only sites (like those deployed via GitHub Pages or simple CDNs without server logic) can effectively use a `<meta http-equiv="Content-Security-Policy" content="...">` tag to enforce CSP when setting HTTP headers is impossible or difficult.
**Prevention:** Always implement a strict CSP (restricting `default-src`, `script-src`, `style-src`, etc.) to provide defense-in-depth against unauthorized resource execution or loading, even in static sites.
