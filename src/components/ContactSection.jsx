// components/ContactSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow, ZariDivider } from "./Decorative";
import Navbar from "./Navbar";
import Footer from "./Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const DETAILS = [
  { label: "Enquiries", value: "orders@yourbrand.com" },
  { label: "Phone / WhatsApp", value: "+91 00000 00000" },
  {
    label: "Unit Address",
    value: "Textile Manufacturing Unit, Tamil Nadu, India",
  },
  { label: "Response Time", value: "Within 1 business day" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    quantity: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your form endpoint / API route.
    setSent(true);
  };

  return (
    <>
      <div className="relative bg-ivory">
        <Navbar variant="light" />

        <section
          id="contact"
          className="relative bg-ivory py-24 sm:py-32 overflow-hidden"
        >
          {/* Ambient glow, consistent with the rest of the site */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-8 right-[-10%] w-[560px] h-[560px] rounded-full bg-gold-light/20 blur-[120px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              className="lg:col-span-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Eyebrow>Get In Touch</Eyebrow>
              <h2 className="mt-5 font-display font-medium text-charcoal text-balance leading-[1.05] text-4xl sm:text-5xl">
                Place a Bulk Order,
                <br />
                Or Just Say Hello.
              </h2>
              <ZariDivider className="max-w-[140px] mt-8" />
              <dl className="mt-10 space-y-6 max-w-sm">
                {DETAILS.map((d) => (
                  <div key={d.label} className="border-t border-gold/30 pt-4">
                    <dt className="font-body text-xs uppercase tracking-widest text-brown">
                      {d.label}
                    </dt>
                    <dd className="mt-1 font-display text-lg text-wine">
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
            >
              {sent ? (
                <div className="border border-gold/40 p-10 text-center">
                  <p className="font-display text-2xl text-wine">
                    Message sent.
                  </p>
                  <p className="mt-2 font-body text-brown">
                    We'll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Field
                    label="Approx. Quantity (for bulk orders)"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                  />
                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-brown">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="mt-2 w-full border-b border-gold/40 bg-transparent py-2 font-body text-charcoal focus:outline-none focus:border-wine resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center gap-2 bg-wine text-cream font-body text-sm font-semibold tracking-wide px-8 py-3.5 hover:bg-charcoal transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

function Field({ label, name, value, onChange, type = "text", required }) {
  return (
    <div>
      <label className="font-body text-xs uppercase tracking-widest text-brown">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-2 w-full border-b border-gold/40 bg-transparent py-2 font-body text-charcoal focus:outline-none focus:border-wine"
      />
    </div>
  );
}