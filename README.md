# Karachi Legal House — Website

Advocates & Legal Consultants — law firm website for Karachi Legal House (est. 2002).

**Live:** https://karachi-legal-house.vercel.app/

## Stack

Static multi-page site — no build step, no framework:

- Plain HTML pages (`index.html`, `about.html`, `practices.html`, `clients.html`, `contact.html`)
- Styling via Tailwind CSS Play CDN + Font Awesome + Google Fonts (inline config per page)
- Vanilla JS for modals, mobile menu, dark mode, and form handling

> Note: the repo also contains an unfinished Vite + React skeleton (`src/`, `vite.config.js`,
> `package.json`). It is **not** used by the live site and is kept only for reference.

## Key behaviour

- **Consultation forms** (`index.html`, `contact.html`) have no backend. On submit they open
  WhatsApp (`wa.me/923112610683`) with the enquiry prefilled (name, phone, practice area,
  message) so the firm receives every lead as a chat.
- **Sticky mobile bar** with WhatsApp / Call actions.
- SEO: meta + Open Graph tags, `public/sitemap.xml`, `public/robots.txt`, geo tags (Karachi, PK).

## Structure

```
├── index.html          # Homepage (hero, credentials, practices, advocates, form)
├── about.html          # The firm
├── practices.html      # Practice areas
├── clients.html        # Corporate clientele
├── contact.html        # Contact + consultation form
├── favicon.jpg         # Site icon / og:image
├── public/
│   ├── practices/      # Practice-area images
│   ├── logos/          # Client logos
│   ├── sitemap.xml
│   └── robots.txt
└── src/, vite.config.js, package.json   # Unused React skeleton (reference only)
```

## Deploy

Any static host works (Vercel, Netlify, GitHub Pages). Push to `main` → Vercel auto-deploys.
No build command needed.

## Contact numbers on the site

The firm currently lists multiple numbers across pages — to be unified to one primary
number (see open task with the site owner).
