// components/RegionalNames.jsx

import { motion } from "framer-motion";
import { IMAGES } from "../config/images";
import { REGIONAL_NAMES } from "../data/content";
import { SectionHeading, ZariDivider } from "./Decorative";

const regionImages = [
  IMAGES.regional.karnataka,
  IMAGES.regional.andhraTelangana,
  IMAGES.regional.tamilNadu,
];

export default function RegionalNames() {
  return (
    <section
      id="regional-names"
      className="relative bg-cream py-24 sm:py-32 overflow-hidden"
    >
      {/* =====================================================
          TOP-LEFT NADI KAMBA
      ===================================================== */}

      <img
        src="/border.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[0px] left-0 z-0 w-32 opacity-70 sm:w-40"
      />

      {/* =====================================================
          BOTTOM-RIGHT NADI KAMBA
      ===================================================== */}

      <img
        src="/border.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-32 opacity-70 sm:w-40"
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Regional Terminology"
          title="One Tradition Many Names Across South India."
          description="Known across South India as Pattu Pavada, Pattu Langa, Uddalanga and Langa Blouse, our girls’ ethnic wear celebrates the region’s rich textile heritage."
        />

        {/* ===================================================
            REGIONAL CARDS
        =================================================== */}

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {REGIONAL_NAMES.map((region, i) => (
            <motion.article
              key={region.region}
              initial={{
                opacity: 0,
                y: 30,
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
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-ivory border border-gold-pale overflow-hidden"
            >
              {/* Image */}

              <div className="relative aspect-[6/9] overflow-hidden">
                <img
                  src={regionImages[i].src}
                  alt={regionImages[i].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />

                <span className="absolute bottom-4 left-5 font-body text-[10px] uppercase tracking-[0.25em] text-cream/90">
                  {region.region}
                </span>
              </div>

              {/* Zari Divider */}

              <ZariDivider />

              {/* Content */}

              <div className="p-6 sm:p-7">
                <h3 className="font-display text-[14px] text-wine leading-tight">
                  {region.names.join(" / ")}
                </h3>

                <p className="mt-3 font-body text-sm sm:text-base text-brown leading-relaxed">
                  {region.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
