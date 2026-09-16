import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  ShoppingBag,
  Star,
  Shield,
  Heart,
  ChevronDown,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Eyebrow, SectionHeading, ZariDivider } from "../components/Decorative";

import { getWhatsAppLink } from "../config/site";

/* =========================================================
   ASSURANCES
========================================================= */

const ASSURANCES = [
  {
    icon: Shield,
    title: "Manufacturer Direct",
    description:
      "You're buying straight from the source — no extra markup, no middlemen.",
  },
  {
    icon: Star,
    title: "Handcrafted Quality",
    description:
      "Every piece passes quality inspection before it's packed for you.",
  },
  {
    icon: MessageCircle,
    title: "Personal Assistance",
    description:
      "WhatsApp us anytime — we'll help you find exactly the right piece.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description:
      "Every order is carefully prepared and packed before dispatch.",
  },
];

/* =========================================================
   ORDER STEPS
========================================================= */

const STEPS = [
  {
    number: "01",
    title: "Browse the Collection",
    description:
      "Scroll through the styles below or ask us for photos of the latest arrivals.",
  },
  {
    number: "02",
    title: "Message Us on WhatsApp",
    description:
      "Tell us the design, colour and size you're looking for. We'll confirm availability.",
  },
  {
    number: "03",
    title: "Confirm & Pay",
    description:
      "We'll send you photos, confirm the price and arrange payment — simple and direct.",
  },
  {
    number: "04",
    title: "Delivered to Your Door",
    description:
      "Your piece is packed carefully and dispatched with a tracking number sent to you.",
  },
];

/* =========================================================
   COLLECTION ITEMS
========================================================= */

const COLLECTION_ITEMS = [
  {
    key: "pattuPavada",
    title: "Pattu Pavada",
    region: "Tamil Nadu",
    description:
      "Traditional silk pavada with detailed zari border. Available in a wide range of colours and sizes for girls aged 2–12.",
    priceFrom: "₹850",
    popular: true,
  },
  {
    key: "pattuLanga",
    title: "Pattu Langa",
    region: "Andhra & Telangana",
    description:
      "Elegant langa designed for weddings, festivals and special occasions. Rich silk with traditional craftsmanship.",
    priceFrom: "₹950",
    popular: false,
  },
  {
    key: "langaBlouse",
    title: "Langa Blouse",
    region: "All Regions",
    description:
      "Beautifully crafted blouse sets with hand detailing, finished to pair perfectly with every langa and pavada.",
    priceFrom: "₹650",
    popular: false,
  },
  {
    key: "uddalanga",
    title: "Uddalanga",
    region: "Karnataka",
    description:
      "Traditional Karnataka-inspired ethnic wear, manufactured with the same craftsmanship the region has trusted for generations.",
    priceFrom: "₹800",
    popular: false,
  },
];

/* =========================================================
   VIDEO MAP
========================================================= */

const VIDEO_MAP = {
  pattuPavada: "/EC_Reel_5.mp4",
  pattuLanga: "/EC_Reel_7.mp4",
  langaBlouse: "/EC_Reel_8.mp4",
  uddalanga: "/EC_Reel_5.mp4",
};

/* =========================================================
   PRODUCTS
========================================================= */

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

/* =========================================================
   PAGE
========================================================= */

export default function B2CPage() {
  return (
    <main id="main-content">
      <Navbar variant="dark" />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[80svh] flex items-end overflow-hidden bg-charcoal">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <img
            src="/Landing_Page.avif"
            alt="Beautiful Pattu Pavada garments"
            className="w-full h-full object-cover object-center max-sm:object-[30%_center]"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/55 via-transparent to-transparent" />
        </motion.div>

        {/* Decorative diamonds */}

        <motion.div
          aria-hidden="true"
          className="absolute top-28 right-10 sm:right-16 hidden sm:block"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 0.5,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1.2,
          }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect
              x="59"
              y="0"
              width="2"
              height="120"
              fill="#D9B876"
              opacity="0.35"
            />

            <rect
              x="0"
              y="59"
              width="120"
              height="2"
              fill="#D9B876"
              opacity="0.35"
            />

            {[20, 40, 80, 100].map((pos) => (
              <rect
                key={pos}
                x={pos - 5}
                y={55}
                width="10"
                height="10"
                fill="none"
                stroke="#D9B876"
                strokeWidth="1"
                opacity="0.45"
                transform={`rotate(45 ${pos} 60)`}
              />
            ))}
          </svg>
        </motion.div>

        <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24 pt-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
            >
              <Eyebrow tone="gold">Shop Direct from the Manufacturer</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 font-display font-medium text-cream leading-[1.02] text-balance text-5xl sm:text-6xl lg:text-7xl"
            >
              Dress Her in
              <br />
              <span className="text-gold-light">Pure Tradition.</span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.75,
                duration: 0.7,
              }}
              className="mt-7 font-body text-cream/85 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Handcrafted Pattu Pavada, Pattu Langa and Langa Blouse sets — made
              with traditional craftsmanship in Mysuru, delivered straight to
              your door across India and worldwide.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.7,
              }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={getWhatsAppLink(
                  "Hi, I'd like to shop for a Pattu Pavada / Pattu Langa for my daughter.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold-light text-wine-dark px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream transition-colors"
              >
                <MessageCircle size={16} />
                Order on WhatsApp
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/50 text-cream px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors"
              >
                Browse Collections
                <ChevronDown size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT SHOWCASE
      ===================================================== */}

      <section id="products" className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading
              eyebrow="Our Collection"
              title="Made for Beautiful Moments"
              description="A selection from our current manufacturing range. Enquire on WhatsApp for the full catalogue with current stock, colours and sizing."
            />

            <a
              href={getWhatsAppLink(
                "Hi, I'd like to request the full Pattu Pavada and Pattu Langa catalogue.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-wine text-cream px-6 py-3.5 font-body text-sm font-semibold tracking-wide hover:bg-wine-dark transition-colors"
            >
              Full Catalogue
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCTS.map((product, i) => (
              <motion.article
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 32,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
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

      {/* =====================================================
          ASSURANCES
      ===================================================== */}

      <section className="relative bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {ASSURANCES.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wine/10 text-wine">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>

                  <h3 className="font-display text-lg text-charcoal">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-brown leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          COLLECTIONS
      ===================================================== */}

     

      {/* =====================================================
          HOW TO ORDER
      ===================================================== */}

      <section className="relative bg-charcoal py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/img12.avif"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/97 to-charcoal" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How to Order"
            title="Ordering is Simple — Just WhatsApp Us"
            description="No website checkout, no complicated process. Direct from manufacturer to you, via WhatsApp."
            tone="light"
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="font-display text-5xl text-gold/25 leading-none mb-4">
                  {step.number}
                </div>

                <ZariDivider className="max-w-[40px] mb-5" />

                <h3 className="font-display text-2xl text-cream">
                  {step.title}
                </h3>

                <p className="mt-3 font-body text-sm text-cream/65 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={getWhatsAppLink(
                "Hi, I'd like to order a Pattu Pavada / Pattu Langa. Can you share available designs?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-gold-light text-wine-dark px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream transition-colors"
            >
              <MessageCircle size={16} />
              Start Your Order on WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT MAKES US DIFFERENT
      ===================================================== */}

      <section className="relative bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-5 relative order-2 lg:order-1"
            initial={{
              opacity: 0,
              y: 32,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src="/img1.avif"
                alt="Handcrafted Pattu Pavada detail"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden sm:block w-32 h-32 border border-gold/60" />
          </motion.div>

          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{
              opacity: 0,
              y: 32,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Eyebrow>Why Buy Direct</Eyebrow>

            <h2 className="mt-5 font-display font-medium text-charcoal text-balance leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
              From Our Hands
              <br />
              to Your Home.
            </h2>

            <ZariDivider className="max-w-[140px] mt-8" />

            <div className="mt-8 space-y-5 max-w-xl text-brown font-body text-base sm:text-lg leading-relaxed">
              <p>
                When you order directly from the manufacturer, you get the
                freshest collection at the fairest price — with no store markup
                sitting in between.
              </p>

              <p>
                Every piece is made in our facility in Mysuru, inspected for
                quality, and dispatched with care. You're getting manufacturer
                quality, not reseller stock.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
              {[
                ["Direct", "Pricing"],
                ["Fresh", "Collections"],
                ["Worldwide", "Delivery"],
              ].map(([top, bottom]) => (
                <div
                  key={top + bottom}
                  className="border-t border-gold/40 pt-3"
                >
                  <dt className="font-display text-xl text-wine">{top}</dt>

                  <dd className="font-body text-xs uppercase tracking-widest text-brown mt-1">
                    {bottom}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative bg-wine-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
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
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <Eyebrow tone="gold" className="justify-center">
              Ready to Order?
            </Eyebrow>

            <h2 className="mt-5 font-display font-medium text-cream text-balance leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
              She'll Love It. We'll Make Sure of It.
            </h2>

            <ZariDivider className="max-w-[140px] mx-auto mt-8" />

            <p className="mt-8 mx-auto max-w-2xl font-body text-base sm:text-lg text-cream/80 leading-relaxed">
              Message us on WhatsApp with the occasion, her age and any colour
              preferences — we'll help you find the perfect Pattu Pavada or
              Pattu Langa for her.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(
                  "Hi, I'd like to order a Pattu Pavada / Pattu Langa. Can you help me find the right one?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-gold-light text-wine-dark px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream transition-colors"
              >
                <MessageCircle size={16} />
                Order on WhatsApp
              </a>

              <a
                href={getWhatsAppLink(
                  "Hi, I'd like to see your latest collection.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm border border-cream/50 text-cream px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors"
              >
                <ShoppingBag size={16} />
                See Latest Collection
              </a>
            </div>

            <p className="mt-8 font-body text-xs text-cream/45">
              We typically respond within a few hours. All orders are confirmed
              on WhatsApp before payment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </main>
  );
}
