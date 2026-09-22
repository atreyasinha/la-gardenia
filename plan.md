1. **Identify the vulnerability:** Unbounded input lengths on form fields in `ContactModal.jsx`. This can lead to excessively large payloads when constructing the WhatsApp URL, causing client-side Denial of Service (DoS) or UI issues.
2. **Apply fixes to `ContactModal.jsx`:**
   - Add `maxLength={100}` to the Full Name input field.
   - Add `maxLength={15}` to the Mobile / WhatsApp Number input field.
   - Add `maxLength={500}` to the Special Requests / Notes textarea.
3. **Verify changes:** Use `cat` and `grep` to ensure the `maxLength` attributes have been correctly added to the input elements in `ContactModal.jsx`.
4. **Run `pnpm config set allow-builds "esbuild" && pnpm install && pnpm build`** to verify the changes are correct and the application compiles successfully.
5. **Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.**
6. **Submit PR:** Submit the fix as the Sentinel persona.
