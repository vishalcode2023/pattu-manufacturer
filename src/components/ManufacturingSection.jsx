import { motion } from "framer-motion";
import { IMAGES } from "../config/images";
import { MANUFACTURING_STEPS } from "../data/content";
import { SectionHeading } from "./Decorative";

export default function ManufacturingSection() {
  return (
    <section
      id="manufacturing"
      className="relative bg-charcoal py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Manufacturing"
          title="From Fabric to Finished Craft"
          description="Every Pattu Pavada, Pattu Langa and Langa Blouse we manufacture moves through eight careful stages — from fabric selection to dispatch."
          tone="light"
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block mt-20 relative">
          <div className="absolute top-[34px] left-0 right-0 h-px bg-gold/30" />
          <div className="grid grid-cols-4 gap-x-8 gap-y-20">
            {MANUFACTURING_STEPS.map((step, i) => {
              const image = IMAGES.manufacturing[step.key];
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex items-center justify-center w-[68px] h-[68px] rounded-full bg-charcoal border border-gold/50 text-gold-light">
                      <Icon size={26} strokeWidth={1.5} />
                    </span>
                    <span className="font-display text-3xl text-gold/40">
                      {step.number}
                    </span>
                  </div>
                  <div className="relative h-52 overflow-hidden mb-4">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-xl text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-cream/65 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="lg:hidden mt-14 relative pl-8">
          <div className="absolute top-2 bottom-2 left-[15px] w-px bg-gold/30" />
          <ol className="space-y-12">
            {MANUFACTURING_STEPS.map((step, i) => {
              const image = IMAGES.manufacturing[step.key];
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-charcoal border border-gold/50 text-gold-light">
                    <Icon size={15} strokeWidth={1.75} />
                  </span>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-2xl text-gold/50">
                      {step.number}
                    </span>
                    <h3 className="font-display text-xl text-cream">
                      {step.title}
                    </h3>
                  </div>
                  <div className="relative h-44 overflow-hidden mb-3">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-body text-sm text-cream/65 leading-relaxed">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
