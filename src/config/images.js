// ---------------------------------------------------------------------------
// IMAGE CONFIGURATION
// Every image on the site is referenced from this file so the placeholder
// photography below can be swapped for real manufacturing / product
// photography in one place. Nothing here depicts a real named person,
// garment, or facility — these are neutral placeholder sources only.
// Replace each URL with your own photography before launch.
// ---------------------------------------------------------------------------

const ph = (seed, w = 1200, h = 1500) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const IMAGES = {
  hero: {
    src: ph("pattu-hero-main", 1600, 2000),
    alt: "Artisan hands finishing the gold zari border of a traditional silk Pattu Pavada",
  },
  heroSecondary: {
    src: ph("pattu-hero-detail", 900, 1100),
    alt: "Close-up of hand embroidery detailing on a South Indian silk langa",
  },
  brandIntro: {
    src: ph("pattu-brand-intro", 1200, 1400),
    alt: "Rows of finished Pattu Langa and Pattu Pavada garments ready for dispatch",
  },
  regional: {
    karnataka: {
      src: "/img1.avif",
      alt: "Traditional Uddalanga langa blouse set styled in the Karnataka tradition",
    },

    andhraTelangana: {
      src: "/img2.avif",
      alt: "Pattu Langa crafted in the Andhra Pradesh and Telangana style",
    },

    tamilNadu: {
      src: "/img3.avif",
      alt: "Pattu Pavada designed in the Tamil Nadu tradition with silk pleats",
    },
  },
  collections: {
    pattuPavada: {
      src: "/EC_Reel_5.mp4",
      alt: "Traditional silk Pattu Pavada with detailed zari border craftsmanship",
    },
    pattuLanga: {
      src: "/EC_Reel_7.mp4",
      alt: "Elegant Pattu Langa designed for South Indian celebrations and special occasions",
    },
    langaBlouse: {
      src: "/EC_Reel_8.mp4",
      alt: "Hand-finished Langa Blouse with traditional embroidery detailing",
    },
    uddalanga: {
      src: "/EC_Reel_5.mp4",
      alt: "Traditional Karnataka-inspired Uddalanga ethnic wear set",
    },
  },
  manufacturing: {
    fabricSelection: {
      src: "/img4.avif",
      alt: "Rolls of premium silk fabric being selected for manufacturing",
    },
    cutting: {
      src: "/img5.avif",
      alt: "Skilled worker performing precision cutting of silk fabric",
    },
    stitching: {
      src: "/img6.avif",
      alt: "Tailor stitching a Pattu Langa on an industrial sewing machine",
    },
    embroidery: {
      src: "/img7.avif",
      alt: "Artisan hands hand-embroidering the border of a silk garment",
    },
    detailing: {
      src: "/img8.avif",
      alt: "Close-up detailing work being added to a finished garment",
    },
    qualityCheck: {
      src: "/img9.avif",
      alt: "Quality inspection of a finished Pattu Pavada before dispatch",
    },
    finishing: {
      src: "/img10.avif",
      alt: "Final finishing touches being applied to a traditional ethnic wear set",
    },
    packaging: {
      src: "/img11.avif",
      alt: "Finished garments being folded and packaged for dispatch",
    },
  },
  craftsmanship: {
    primary: {
      src: "/img12.avif",
      alt: "Macro detail of gold zari thread embroidery on silk fabric",
    },
    secondary: {
      src: "/img13.avif",
      alt: "Traditional hand-embroidery technique being applied to a garment border",
    },
    tertiary: {
      src: "/img14.png",
      alt: "Detailed view of fine stitching and fabric quality on a finished piece",
    },
  },
  globalSupply: {
    src: ph("global-supply-map", 1600, 1000),
    alt: "Packages of South Indian ethnic wear prepared for worldwide dispatch",
  },
  businessCustomers: {
    src: ph("business-customers", 1200, 1000),
    alt: "Boutique owner reviewing a wholesale collection of ethnic wear",
  },
  retailCounter: {
    src: ph("retail-counter-ethnic-collections", 1100, 1300),
    alt: "Interior of the Ethnic Collections retail counter in Mysuru",
  },
  instagram: [
    {
      src: ph("insta-1", 500, 500),
      alt: "Retail collection highlight from Ethnic Collections, Mysuru",
    },
    {
      src: ph("insta-2", 500, 500),
      alt: "Styled Pattu Langa set from the current retail collection",
    },
    {
      src: ph("insta-3", 500, 500),
      alt: "Close-up of embroidery detail shared on Instagram",
    },
    {
      src: ph("insta-4", 500, 500),
      alt: "New arrival Pattu Pavada showcased at Ethnic Collections",
    },
    {
      src: ph("insta-5", 500, 500),
      alt: "Behind-the-scenes look at garment finishing",
    },
    {
      src: ph("insta-6", 500, 500),
      alt: "Customer-ready ethnic wear display at the retail counter",
    },
  ],
  finalCta: {
    src: ph("final-cta-garment", 1600, 900),
    alt: "Collection of finished Pattu Langa garments arranged for a manufacturer showcase",
  },
};
