// components/Manufacturing.jsx

import { motion } from "framer-motion";
import { Eyebrow, ZariDivider } from "./Decorative";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IMAGES } from "../config/images";

const HERO = {
  title: "Direct From the Source",
  kicker: "The foundation of everything we do",
  text: "No layers of trading between the loom and your store. You buy straight from the manufacturer, at manufacturer pricing.",
  image: IMAGES.manufacturing.fabricSelection,
};

const ROWS = [
  {
    title: "Consistent, Every Time",
    text: "Every piece is finished and checked by hand before it leaves our facility, so what you sample is what you receive at scale.",
    image: IMAGES.manufacturing.qualityCheck,
  },
  {
    title: "Built to Scale",
    text: "Order in bulk with confidence. Our production is structured for boutiques and resellers who need volume without compromise.",
    image: IMAGES.manufacturing.packaging,
  },
  {
    title: "Beyond Indian Shores",
    text: "We ship wherever the community lives, from Chennai to Chicago, Coimbatore to Kuala Lumpur.",
    image: IMAGES.globalSupply,
  },
  {
    title: "Craft, Not Just Product",
    text: "Generations of South Indian weaving and finishing expertise inform every garment that leaves our hands.",
    image: IMAGES.craftsmanship.primary,
  },
];

const CLOSING = {
  title: "Partnerships That Flex With You",
  text: "Boutique, reseller network, or Instagram store, we shape our terms around your business, not the other way round.",
  image: IMAGES.businessCustomers,
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const headingContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Manufacturing() {
  return (
    <>
      <div className="relative bg-ivory">
        <Navbar variant="light" />

        <section id="manufacturing" className="relative bg-ivory overflow-hidden">
          
          {/* Section Heading */}
          <div className="relative py-24 sm:py-28">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-8 right-[-10%] w-[560px] h-[560px] rounded-full bg-gold-light/20 blur-[120px]"
            />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
              <motion.div
                variants={headingContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-2xl"
              >
                <motion.div variants={fadeUp}>
                  <Eyebrow>Why Buy From Us</Eyebrow>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="mt-5 font-display font-medium text-charcoal text-balance leading-[1.05] text-4xl sm:text-5xl"
                >
                  Built for Boutiques and Resellers
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-md font-body text-base text-charcoal/65 leading-relaxed"
                >
                  From loom to label, every step happens under one roof, giving
                  boutiques and resellers a manufacturing partner they can
                  actually build a business on.
                </motion.p>

                <motion.div variants={fadeUp}>
                  <ZariDivider className="max-w-[140px] mt-8" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Hero band, full-bleed */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px]"
          >
            <img
              src={HERO.image.src}
              alt={HERO.image.alt}
              className="absolute inset-0 w-full h-full object-cover grayscale-[10%] saturate-[0.92] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 pb-12 sm:pb-16">
                <p className="mb-3 font-body text-xs text-gold-light/90 tracking-wide">
                  {HERO.kicker}
                </p>
                <h3 className="font-display text-cream leading-snug text-3xl sm:text-5xl max-w-xl">
                  {HERO.title}
                </h3>
                <p className="mt-4 max-w-md font-body text-sm sm:text-base text-cream/80 leading-relaxed">
                  {HERO.text}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Alternating rows, over-under like a weave */}
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            {ROWS.map((f, i) => {
              const reversed = i % 2 === 1;
              return (
                <motion.div
                  key={f.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1 } },
                  }}
                  className={`flex flex-col ${
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-8 lg:gap-16 py-16 sm:py-20 border-t border-charcoal/10`}
                >
                  <motion.div
                    variants={fadeUp}
                    className="w-full lg:w-1/2 h-[280px] sm:h-[360px] lg:h-[420px] relative overflow-hidden rounded-sm"
                  >
                    <img
                      src={f.image.src}
                      alt={f.image.alt}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[15%] saturate-[0.9] contrast-[1.05]"
                    />
                  </motion.div>

                  <div className="w-full lg:w-1/2">
                    <motion.h3
                      variants={fadeUp}
                      className="font-display text-charcoal leading-snug text-2xl sm:text-3xl max-w-md"
                    >
                      {f.title}
                    </motion.h3>

                    <motion.div variants={fadeUp}>
                      <div className="mt-4 mb-4 h-px w-9 bg-gold-light/60" />
                    </motion.div>

                    <motion.p
                      variants={fadeUp}
                      className="max-w-md font-body text-base text-charcoal/70 leading-relaxed"
                    >
                      {f.text}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing band, centered, quieter than the hero */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="relative border-t border-charcoal/10"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24 flex flex-col items-center text-center">
              <motion.div
                variants={fadeUp}
                className="w-full max-w-3xl h-[240px] sm:h-[320px] relative overflow-hidden rounded-sm mb-10"
              >
                <img
                  src={CLOSING.image.src}
                  alt={CLOSING.image.alt}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[15%] saturate-[0.9] contrast-[1.05]"
                />
              </motion.div>

              <motion.h3
                variants={fadeUp}
                className="font-display text-charcoal leading-snug text-3xl sm:text-4xl max-w-xl"
              >
                {CLOSING.title}
              </motion.h3>

              <motion.div variants={fadeUp}>
                <div className="mt-5 mb-5 h-px w-9 bg-gold-light/60" />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="max-w-lg font-body text-base text-charcoal/70 leading-relaxed"
              >
                {CLOSING.text}
              </motion.p>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </>
  );
}