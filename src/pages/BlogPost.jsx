import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BLOG_POSTS } from "../data/blogPosts";
import NotFound from "./NotFound";

function renderParagraph(text) {
  const linkPattern = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  const parts = [];
  let cursor = 0;

  for (const match of text.matchAll(linkPattern)) {
    const index = match.index ?? 0;
    if (index > cursor) parts.push(text.slice(cursor, index));
    parts.push(
      <Link
        key={`${match[2]}-${index}`}
        className="font-semibold text-wine underline decoration-gold/60 underline-offset-2"
        to={match[2]}
      >
        {match[1]}
      </Link>,
    );
    cursor = index + match[0].length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

export default function BlogPost() {
  const { slug } = useParams();
  const content = BLOG_POSTS.find((item) => item.slug === slug);

  if (!content) return <NotFound />;

  return (
    <>
      <main id="main-content" className="min-h-screen bg-ivory">
        <Navbar variant="light" />
        <article>
          <header className="bg-[#EEE4D3] px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
            <div className="mx-auto max-w-4xl">
              <nav aria-label="Breadcrumb" className="font-body text-sm text-wine">
                <Link to="/">Home</Link>
                <span aria-hidden="true"> / </span>
                <Link to="/blog">Pattu Pavada Guides</Link>
              </nav>
              <p className="mt-8 font-body text-xs font-semibold uppercase tracking-[0.16em] text-wine">
                {content.primaryKeyword}
              </p>
              <h1 className="mt-3 font-display text-4xl leading-tight text-wine-dark sm:text-6xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-charcoal/75 sm:text-lg">
                {content.intro}
              </p>
              <p className="mt-5 font-body text-sm text-charcoal/60">
                Practical guide from Ethnic Collections, India.
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16">
            <img
              src="/img13.avif"
              alt="Traditional South Indian pattu pavada with decorative festive border"
              width="1122"
              height="1120"
              loading="lazy"
              decoding="async"
              className="mb-10 h-64 w-full object-cover object-top sm:mb-14 sm:h-[420px]"
            />
            <div className="space-y-10 sm:space-y-12">
              {content.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-2xl text-wine-dark sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 font-body text-[15px] leading-8 text-charcoal/80 sm:text-base">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.heading}-${index}`}>
                        {renderParagraph(paragraph)}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section
              aria-labelledby="article-faq-heading"
              className="mt-12 border-t border-gold-pale pt-10 sm:mt-16"
            >
              <h2
                id="article-faq-heading"
                className="font-display text-2xl text-wine-dark sm:text-3xl"
              >
                Frequently asked questions
              </h2>
              <div className="mt-6 space-y-6">
                {(Array.isArray(content.faqs) ? content.faqs : []).map(({ q, a }) => (
                  <div key={q}>
                    <h3 className="font-display text-lg text-charcoal">{q}</h3>
                    <p className="mt-2 font-body leading-7 text-charcoal/75">{a}</p>
                  </div>
                ))}
              </div>
            </section>
            <p className="mt-10 border-t border-gold-pale pt-6 font-body leading-7 text-charcoal/75">
              Ethnic Collections serves customers
              across India. Explore{" "}
              <Link className="font-semibold text-wine underline" to="/b2c">
                pattu pavada for girls
              </Link>{" "}
              or learn about{" "}
              <Link className="font-semibold text-wine underline" to="/b2b">
                wholesale pattu pavada
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
