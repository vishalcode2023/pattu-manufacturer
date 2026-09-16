import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../config/images";
import { GLOBAL_REGIONS } from "../data/content";
import { getWhatsAppLink } from "../config/site";
import { Eyebrow, ZariDivider } from "./Decorative";

export default function GlobalSupplySection() {
  return (
    <section id="global-supply" className="relative bg-wine-dark py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img
          src={IMAGES.globalSupply.src}
          alt={IMAGES.globalSupply.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-wine-dark via-wine-dark/95 to-wine-dark" />

      {/* subtle route line */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M80 380 C 260 200, 420 420, 560 260 S 860 120, 1120 200"
          fill="none"
          stroke="#D9B876"
          strokeWidth="1.5"
          strokeDasharray="2 10"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        {[
          [80, 380],
          [560, 260],
          [1120, 200],
        ].map(([cx, cy]) => (
          <circle key={cx} cx={cx} cy={cy} r="4" fill="#D9B876" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center">
        <Eyebrow tone="gold" className="justify-center">
          Global Supply
        </Eyebrow>
        <h2 className="mt-5 font-display font-medium text-cream text-balance leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
          From Mysuru to the World
        </h2>
        <ZariDivider className="max-w-[140px] mx-auto mt-8" />
        <p className="mt-8 mx-auto max-w-2xl font-body text-base sm:text-lg text-cream/80 leading-relaxed">
          A growing share of our manufacturing already reaches customers and
          businesses beyond India, serving the global South Indian community
          wherever they call home.
        </p>

        <p className="mt-6 font-display text-xl sm:text-2xl text-gold-light tracking-wide">
          Manufactured in India → Supplied Worldwide
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {GLOBAL_REGIONS.map((region) => (
            <span
              key={region}
              className="rounded-full border border-gold/40 px-5 py-2 font-body text-xs sm:text-sm tracking-wide text-cream/85"
            >
              {region}
            </span>
          ))}
        </div>

        <a
          href={getWhatsAppLink("Hi, I'd like to enquire about global supply.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 rounded-sm bg-gold-light text-wine-dark px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream transition-colors"
        >
          Enquire for Global Supply
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
