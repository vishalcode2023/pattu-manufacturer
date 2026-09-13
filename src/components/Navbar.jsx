// components/Navbar.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND_NAME, BRAND_TAGLINE, getWhatsAppLink } from "../config/site";
import { ZariDivider } from "./Decorative";

export default function Navbar({ variant = "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isLight = variant === "light";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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

  /*
   * BRAND COLORS
   *
   * Light variant:
   * Black/dark text before scrolling
   *
   * Dark variant:
   * Cream text before scrolling
   */
  const brandColor =
    isLight || scrolled || menuOpen ? "text-charcoal" : "text-cream";

  const taglineColor =
    isLight || scrolled || menuOpen ? "text-charcoal/70" : "text-cream/70";

  /*
   * DESKTOP NAVIGATION COLORS
   */
  const navColor =
    isLight || scrolled
      ? "text-charcoal hover:text-wine"
      : "text-cream hover:text-gold-light";

  /*
   * WHATSAPP BUTTON
   */
  const buttonColor =
    isLight || scrolled
      ? "bg-wine text-cream border-wine hover:bg-wine-dark"
      : "bg-transparent text-cream border-cream/60 hover:bg-cream/10";

  /*
   * HEADER BACKGROUND
   *
   * Scrolled / light variant: solid cream bar, safe against any content.
   * Dark variant before scrolling: NOT fully transparent. A soft scrim
   * sits behind the cream text at all times so the navbar stays legible
   * even if the page underneath turns out to be light (e.g. a page that
   * forgets to pass variant="light"). On an actual dark hero image the
   * scrim is barely noticeable; it's a safety net, not a visual choice
   * you need to design around.
   */
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
        {/* =========================
            BRAND
        ========================== */}
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

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <ul className="hidden lg:flex items-center gap-9">
          {/* Manufacturing */}
          <li>
            <Link
              to="/manufacturing"
              onClick={handleNavClick}
              className={`font-body text-sm font-medium tracking-wide transition-colors story-link ${navColor}`}
            >
              Manufacturing
            </Link>
          </li>

          {/* Collection */}
          <li>
            <Link
              to="/collection"
              onClick={handleNavClick}
              className={`font-body text-sm font-medium tracking-wide transition-colors story-link ${navColor}`}
            >
              Collection
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className={`font-body text-sm font-medium tracking-wide transition-colors story-link ${navColor}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* =========================
            DESKTOP WHATSAPP CTA
        ========================== */}
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

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className={`lg:hidden p-2 -mr-2 rounded-sm ${
            isLight || scrolled || menuOpen ? "text-wine" : "text-cream"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="lg:hidden bg-cream overflow-hidden"
          >
            <ZariDivider />

            <ul className="flex flex-col px-6 py-6 gap-1">
              {/* Manufacturing */}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05,
                  duration: 0.35,
                }}
              >
                <Link
                  to="/manufacturing"
                  onClick={handleNavClick}
                  className="block py-3.5 font-display text-2xl text-charcoal hover:text-wine border-b border-gold-pale/60"
                >
                  Manufacturing
                </Link>
              </motion.li>

              {/* Collection */}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.35,
                }}
              >
                <Link
                  to="/collection"
                  onClick={handleNavClick}
                  className="block py-3.5 font-display text-2xl text-charcoal hover:text-wine border-b border-gold-pale/60"
                >
                  Collection
                </Link>
              </motion.li>

              {/* Contact */}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15,
                  duration: 0.35,
                }}
              >
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="block py-3.5 font-display text-2xl text-charcoal hover:text-wine border-b border-gold-pale/60"
                >
                  Contact
                </Link>
              </motion.li>

              {/* Mobile WhatsApp CTA */}
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