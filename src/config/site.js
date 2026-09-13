// ---------------------------------------------------------------------------
// SITE CONFIGURATION
// ---------------------------------------------------------------------------

export const BRAND_NAME = "Pattu Pavadai";
export const BRAND_TAGLINE = "Pattu Pavada & Pattu Langa Manufacturer";

export const SITE_URL = "https://YOUR_DOMAIN.com";

export const CONTACT = {
  whatsappNumber: "YOUR_WHATSAPP_NUMBER", // e.g. "919999999999" (no + or spaces)
  phone: "YOUR_PHONE_NUMBER",
  email: "YOUR_EMAIL",
  instagramUrl: "YOUR_INSTAGRAM_URL",
  instagramHandle: "@YOUR_INSTAGRAM_HANDLE",
};

export const getWhatsAppLink = (message = "") => {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const RETAIL_COUNTER = {
  name: "Ethnic Collections",
  addressLines: [
    "Shop No. 1 & 2,",
    "Kalidasa Road,",
    "Jayalakshmipuram,",
    "Mysuru – 570012",
  ],
  city: "Mysuru",
  state: "Karnataka",
  country: "India",
};

export const NAV_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Global Supply", href: "#global-supply" },
  { label: "Our Manufacturing", href: "#manufacturing" },
];

// B2B pricing tiers — update these before launch
export const B2B_TIERS = [
  {
    label: "Starter",
    minQty: 10,
    maxQty: 49,
    priceRange: "₹450 – ₹650",
    perPiece: true,
    description:
      "Ideal for new boutiques and home-based sellers getting started.",
    highlights: [
      "Mix of styles allowed",
      "Standard dispatch in 5–7 days",
      "WhatsApp support",
    ],
  },
  {
    label: "Wholesale",
    minQty: 50,
    maxQty: 199,
    priceRange: "₹380 – ₹550",
    perPiece: true,
    description: "Best fit for established boutiques and growing resellers.",
    highlights: [
      "Priority dispatch in 3–5 days",
      "Dedicated account contact",
      "Mix colours & sizes",
    ],
    popular: true,
  },
  {
    label: "Bulk / Export",
    minQty: 200,
    maxQty: null,
    priceRange: "Custom Quote",
    perPiece: false,
    description:
      "For large reseller networks, exporters and overseas distributors.",
    highlights: [
      "Custom packaging available",
      "Export documentation support",
      "Flexible payment terms",
    ],
  },
];
