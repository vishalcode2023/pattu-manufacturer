import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ZariDivider } from "../components/Decorative";
import { getWhatsAppLink } from "../config/site";

const toc = [
  ["why-special", "What makes it special"],
  ["choose", "How to choose"],
  ["styles", "Popular styles"],
  ["occasions", "Dressing for occasions"],
  ["retailers", "A guide for retailers"],
  ["manufacturer", "Choosing a manufacturer"],
  ["care", "Care and storage"],
];

function ArticleSection({ id, title, children }) {
  return <section id={id} className="scroll-mt-28 border-t border-gold-pale pt-9 sm:pt-12">
    <h2 className="font-display text-2xl sm:text-3xl text-wine-dark">{title}</h2>
    <div className="mt-5 space-y-5 font-body text-[15px] sm:text-base leading-8 text-charcoal/80">{children}</div>
  </section>;
}

const points = [
  ["Rich colours", "Jewel tones, bright festive shades, pastels and classic combinations suit different occasions and personal tastes."],
  ["Traditional details", "Borders, woven motifs, pleats and decorative finishing add depth and visual interest."],
  ["Coordinated styling", "A matching or contrasting blouse brings the complete traditional look together."],
  ["Occasion versatility", "Choose designs for festivals, weddings, naming ceremonies, cultural programmes and family functions."],
];

export default function Blog() {
  return <main id="main-content" className="bg-ivory min-h-screen">
    <Navbar variant="light" />
    <header className="relative pt-32 sm:pt-40 pb-14 sm:pb-20 overflow-hidden bg-[#EEE4D3]">
      <div className="absolute inset-0 opacity-[0.12]" aria-hidden="true"><img src="/img13.avif" alt="" className="w-full h-full object-cover object-center" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#EEE4D3] via-[#EEE4D3]/95 to-[#EEE4D3]/55" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-wine hover:text-wine-dark"><ArrowLeft size={14}/> Back to home</Link>
        <p className="mt-9 font-body text-xs font-semibold uppercase tracking-[0.26em] text-wine">The Pattu Pavadas Journal · Style &amp; tradition</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.06] text-wine-dark">The Timeless Beauty<br className="hidden sm:block"/> of Pattu Pavada</h1>
        <p className="mt-6 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-charcoal/75">A guide to South Indian traditional elegance, from choosing the right festive look to caring for a treasured outfit.</p>
        <div className="mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-charcoal/55"><span>Style guide</span><span className="text-gold">•</span><span>8 min read</span></div>
      </div>
    </header>
    <ZariDivider />
    <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-[250px_minmax(0,760px)] gap-10 lg:gap-20 items-start">
      <aside className="lg:sticky lg:top-28 bg-cream border border-gold-pale p-6 sm:p-7">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-wine">In this guide</p>
        <nav aria-label="Article contents" className="mt-5 space-y-3">{toc.map(([id, label], i) => <a key={id} href={`#${id}`} className="flex gap-3 text-sm leading-snug text-charcoal/70 hover:text-wine transition-colors"><span className="font-display text-wine/50">0{i + 1}</span>{label}</a>)}</nav>
        <div className="mt-7 pt-6 border-t border-gold-pale"><p className="font-display text-lg text-wine-dark">Shopping for a special occasion?</p><a href={getWhatsAppLink("Hi, I'd like to explore your Pattu Pavada collection.")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-wine hover:text-wine-dark">Ask us on WhatsApp <ArrowRight size={15}/></a></div>
      </aside>
      <article className="min-w-0">
        <p className="font-display text-xl sm:text-2xl leading-relaxed text-charcoal">Pattu pavada, also known as pattu langa or langa blouse attire in many South Indian communities, is cherished for its rich colours, graceful silhouette and festive appeal.</p>
        <p className="mt-5 font-body text-[15px] sm:text-base leading-8 text-charcoal/75">Worn by young girls for festivals, family celebrations, temple visits and milestone occasions, the ensemble brings together a traditional skirt and a coordinating blouse. Silk textures, woven borders, zari-inspired details and thoughtful colour combinations give every design its own character.</p>
        <div className="my-9 sm:my-12 relative h-64 sm:h-[390px] overflow-hidden"><img src="/img13.avif" alt="Traditional pattu pavada festive outfit with decorative border" className="w-full h-full object-cover object-top"/><div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/60 to-transparent p-5 sm:p-7"><p className="font-display text-xl sm:text-2xl text-cream">Tradition, woven into every detail.</p></div></div>
        <p className="mb-10 font-body text-[15px] sm:text-base leading-8 text-charcoal/75">For families, a pattu pavada can become part of treasured photographs, cultural celebrations and memories. For boutiques and retailers, well-made designs are a valued part of a festive ethnic-wear collection.</p>
        <div className="space-y-10 sm:space-y-12">
          <ArticleSection id="why-special" title="What makes a pattu pavada special?"><div className="grid sm:grid-cols-2 gap-4">{points.map(([title, text])=><div key={title} className="bg-cream border border-gold-pale p-5"><span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-wine/10 text-wine"><Check size={15}/></span><h3 className="mt-3 font-display text-lg text-wine-dark">{title}</h3><p className="mt-2 text-sm leading-6">{text}</p></div>)}</div></ArticleSection>
          <ArticleSection id="choose" title="How to choose the right pattu pavada"><p><strong className="text-charcoal">Consider the occasion.</strong> Heavier embellishment and rich colours may suit weddings and major celebrations, while simpler designs can be comfortable choices for smaller gatherings and festive days.</p><p><strong className="text-charcoal">Check fabric and comfort.</strong> Look at fabric composition, lining, weight and finish. Comfort matters, especially for children wearing an outfit for several hours.</p><p><strong className="text-charcoal">Choose the right fit.</strong> Check the size chart, waist and blouse measurements, and garment length. For a growing child, follow the maker’s sizing guidance rather than assuming one size fits all.</p><p><strong className="text-charcoal">Match colours thoughtfully.</strong> A coordinated blouse creates a classic look; a contrasting shade can make the outfit more vibrant.</p><p><strong className="text-charcoal">Review care instructions.</strong> Follow the garment label and the seller’s recommendations for cleaning, storage and handling.</p></ArticleSection>
          <ArticleSection id="styles" title="Popular styles and design ideas"><p>Traditional preferences vary across regions and families. These design directions are enduring favourites in festive collections:</p><ul className="space-y-3">{["Classic silk-look designs with traditional colours and woven-style borders", "Zari-border designs that complement festive jewellery", "Contrast blouse combinations in complementary or vivid shades", "Floral and motif designs for a playful, celebratory appearance", "Contemporary festive styles with updated colours and traditional inspiration"].map(x=><li key={x} className="flex gap-3"><span className="mt-3 w-1.5 h-1.5 shrink-0 rounded-full bg-gold"/>{x}</li>)}</ul></ArticleSection>
          <ArticleSection id="occasions" title="For festivals, weddings and family celebrations"><p>A pattu pavada can be styled for many important occasions. For festivals, families may prefer bright colours and traditional accessories. For weddings and family ceremonies, richer borders and coordinated blouses create a more formal appearance. For cultural programmes and school celebrations, consider the dress requirements and choose a design that allows ease of movement.</p><p>Bangles, earrings, hair flowers and traditional footwear can complete the look. Keep the wearer’s comfort and age in mind, and avoid accessories that may be uncomfortable or unsafe for young children.</p></ArticleSection>
          <ArticleSection id="retailers" title="A practical guide for boutiques and retailers"><p>For boutiques and ethnic-wear retailers, choosing a reliable pattu pavada manufacturer is an important step in building a consistent collection. Consider product quality, stitching and finishing, available sizes, design range, order minimums, production lead times, packaging and communication. Ask for current product photographs, clear specifications and samples where available.</p><p>A useful collection can include classic festive designs, varied colour combinations and options across size ranges. Before confirming a bulk order, clarify pricing, customisation, delivery timelines, return or defect policies, and the exact fabric and embellishment details. These details help retailers plan inventory and set accurate expectations.</p></ArticleSection>
          <ArticleSection id="manufacturer" title="What to look for in a pattu pavada manufacturer"><p>Look for a manufacturer that communicates clearly and provides consistent product information. Before sourcing for your boutique, ask:</p><ul className="space-y-3">{["What fabrics and designs are currently available?", "Which sizes can be ordered, and is there a size chart?", "Are bulk orders or custom colour combinations available?", "What are the minimum order quantity and production lead time?", "How are products packed and shipped?", "What happens if an item arrives damaged or differs from the agreed specification?"].map(q=><li key={q} className="flex gap-3"><span className="mt-3 w-1.5 h-1.5 shrink-0 rounded-full bg-gold"/>{q}</li>)}</ul></ArticleSection>
          <ArticleSection id="care" title="Caring for your pattu pavada"><p>Care requirements depend on the fabric, dye, lining and embellishments. Check the care label before cleaning, avoid harsh chemicals unless recommended, and store the outfit clean and fully dry. Use a breathable garment cover and avoid placing heavy items on decorative borders. For delicate silk or heavily decorated garments, professional cleaning may be the safest option.</p></ArticleSection>
        </div>
        <section className="mt-12 sm:mt-16 bg-wine-dark text-cream p-7 sm:p-10">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold-light">Celebrating tradition, made for today</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl leading-snug">Find a look for her next beautiful moment.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-cream/75">Whether you are choosing an outfit for a family celebration or building a boutique collection, thoughtful fabric selection and careful finishing make a difference.</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3"><Link to="/b2c" className="inline-flex justify-center items-center gap-2 bg-gold-light text-wine-dark px-5 py-3 text-sm font-semibold">Explore the collection <ArrowRight size={15}/></Link><a href={getWhatsAppLink("Hi, I'm a boutique / retailer interested in your Pattu Pavada collection. Please share current styles, sizes, bulk order details and availability.")} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 border border-cream/40 px-5 py-3 text-sm font-semibold"><MessageCircle size={15}/> Enquire on WhatsApp</a></div>
        </section>
      </article>
    </div>
    <Footer />
  </main>;
}
