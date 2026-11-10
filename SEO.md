# SEO setup

## Route keyword map

Primary targets are intentionally distinct in `src/config/seo.js`:

| Route | Primary keyword |
| --- | --- |
| `/` | pattu pavada manufacturer India |
| `/b2c` | pattu pavada for girls |
| `/b2b` | pattu pavada wholesale |
| `/collection` | pattu langa collection |
| `/manufacturing` | pattu pavada manufacturing India |
| `/blog` | pattu pavada guides |
| `/contact` | pattu pavada online India |
| `/blog/<slug>` | Article-specific keyword in `src/data/blogPostMetadata.js` |

Regional spelling variants and Tamil, Kannada and Telugu search terms are
included where relevant. Keep titles, descriptions, H1s and page copy useful
and distinct rather than repeating keywords mechanically.

## Build and prerender

`npm run build` prerenders route HTML (including page content), emits
route-specific title, description, canonical, Open Graph/Twitter metadata and
JSON-LD, and writes `dist/sitemap.xml`, `dist/robots.txt` and `dist/404.html`.
Article copy lives in `src/data/blogPosts.js`; route metadata and visible FAQ
content live in `src/data/blogPostMetadata.js`.

The public social image is `public/og-pattu-pavadas.jpg` (1200×630). Keep it in
JPEG format for reliable social previews.

## Go-live checklist

1. The canonical host is `https://www.pattupavadas.com`; `SITE_URL` or
   `VITE_SITE_URL` can override it for another deployment.
2. Verify the business coordinates in `src/config/seo.js` and provide verified
   opening hours before adding `openingHoursSpecification`. Hours are currently
   omitted rather than guessed.
3. Configure the production host to permanently redirect `www.pattupavadas.com`
   to `pattupavadas.com`, serve the prerendered route folders and return
   `dist/404.html` for unknown paths.
4. Submit `https://www.pattupavadas.com/sitemap.xml` in Google Search Console and
   Bing Webmaster Tools.
5. Create or claim the Google Business Profile and match its public name,
   address and main phone to the website.
6. Earn relevant backlinks and consistent directory listings; avoid paid or
   automated link schemes.
7. Publish regular product and manufacturing updates on Instagram. Ask
   customers for honest Google reviews after a purchase or service interaction.
