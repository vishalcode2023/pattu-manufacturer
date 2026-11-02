import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  absUrl,
  absAsset,
  getRouteSeo,
  schemasFor,
} from "../config/seo";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Keeps <title>, meta tags, canonical, Open Graph, Twitter and JSON-LD in sync
 * with the current route (client-side navigation). Static per-route HTML is
 * produced at build time by scripts/prerender.mjs so crawlers that don't run
 * JavaScript still see the right tags.
 */
export default function Seo() {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";

  useEffect(() => {
    const seo = getRouteSeo(path);
    const url = absUrl(path);
    const image = absAsset(seo.image || DEFAULT_OG_IMAGE);

    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("name", "keywords", seo.keywords);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setLink("canonical", url);

    setMeta("property", "og:type", seo.ogType || "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_IN");
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:alt", `${SITE_NAME} – pattu pavada & pattu langa manufacturer`);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", image);

    // JSON-LD (replace previous route's blocks)
    document.head
      .querySelectorAll('script[data-seo="jsonld"]')
      .forEach((n) => n.remove());
    // remove build-time static blocks once React takes over to avoid duplicates
    document.head
      .querySelectorAll('script[type="application/ld+json"]:not([data-seo])')
      .forEach((n) => n.remove());
    schemasFor(path).forEach((schema) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo", "jsonld");
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
    });
  }, [path]);

  return null;
}
