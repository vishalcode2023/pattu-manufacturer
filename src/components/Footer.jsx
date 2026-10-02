import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND_NAME, CONTACT, RETAIL_COUNTER } from "../config/site";
import { ZariDivider, InstagramGlyph } from "./Decorative";

const RETAIL_PHONES = [
  { label: "9916760001", href: "tel:+919916760001" },
  { label: "9739606361", href: "tel:+919739606361" },
  { label: "9972566518", href: "tel:+919972566518" },
  { label: "Landline: 0821-2413045", href: "tel:+918212413045" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F6F1E7] text-charcoal/70">
      <ZariDivider />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="font-display text-3xl text-wine-dark">
            {BRAND_NAME}
          </Link>
          <p className="mt-4 font-body text-sm leading-relaxed max-w-xs">
            Manufacturer of Pattu Pavada, Pattu Langa, Langa Blouse and South
            Indian traditional girls&rsquo; ethnic wear, supplying India and
            global markets.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-charcoal/25 hover:border-wine hover:text-wine transition-colors"
            >
              <InstagramGlyph size={17} />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email us"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-charcoal/25 hover:border-wine hover:text-wine transition-colors"
            >
              <Mail size={17} />
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              aria-label="Call us"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-charcoal/25 hover:border-wine hover:text-wine transition-colors"
            >
              <Phone size={17} />
            </a>
          </div>
        </div>

        {/* Business */}
        <nav aria-label="Business">
          <h3 className="font-body text-xs uppercase tracking-[0.2em] text-wine mb-5">
            Business
          </h3>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <Link to="/b2b" className="hover:text-wine transition-colors">
                Wholesale (B2B)
              </Link>
            </li>
            <li>
              <Link to="/b2c" className="hover:text-wine transition-colors">
                Shop Direct (B2C)
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-wine transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Retail */}
        <div>
          <h3 className="font-body text-xs uppercase tracking-[0.2em] text-wine mb-5">
            Retail
          </h3>
          <address className="not-italic font-body text-sm leading-relaxed">
            {RETAIL_COUNTER.name}
            {RETAIL_COUNTER.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        {/* Phone Numbers */}
        <div>
          <h3 className="font-body text-xs uppercase tracking-[0.2em] text-wine mb-5">
            Call Us
          </h3>
          <ul className="space-y-3 font-body text-sm">
            {RETAIL_PHONES.map(({ label, href }) => (
              <li key={href} className="flex items-center gap-2">
                <Phone size={14} className="text-wine shrink-0" />
                <a href={href} className="hover:text-wine transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-charcoal/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-4 font-body text-xs text-charcoal/60">
          <p className="text-center lg:text-left">
            © {year} {BRAND_NAME}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <li>
              <Link to="/b2b" className="hover:text-wine transition-colors">
                Wholesale
              </Link>
            </li>
            <li>
              <Link to="/b2c" className="hover:text-wine transition-colors">
                Shop Direct
              </Link>
            </li>
          </ul>
          <p className="text-center lg:text-right">
            Developed by{" "}
            <a
              href="https://www.koworks.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wine hover:text-wine-dark transition-colors font-medium"
            >
              koworks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
