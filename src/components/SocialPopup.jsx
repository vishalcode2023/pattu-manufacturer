import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { CONTACT, getWhatsAppLink } from "../config/site";
import { InstagramGlyph } from "./Decorative";

export default function SocialPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex items-center gap-3"
            role="group"
            aria-label="Social media links"
          >
            <motion.a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Instagram"
              title="Instagram"
              initial={{ opacity: 0, scale: 0.65, x: 16 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.65, x: 16 }}
              transition={{ type: "spring", stiffness: 460, damping: 24, delay: 0.06 }}
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex size-12 items-center justify-center rounded-full border border-gold-pale bg-cream text-wine shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <InstagramGlyph size={21} />
            </motion.a>
            <motion.a
              href={getWhatsAppLink("Hi, I'd like to know more about your collection.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="WhatsApp"
              initial={{ opacity: 0, scale: 0.65, x: 16 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.65, x: 16 }}
              transition={{ type: "spring", stiffness: 460, damping: 24 }}
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex size-12 items-center justify-center rounded-full border border-green-700/20 bg-cream text-green-700 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <MessageCircle size={21} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={isOpen ? "Close social links" : "Open social links"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex size-14 items-center justify-center rounded-full bg-wine text-cream shadow-lg transition-colors hover:bg-wine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={23} />}
      </button>
    </div>
  );
}