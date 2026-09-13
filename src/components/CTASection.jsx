import { motion } from "framer-motion";
import { MessageCircle, Briefcase, ShoppingBag } from "lucide-react";
import { IMAGES } from "../config/images";
import { getWhatsAppLink } from "../config/site";
import { Eyebrow, ZariDivider } from "./Decorative";

export default function CTASection() {
  return (
    <section id="contact" className="relative bg-wine-dark py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src={IMAGES.finalCta.src}
          alt={IMAGES.finalCta.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/80 via-wine-dark to-wine-dark" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <Eyebrow tone="gold" className="justify-center">
            Get In Touch
          </Eyebrow>
          <h2 className="mt-5 font-display font-medium text-cream text-balance leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
            Looking for a Reliable Pattu Langa Manufacturer?
          </h2>
          <ZariDivider className="max-w-[140px] mx-auto mt-8" />
          <p className="mt-8 mx-auto max-w-2xl font-body text-base sm:text-lg text-cream/80 leading-relaxed">
            Whether you&rsquo;re building a boutique collection, reselling
            online, expanding your ethnic-wear business or looking for
            individual pieces, let&rsquo;s connect.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Hi, I'd like to make a business enquiry about your manufacturing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-gold-light text-wine-dark px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream transition-colors"
            >
              <Briefcase size={16} />
              Business Enquiry
            </a>
            <a
              href={getWhatsAppLink("Hi, I'd like to make a retail enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm border border-cream/50 text-cream px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors"
            >
              <ShoppingBag size={16} />
              Retail Enquiry
            </a>
            <a
              href={getWhatsAppLink("Hi, I'd like to get in touch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm border border-cream/50 text-cream px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
