import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BRAND_NAME, BRAND_TAGLINE, getWhatsAppLink } from "../config/site";
import { ZariDivider } from "./Decorative";

const NAV_ITEMS = [
  { label: "Collection", to: "/collection" },
  { label: "Wholesale (B2B)", to: "/b2b" },
  { label: "Shop (B2C)", to: "/b2c" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar({ variant = "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isLight = variant === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const brandColor =
    isLight || scrolled || menuOpen ? "text-charcoal" : "text-cream";
  const taglineColor =
    isLight || scrolled || menuOpen ? "text-charcoal/70" : "text-cream/70";
  const navColor =
    isLight || scrolled
      ? "text-charcoal hover:text-wine"
      : "text-cream hover:text-gold-light";
  const buttonColor =
    isLight || scrolled
      ? "bg-wine text-cream border-wine hover:bg-wine-dark"
      : "bg-transparent text-cream border-cream/60 hover:bg-cream/10";
  const headerBg =
    scrolled || isLight
      ? "bg-cream shadow-[0_1px_0_0_rgba(184,134,59,0.25)]"
      : "bg-gradient-to-b from-charcoal/60 via-charcoal/25 to-transparent";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      <nav
        className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20 lg:h-24"
        aria-label="Primary"
      >
        {/* BRAND */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex flex-col leading-none group"
          aria-label={`${BRAND_NAME} — home`}
        >
          <span
            className={`font-display text-2xl lg:text-3xl tracking-wide transition-colors ${brandColor}`}
          >
            {BRAND_NAME}
          </span>
          <span
            className={`hidden sm:block font-body text-[10px] tracking-[0.3em] uppercase mt-1 transition-colors ${taglineColor}`}
          >
            {BRAND_TAGLINE}
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={handleNavClick}
                  className={`font-body text-sm font-medium tracking-wide transition-colors story-link ${navColor} ${isActive ? "border-b border-current pb-0.5" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <a
            href={getWhatsAppLink(
              "Hi, I'd like to enquire about your Pattu Langa manufacturing.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center rounded-sm px-6 py-3 font-body text-sm font-semibold tracking-wide transition-all duration-300 border ${buttonColor}`}
          >
            Enquire Now
          </a>
        </div>

        {/* MOBILE MENU BTN */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className={`lg:hidden p-2 -mr-2 rounded-sm ${isLight || scrolled || menuOpen ? "text-wine" : "text-cream"}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="lg:hidden bg-cream overflow-hidden"
          >
            <ZariDivider />
            <ul className="flex flex-col px-6 py-6 gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                >
                  <Link
                    to={item.to}
                    onClick={handleNavClick}
                    className="block py-3.5 font-display text-2xl text-charcoal hover:text-wine border-b border-gold-pale/60"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-6">
                <a
                  href={getWhatsAppLink(
                    "Hi, I'd like to enquire about your Pattu Langa manufacturing.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="inline-flex w-full items-center justify-center rounded-sm px-6 py-4 bg-wine text-cream font-body text-sm font-semibold tracking-wide"
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
