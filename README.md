# Blad — Nature Education for Berlin's Kitas and Schools (Pilot 2026/27)

A simple, fast, accessible single-page website for **Blad**, an early-stage social venture in Berlin bringing hands-on nature education (bird and insect identification, street tree care, urban heat measurement) to Kitas and schools, supported by public grants and company **Kiez Impact Days**.

## Tech Stack
- **Plain HTML5, CSS3, and Vanilla JavaScript** (`index.html`, `styles.css`, `script.js`).
- **Zero build step or external JS dependencies** — only Google Fonts (`Fraunces` & `Plus Jakarta Sans`) with native system serif/sans-serif fallbacks.
- **Bilingual (EN / DE)** — instant client-side toggle stored in a clean `translations` object inside `script.js`.
- **Responsive & Accessible** — mobile-first layout tested at `375px`, `768px`, and `1280px`, keyboard navigable with a skip link, automatic Light & Dark mode (`prefers-color-scheme`), and reduced-motion support (`prefers-reduced-motion`).
- **Privacy-first** — no cookies, no analytics, no trackers, and no backend database.

---

## How to Run Locally

### Option 1: Open directly in your browser
Double-click `index.html` or open it directly in any modern browser (Chrome, Firefox, Edge, Safari). Everything works out of the box without a server.

### Option 2: Run a local development server
If you want live URL routing or local testing over HTTP:

```bash
# Using Python 3
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

---

## How to Edit & Customize Placeholders

Before publishing the website, replace the clearly marked placeholders in `index.html` and `script.js`:

1. **Email Address (`[your email]`)**
   - Search for `[your email]` in both `index.html` and `script.js` and replace all occurrences with your real contact email (e.g. `hello@blad-berlin.de`).

2. **Founder Name & Bio (`#about` section)**
   - In `index.html` (under `<!-- 6. About -->`) and in `script.js` (`about_name` and `about_bio` in both `en` and `de`), replace `[Your Name]` / `[Dein Name]` and the two placeholder bio sentences with your real name and 2-sentence bio.
   - To add a portrait photo, replace the `<div class="photo-placeholder">...</div>` block in `index.html` with `<img src="your-photo.jpg" alt="Portrait of [Your Name]" class="about-photo">` (or keep the section without a photo).

3. **Impressum & Datenschutz (`#legal` section)**
   - German law (§ 5 DDG and DSGVO) requires a complete *Impressum* and *Datenschutzerklärung*.
   - Update the bracketed placeholders in `index.html` (under `<!-- 8. Legal Placeholder Sections -->`) and the corresponding German strings in `script.js` (`impressum_*` and `privacy_*`) with your legal name/entity, Berlin street address, phone/email, and hosting details.
   - Once completed, remove the `"To be completed"` / `"Noch zu ergänzen"` badges.
