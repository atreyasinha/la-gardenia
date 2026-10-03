## 2024-10-04 - Add input length limits to prevent DoS
**Vulnerability:** Missing input length limits on form inputs could lead to unbounded string allocation and potential DoS or memory issues when generating WhatsApp links.
**Learning:** React form inputs without explicit `maxLength` limits allow users to paste or type massive amounts of text, potentially causing performance issues when this data is processed (like in `encodeURIComponent`).
**Prevention:** Always set sensible `maxLength` attributes on text inputs (`<input type="text">`, `<textarea>`, `<input type="tel">`) as a basic client-side defense-in-depth measure.
