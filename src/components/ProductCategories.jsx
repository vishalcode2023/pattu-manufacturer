import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { IMAGES } from "../config/images";
import { COLLECTIONS } from "../data/content";
import { SectionHeading } from "./Decorative";

export default function ProductCategories() {
  return (
    <section id="collections" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Collections"
          title="Manufactured Collections, Rooted in Tradition"
          description="Four core categories, each produced with consistent quality and traditional detailing — ready to supply boutiques, resellers and individual customers alike."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {COLLECTIONS.map((item, i) => {
            const image = IMAGES.collections[item.key];

            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: (i % 2) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden bg-charcoal"
              >
                <div className="relative h-[420px] sm:h-[480px] overflow-hidden">
                  {/* VIDEO */}
                  <video
                    src={image.src}
                    poster={image.poster}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent pointer-events-none" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                  <h3 className="font-display text-3xl sm:text-4xl text-cream">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm font-body text-sm sm:text-base text-cream/80 leading-relaxed">
                    {item.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wide text-gold-light hover:text-cream transition-colors"
                  >
                    Explore
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
