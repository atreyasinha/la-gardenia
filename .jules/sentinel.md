## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-08-15 - [Missing Content Security Policy in Static React App]
**Vulnerability:** The application was missing a Content-Security-Policy (CSP), which is a critical defense-in-depth mechanism against Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** For a statically served frontend like this Vite+React app, CSP can't easily be set via HTTP headers if we don't control the server. Instead, it must be implemented via a `<meta http-equiv="Content-Security-Policy">` tag in `index.html`. It requires careful whitelisting of external domains used for fonts (`fonts.googleapis.com`, `fonts.gstatic.com`), iframes (`www.google.com/maps`), and potentially inline scripts/styles needed by the build tool.
**Prevention:** Always include a baseline restrictive CSP via meta tag for static sites. Ensure `default-src 'self'` is the default, and specifically allow only required external origins.
