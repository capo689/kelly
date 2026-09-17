# Kelly Miller Real Estate

A custom React site for Kelly Miller's Cascades to Coast real estate practice. The experience combines editorial layouts, client photography, smooth scrolling, and cinematic transitions.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The repository includes a Vercel rewrite so client-side routes resolve correctly when opened directly.

## Project structure

- `src/components`: shared site components, including the universal header and footer
- `src/pages`: page-level compositions
- `src/styles`: layered design tokens, foundations, components, layouts, motion, and responsive rules
- `public/media`: optimized client photography
- `public/brand`: supplied brand graphics

Both inquiry forms use free FormSubmit delivery to Kelly. Recipient activation is required before email delivery; see FORM-DELIVERY.md. The production build prerenders page content and SEO metadata.
