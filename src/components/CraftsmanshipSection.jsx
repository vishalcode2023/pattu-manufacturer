import { motion } from "framer-motion";
import { IMAGES } from "../config/images";
import { Eyebrow, ZariDivider } from "./Decorative";

const POINTS = [
  "Hand embroidery on every zari border",
  "Detailed finishing on seams and pleats",
  "Premium silk sourced for weight and sheen",
  "Traditional South Indian techniques",
  "Skilled, experienced workmanship",
  "Careful attention to every detail",
];

const imageReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

export default function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className="relative bg-ivory py-24 sm:py-32">
      {/* Top-left nadi kamba */}
      <img
        src="/border.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 w-32 opacity-70 sm:w-40"
      />

      {/* Bottom-right nadi kamba */}
      <img
        src="/border.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-32 rotate-180 opacity-70 sm:w-40"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="col-span-2 h-72 sm:h-96 overflow-hidden"
          >
            <img
              src={IMAGES.craftsmanship.primary.src}
              alt={IMAGES.craftsmanship.primary.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="h-52 sm:h-64 overflow-hidden"
          >
            <img
              src={IMAGES.craftsmanship.secondary.src}
              alt={IMAGES.craftsmanship.secondary.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3 }}
            className="h-52 sm:h-64 overflow-hidden"
          >
            <img
              src={IMAGES.craftsmanship.tertiary.src}
              alt={IMAGES.craftsmanship.tertiary.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-6 flex flex-col justify-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Eyebrow>Craftsmanship</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-charcoal text-balance leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
            Where Craftsmanship Meets Precision
          </h2>
          <ZariDivider className="max-w-[140px] mt-8" />
          <p className="mt-8 font-body text-base sm:text-lg text-brown leading-relaxed max-w-lg">
            Every garment we manufacture carries the weight of traditional
            technique — hand embroidery, considered finishing, and fabric chosen
            for how it moves and how it lasts.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 max-w-lg">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 font-body text-sm sm:text-base text-charcoal">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
