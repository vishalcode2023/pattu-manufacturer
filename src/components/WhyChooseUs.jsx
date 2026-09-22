import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "../data/content";
import { SectionHeading } from "./Decorative";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Businesses Choose Us"
          title="Manufacturer Reliability, Built for Growing Businesses"
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-pale border border-gold-pale">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.1,
                }}
                className="bg-ivory overflow-hidden flex flex-col hover:bg-cream transition-colors"
              >
                {/* Image */}
                {item.image && (
                  <div className="relative w-full h-56 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      loading="lazy"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="p-8 sm:p-9 flex flex-col gap-4">
                  {/* Icon */}
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wine/10 text-wine">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-2xl text-charcoal">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm sm:text-base text-brown leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
