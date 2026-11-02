import {
  Sparkles,
  ShieldCheck,
  PackageCheck,
  Globe2,
  Layers,
  Handshake,
  Store,
  Users,
  Smartphone,
  Home as HomeIcon,
  ShoppingBag,
  Scissors,
  Ruler,
  Gem,
  Search,
  PackageOpen,
} from "lucide-react";

export const REGIONAL_NAMES = [
  {
    region: "Karnataka",
    names: ["Uddalanga", "Langa Blouse"],
    description:
      "Across Karnataka, this traditional silk skirt-and-blouse set for young girls is known as Uddalanga, with the blouse referred to as a Langa Blouse.",
  },
  {
    region: "Andhra Pradesh & Telangana",
    names: ["Pattu Langa"],
    description:
      "In Andhra Pradesh and Telangana, the same garment tradition is called Pattu Langa, worn for weddings, festivals and family celebrations.",
  },
  {
    region: "Tamil Nadu",
    names: ["Pattu Pavada"],
    description:
      "In Tamil Nadu, it is known as Pattu Pavada — a silk pavada paired with a fitted blouse, a staple of South Indian celebration wear.",
  },
];

export const COLLECTIONS = [
  {
    key: "pattuPavada",
    title: "Pattu Pavada",
    description:
      "Traditional silk pavada designs with detailed craftsmanship, woven for celebrations across Tamil Nadu and beyond.",
  },
  {
    key: "pattuLanga",
    title: "Pattu Langa",
    description:
      "Elegant South Indian langa designs created for weddings, festivals and special occasions, in the Andhra and Telangana tradition.",
  },
  {
    key: "langaBlouse",
    title: "Langa Blouse",
    description:
      "Beautifully crafted blouse designs with traditional detailing, finished to pair perfectly with every langa and pavada set.",
  },
  {
    key: "uddalanga",
    title: "Uddalanga",
    description:
      "Traditional Karnataka-inspired ethnic wear, manufactured with the same craftsmanship the region has trusted for generations.",
  },
];

export const MANUFACTURING_STEPS = [
  {
    key: "fabricSelection",
    number: "01",
    title: "Fabric Selection",
    description:
      "Every roll of silk is chosen for weight, sheen and durability before it enters production.",
    icon: Layers,
  },
  {
    key: "cutting",
    number: "02",
    title: "Precision Cutting",
    description:
      "Patterns are cut with careful attention to grain and symmetry, minimising waste and ensuring consistent sizing.",
    icon: Scissors,
  },
  {
    key: "stitching",
    number: "03",
    title: "Stitching",
    description:
      "Panels are assembled by experienced tailors on machines calibrated for fine silk work.",
    icon: Ruler,
  },
  {
    key: "embroidery",
    number: "04",
    title: "Hand Embroidery",
    description:
      "Zari and thread work is added by hand, following traditional South Indian embroidery techniques.",
    icon: Sparkles,
  },
  {
    key: "detailing",
    number: "05",
    title: "Detailing",
    description:
      "Borders, pleats and finishing touches are refined until every element sits exactly right.",
    icon: Gem,
  },
  {
    key: "qualityCheck",
    number: "06",
    title: "Quality Checking",
    description:
      "Each garment is inspected for stitching, symmetry and finish before it moves forward.",
    icon: Search,
  },
  {
    key: "finishing",
    number: "07",
    title: "Final Finishing",
    description:
      "Threads are trimmed, garments are pressed, and every piece is prepared to leave in pristine condition.",
    icon: ShieldCheck,
  },
  {
    key: "packaging",
    number: "08",
    title: "Packaging & Dispatch",
    description:
      "Garments are carefully folded, packed and readied for dispatch to boutiques, resellers and customers.",
    icon: PackageOpen,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Manufacturer Direct",
    description: "Buy directly from the manufacturing source, without unnecessary middlemen.",
    icon: PackageCheck,
  },
  {
    title: "Consistent Quality",
    description: "Every garment goes through careful finishing and quality checks before dispatch.",
    icon: ShieldCheck,
  },
  {
    title: "Bulk & Wholesale Supply",
    description: "Designed to support boutiques, resellers and growing ethnic-wear businesses.",
    icon: Layers,
  },
  {
    title: "Global Supply",
    description: "Serving customers and businesses beyond India, wherever the community calls home.",
    icon: Globe2,
  },
  {
    title: "Traditional Expertise",
    description: "A deep understanding of South Indian ethnic-wear craftsmanship, refined over years of work.",
    icon: Sparkles,
  },
  {
    title: "Flexible Business Partnerships",
    description: "Suitable for boutiques, resellers and social-media sellers of every size.",
    icon: Handshake,
  },
];

export const BUSINESS_CUSTOMERS = [
  {
    title: "Boutique Owners",
    description: "Source consistent, ready-to-sell collections for your boutique shelves.",
    icon: Store,
  },
  {
    title: "Resellers",
    description: "Build a catalogue of premium ethnic wear to resell to your own customer base.",
    icon: Handshake,
  },
  {
    title: "Small Business Owners",
    description: "Start or grow an ethnic-wear business backed by manufacturer-direct supply.",
    icon: Users,
  },
  {
    title: "Social-Media Sellers",
    description: "Get a reliable source of stock to feature and sell across Instagram and WhatsApp.",
    icon: Smartphone,
  },
  {
    title: "Ethnic Wear Stores",
    description: "Add Pattu Pavada, Pattu Langa and Langa Blouse ranges to your existing store.",
    icon: ShoppingBag,
  },
  {
    title: "Home-Based Businesses",
    description: "Run a growing ethnic-wear business from home with dependable manufacturer support.",
    icon: HomeIcon,
  },
];

export const GLOBAL_REGIONS = [
  "USA",
  "UK",
  "Canada",
  "Australia",
  "UAE",
  "Singapore",
  "Malaysia",
  "New Zealand",
];
