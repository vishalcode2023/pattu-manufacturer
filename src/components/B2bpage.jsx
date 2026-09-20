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

/* -------------------------------------------------------------------------- */
/* DATA */
/* -------------------------------------------------------------------------- */

const PRODUCTS = [
  {
    id: "p1",
    title: "Pattu Langa — Classic Zari",
    tag: "Bestseller",
    minQty: "1 pc",
    priceRange: "₹850 – ₹1,250",
    image: "/ET_01_A.avif",
    whatsappMsg: "Hi, I'd like to enquire about the Pattu Langa Classic Zari.",
  },
  {
    id: "p2",
    title: "Pattu Langa — Rich Border",
    tag: "New Arrival",
    minQty: "1 pc",
    priceRange: "₹900 – ₹1,350",
    image: "/ET_02_A.avif",
    whatsappMsg: "Hi, I'd like to enquire about the Pattu Langa Rich Border.",
  },
  {
    id: "p3",
    title: "Pattu Pavada — Festive",
    tag: "Popular",
    minQty: "1 pc",
    priceRange: "₹850 – ₹1,300",
    image: "/ET_03_A.avif",
    whatsappMsg:
      "Hi, I'd like to enquire about the Pattu Pavada Festive collection.",
  },
  {
    id: "p4",
    title: "Langa Blouse Set",
    tag: "Classic",
    minQty: "1 pc",
    priceRange: "₹650 – ₹950",
    image: "/ET_04_A.avif",
    whatsappMsg: "Hi, I'd like to enquire about the Langa Blouse Set.",
  },
  {
    id: "p5",
    title: "Pattu Langa — Premium Silk",
    tag: "Premium",
    minQty: "1 pc",
    priceRange: "₹1,100 – ₹1,650",
    image: "/ET_05_A.avif",
    whatsappMsg: "Hi, I'd like to enquire about the Premium Silk Pattu Langa.",
  },
];

const ASSURANCES = [
  {
    icon: Shield,
    title: "Manufacturer Direct",
    description:
      "You're buying directly from the source — no unnecessary middlemen or extra markup.",
  },
  {
    icon: Star,
    title: "Handcrafted Quality",
    description:
      "Every piece is carefully checked for finishing, fabric quality and detailing.",
  },
  {
    icon: MessageCircle,
    title: "Personal Assistance",
    description:
      "Message us on WhatsApp and we'll help you choose the right design, colour and size.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description:
      "Every order is carefully prepared and packed before dispatch.",
  },
];

const COLLECTION_ITEMS = [
  {
    key: "pattuPavada",
    title: "Pattu Pavada",
    region: "Traditional Collection",
    description:
      "Beautiful silk pavadas with elegant zari borders, designed for festivals, weddings and special occasions.",
    priceFrom: "₹850",
    popular: true,
  },
  {
    key: "pattuLanga",
    title: "Pattu Langa",
    region: "Premium Collection",
    description:
      "Elegant traditional langas crafted with rich silk fabrics and beautiful traditional detailing.",
    priceFrom: "₹950",
    popular: true,
  },
  {
    key: "langaBlouse",
    title: "Langa Blouse",
    region: "Blouse Collection",
    description:
      "Beautifully finished blouse designs created to pair perfectly with pattu langas and pavadas.",
    priceFrom: "₹650",
    popular: false,
  },
  {
    key: "uddalanga",
    title: "Uddalanga",
    region: "Traditional Collection",
    description:
      "Traditional ethnic wear inspired by South Indian craftsmanship and festive dressing.",
    priceFrom: "₹800",
    popular: false,
  },
];

const VIDEO_MAP = {
  pattuPavada: "/EC_Reel_5.mp4",
  pattuLanga: "/EC_Reel_7.mp4",
  langaBlouse: "/EC_Reel_8.mp4",
  uddalanga: "/EC_Reel_5.mp4",
};

const STEPS = [
  {
    number: "01",
    title: "Browse the Collection",
    description:
      "Explore our latest pattu pavada, pattu langa and traditional collections.",
  },
  {
    number: "02",
    title: "Message Us",
    description:
      "Send us a WhatsApp message with the design, colour and size you're looking for.",
  },
  {
    number: "03",
    title: "Confirm Your Order",
    description:
      "We'll share availability, photos, pricing and help you select the perfect piece.",
  },
  {
    number: "04",
    title: "Delivered to Your Door",
    description:
      "Your order is carefully packed and dispatched with tracking details.",
  },
];

/* -------------------------------------------------------------------------- */
/* COMPONENT */
/* -------------------------------------------------------------------------- */

export default function B2CPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <Navbar variant="white" />

      {/* ------------------------------------------------------------------ */}
      {/* HERO */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative min-h-[90svh] flex items-end overflow-hidden bg-charcoal">
        {/* ================================================================
            HERO VIDEO
        ================================================================= */}

        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <video
            className="w-full h-full object-cover object-center"
            src="/g1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </motion.div>

        {/* ================================================================
            TEXT READABILITY OVERLAY

            No wine/red color.
            This only adds a subtle black gradient so the white/gold
            text remains visible over the bright factory video.
        ================================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-black/55
            via-black/20
            to-transparent
          "
        />

        {/* ================================================================
            SUBTLE BOTTOM OVERLAY
        ================================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-56
            bg-gradient-to-t
            from-black/35
            to-transparent
          "
        />

        {/* ================================================================
            HERO CONTENT
        ================================================================= */}

        <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24 pt-40">
          <div className="max-w-3xl">
            {/* EYEBROW */}

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
                delay: 0.35,
                duration: 0.7,
              }}
            ></motion.div>

            {/* HEADING */}

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
                delay: 0.5,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-6
                font-display
                font-medium
                text-cream
                leading-[1.02]
                text-balance
                text-5xl
                sm:text-6xl
                lg:text-7xl
                drop-shadow-[0_3px_8px_rgba(0,0,0,0.55)]
              "
            >
              Dress Her in
              <br />
              <span
                className="
                  text-gold-light
                  drop-shadow-[0_3px_8px_rgba(0,0,0,0.55)]
                "
              >
                Pure Tradition.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

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
                delay: 0.7,
                duration: 0.7,
              }}
              className="
                mt-7
                font-body
                text-cream
                text-base
                sm:text-lg
                leading-relaxed
                max-w-xl
                drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)]
              "
            >
              Discover beautifully crafted Pattu Pavada, Pattu Langa and
              traditional South Indian ethnic wear, made with care in Mysuru.
            </motion.p>

            {/* BUTTONS */}

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
                delay: 0.85,
                duration: 0.7,
              }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              {/* WHATSAPP BUTTON */}

              <a
                href={getWhatsAppLink(
                  "Hi, I'd like to enquire about your Pattu Pavada and Pattu Langa collection.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-sm
                  bg-gold-light
                  text-wine-dark
                  px-8
                  py-4
                  font-body
                  text-sm
                  font-semibold
                  tracking-wide
                  hover:bg-cream
                  transition-colors
                "
              >
                Shop on WhatsApp
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              {/* COLLECTION BUTTON */}

              <a
                href="#products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-sm
                  border
                  border-cream/70
                  bg-black/10
                  backdrop-blur-[2px]
                  text-cream
                  px-8
                  py-4
                  font-body
                  text-sm
                  font-semibold
                  tracking-wide
                  hover:bg-black/20
                  transition-colors
                "
              >
                Explore Collection
                <ChevronDown size={16} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}

        <div
          className="
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2
            text-cream/80
            drop-shadow-md
          "
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PRODUCTS */}
      {/* ------------------------------------------------------------------ */}

      <section id="products" className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading
              eyebrow="Our Collection"
              title="Made for Beautiful Moments"
              description="Explore a selection of our traditional collections. Message us on WhatsApp for available colours, sizes and current designs."
            />

            <a
              href={getWhatsAppLink(
                "Hi, I'd like to see the complete Pattu Pavada and Pattu Langa catalogue.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-sm
                bg-wine
                text-cream
                px-6
                py-3.5
                font-body
                text-sm
                font-semibold
                tracking-wide
                hover:bg-wine-dark
                transition-colors
              "
            >
              Full Catalogue
              <ArrowRight size={15} />
            </a>
          </div>

          {/* PRODUCT GRID */}

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
                className="
                  group
                  relative
                  bg-ivory
                  border
                  border-gold-pale
                  overflow-hidden
                  flex
                  flex-col
                "
              >
                {/* IMAGE */}

                <div className="relative h-80 sm:h-96 overflow-hidden bg-charcoal/5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.06]
                    "
                    loading="lazy"
                  />

                  {/* PRODUCT TAG */}

                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      px-3
                      py-1
                      bg-wine
                      text-cream
                      font-body
                      text-[10px]
                      font-semibold
                      tracking-[0.18em]
                      uppercase
                    "
                  >
                    {product.tag}
                  </span>

                  {/* IMAGE HOVER */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-charcoal/0
                      group-hover:bg-charcoal/30
                      transition-colors
                      duration-300
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <a
                      href={getWhatsAppLink(product.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        inline-flex
                        items-center
                        gap-2
                        bg-gold-light
                        text-wine-dark
                        px-5
                        py-2.5
                        rounded-sm
                        font-body
                        text-sm
                        font-semibold
                      "
                    >
                      Enquire Now
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <ZariDivider />

                {/* PRODUCT INFO */}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl text-charcoal leading-snug">
                    {product.title}
                  </h3>

                  <a
                    href={getWhatsAppLink(product.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      font-body
                      text-sm
                      font-semibold
                      text-wine
                      hover:text-wine-dark
                      transition-colors
                      group/link
                    "
                  >
                    Enquire on WhatsApp
                    <ArrowRight
                      size={14}
                      className="
                        transition-transform
                        group-hover/link:translate-x-1
                      "
                    />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-10 font-body text-sm text-brown/70 text-center max-w-xl mx-auto">
            Designs, colours and availability may change. WhatsApp us for the
            latest collection and current stock.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ASSURANCES */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative bg-wine-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {ASSURANCES.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.08,
                  }}
                  className="text-center"
                >
                  <div
                    className="
                      mx-auto
                      flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      rounded-full
                      border
                      border-gold/40
                      text-gold-light
                    "
                  >
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-5 font-display text-xl text-cream">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-body text-sm text-cream/65 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* HOW TO ORDER */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Simple & Personal"
            title="How to Order"
            description="We keep the buying process simple. Browse, message us and let our team help you choose."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                }}
                className="relative"
              >
                {i < STEPS.length - 1 && (
                  <div
                    className="
                      hidden
                      lg:block
                      absolute
                      top-7
                      left-full
                      w-8
                      h-px
                      bg-gold/40
                    "
                  />
                )}

                <div className="font-display text-5xl text-gold/25 leading-none">
                  {step.number}
                </div>

                <ZariDivider className="max-w-[45px] mt-5 mb-5" />

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

      {/* ------------------------------------------------------------------ */}
      {/* WHY US */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative bg-charcoal py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/img13.avif"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT SIDE IMAGE */}
            <div className="relative w-full h-[180px] lg:h-[760px]">
              <video
                src="/56.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
              {/* optional decorative border/frame to match the theme */}
              <div className="absolute inset-0 border border-gold-light/20 pointer-events-none" />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div>
              <div className="text-left">
                <Eyebrow tone="gold">Why Choose Us</Eyebrow>

                <h2
                  className="
    mt-5
    font-display
    font-medium
    text-cream
    text-balance
    leading-[1.05]
    text-4xl
    sm:text-5xl
    lg:text-6xl
  "
                >
                  Tradition Made
                  <br />
                  <span className="text-gold-light">Beautifully.</span>
                </h2>

                <ZariDivider className="max-w-[140px] mt-8" />

                <p className="mt-8 max-w-2xl font-body text-base sm:text-lg text-cream/75 leading-relaxed">
                  We combine traditional craftsmanship with careful finishing to
                  create ethnic wear that feels special from the moment it
                  arrives.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* CARD 1 */}
                <div className="border border-cream/10 p-7 text-center sm:text-left">
                  <ShoppingBag
                    size={25}
                    className="mx-auto sm:mx-0 text-gold-light"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 font-display text-xl text-cream">
                    Wide Collection
                  </h3>
                  <p className="mt-2 font-body text-sm text-cream/60 leading-relaxed">
                    Traditional styles for festivals, weddings and celebrations.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="border border-cream/10 p-7 text-center sm:text-left">
                  <Star
                    size={25}
                    className="mx-auto sm:mx-0 text-gold-light"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 font-display text-xl text-cream">
                    Quality First
                  </h3>
                  <p className="mt-2 font-body text-sm text-cream/60 leading-relaxed">
                    Every garment receives careful finishing and quality checks.
                  </p>
                </div>

                {/* CARD 3 */}
                <div className="border border-cream/10 p-7 text-center sm:text-left sm:col-span-2">
                  <MessageCircle
                    size={25}
                    className="mx-auto sm:mx-0 text-gold-light"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 font-display text-xl text-cream">
                    Personal Support
                  </h3>
                  <p className="mt-2 font-body text-sm text-cream/60 leading-relaxed">
                    Get direct assistance whenever you need help choosing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FINAL CTA */}
      {/* ------------------------------------------------------------------ */}

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
              Ready to Shop?
            </Eyebrow>

            <h2
              className="
                mt-5
                font-display
                font-medium
                text-cream
                text-balance
                leading-[1.05]
                text-4xl
                sm:text-5xl
                lg:text-6xl
              "
            >
              Let's Find Something
              <br />
              <span className="text-gold-light">Beautiful for Her.</span>
            </h2>

            <ZariDivider className="max-w-[140px] mx-auto mt-8" />

            <p className="mt-8 mx-auto max-w-2xl font-body text-base sm:text-lg text-cream/80 leading-relaxed">
              Tell us what you're looking for and we'll help you find the
              perfect Pattu Pavada or Pattu Langa for your special occasion.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* WHATSAPP */}

              <a
                href={getWhatsAppLink(
                  "Hi, I'd like help choosing a Pattu Pavada or Pattu Langa.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-sm
                  bg-gold-light
                  text-wine-dark
                  px-8
                  py-4
                  font-body
                  text-sm
                  font-semibold
                  tracking-wide
                  hover:bg-cream
                  transition-colors
                "
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>

              {/* COLLECTION */}

              <a
                href="#collections"
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-sm
                  border
                  border-cream/50
                  text-cream
                  px-8
                  py-4
                  font-body
                  text-sm
                  font-semibold
                  tracking-wide
                  hover:bg-cream/10
                  transition-colors
                "
              >
                Explore Collections
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
