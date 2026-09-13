// ---------------------------------------------------------------------------
// SITE CONFIGURATION
// Central place for brand, contact and business details.
// Replace every YOUR_* placeholder with real information before launch.
// Nothing here has been invented on your behalf — see build notes.
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
  // { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Global Supply", href: "#global-supply" },
  { label: "Our Manufacturing", href: "#manufacturing" },
  // { label: "Retail Counter", href: "#retail-counter" },
  // { label: "Contact", href: "#contact" },
];
