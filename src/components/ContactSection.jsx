// components/ContactSection.jsx

import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Phone } from "lucide-react";
import { Eyebrow, ZariDivider } from "./Decorative";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CONTACT, RETAIL_COUNTER } from "../config/site";

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

const WHATSAPP_NUMBER = CONTACT.whatsappNumber;

const WHATSAPP_MESSAGE =
  "Hello, I would like to know more about your products and bulk orders.";

const PHONES = [
  { label: "9916760001", href: "tel:+919916760001" },
  { label: "9739606361", href: "tel:+919739606361" },
  { label: "9972566518", href: "tel:+919972566518" },
  { label: "Landline: 0821-2413045", href: "tel:+918212413045" },
];

export default function ContactSection() {
  const mapQuery = encodeURIComponent(
    `${RETAIL_COUNTER.name}, ${RETAIL_COUNTER.addressLines.join(" ")}`,
  );
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
            src="/border.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-25 left-0 z-0 w-32 opacity-70 sm:w-40"
            width="1055"
            height="1491"
            loading="lazy"
            decoding="async"
          />

          {/* =====================================================
              BOTTOM-RIGHT NADI KAMBA
          ===================================================== */}

          <img
            src="/border.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 z-0 w-32 rotate-180 opacity-70 sm:w-40"
            width="1055"
            height="1491"
            loading="lazy"
            decoding="async"
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

              <h1 className="mt-5 font-display font-medium text-charcoal text-balance leading-[1.05] text-4xl sm:text-5xl">
                Pattu Pavada Manufacturer Serving India
              </h1>

              <ZariDivider className="max-w-[140px] mt-8" />

              <p className="mt-8 max-w-md font-body text-base sm:text-lg leading-relaxed text-brown">
                Looking for pattu pavada, pattu pavadai or pattu langa for girls,
                or wholesale supply? Visit our Mysuru, Karnataka counter or
                contact our team for delivery across India.
              </p>

              {/* Phone Numbers */}

              <ul className="mt-8 space-y-3 font-body text-base text-charcoal">
                {PHONES.map(({ label, href }) => (
                  <li key={href} className="flex items-center gap-3">
                    <Phone size={18} className="text-wine shrink-0" />
                    <a
                      href={href}
                      className="hover:text-wine transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-5 inline-block font-body text-sm text-wine underline"
              >
                {CONTACT.email}
              </a>
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
          <div className="relative z-10 mx-auto mt-16 max-w-7xl px-5 sm:px-8">
            <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
              Visit Ethnic Collections in Mysuru, Karnataka
            </h2>
            <address className="mt-3 not-italic font-body leading-7 text-brown">
              {RETAIL_COUNTER.name},{" "}
              {RETAIL_COUNTER.addressLines.join(" ")}
            </address>
            <iframe
              title="Map to Ethnic Collections, Jayalakshmipuram, Mysuru"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-6 border-0"
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
