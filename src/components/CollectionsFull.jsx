// components/CollectionsFull.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IMAGES } from "../config/images";
import { COLLECTIONS } from "../data/content";
import { SectionHeading } from "./Decorative";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function CollectionsFull() {
  return (
    <>
      <div className="relative bg-ivory">
        <Navbar variant="light" />

        <section
          id="collections-full"
          className="relative bg-ivory py-24 sm:py-32 overflow-hidden"
        >
          {/* Ambient glow, consistent with the rest of the site */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-24 left-[-10%] w-[520px] h-[520px] rounded-full bg-gold-light/20 blur-[130px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Full Catalogue"
              title="Every Collection We Manufacture"
              description="Browse our full range — each collection is available for bulk supply with custom sizing and fabric options."
            />

            <div className="mt-16 divide-y divide-charcoal/10">
              {COLLECTIONS.map((item, i) => {
                const image = IMAGES.collections[item.key];
                const flip = i % 2 === 1;
                const isVideo = /\.(mp4|webm|mov)$/i.test(image?.src || "");

                return (
                  <motion.article
                    key={item.key}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-14 sm:py-16 first:pt-0"
                  >
                    {/* Image / Video */}
                    <div
                      className={`lg:col-span-6 ${
                        flip ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative overflow-hidden rounded-sm ring-1 ring-inset ring-gold-light/0 group-hover:ring-gold-light/40 transition-all duration-500">
                        {isVideo ? (
                          <video
                            src={image.src}
                            className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <img
                            src={image?.src}
                            alt={image?.alt || item.title}
                            className="w-full h-[380px] sm:h-[440px] object-cover grayscale-[10%] saturate-[0.92] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`lg:col-span-6 ${
                        flip ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <h3 className="font-display text-3xl sm:text-4xl text-charcoal">
                        {item.title}
                      </h3>

                      <div className="mt-4 mb-4 h-px w-9 bg-gold-light/60 transition-all duration-500 group-hover:w-14" />

                      <p className="max-w-md font-body text-base text-brown leading-relaxed">
                        {item.description}
                      </p>

                      <Link
                        to="/contact"
                        className="mt-6 inline-block font-body text-sm font-semibold tracking-wide text-wine border-b border-wine/40 hover:border-wine pb-0.5 transition-colors"
                      >
                        Enquire for bulk supply
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
