// components/Decorative.jsx

// Custom Instagram glyph — lucide-react no longer ships brand/social icons.
export function InstagramGlyph({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />

      <circle cx="12" cy="12" r="4" />

      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* ZARI DIVIDER */
/* -------------------------------------------------------------------------- */

export function ZariDivider({ className = "", tone = "gold" }) {
  const opacityClass = tone === "light" ? "opacity-70" : "opacity-100";

  return (
    <div
      className={`w-full ${opacityClass} ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <img
        src="/zari-divider-transparent.png"
        alt=""
        className="block w-full h-auto object-contain"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* EYEBROW */
/* -------------------------------------------------------------------------- */

export function Eyebrow({ children, tone = "wine", className = "" }) {
  const toneClasses =
    tone === "gold"
      ? "text-gold-light"
      : tone === "cream"
        ? "text-cream/80"
        : "text-wine";

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-3
        font-body
        text-xs
        sm:text-sm
        font-semibold
        tracking-[0.28em]
        uppercase
        ${toneClasses}
        ${className}
      `}
    >
      <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />

      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION HEADING */
/* -------------------------------------------------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}) {
  const alignClass =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  const titleTone = tone === "light" ? "text-cream" : "text-charcoal";

  const descTone = tone === "light" ? "text-cream/75" : "text-brown";

  return (
    <div
      className={`
        flex
        flex-col
        gap-4
        max-w-2xl
        ${alignClass}
        ${className}
      `}
    >
      {eyebrow && (
        <Eyebrow tone={tone === "light" ? "gold" : "wine"}>{eyebrow}</Eyebrow>
      )}

      <h2
        className={`
          font-display
          font-medium
          text-balance
          leading-[1.05]
          text-3xl
          sm:text-4xl
          lg:text-5xl
          ${titleTone}
        `}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`
            font-body
            text-base
            sm:text-lg
            leading-relaxed
            ${descTone}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}
