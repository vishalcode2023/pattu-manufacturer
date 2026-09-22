// components/ContactSection.jsx

import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Phone } from "lucide-react";
import { Eyebrow, ZariDivider } from "./Decorative";
import Navbar from "./Navbar";
import Footer from "./Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const WHATSAPP_NUMBER = "919916760001";

const WHATSAPP_MESSAGE =
  "Hello, I would like to know more about your products and bulk orders.";

export default function ContactSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <>
      <div className="relative bg-ivory">
        <Navbar variant="light" />

        <section
          id="contact"
          className="relative bg-ivory py-24 sm:py-32 overflow-hidden"
        >
          {/* =====================================================
              AMBIENT GLOW
          ===================================================== */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-8 right-[-10%] w-[560px] h-[560px] rounded-full bg-gold-light/20 blur-[120px]"
          />

          {/* =====================================================
              TOP-LEFT NADI KAMBA
          ===================================================== */}

          <img
            src="/border.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-25 left-0 z-0 w-32 opacity-70 sm:w-40"
          />

          {/* =====================================================
              BOTTOM-RIGHT NADI KAMBA
          ===================================================== */}

          <img
            src="/border.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 z-0 w-32 rotate-180 opacity-70 sm:w-40"
          />

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* ===================================================
                CONTACT DETAILS
            =================================================== */}

            <motion.div
              className="lg:col-span-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-100px",
              }}
            >
              <Eyebrow>Get In Touch</Eyebrow>

              <h2 className="mt-5 font-display font-medium text-charcoal text-balance leading-[1.05] text-4xl sm:text-5xl">
                Place a Bulk Order,
                <br />
                Or Just Say Hello.
              </h2>

              <ZariDivider className="max-w-[140px] mt-8" />

              <p className="mt-8 max-w-md font-body text-base sm:text-lg leading-relaxed text-brown">
                Looking for premium products in bulk or simply want to know more
                about us? Connect with our team directly on WhatsApp.
              </p>

              
            </motion.div>

            {/* ===================================================
                WHATSAPP CONTACT
            =================================================== */}

            <motion.div
              className="lg:col-span-7 flex items-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <div className="w-full border border-gold/30 bg-cream/30 p-8 sm:p-10 lg:p-12">
                {/* WhatsApp Icon */}

                <div className="flex items-center justify-center w-16 h-16 border border-gold/40 text-wine mb-8">
                  <MessageCircle size={28} strokeWidth={1.5} />
                </div>

                <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">
                  Quick Contact
                </p>

                <h3 className="mt-4 font-display text-3xl sm:text-4xl text-charcoal font-medium">
                  Let's talk on WhatsApp.
                </h3>

                <p className="mt-5 max-w-xl font-body text-base sm:text-lg leading-relaxed text-brown">
                  Send us a message about your requirements, bulk orders,
                  products, pricing, or anything you'd like to know.
                </p>

                {/* WhatsApp Button */}

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-4 bg-wine px-7 py-4 text-cream font-body text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-charcoal"
                >
                  <MessageCircle size={20} />

                  <span>Chat on WhatsApp</span>

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                {/* Decorative divider */}

                <div className="mt-10 max-w-[180px]">
                  <ZariDivider />
                </div>

                <p className="mt-5 font-body text-xs uppercase tracking-[0.15em] text-brown">
                  We usually respond within one business day.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
