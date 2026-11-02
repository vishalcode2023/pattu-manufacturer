import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../config/images";
import { BUSINESS_CUSTOMERS } from "../data/content";
import { getWhatsAppLink } from "../config/site";
import { SectionHeading, ZariDivider } from "./Decorative";

export default function BusinessCustomers() {
  return (
    <section id="business-customers" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="For Businesses"
            title="Built for Businesses That Sell Tradition"
            description="We support businesses looking to source South Indian traditional wear — from a single boutique to a growing reseller network."
          />
          <div className="relative mt-10 hidden lg:block h-72 overflow-hidden">
            <img
              src="/img12.avif"
              alt={IMAGES.businessCustomers.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <a
            href={getWhatsAppLink("Hi, I'd like to start a business enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-wine text-cream px-8 py-4 font-body text-sm font-semibold tracking-wide hover:bg-wine-dark transition-colors"
          >
            Start a Business Enquiry
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {BUSINESS_CUSTOMERS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
                className="relative bg-cream p-7 border border-gold-pale"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-wine/10 text-wine">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl text-charcoal">{item.title}</h3>
                <p className="mt-2 font-body text-sm text-brown leading-relaxed">
                  {item.description}
                </p>
                <ZariDivider className="absolute bottom-0 left-0 max-w-[60px]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
