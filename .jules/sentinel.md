## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-07-27 - [Missing Content Security Policy]
**Vulnerability:** The application was lacking a Content Security Policy (CSP) header/meta tag.
**Learning:** Without a CSP, the application is more susceptible to Cross-Site Scripting (XSS) and data injection attacks because the browser has no baseline rules on what external resources (scripts, styles, connections) are permitted to load or execute.
**Prevention:** Always define a Content Security Policy as a defense-in-depth measure. In static React/Vite apps, if you cannot control server headers, a `<meta http-equiv="Content-Security-Policy">` tag in `index.html` is an effective alternative.
