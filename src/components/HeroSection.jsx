import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { IMAGES } from "../config/images";
import { getWhatsAppLink } from "../config/site";
import { Eyebrow } from "./Decorative";

// Hero slider images
const heroImages = [
  "/Landing_Page.avif",
  "/Landing_Page_2.avif",
  "/Landing_Page_3.avif",
];

const SLIDE_DURATION = 5000; // 5 seconds per image

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Preload images
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto slider
  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-charcoal"
    >
      {/* ================= BACKGROUND SLIDER ================= */}
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: i === activeIndex ? 1 : 0,
              scale: i === activeIndex ? 1 : 1.08,
            }}
            transition={{
              opacity: {
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              },
              scale: {
                duration: SLIDE_DURATION / 1000 + 1.4,
                ease: "linear",
              },
            }}
            style={{
              zIndex: i === activeIndex ? 1 : 0,
            }}
          >
            <img
              src={src}
              alt={IMAGES.hero.alt}
              className="w-full h-full object-cover object-center max-sm:object-[30%_center]"
              fetchPriority={i === 0 ? "high" : "auto"}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}

        {/* Dark bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/15 to-charcoal/20 z-[2]" />

        {/* Wine gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/10 via-transparent to-transparent z-[2]" />
      </div>

      {/* ================= SLIDER DOTS ================= */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === activeIndex ? "true" : "false"}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeIndex ? "w-6 bg-gold-light" : "w-1.5 bg-cream/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* ================= DECORATIVE ZARI DIAMONDS ================= */}
      <motion.div
        aria-hidden="true"
        className="absolute top-28 right-10 sm:right-16 hidden sm:block z-10"
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
              y="55"
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

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-20 pt-40">
        <div className="max-w-3xl -translate-y-25">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
          >
            <Eyebrow tone="gold">South Indian Ethnic Wear Manufacturer</Eyebrow>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-16 font-display font-medium text-cream leading-[1.02] text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-6xl"
          >
            Crafted in Tradition
            <br />
            Manufactured for the World
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.7,
            }}
            className="mt-7 font-body text-cream/85 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            Premium Pattu Pavada, Pattu Langa &amp; Blouses, crafted in Mysuru
            for India and the world.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.95,
              duration: 0.7,
            }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            {/* Manufacturing Button */}
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

            {/* WhatsApp Button */}
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

      {/* ================= SCROLL DOWN ================= */}
      <motion.a
        href="#brand-intro"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream/70 hover:text-cream"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: {
            delay: 1.4,
            duration: 0.6,
          },
          y: {
            delay: 1.6,
            duration: 1.8,
            repeat: Infinity,
          },
        }}
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  );
}
