// Post-build SEO step:
//  1. writes a per-route index.html (dist/b2b/index.html, ...) with the right
//     <title>, meta, canonical, Open Graph, Twitter tags and JSON-LD baked in,
//     so crawlers / social scrapers that don't run JS still see them;
//  2. writes dist/sitemap.xml and dist/robots.txt (using the live domain);
//  3. writes dist/404.html (SPA fallback with noindex).
//
// Usage:  SITE_URL=https://www.yourdomain.com npm run build

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

// load SITE_URL / VITE_SITE_URL from .env if not already in the environment
const envFile = new URL("../.env", import.meta.url);
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*(SITE_URL|VITE_SITE_URL)\s*=\s*(.+?)\s*$/);
    if (m && !process.env.SITE_URL) process.env.SITE_URL = m[2].replace(/^['"]|['"]$/g, "");
  }
}
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const { SITE_URL } = await import("../src/config/site.js");
const { ROUTES, SITE_NAME, DEFAULT_OG_IMAGE, absUrl, absAsset, schemasFor } =
  await import("../src/config/seo.js");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function headFor(path) {
  const r = ROUTES[path];
  const url = absUrl(path);
  const img = absAsset(r.image || DEFAULT_OG_IMAGE);
  const tags = [
    `<title>${esc(r.title)}</title>`,
    `<meta name="description" content="${esc(r.description)}" />`,
    `<meta name="keywords" content="${esc(r.keywords)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${r.ogType || "website"}" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:alt" content="${esc(SITE_NAME)} – pattu pavada &amp; pattu langa manufacturer" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(r.title)}" />`,
    `<meta name="twitter:description" content="${esc(r.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    ...schemasFor(path).map(
      (s) =>
        `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, "\\u003c")}</script>`,
    ),
  ];
  return tags.join("\n    ");
}

const startRe = /<!--SEO_HEAD_START-->[\s\S]*?<!--SEO_HEAD_END-->/;
if (!startRe.test(template)) throw new Error("SEO markers missing in dist/index.html");

const placeholder = /https:\/\/YOUR_DOMAIN\.com/g;

for (const path of Object.keys(ROUTES)) {
  let html = template.replace(
    startRe,
    `<!--SEO_HEAD_START-->\n    ${headFor(path)}\n    <!--SEO_HEAD_END-->`,
  );
  html = html.replace(placeholder, SITE_URL); // hreflang links
  const out = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  if (path !== "/") mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}

// 404 fallback (SPA) — noindex so it never ranks
writeFileSync(
  join(dist, "404.html"),
  template
    .replace(startRe, '<title>Page not found | Pattu Pavadas</title>\n    <meta name="robots" content="noindex, follow" />')
    .replace(placeholder, SITE_URL),
);

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = Object.entries(ROUTES)
  .map(
    ([path, r]) => `  <url>
    <loc>${absUrl(path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

// robots.txt
writeFileSync(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

console.log(`SEO: pre-rendered ${Object.keys(ROUTES).length} routes, sitemap.xml, robots.txt  (SITE_URL=${SITE_URL})`);
if (/YOUR_DOMAIN/.test(SITE_URL))
  console.warn("⚠  SITE_URL is still the placeholder. Build with SITE_URL=https://your-domain.com");
