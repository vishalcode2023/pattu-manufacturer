
// ---------------------------------------------------------------------------
// SITE CONFIGURATION
// ---------------------------------------------------------------------------

export const BRAND_NAME = "Pattu Pavadas";

export const BRAND_TAGLINE =
  "Pattu Pavada & Pattu Langa Manufacturer";

export const SITE_URL = "https://YOUR_DOMAIN.com";

// ---------------------------------------------------------------------------
// CONTACT DETAILS
// ---------------------------------------------------------------------------

export const CONTACT = {
  // WhatsApp number
  // Format: country code + number
  // Example India: "919999999999"
  // Do NOT use +, spaces or -
  whatsappNumber: "919916760001",

  // Phone number
  phone: "9916760001",

  // Business email
  email: "YOUR_EMAIL",

};

// ---------------------------------------------------------------------------
// WHATSAPP
// ---------------------------------------------------------------------------

export const getWhatsAppLink = (message = "") => {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;

  return message
    ? `${base}?text=${encodeURIComponent(message)}`
    : base;
};

// ---------------------------------------------------------------------------
// RETAIL COUNTER
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  {
    label: "Collections",
    href: "#collections",
  },
  {
    label: "Global Supply",
    href: "#global-supply",
  },
  {
    label: "Our Manufacturing",
    href: "#manufacturing",
  },
];

// ---------------------------------------------------------------------------
// B2B PRICING TIERS
// ---------------------------------------------------------------------------

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

    description:
      "Best fit for established boutiques and growing resellers.",

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

