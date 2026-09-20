import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { IMAGES } from "../config/images";
import { getWhatsAppLink } from "../config/site";
import { Eyebrow } from "./Decorative";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-charcoal"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="\Landing_Page.avif"
          alt={IMAGES.hero.alt}
          className="w-full h-full object-cover object-center max-sm:object-[30%_center]"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/15 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/10 via-transparent to-transparent" />
      </motion.div>

      {/* floating decorative zari diamonds */}
      <motion.div
        aria-hidden="true"
        className="absolute top-28 right-10 sm:right-16 hidden sm:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1, duration: 1.2 }}
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
          <rect x="60" y="60" width="1" height="1" fill="#D9B876" />
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

      <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-20 pt-40">
        <div className="max-w-3xl -translate-y-25">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Eyebrow tone="gold">South Indian Ethnic Wear Manufacturer</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 font-display font-medium text-cream leading-[1.02] text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-6xl"
          >
            Crafted in Tradition
            <br />
            Manufactured for the World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-7 font-body text-cream/85 text-base sm:text-lg leading-relaxed max-w-xl"
          >
           Premium Pattu Pavada, Pattu Langa & Blouses, crafted in Mysuru for India and the world.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold-light text-wine-dark px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream transition-colors"
            >
              Explore Our Manufacturing
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={getWhatsAppLink(
                "Hi, I'd like to explore a business partnership.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/50 text-cream px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors"
            >
              Partner With Us
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#brand-intro"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream/70 hover:text-cream"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.6 },
          y: { delay: 1.6, duration: 1.8, repeat: Infinity },
        }}
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  );
}
