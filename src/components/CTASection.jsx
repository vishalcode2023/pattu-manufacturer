import { motion } from "framer-motion";
import {
  MessageCircle,
  Briefcase,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { IMAGES } from "../config/images";
import { getWhatsAppLink } from "../config/site";
import { Eyebrow, ZariDivider } from "./Decorative";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative bg-wine-dark py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src={IMAGES.finalCta.src}
          alt={IMAGES.finalCta.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/80 via-wine-dark to-wine-dark" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Eyebrow tone="gold" className="justify-center">
            Get In Touch
          </Eyebrow>
          <h2 className="mt-5 font-display font-medium text-cream text-balance leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
            Looking for a Reliable Pattu Langa Manufacturer?
          </h2>
          <ZariDivider className="max-w-[140px] mx-auto mt-8" />
          <p className="mt-8 mx-auto max-w-2xl font-body text-base sm:text-lg text-cream/80 leading-relaxed">
            Whether you're building a boutique collection, reselling online, or
            simply looking for a beautiful piece for your daughter — we have the
            right option for you.
          </p>
        </motion.div>

        {/* B2B / B2C CARDS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* B2B */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col p-8 border border-gold/40 bg-charcoal/50 group"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wine/20 text-gold-light mb-5">
              <Briefcase size={22} strokeWidth={1.5} />
            </span>
            <h3 className="font-display text-3xl text-cream">
              Wholesale / B2B
            </h3>
            <p className="mt-3 font-body text-sm text-cream/70 leading-relaxed flex-1">
              For boutiques, resellers and businesses. Bulk pricing tiers,
              catalogue access and manufacturer-direct supply.
            </p>
            <Link
              to="/b2b"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-gold-light text-wine-dark px-6 py-3.5 font-body text-sm font-semibold tracking-wide hover:bg-cream transition-colors self-start"
            >
              View Wholesale Pricing
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* B2C */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col p-8 border border-cream/20 bg-wine/20 group"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream/10 text-gold-light mb-5">
              <ShoppingBag size={22} strokeWidth={1.5} />
            </span>
            <h3 className="font-display text-3xl text-cream">
              Shop Direct / B2C
            </h3>
            <p className="mt-3 font-body text-sm text-cream/70 leading-relaxed flex-1">
              Buying for your family? Order a single Pattu Pavada or Pattu Langa
              directly from us on WhatsApp.
            </p>
            <Link
              to="/b2c"
              className="mt-6 inline-flex items-center gap-2 rounded-sm border border-cream/50 text-cream px-6 py-3.5 font-body text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors self-start"
            >
              <MessageCircle size={14} />
              Shop on WhatsApp
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Fallback WhatsApp */}
        <div className="mt-10 text-center">
          <a
            href={getWhatsAppLink("Hi, I'd like to get in touch.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/30 text-cream/70 px-6 py-3 font-body text-sm tracking-wide hover:bg-cream/10 hover:text-cream transition-colors"
          >
            <MessageCircle size={15} />
            Or just WhatsApp us directly
          </a>
        </div>
      </div>
    </section>
  );
}
