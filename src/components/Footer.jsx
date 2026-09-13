import { Mail, Phone } from "lucide-react";
import { BRAND_NAME, CONTACT, RETAIL_COUNTER, NAV_LINKS } from "../config/site";
import { ZariDivider, InstagramGlyph } from "./Decorative";

const MANUFACTURING_LINKS = [
  "Pattu Pavada",
  "Pattu Langa",
  "Langa Blouse",
  "Uddalanga",
];

const BUSINESS_LINKS = ["Wholesale", "Resellers", "Boutiques", "Global Supply"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream/70">
      {/* Decorative divider */}
      <ZariDivider />

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <span className="font-display text-3xl text-cream">{BRAND_NAME}</span>

          <p className="mt-4 font-body text-sm leading-relaxed max-w-xs">
            Manufacturer of Pattu Pavada, Pattu Langa, Langa Blouse and South
            Indian traditional girls&rsquo; ethnic wear, supplying India and
            global markets.
          </p>

          {/* Social / Contact Icons */}
          <div className="mt-6 flex items-center gap-4">
            {/* Instagram */}
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/25 hover:border-gold hover:text-gold-light transition-colors"
            >
              <InstagramGlyph size={17} />
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email us"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/25 hover:border-gold hover:text-gold-light transition-colors"
            >
              <Mail size={17} />
            </a>

            {/* Phone */}
            <a
              href={`tel:${CONTACT.phone}`}
              aria-label="Call us"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/25 hover:border-gold hover:text-gold-light transition-colors"
            >
              <Phone size={17} />
            </a>
          </div>
        </div>

        {/* Manufacturing */}
        <nav aria-label="Manufacturing">
          <h3 className="font-body text-xs uppercase tracking-[0.2em] text-gold-light mb-5">
            Manufacturing
          </h3>

          <ul className="space-y-3 font-body text-sm">
            {MANUFACTURING_LINKS.map((item) => (
              <li key={item}>
                <a
                  href="#collections"
                  className="hover:text-cream transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Business */}
        <nav aria-label="Business">
          <h3 className="font-body text-xs uppercase tracking-[0.2em] text-gold-light mb-5">
            Business
          </h3>

          <ul className="space-y-3 font-body text-sm">
            {BUSINESS_LINKS.map((item) => (
              <li key={item}>
                <a
                  href="#business-customers"
                  className="hover:text-cream transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Retail */}
        <div>
          <h3 className="font-body text-xs uppercase tracking-[0.2em] text-gold-light mb-5">
            Retail
          </h3>

          <address className="not-italic font-body text-sm leading-relaxed">
            {RETAIL_COUNTER.name}
            <br />
            {RETAIL_COUNTER.addressLines.slice(1).join(" ")}
          </address>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-4 font-body text-xs text-cream/50">
          {/* Copyright */}
          <p className="text-center lg:text-left">
            © {year} {BRAND_NAME}. All rights reserved.
          </p>

          {/* Navigation */}
          <ul className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Developer Credit */}
          <p className="text-center lg:text-right">
            Developed by{" "}
            <a
              href="https://www.koworks.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-cream transition-colors font-medium"
            >
              koworks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
