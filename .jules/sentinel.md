## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-08-05 - [Dependency Vulnerabilities]
**Vulnerability:** Found `vite` (<=6.4.2) and `esbuild` (<=0.24.2) dependencies that were vulnerable to path traversal, arbitrary requests, and hash disclosure.
**Learning:** Build dependencies should be kept updated to prevent potential exploitation if an attacker gains access or misconfigures the development/build pipeline.
**Prevention:** Regularly run `pnpm audit` and keep dependencies updated. Use `pnpm add -D <package>@latest` to get patched versions.
