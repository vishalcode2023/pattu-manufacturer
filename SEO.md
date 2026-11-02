# SEO setup

## Go-live checklist
1. The live domain is configured as `https://pattupavadas.com`. `SITE_URL` (or
   `VITE_SITE_URL`) can override it for another deployment host. The site URL feeds
   canonicals, Open Graph URLs, JSON-LD, `sitemap.xml` and `robots.txt`.
2. Replace `DEFAULT_OG_IMAGE` in `src/config/seo.js` with a 1200×630 JPG/PNG (WhatsApp/Facebook/LinkedIn
   don't render AVIF previews reliably).
3. Verify the map coordinates (`geo`) and opening hours in `organizationSchema()`.
4. Submit `https://pattupavadas.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
5. Create / claim your Google Business Profile (same name, address, phone as the schema).
6. Host config: serve `dist/<route>/index.html` for each route (Netlify/Vercel/Nginx `try_files $uri $uri/ /index.html`).

## Where to edit keywords
Everything lives in `src/config/seo.js`: per-route `title`, `description`, `keywords`, FAQ, and JSON-LD builders.
