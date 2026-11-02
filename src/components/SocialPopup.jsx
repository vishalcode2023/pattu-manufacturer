import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT, getWhatsAppLink } from "../config/site";
import { InstagramGlyph } from "./Decorative";

export default function SocialPopup() {
  return (
    <div
      className="pointer-events-none fixed inset-x-5 bottom-5 z-50 flex items-center justify-between"
      role="group"
      aria-label="Social media links"
    >
      <motion.a
        href={CONTACT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Instagram"
        title="Instagram"
        whileHover={{ y: -3, scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="pointer-events-auto inline-flex size-14 items-center justify-center rounded-full border border-gold-pale bg-cream text-wine shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <InstagramGlyph size={23} />
      </motion.a>
      <motion.a
        href={getWhatsAppLink("Hi, I'd like to know more about your collection.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
        whileHover={{ y: -3, scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="pointer-events-auto inline-flex size-14 items-center justify-center rounded-full bg-wine text-cream shadow-lg transition-colors hover:bg-wine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <MessageCircle size={23} />
      </motion.a>
    </div>
  );
}