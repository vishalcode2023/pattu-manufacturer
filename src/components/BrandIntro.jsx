import { motion } from "framer-motion";
import { IMAGES } from "../config/images";
import { Eyebrow, ZariDivider } from "./Decorative";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function BrandIntro() {
  return (
    <section id="brand-intro" className="relative bg-ivory py-24 sm:py-32">
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
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-32 opacity-70 sm:w-40"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          className="lg:col-span-5 relative order-2 lg:order-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative overflow-hidden rounded-sm">
            <video
              className="w-full h-[520px] sm:h-[520px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={IMAGES.brandIntro.src}
            >
              <source src="/g2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="absolute -bottom-6 -right-6 hidden sm:block w-32 h-32 border border-gold/60" />
        </motion.div>

        <motion.div
          className="lg:col-span-7 order-1 lg:order-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Eyebrow>Who We Are</Eyebrow>

          <h2 className="mt-5 font-display font-medium text-charcoal text-balance leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
            More Than a Garment
            <br />A Tradition We Manufacture
          </h2>

          <ZariDivider className="max-w-[140px] mt-8" />

          <div className="mt-8 space-y-5 max-w-xl text-brown font-body text-base sm:text-lg leading-relaxed">
            <p>
              Traditional South Indian ethnic wear, crafted with quality and
              heritage for families and businesses worldwide.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {[
              ["Manufacturing", "Expertise"],
              ["Bulk", "Supply"],
              ["Traditional", "Craftsmanship"],
              ["Global", "Shipping"],
            ].map(([top, bottom]) => (
              <div key={top + bottom} className="border-t border-gold/40 pt-3">
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
  );
}
