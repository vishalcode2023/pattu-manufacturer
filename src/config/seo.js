// ---------------------------------------------------------------------------
// SEO CONFIGURATION — single source of truth
// Used by:  <Seo /> (client-side head updates)
//           scripts/prerender.mjs (static per-route HTML + sitemap.xml)
// Keep this file free of JSX / browser-only APIs so Node can import it.
// ---------------------------------------------------------------------------

import { SITE_URL } from "./site.js";

export const SITE_NAME = "Pattu Pavadas";
export const LEGAL_NAME = "Pattu Pavadas – Ethnic Collections";
export const DEFAULT_OG_IMAGE = "/Landing_Page.avif"; // replace with a 1200x630 JPG/PNG for best social previews
export const LOGO = "/logo.png";

export const BUSINESS = {
  phone: "+919916760001",
  altPhones: ["+919739606361", "+919972566518", "+918212413045"],
  email: "ethniccollections2011@gmail.com",
  instagram:
    "https://www.instagram.com/ethnic_collections_kdroad?stkn=ZTdyYjd0b3NmOHZ6",
  address: {
    streetAddress:
      "Shop No. 1 & 2, Sri Kuvempu Vidhyavardhaka Trust, Kalidasa Road, Jayalakshmipuram",
    addressLocality: "Mysuru",
    addressRegion: "Karnataka",
    postalCode: "570012",
    addressCountry: "IN",
  },
};

// Core keyword clusters (reused across pages & schema)
export const KEYWORDS = {
  core: [
    "pattu pavada manufacturer",
    "pattu langa manufacturer",
    "langa blouse manufacturer",
    "pattu pavada",
    "pattu langa",
    "langa blouse",
    "pattu pavada designs",
    "pattu pavada for girls",
    "kids pattu pavada",
    "silk pavada",
    "traditional pavada",
    "pavada sattai",
    "pattu paavadai",
    "pattu pavadai",
    "pattu pavade",
    "lehenga langa",
    "half saree for girls",
    "uddalanga",
    "langa davani",
    "langa voni",
  ],
  wholesale: [
    "pattu pavada wholesale",
    "wholesale pattu pavada",
    "pattu langa wholesale",
    "wholesale kids ethnic wear",
    "wholesale girls traditional wear",
    "pattu pavada bulk order",
    "pattu pavada supplier",
    "boutique ethnic wear supplier",
    "ethnic wear manufacturer for boutiques",
    "pattu pavada exporter",
    "south indian ethnic wear exporter",
    "kids ethnic wear manufacturer India",
    "pattu pavada manufacturer in Mysore",
    "pattu pavada wholesale Mysore",
    "pattu pavada wholesale Karnataka",
    "pattu pavada wholesale Bangalore",
    "custom pattu pavada manufacturing",
    "private label kids ethnic wear",
  ],
  retail: [
    "buy pattu pavada online",
    "pattu pavada for girls online",
    "pattu langa for girls",
    "pattu pavada for festivals",
    "pattu pavada for weddings",
    "pattu pavada for baby girl",
    "pattu pavada for birthday",
    "pattu pavada for Varamahalakshmi",
    "pattu pavada for Diwali",
    "silk look pavada",
    "zari border pavada",
    "kids traditional dress",
    "south indian traditional wear for girls",
    "girls festive wear",
    "pattu pavada price",
    "pattu pavada near me",
  ],
  local: [
    "pattu pavada Mysore",
    "pattu pavada Mysuru",
    "ethnic wear manufacturer Mysore",
    "ethnic collections Mysore",
    "kids ethnic wear Mysore",
    "Kalidasa Road Mysore ethnic wear",
    "Jayalakshmipuram Mysore boutique",
    "pattu pavada shop in Mysore",
    "traditional wear shop Mysore",
  ],
};

const uniq = (a) => [...new Set(a)];
const kw = (...groups) => uniq(groups.flat()).join(", ");

// ---------------------------------------------------------------------------
// PER-ROUTE SEO
// ---------------------------------------------------------------------------

export const ROUTES = {
  "/": {
    title:
      "Pattu Pavada & Pattu Langa Manufacturer in Mysuru | Wholesale & Retail",
    description:
      "Direct manufacturer of pattu pavada, pattu langa & langa blouse for girls from Mysuru, Karnataka. Wholesale for boutiques, bulk & export orders, and retail at Ethnic Collections, Kalidasa Road.",
    keywords: kw(
      KEYWORDS.core,
      KEYWORDS.wholesale.slice(0, 10),
      KEYWORDS.local.slice(0, 4),
    ),
    changefreq: "weekly",
    priority: "1.0",
    breadcrumb: [["Home", "/"]],
  },
  "/b2b": {
    title:
      "Pattu Pavada Wholesale & Bulk Manufacturer | Pattu Langa Supplier India",
    description:
      "Buy pattu pavada, pattu langa & langa blouse wholesale direct from the Mysuru manufacturer. Low MOQ from 10 pieces, mixed designs & sizes, custom orders, fast dispatch and export support for boutiques and resellers.",
    keywords: kw(KEYWORDS.wholesale, KEYWORDS.core.slice(0, 8)),
    changefreq: "weekly",
    priority: "0.9",
    breadcrumb: [
      ["Home", "/"],
      ["Wholesale Pattu Pavada", "/b2b"],
    ],
  },
  "/b2c": {
    title:
      "Buy Pattu Pavada for Girls Online | Pattu Langa Direct from Manufacturer",
    description:
      "Shop pattu pavada, pattu langa & langa blouse sets for girls direct from the manufacturer in Mysuru. Silk-look, zari border and festive designs for weddings, festivals, birthdays & Varamahalakshmi. Order on WhatsApp.",
    keywords: kw(KEYWORDS.retail, KEYWORDS.core.slice(0, 10)),
    changefreq: "weekly",
    priority: "0.9",
    breadcrumb: [
      ["Home", "/"],
      ["Shop Pattu Pavada", "/b2c"],
    ],
  },
  "/collection": {
    title:
      "Pattu Pavada Collection – Pattu Langa, Langa Blouse & Uddalanga Designs",
    description:
      "Explore our full collection of pattu pavada designs, pattu langa, langa blouse, uddalanga and langa davani sets for girls. Traditional South Indian festive wear, manufactured in Mysuru.",
    keywords: kw(KEYWORDS.core, KEYWORDS.retail.slice(0, 8)),
    changefreq: "weekly",
    priority: "0.8",
    breadcrumb: [
      ["Home", "/"],
      ["Collection", "/collection"],
    ],
  },
  "/manufacturing": {
    title:
      "Pattu Pavada Manufacturing Process | Ethnic Wear Factory in Mysuru",
    description:
      "See how our Mysuru unit manufactures pattu pavada, pattu langa & langa blouse – fabric selection, cutting, stitching, zari finishing and quality checks for boutiques, wholesalers and exporters.",
    keywords: kw(
      [
        "pattu pavada manufacturing",
        "ethnic wear manufacturing unit Mysore",
        "kids ethnic wear factory India",
        "garment manufacturer Mysuru",
        "custom ethnic wear manufacturing",
        "private label pavada manufacturer",
      ],
      KEYWORDS.core.slice(0, 6),
    ),
    changefreq: "monthly",
    priority: "0.7",
    breadcrumb: [
      ["Home", "/"],
      ["Manufacturing", "/manufacturing"],
    ],
  },
  "/blog": {
    title:
      "The Timeless Beauty of Pattu Pavada – Style Guide, Care Tips & Sourcing",
    description:
      "A complete guide to pattu pavada & pattu langa: how to choose the right design, styling for festivals and weddings, garment care, and what boutiques should check when sourcing from a manufacturer.",
    keywords: kw(
      [
        "pattu pavada guide",
        "how to choose pattu pavada",
        "pattu pavada care",
        "pattu pavada styling ideas",
        "pattu pavada for weddings",
        "how to source pattu pavada for boutique",
      ],
      KEYWORDS.core.slice(0, 8),
    ),
    changefreq: "monthly",
    priority: "0.6",
    ogType: "article",
    breadcrumb: [
      ["Home", "/"],
      ["Blog", "/blog"],
    ],
  },
  "/contact": {
    title:
      "Contact Pattu Pavada Manufacturer in Mysuru | Call, WhatsApp & Visit",
    description:
      "Contact Pattu Pavadas – Ethnic Collections, Kalidasa Road, Jayalakshmipuram, Mysuru. Call 9916760001 or WhatsApp for wholesale pattu pavada, bulk orders, export enquiries and retail.",
    keywords: kw(
      [
        "pattu pavada manufacturer contact",
        "pattu pavada wholesale contact number",
        "ethnic collections Mysore contact",
        "pattu pavada WhatsApp order",
      ],
      KEYWORDS.local,
    ),
    changefreq: "yearly",
    priority: "0.6",
    breadcrumb: [
      ["Home", "/"],
      ["Contact", "/contact"],
    ],
  },
};

// ---------------------------------------------------------------------------
// FAQ (rendered visibly on the home page AND emitted as FAQPage schema)
// ---------------------------------------------------------------------------

export const FAQS = [
  {
    q: "Are you a pattu pavada manufacturer or a reseller?",
    a: "We are a direct manufacturer based in Mysuru, Karnataka. We make pattu pavada, pattu langa and langa blouse sets in-house and supply boutiques, wholesalers, exporters and individual customers without middlemen.",
  },
  {
    q: "What is the minimum order quantity (MOQ) for wholesale pattu pavada?",
    a: "Wholesale orders start from just 10 pieces, and you can mix designs, colours and sizes. Larger bulk and export orders of 200+ pieces get custom quotes, packaging and documentation support.",
  },
  {
    q: "What is the difference between pattu pavada, pattu langa and langa blouse?",
    a: "They are regional names for the same traditional South Indian outfit – a silk or silk-look skirt (pavada / langa / paavadai) paired with a coordinating blouse. Many sets also include a davani or voni (half-saree style drape), known as uddalanga or langa davani.",
  },
  {
    q: "Do you supply pattu pavada across India and export internationally?",
    a: "Yes. We ship across India and to overseas customers, boutiques and distributors, with export documentation support on bulk orders.",
  },
  {
    q: "Can I order custom colours, sizes or my own label?",
    a: "Yes. We accept custom colour combinations, size runs and private-label orders for boutiques. Share your requirement on WhatsApp and we will confirm feasibility, price and lead time.",
  },
  {
    q: "What age sizes are available in pattu pavada for girls?",
    a: "We make pattu pavada sets for girls in multiple size ranges. Message us your child's age or measurements on WhatsApp and we will recommend the right size.",
  },
  {
    q: "How long does dispatch take?",
    a: "Starter orders are typically dispatched in 5–7 days and wholesale orders in 3–5 days, depending on stock and customisation.",
  },
  {
    q: "Where can I buy pattu pavada in Mysuru?",
    a: "Visit our retail counter, Ethnic Collections, at Shop No. 1 & 2, Kalidasa Road, Jayalakshmipuram, Mysuru – 570012, or order online through WhatsApp.",
  },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

export const absUrl = (path = "/") =>
  `${SITE_URL}${path === "/" ? "/" : path.replace(/\/+$/, "")}`;

export const absAsset = (path) =>
  /^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`;

export function getRouteSeo(path) {
  return ROUTES[path] || ROUTES["/"];
}

// --- schema builders -------------------------------------------------------

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["ClothingStore", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: [LEGAL_NAME, "Ethnic Collections Mysore"],
  url: SITE_URL + "/",
  logo: absAsset(LOGO),
  image: absAsset(DEFAULT_OG_IMAGE),
  description:
    "Manufacturer of pattu pavada, pattu langa and langa blouse (uddalanga, langa davani) traditional South Indian ethnic wear for girls. Wholesale, bulk, export and retail from Mysuru, Karnataka.",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: "₹₹",
  address: { "@type": "PostalAddress", ...BUSINESS.address },
  geo: { "@type": "GeoCoordinates", latitude: 12.3052, longitude: 76.6393 },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide" },
  ],
  sameAs: [BUSINESS.instagram],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "sales",
      areaServed: "Worldwide",
    },
  ],
  knowsAbout: [
    "Pattu Pavada",
    "Pattu Langa",
    "Langa Blouse",
    "Uddalanga",
    "South Indian traditional wear",
    "Kids ethnic wear",
    "Wholesale ethnic wear",
  ],
  makesOffer: [
    "Pattu Pavada",
    "Pattu Langa",
    "Langa Blouse",
    "Uddalanga / Langa Davani",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Product", name },
  })),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL + "/",
  name: SITE_NAME,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absUrl(path),
  })),
});

export const faqSchema = (faqs = FAQS) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const productListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pattu Pavada & Pattu Langa Collection",
  itemListElement: [
    ["Pattu Pavada", "Traditional silk-look pavada with zari border for girls"],
    ["Pattu Langa", "Pattu langa with coordinating langa blouse for festive wear"],
    ["Langa Blouse", "Matching and contrast blouses for pattu pavada and langa sets"],
    ["Uddalanga / Langa Davani", "Langa set with davani (half-saree style) drape"],
  ].map(([name, description], i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name,
      description,
      brand: { "@type": "Brand", name: SITE_NAME },
      image: absAsset(DEFAULT_OG_IMAGE),
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "380",
        highPrice: "650",
        availability: "https://schema.org/InStock",
        seller: { "@id": `${SITE_URL}/#organization` },
      },
    },
  })),
});

export const articleSchema = (path = "/blog") => ({
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: absUrl(path),
  headline: ROUTES[path].title,
  description: ROUTES[path].description,
  image: absAsset("/img13.avif"),
  inLanguage: "en-IN",
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: { "@type": "ImageObject", url: absAsset(LOGO) },
  },
});

// All JSON-LD blocks for a route
export function schemasFor(path) {
  const r = getRouteSeo(path);
  const out = [organizationSchema(), websiteSchema()];
  if (r.breadcrumb && r.breadcrumb.length > 1) out.push(breadcrumbSchema(r.breadcrumb));
  if (path === "/") out.push(faqSchema(), productListSchema());
  if (path === "/collection" || path === "/b2c" || path === "/b2b") out.push(productListSchema());
  if (path === "/blog") out.push(articleSchema(path));
  return out;
}
