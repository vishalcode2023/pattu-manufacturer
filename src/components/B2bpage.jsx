import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Globe2,
  PackageCheck,
  Handshake,
  ShieldCheck,
  Layers,
  Store,
  Users,
  Smartphone,
  ShoppingBag,
  Home as HomeIcon,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Eyebrow, SectionHeading, ZariDivider } from "../components/Decorative";
import { getWhatsAppLink, B2B_TIERS } from "../config/site";

const PROCESS = [
  {
    step: "01",
    title: "WhatsApp Us",
    description:
      "Send us a message on WhatsApp with your business type, location and estimated order quantity.",
  },
  {
    step: "02",
    title: "Get a Catalogue",
    description:
      "We share our current collection catalogue with available styles, colours and pricing tiers.",
  },
  {
    step: "03",
    title: "Place Your Order",
    description:
      "Confirm quantities, styles and dispatch address. A proforma invoice is shared for your records.",
  },
  {
    step: "04",
    title: "Dispatch & Track",
    description:
      "Your order is packed, dispatched and a tracking number shared with you on WhatsApp.",
  },
];

const BENEFITS = [
  {
    icon: PackageCheck,
    title: "Manufacturer Direct",
    description: "No middlemen. Prices that let you run a healthy margin.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent Quality",
    description:
      "Every garment goes through careful finishing and quality checks before dispatch.",
  },
  {
    icon: Layers,
    title: "Mix Styles & Colours",
    description:
      "Combine designs across your order to suit your customer base.",
  },
  {
    icon: Globe2,
    title: "Pan-India & Global Dispatch",
    description:
      "Serving boutiques across India and overseas resellers worldwide.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We're invested in your business growing — not just a one-time transaction.",
  },
  {
    icon: Briefcase,
    title: "Business Documentation",
    description:
      "Proper invoicing and dispatch documents for your records and accounting.",
  },
];

const CUSTOMER_TYPES = [
  {
    icon: Store,
    title: "Boutique Owners",
    description:
      "Source consistent, ready-to-sell collections for your boutique shelves.",
  },
  {
    icon: Handshake,
    title: "Resellers",
    description:
      "Build a catalogue of premium ethnic wear to resell to your own customer base.",
  },
  {
    icon: Users,
    title: "Small Business Owners",
    description:
      "Start or grow an ethnic-wear business backed by manufacturer-direct supply.",
  },
  {
    icon: Smartphone,
    title: "Social-Media Sellers",
    description:
      "Get a reliable source of stock to feature and sell across Instagram and WhatsApp.",
  },
  {
    icon: ShoppingBag,
    title: "Ethnic Wear Stores",
    description:
      "Add Pattu Pavada, Pattu Langa and Langa Blouse ranges to your existing store.",
  },
  {
    icon: HomeIcon,
    title: "Home-Based Businesses",
    description:
      "Run a growing ethnic-wear business from home with dependable manufacturer support.",
  },
];

// Product showcase — uses the real ET_LANGA DAVANI photos + img assets
const PRODUCTS = [
  {
    id: "p1",
    title: "Pattu Langa — Classic Zari",
    tag: "Bestseller",
    minQty: "10 pcs",
    priceRange: "₹450 – ₹650",
    image: "/ET_LANGA DAVANI_0111.png",
    whatsappMsg:
      "Hi, I'd like to enquire about the Pattu Langa Classic Zari for wholesale.",
  },
  {
    id: "p2",
    title: "Pattu Langa — Rich Border",
    tag: "New Arrival",
    minQty: "10 pcs",
    priceRange: "₹480 – ₹680",
    image: "/ET_LANGA DAVANI_0222.png",
    whatsappMsg:
      "Hi, I'd like to enquire about the Pattu Langa Rich Border for wholesale.",
  },
  {
    id: "p3",
    title: "Pattu Pavada — Festive",
    tag: "High Demand",
    minQty: "10 pcs",
    priceRange: "₹500 – ₹720",
    image: "/ET_LANGA DAVANI_033.png",
    whatsappMsg:
      "Hi, I'd like to enquire about the Pattu Pavada Festive collection for wholesale.",
  },
  {
    id: "p4",
    title: "Langa Blouse Set",
    tag: "Bulk Favourite",
    minQty: "10 pcs",
    priceRange: "₹420 – ₹600",
    image: "/ET_LANGA DAVANI_0333.png",
    whatsappMsg:
      "Hi, I'd like to enquire about the Langa Blouse Set for wholesale.",
  },
  {
    id: "p5",
    title: "Pattu Langa — Premium Silk",
    tag: "Premium",
    minQty: "10 pcs",
    priceRange: "₹580 – ₹800",
    image: "/img1.avif",
    whatsappMsg:
      "Hi, I'd like to enquire about the Premium Silk Pattu Langa for wholesale.",
  },
  {
    id: "p6",
    title: "Pattu Pavada — Silk Set",
    tag: "Classic",
    minQty: "10 pcs",
    priceRange: "₹460 – ₹660",
    image: "/img2.avif",
    whatsappMsg:
      "Hi, I'd like to enquire about the Pattu Pavada Silk Set for wholesale.",
  },
];

export default function B2BPage() {
  return (
    <main id="main-content">
      <Navbar variant="dark" />

      {/* ── HERO ── */}
      <section className="relative min-h-[70svh] flex items-end overflow-hidden bg-charcoal">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/img12.avif"
            alt="Bulk collection of finished Pattu Langa garments"
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/55 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24 pt-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <Eyebrow tone="gold">Wholesale & Bulk Orders</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 font-display font-medium text-cream leading-[1.02] text-balance text-5xl sm:text-6xl lg:text-7xl"
            >
              Built for Businesses
              <br />
              That Sell Tradition.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-7 font-body text-cream/85 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Manufacturer-direct wholesale pricing, bulk supply and flexible
              ordering — for boutiques, resellers and ethnic-wear businesses
              across India and the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={getWhatsAppLink(
                  "Hi, I'd like to start a wholesale / B2B enquiry.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold-light text-wine-dark px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream transition-colors"
              >
                Start a Wholesale Enquiry
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/50 text-cream px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors"
              >
                View Pricing Tiers
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section id="products" className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading
              eyebrow="Wholesale Products"
              title="What You Can Stock"
              description="A selection from our current manufacturing range. All available for bulk ordering — enquire on WhatsApp for the full catalogue with current stock and sizing."
            />
            <a
              href={getWhatsAppLink(
                "Hi, I'd like to request the full wholesale catalogue.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-wine text-cream px-6 py-3.5 font-body text-sm font-semibold tracking-wide hover:bg-wine-dark transition-colors"
            >
              Full Catalogue on WhatsApp
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCTS.map((product, i) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: (i % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-ivory border border-gold-pale overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-charcoal/5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  {/* Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-wine text-cream font-body text-[10px] font-semibold tracking-[0.18em] uppercase">
                    {product.tag}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
                    <a
                      href={getWhatsAppLink(product.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 bg-gold-light text-wine-dark px-5 py-2.5 rounded-sm font-body text-sm font-semibold"
                    >
                      Enquire Now
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <ZariDivider />

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl text-charcoal leading-snug">
                    {product.title}
                  </h3>

                  <div className="mt-4 flex items-end justify-between gap-3 flex-wrap">
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-[0.2em] text-brown/70">
                        Bulk price / piece
                      </p>
                      <p className="font-display text-2xl text-wine leading-tight mt-0.5">
                        {product.priceRange}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-body text-[10px] uppercase tracking-[0.2em] text-brown/70">
                        Min. order
                      </p>
                      <p className="font-body text-sm font-semibold text-charcoal mt-0.5">
                        {product.minQty}
                      </p>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(product.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-wine hover:text-wine-dark transition-colors group/link"
                  >
                    Enquire on WhatsApp
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-10 font-body text-sm text-brown/70 text-center max-w-xl mx-auto">
            This is a sample of available styles. WhatsApp us for the full range
            including seasonal collections, colour variants and current stock.
          </p>
        </div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section
        id="pricing"
        className="relative bg-charcoal py-24 sm:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="/img13.avif"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/97 to-charcoal" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <Eyebrow tone="gold" className="justify-center">
              Pricing Tiers
            </Eyebrow>
            <h2 className="mt-5 font-display font-medium text-cream text-balance leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
              Wholesale Pricing by Volume
            </h2>
            <ZariDivider className="max-w-[140px] mx-auto mt-8" />
            <p className="mt-8 mx-auto max-w-2xl font-body text-base sm:text-lg text-cream/80 leading-relaxed">
              The more you order, the better the per-piece price. All pricing is
              for manufacturer-direct supply — no agents, no markups.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {B2B_TIERS.map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col p-8 border ${
                  tier.popular
                    ? "border-gold bg-wine-dark"
                    : "border-cream/15 bg-charcoal/60"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-8 px-4 py-1 bg-gold-light text-wine-dark font-body text-xs font-bold tracking-[0.2em] uppercase">
                    Most Popular
                  </span>
                )}

                <div className="border-b border-current/20 pb-6 mb-6">
                  <h3 className="font-display text-3xl text-cream">
                    {tier.label}
                  </h3>
                  <p className="mt-1 font-body text-sm text-cream/65">
                    {tier.maxQty
                      ? `${tier.minQty} – ${tier.maxQty} pieces`
                      : `${tier.minQty}+ pieces`}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="font-display text-4xl sm:text-5xl text-gold-light leading-none">
                    {tier.priceRange}
                  </div>
                  {tier.perPiece && (
                    <p className="mt-2 font-body text-xs text-cream/55 tracking-wide">
                      per piece
                    </p>
                  )}
                  <p className="mt-4 font-body text-sm text-cream/75 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {tier.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 font-body text-sm text-cream/80"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-gold-light shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppLink(
                    `Hi, I'm interested in the ${tier.label} wholesale tier (${tier.maxQty ? tier.minQty + "–" + tier.maxQty : tier.minQty + "+"} pieces).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 font-body text-sm font-semibold tracking-wide transition-colors ${
                    tier.popular
                      ? "bg-gold-light text-wine-dark hover:bg-cream"
                      : "border border-cream/40 text-cream hover:bg-cream/10"
                  }`}
                >
                  Enquire on WhatsApp
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center font-body text-xs text-cream/45 max-w-xl mx-auto">
            Prices shown are indicative and may vary by design, fabric grade and
            order specifics. Contact us on WhatsApp for an exact quote for your
            requirements.
          </p>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Businesses Choose Us"
            title="Manufacturer Reliability, Built for Growing Businesses"
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-pale border border-gold-pale">
            {BENEFITS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
                  className="bg-ivory p-8 sm:p-9 flex flex-col gap-4 hover:bg-cream transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wine/10 text-wine">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-2xl text-charcoal">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-brown leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="relative bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="From First Message to Your Doorstep"
            description="Ordering wholesale from us is straightforward. Here's the process from first enquiry to dispatch."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {i < PROCESS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-6 left-full w-8 h-px bg-gold/40 -translate-y-1/2"
                    style={{ left: "calc(100% + 0px)", width: "2rem" }}
                  />
                )}
                <div className="font-display text-5xl text-gold/25 leading-none mb-4">
                  {step.step}
                </div>
                <ZariDivider className="max-w-[40px] mb-5" />
                <h3 className="font-display text-2xl text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-sm sm:text-base text-brown leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-wine-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/img14.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/80 via-wine-dark to-wine-dark" />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow tone="gold" className="justify-center">
              Ready to Order?
            </Eyebrow>
            <h2 className="mt-5 font-display font-medium text-cream text-balance leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
              Let's Build Your Collection Together.
            </h2>
            <ZariDivider className="max-w-[140px] mx-auto mt-8" />
            <p className="mt-8 mx-auto max-w-2xl font-body text-base sm:text-lg text-cream/80 leading-relaxed">
              Send us a WhatsApp message with your requirements — business type,
              location and approximate quantity. We'll respond with our current
              catalogue and pricing.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(
                  "Hi, I'd like to start a B2B wholesale enquiry for Pattu Langa.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-gold-light text-wine-dark px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream transition-colors"
              >
                <Briefcase size={16} />
                Start a Wholesale Enquiry
              </a>
              <a
                href={getWhatsAppLink(
                  "Hi, I'd like to request the wholesale catalogue.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm border border-cream/50 text-cream px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors"
              >
                Request Catalogue
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="relative bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Who We Work With"
            title="Wholesale Supply for Every Business Model"
            description="From a boutique owner sourcing their first bulk order to an overseas reseller running a growing catalogue — we've built this supply chain to support you."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CUSTOMER_TYPES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
                  className="relative bg-cream p-7 border border-gold-pale"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-wine/10 text-wine">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-brown leading-relaxed">
                    {item.description}
                  </p>
                  <ZariDivider className="absolute bottom-0 left-0 max-w-[60px]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
