// ---------------------------------------------------------------------------
// SEO CONFIGURATION — single source of truth
// Used by:  <Seo /> (client-side head updates)
//           scripts/prerender.mjs (static per-route HTML + sitemap.xml)
// Keep this file free of JSX / browser-only APIs so Node can import it.
// ---------------------------------------------------------------------------

import { CONTACT, RETAIL_COUNTER, SITE_URL } from "./site.js";
import { BLOG_POST_METADATA } from "../data/blogPostMetadata.js";

export const SITE_NAME = "Pattu Pavadas";
export const LEGAL_NAME = "Pattu Pavadas – Ethnic Collections";
export const DEFAULT_OG_IMAGE = "/og-pattu-pavadas.jpg";
export const LOGO = "/logo.png";

export const BUSINESS = {
  phone: `+${CONTACT.whatsappNumber}`,
  email: CONTACT.email,
  instagram: CONTACT.instagramUrl,
  address: {
    streetAddress: RETAIL_COUNTER.addressLines
      .slice(0, 3)
      .join(" ")
      .replace(/,\s*/g, ", ")
      .replace(/,\s*$/, ""),
    addressLocality: RETAIL_COUNTER.city,
    addressRegion: RETAIL_COUNTER.state,
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
    "pattu pavada wholesale India",
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
  national: [
    "pattu pavada manufacturer India",
    "pattu pavada wholesale India",
    "kids ethnic wear supplier India",
    "traditional girls wear delivery across India",
  ],
};

const KEYWORD_VARIANTS = [
  "pavada",
  "pavadai",
  "paavadai",
  "pattu lehenga",
  "half saree",
  "பட்டு பாவாடை",
  "ಪಟ್ಟು ಲಂಗ",
  "పట్టు లంగా",
];
const uniq = (a) => [...new Set(a)];
const kw = (...groups) => uniq([...groups.flat(), ...KEYWORD_VARIANTS]).join(", ");

// ---------------------------------------------------------------------------
// PER-ROUTE SEO
// ---------------------------------------------------------------------------

export const ROUTES = {
  "/": {
    primaryKeyword: "pattu pavada manufacturer India",
    preloadImage: "/Landing_Page.avif",
    preloadImageMobile: "/Landing_Pagemob.avif",
    title: "Pattu Pavada Manufacturer & Wholesale Supplier Across India | Pattu Pavadas",
    description:
      "Pattu pavada manufacturer supplying pattu langa and girls' festive wear across India. Explore retail, wholesale and bulk orders from Ethnic Collections.",
    keywords: kw(
      KEYWORDS.core,
      KEYWORDS.wholesale.slice(0, 10),
      KEYWORDS.national.slice(0, 4),
    ),
    changefreq: "weekly",
    priority: "1.0",
    breadcrumb: [["Home", "/"]],
  },
  "/b2b": {
    primaryKeyword: "pattu pavada wholesale",
    preloadImage: "/whole1.avif",
    title: "Pattu Pavada Wholesale | Ethnic Collections",
    description:
      "Source pattu pavada wholesale direct from our manufacturing unit. Ask about current MOQ, mixed styles, bulk orders and delivery across India.",
    keywords: kw(KEYWORDS.wholesale, KEYWORDS.core.slice(0, 8)),
    changefreq: "weekly",
    priority: "0.9",
    breadcrumb: [
      ["Home", "/"],
      ["Wholesale Pattu Pavada", "/b2b"],
    ],
  },
  "/b2c": {
    primaryKeyword: "pattu pavada for girls",
    preloadImage: "/g5.avif",
    title: "Pattu Pavada for Girls | Pattu Pavadas",
    description:
      "Explore pattu pavada, pattu pavadai and pattu langa for girls. Explore festive designs and enquire about sizes and delivery anywhere in India.",
    keywords: kw(KEYWORDS.retail, KEYWORDS.core.slice(0, 10)),
    changefreq: "weekly",
    priority: "0.9",
    breadcrumb: [
      ["Home", "/"],
      ["Shop Pattu Pavada", "/b2c"],
    ],
  },
  "/collection": {
    primaryKeyword: "pattu langa collection",
    title: "Pattu Langa & Pattu Pavada Collection",
    description:
      "Explore pattu pavada, pattu langa and pavadai sattai styles for girls. South Indian festive wear, delivered to customers across India.",
    keywords: kw(KEYWORDS.core, KEYWORDS.retail.slice(0, 8)),
    changefreq: "weekly",
    priority: "0.8",
    breadcrumb: [
      ["Home", "/"],
      ["Collection", "/collection"],
    ],
  },
  "/manufacturing": {
    primaryKeyword: "pattu pavada manufacturing India",
    title: "Pattu Pavada Manufacturing & Supply Across India",
    description:
      "See how we make pattu pavada, pattu langa and langa blouse sets, from fabric selection through finishing and quality checks, for customers across India.",
    keywords: kw(
      [
        "pattu pavada manufacturing",
        "ethnic wear manufacturing India",
        "kids ethnic wear factory India",
        "garment manufacturer India",
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
    primaryKeyword: "pattu pavada guides",
    title: "Pattu Pavada Guides: Style, Fit & Care",
    description:
      "Read practical pattu pavada guides on girls' sizing, festival styling, silk care, prices and wholesale buying for boutiques.",
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
    ogType: "website",
    breadcrumb: [
      ["Home", "/"],
      ["Blog", "/blog"],
    ],
  },
  "/contact": {
    primaryKeyword: "pattu pavada online India",
    title: "Pattu Pavada Manufacturer & Online Orders Across India",
    description:
      "Order pattu pavada from Ethnic Collections with retail and wholesale delivery across India. Call or WhatsApp 9916760001 to enquire.",
    keywords: kw(
      [
        "pattu pavada manufacturer contact",
        "pattu pavada wholesale contact number",
        "pattu pavada orders India",
        "pattu pavada WhatsApp order",
      ],
      KEYWORDS.national,
    ),
    changefreq: "yearly",
    priority: "0.6",
    breadcrumb: [
      ["Home", "/"],
      ["Contact", "/contact"],
    ],
  },
  ...Object.fromEntries(
    BLOG_POST_METADATA.map((post) => {
      const path = `/blog/${post.slug}`;
      return [
        path,
        {
          primaryKeyword: post.primaryKeyword,
          title: post.title,
          description: post.description,
          keywords: kw(
            [post.primaryKeyword, "pattu pavada", "pattu pavadai", "pattu langa"],
            KEYWORDS.national.slice(0, 2),
          ),
          changefreq: "monthly",
          priority: "0.5",
          ogType: "article",
          breadcrumb: [
            ["Home", "/"],
            ["Pattu Pavada Guides", "/blog"],
            [post.title, path],
          ],
          article: post,
        },
      ];
    }),
  ),
};

// ---------------------------------------------------------------------------
// FAQ (rendered visibly on the home page AND emitted as FAQPage schema)
// ---------------------------------------------------------------------------

export const FAQS = [
  {
    q: "Are you a pattu pavada manufacturer or a reseller?",
    a: "We are a direct manufacturer in India. We make pattu pavada, pattu langa and langa blouse sets in-house and supply boutiques, wholesalers, exporters and individual customers across India without middlemen.",
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
    q: "Can I visit your retail counter?",
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
  return ROUTES[path] || null;
}

// --- schema builders -------------------------------------------------------

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["ClothingStore", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: [LEGAL_NAME],
  url: SITE_URL + "/",
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality}, ${BUSINESS.address.addressRegion} ${BUSINESS.address.postalCode}, India`,
  )}`,
  logo: absAsset(LOGO),
  image: absAsset(DEFAULT_OG_IMAGE),
  description:
    "Manufacturer of pattu pavada, pattu langa and langa blouse (uddalanga, langa davani) traditional South Indian ethnic wear for girls. Wholesale, bulk, export and retail supply across India.",
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

export const categoryCollectionSchema = (path) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: absUrl(path),
  name: "Pattu Pavada & Pattu Langa Collection",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      ["Pattu Pavada", "Traditional silk-look pavada with zari border for girls"],
      ["Pattu Langa", "Pattu langa with coordinating langa blouse for festive wear"],
      ["Langa Blouse", "Matching and contrast blouses for pattu pavada and langa sets"],
      ["Uddalanga / Langa Davani", "Langa set with davani (half-saree style) drape"],
    ].map(([name, description], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      description,
    })),
  },
});

// Use only for an individual product with verified, visible details and price.
// This builder is intentionally not used for the site's category listings.
export const individualProductSchema = ({
  name,
  description,
  image,
  url,
  price,
  priceCurrency,
  availability,
}) => {
  if (
    !name ||
    !description ||
    !image ||
    !url ||
    !Number.isFinite(price) ||
    price <= 0 ||
    !priceCurrency
  ) {
    throw new Error(
      "Individual Product schema requires visible product details and a verified price.",
    );
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    url,
    offers: {
      "@type": "Offer",
      url,
      price,
      priceCurrency,
      ...(availability ? { availability } : {}),
    },
  };
};

export const articleSchema = (path = "/blog") => ({
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: absUrl(path),
  headline: ROUTES[path].title,
  description: ROUTES[path].description,
  image: absAsset("/img13.avif"),
  inLanguage: "en-IN",
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
});

// All JSON-LD blocks for a route
export function schemasFor(path) {
  const r = getRouteSeo(path);
  const out = [organizationSchema(), websiteSchema()];
  if (r.breadcrumb && r.breadcrumb.length > 1) out.push(breadcrumbSchema(r.breadcrumb));
  if (path === "/") out.push(faqSchema(), categoryCollectionSchema(path));
  if (path === "/collection" || path === "/b2c" || path === "/b2b") {
    out.push(categoryCollectionSchema(path));
  }
  if (r.article) {
    out.push(articleSchema(path));
    out.push(faqSchema(r.article.faqs));
  }
  return out;
}
