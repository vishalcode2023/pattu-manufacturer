import { ChevronDown } from "lucide-react";
import { Eyebrow, ZariDivider } from "./Decorative";
import { FAQS } from "../config/seo";

/** Visible FAQ — the same content is emitted as FAQPage JSON-LD (see config/seo.js). */
export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative bg-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <Eyebrow tone="wine">Pattu Pavada FAQ</Eyebrow>
          <h2
            id="faq-heading"
            className="mt-5 font-display font-medium text-wine-dark text-balance leading-[1.1] text-3xl sm:text-5xl"
          >
            Pattu Pavada &amp; Pattu Langa Manufacturer — Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 sm:mt-14 divide-y divide-gold-pale border-y border-gold-pale">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg sm:text-xl text-charcoal">
                <h3 className="font-display text-lg sm:text-xl font-medium">{q}</h3>
                <ChevronDown
                  size={20}
                  className="shrink-0 text-wine transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 font-body text-[15px] sm:text-base leading-7 text-charcoal/75">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
      <ZariDivider />
    </section>
  );
}
