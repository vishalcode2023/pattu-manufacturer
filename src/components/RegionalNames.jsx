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
    <section id="regional-names" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Regional Terminology"
          title="One Tradition. Different Names Across South India."
          description="Known across South India by names including Pattu Pavada, Pattu Langa, Uddalanga and Langa Blouse, our traditional girls' ethnic wear reflects the rich textile heritage of the region."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {REGIONAL_NAMES.map((region, i) => (
            <motion.article
              key={region.region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-ivory border border-gold-pale overflow-hidden"
            >
              <div className="relative aspect-[6/9] overflow-hidden">
                <img
                  src={regionImages[i].src}
                  alt={regionImages[i].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />

                <span className="absolute bottom-4 left-5 font-body text-[11px] uppercase tracking-[0.25em] text-cream/90">
                  {region.region}
                </span>
              </div>
              <ZariDivider />
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl text-wine leading-tight">
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
