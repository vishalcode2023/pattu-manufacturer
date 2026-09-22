import { motion } from "framer-motion";
import { MapPin, Phone, Video, Truck } from "lucide-react";
import { IMAGES } from "../config/images";
import { RETAIL_COUNTER, CONTACT, getWhatsAppLink } from "../config/site";
import { Eyebrow, ZariDivider, InstagramGlyph } from "./Decorative";

const FEATURES = [
  { icon: MapPin, label: "Individual purchases, in person" },
  { icon: Phone, label: "Direct customer assistance" },
  { icon: Video, label: "Phone / video-call product viewing" },
  { icon: Truck, label: "Product dispatch options" },
];

export default function RetailCounter() {
  return (
    <section
      id="retail-counter"
      className="relative bg-charcoal py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 relative overflow-hidden order-2 lg:order-1"
        >
          <img
            src="/img1.avif"
            className="w-full h-[420px] sm:h-[800px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 order-1 lg:order-2"
        >
          <Eyebrow tone="gold">Retail Counter</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-cream text-balance leading-[1.05] text-4xl sm:text-5xl">
            Prefer to Shop Individually? Visit Our Retail Counter.
          </h2>
          <ZariDivider className="max-w-[140px] mt-8" />
          <p className="mt-8 font-body text-base sm:text-lg text-cream/75 leading-relaxed max-w-lg">
            Looking for a single piece rather than a bulk order? Our retail
            counter, {RETAIL_COUNTER.name}, welcomes individual customers for
            direct assistance and product viewing.
          </p>

          <div className="mt-8 flex items-start gap-3 text-cream/85 font-body text-sm sm:text-base">
            <MapPin size={20} className="text-gold-light shrink-0 mt-0.5" />
            <address className="not-italic leading-relaxed">
              <strong className="font-display text-lg text-cream block mb-1">
                {RETAIL_COUNTER.name}
              </strong>
              {RETAIL_COUNTER.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            {FEATURES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 font-body text-sm text-cream/75"
              >
                <Icon size={17} className="text-gold-light shrink-0" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={getWhatsAppLink(
                "Hi, I'd like to enquire at the Ethnic Collections retail counter.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold-light text-wine-dark px-7 py-3.5 font-body text-sm font-semibold tracking-wide hover:bg-cream transition-colors"
            >
              Contact Retail Counter
            </a>
            {/* <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/40 text-cream px-7 py-3.5 font-body text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors"
            >
              <InstagramGlyph size={16} />
              View on Instagram
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
