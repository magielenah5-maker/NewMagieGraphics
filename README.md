# MagieGraphics — Enhanced 2026 Website

A refreshed, responsive marketing website for MagieGraphics, built from the supplied website content and original portfolio assets.

## What's included
- Premium dark visual system with Magie's pink accent palette, editorial typography and animated artwork composition.
- Responsive desktop, tablet and mobile layouts with mobile navigation and scroll progress.
- Brand story section, positioning copy, persuasive calls to action and a clear project process.
- Expanded services: graphic design and branding, website development, mobile application development, and custom web/system development.
- Filterable portfolio using the supplied seven original project images, with an accessible image-preview lightbox.
- FAQ section covering digital products, quotes and how to get started.
- Project enquiry form that prepares a WhatsApp message to the published business number. It does not store form data or require a backend.
- SEO description, Open Graph metadata, favicon, and basic ProfessionalService structured data.
- Reduced-motion support, keyboard controls, semantic sections and descriptive image alternatives.

## Files
- `index.html` — page content and metadata
- `styles.css` — responsive layout, visual design and animations
- `script.js` — navigation, filtering, lightbox, scroll effects and WhatsApp enquiry flow
- `assets/` — supplied MagieGraphics logo and portfolio images

## Preview locally
Open `index.html` in a modern browser. Keep the `assets` folder next to it. Google Fonts are loaded online; the page otherwise uses system fallbacks.

## Publish using GitHub Pages
1. Create a new repository (or a separate branch/repository so the existing live site remains available).
2. Upload the contents of this folder — `index.html`, `styles.css`, `script.js`, `README.md` and the complete `assets` folder — to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for the deployment to finish and open the Pages URL shown in the settings.

## Important before launch
- Confirm the phone numbers, email and Kabale address are still correct.
- Add verified testimonials, client permissions, pricing, social profile links and any additional project images when available. No invented testimonials, awards, founding dates or performance claims have been added.
- The enquiry form opens WhatsApp with a pre-filled message; it is not a server-side form and will not send unless the visitor taps Send in WhatsApp.
- The web/app/system service descriptions are capability offerings. Confirm the exact platform, scope, security, hosting and delivery timeline with each client before quoting.

## Add portfolio work
Copy each approved image into `assets/` and add a `.work-card` button in `index.html` with an appropriate `data-category`, `data-title`, `data-type`, and `data-description`. Use existing category values (`birthday`, `political`, `cards`, `logos`, `other`) or add a matching filter and category.
