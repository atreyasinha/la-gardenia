## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.

## 2024-07-28 - [Content Security Policy implementation via meta tag]
**Vulnerability:** The application was missing a Content Security Policy (CSP), leaving it vulnerable to Cross-Site Scripting (XSS), clickjacking, and other code injection attacks.
**Learning:** Because this is a static frontend served without server-defined HTTP headers, CSP must be implemented using a `<meta>` tag in `index.html`. It requires explicitly allowing necessary third-party domains (Google Fonts, external images, Maps iframes) and Vite's WebSocket (`ws:`, `wss:`) for local development to function without breaking the app.
**Prevention:** Always implement a strict CSP by default on static sites using a meta tag. Use `default-src 'self'` and specifically whitelist required external domains and resource types.
