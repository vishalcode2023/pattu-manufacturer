// components/CollectionsFull.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { IMAGES } from "../config/images";
import { COLLECTIONS } from "../data/content";
import { getWhatsAppLink } from "../config/site";

import { SectionHeading } from "./Decorative";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RegionalNames from "./RegionalNames";

export default function CollectionsFull() {
  // Track items added to order
  const [orderedItems, setOrderedItems] = useState({});

  // Add collection to order and open WhatsApp
  const handleToggleOrder = (item) => {
    const message = `Hi, I am interested in bulk ordering "${item.title}". Please share the available designs, colours, sizes, minimum order quantity, and pricing details.`;

    // Open WhatsApp
    window.open(
      getWhatsAppLink(message),
      "_blank",
      "noopener,noreferrer"
    );

    // Update button state
    setOrderedItems((prev) => ({
      ...prev,
      [item.key]: true,
    }));
  };

  return (
    <>
      <div className="relative bg-ivory">
        <Navbar variant="light" />

        <RegionalNames />

        <section
          id="collections-full"
          className="relative bg-ivory py-24 sm:py-32 overflow-hidden"
        >
          {/* Ambient glow */}
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

                const isVideo =
                  /\.(mp4|webm|mov)$/i.test(image?.src || "");

                const isOrdered = Boolean(orderedItems[item.key]);

                return (
                  <motion.article
                    key={item.key}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      margin: "-100px",
                    }}
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

                      {/* Action Buttons */}
                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        {/* Add to Bulk Order */}
                        <button
                          type="button"
                          onClick={() => handleToggleOrder(item)}
                          className={`px-6 py-3 rounded-xs font-body text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm flex items-center gap-2 ${
                            isOrdered
                              ? "bg-emerald-800 text-white hover:bg-emerald-900"
                              : "bg-wine text-ivory hover:bg-wine/90 active:scale-95"
                          }`}
                        >
                          {isOrdered ? (
                            <>
                              {/* Check Icon */}
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>

                              <span>Added to Order</span>
                            </>
                          ) : (
                            <>
                              {/* Plus Icon */}
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>

                              <span>Add to Bulk Order</span>
                            </>
                          )}
                        </button>

                        
                      </div>
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