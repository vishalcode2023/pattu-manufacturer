import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { IMAGES } from "../config/images";
import { CONTACT, RETAIL_COUNTER } from "../config/site";
import { SectionHeading, InstagramGlyph } from "./Decorative";

export default function InstagramSection() {
  return (
    <section id="instagram" className="relative bg-cream py-24 sm:py-32">
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
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow={RETAIL_COUNTER.name}
            title="See What's New at Ethnic Collections"
            description="Follow along for the current retail collection, new arrivals and styling inspiration from the counter in Mysuru."
          />
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-wine text-cream px-6 py-3.5 font-body text-sm font-semibold tracking-wide hover:bg-wine-dark transition-colors"
          >
            <InstagramGlyph size={16} />
            {CONTACT.instagramHandle}
          </a>
        </div>

        {/* <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {IMAGES.instagram.map((img, i) => (
            <motion.a
              key={img.src}
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden block"
              aria-label="View on Instagram"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-wine-dark/0 group-hover:bg-wine-dark/50 transition-colors flex items-center justify-center">
                <ArrowUpRight
                  size={22}
                  className="text-cream opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.a>
          ))}
        </div> */}
      </div>
    </section>
  );
}
