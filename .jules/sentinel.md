## 2024-07-25 - URL Parameter Injection via Dynamic Inputs and Reverse Tabnabbing

**Vulnerability:**
1. URL Query Parameter Injection: The application dynamically concatenated user inputs into a WhatsApp API URL (`https://wa.me/...`) without proper encoding in `ContactModal.jsx`.
2. Reverse Tabnabbing: The `window.open` function was called with `_blank` without providing the `noopener,noreferrer` arguments.

**Learning:**
1. Directly concatenating unescaped inputs (like names or notes) into URLs can allow attackers to inject arbitrary query parameters (using `&` or `=`) or fragment identifiers, potentially altering the intended API call or causing unexpected behavior on the target site.
2. Opening links in a new tab using `window.open` (or `<a target="_blank">`) without `noopener,noreferrer` can allow the newly opened page to access and maliciously redirect the original page's `window.opener` object, leading to phishing or data theft (Reverse Tabnabbing).

**Prevention:**
1. Always use `encodeURIComponent()` to safely encode variables that are embedded as query parameters in URLs.
2. Always include `noopener,noreferrer` in the features string when using `window.open(url, '_blank')`, and add `rel="noopener noreferrer"` to any `<a target="_blank">` HTML tags.
