import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <main id="main-content" className="min-h-[70vh] bg-ivory">
        <Navbar variant="light" />
        <section className="mx-auto max-w-4xl px-5 pb-20 pt-40 sm:px-8">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-wine">
            404 · Page not found
          </p>
          <h1 className="mt-4 font-display text-4xl text-wine-dark sm:text-5xl">
            We could not find that page
          </h1>
          <p className="mt-5 font-body leading-7 text-charcoal/75">
            The page may have moved. Browse our pattu pavada collection or return
            to the home page.
          </p>
          <div className="mt-7 flex flex-wrap gap-5">
            <Link className="font-semibold text-wine underline" to="/">
              Pattu Pavadas home
            </Link>
            <Link className="font-semibold text-wine underline" to="/collection">
              Pattu pavada and pattu langa collection
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
