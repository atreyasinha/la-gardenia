## 2024-07-27 - [URL Parameter Injection via Unencoded User Input]
**Vulnerability:** Found unencoded user input (`formData.name`, etc.) directly interpolated into a `window.open` URL (`wa.me`) in `ContactModal.jsx`.
**Learning:** React components that generate dynamic links or open windows with user input can be vulnerable to URL manipulation/injection if input containing characters like `&` or `=` isn't properly encoded. Also noticed missing `noopener,noreferrer` on dynamic window.open.
**Prevention:** Always use `encodeURIComponent()` to sanitize user inputs before appending them to a URL. Additionally, pass `'noopener,noreferrer'` to `window.open` as a standard defense against tabnabbing when opening external links.
## 2024-05-31 - [Security Enhancement] Add Input Length Limits to Contact Form
**Vulnerability:** The ContactModal component collected user input for `name`, `phone`, and `notes` and appended them directly to a WhatsApp URL via `window.open`, but lacked length limitations on these input fields.
**Learning:** This missing boundary check creates a risk for client-side Denial of Service (DoS) and oversized payload injection when constructing external dynamic URLs, leading to potentially malformed requests or memory constraints on the client.
**Prevention:** Always apply reasonable `maxLength` attributes to `<input>` and `<textarea>` elements on the frontend, especially when user inputs are directly concatenated into URLs or queries.
