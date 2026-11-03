import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BLOG_POST_METADATA } from "../data/blogPostMetadata";

export default function Blog() {
  return (
    <>
      <main id="main-content" className="min-h-screen bg-ivory">
        <Navbar variant="light" />
        <header className="bg-[#EEE4D3] px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <div className="mx-auto max-w-7xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-wine">
              The Pattu Pavadas Journal
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-wine-dark sm:text-6xl">
              Pattu Pavada Guides for Families and Boutiques
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal/75 sm:text-lg">
              Practical advice on choosing pattu pavada and pattu pavadai for
              girls, finding the right fit, caring for festive silk and sourcing
              pattu langa for a boutique. For readers
              across India and beyond.
            </p>
          </div>
        </header>

        <section
          aria-label="Pattu pavada articles"
          className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:grid-cols-2 sm:px-8 sm:py-20 lg:grid-cols-3"
        >
          {BLOG_POST_METADATA.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col border border-gold-pale bg-cream p-6 sm:p-8"
            >
              <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-wine">
                {post.primaryKeyword}
              </p>
              <h2 className="mt-4 font-display text-2xl leading-snug text-wine-dark">
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:text-wine transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 flex-1 font-body text-sm leading-7 text-charcoal/75">
                {post.description}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-wine"
              >
                Read the guide <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 sm:pb-20">
          <div className="border-t border-gold-pale pt-8">
            <h2 className="font-display text-2xl text-wine-dark">
              Browse pattu pavada and pattu langa
            </h2>
            <p className="mt-3 max-w-3xl font-body leading-7 text-charcoal/75">
              Families can explore{" "}
              <Link className="font-semibold text-wine underline" to="/b2c">
                pattu pavada for girls
              </Link>
              ; boutiques can learn about{" "}
              <Link className="font-semibold text-wine underline" to="/b2b">
                wholesale pattu pavada
              </Link>
              . Our team serves customers across India.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
