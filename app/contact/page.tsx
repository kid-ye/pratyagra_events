const testimonials = [
  {
    quote:
      "Planning our wedding at Umaid Bhawan with PRATYAGRA EVENTS was a dream. Every detail felt like it was plucked from a historical epic.",
    author: "Princess Aditi V.",
  },
  {
    quote:
      "The cultural authenticity they brought to our corporate gala in Udaipur was unparalleled. Our international guests were truly mesmerized.",
    author: "Julian Sterling, CEO",
  },
  {
    quote:
      "Impeccable service, gold-standard hospitality, and a team that understands the weight of legacy. Simply the best in India.",
    author: "The Singhania Family",
  },
];

export default function ContactPage() {
  return (
    <div className="cq-page">
      <div className="cq-bg-pattern" />

      {/* ── Hero ── */}
      <section className="cq-hero">
        <div className="cq-hero-ornament">
          <div className="cq-hero-line" />
          <span className="material-symbols-outlined cq-hero-icon mandala-spin">
            settings_suggest
          </span>
          <div className="cq-hero-line" />
        </div>
        <h1 className="cq-hero-heading">Inquire with the Royals</h1>
        <p className="cq-hero-sub">
          Your journey to a legendary celebration begins here. Connect with our
          heritage consultants to curate an event that transcends time.
        </p>
      </section>

      {/* ── Primary Action: Form + Quick Contact ── */}
      <section className="cq-action">
        {/* Consultation Form */}
        <div className="cq-form-panel">
          <p className="cq-panel-eyebrow">Step One</p>
          <h2 className="cq-panel-heading">Request a Consultation</h2>
          <form className="cq-form">
            <div className="cq-form-row">
              <div className="cq-field">
                <label className="cq-label">Full Name</label>
                <input
                  className="cq-input"
                  type="text"
                  placeholder="e.g. Maharaj Vikram Singh"
                />
              </div>
              <div className="cq-field">
                <label className="cq-label">Event Type</label>
                <select className="cq-input cq-select">
                  <option>Palace Wedding</option>
                  <option>Royal Banquet</option>
                  <option>Cultural Heritage Gala</option>
                  <option>Private Estate Event</option>
                </select>
              </div>
            </div>
            <div className="cq-form-row">
              <div className="cq-field">
                <label className="cq-label">Expected Budget (INR)</label>
                <input
                  className="cq-input"
                  type="text"
                  placeholder="e.g. 50,00,000+"
                />
              </div>
              <div className="cq-field">
                <label className="cq-label">Preferred Date</label>
                <input className="cq-input" type="date" />
              </div>
            </div>
            <div className="cq-field">
              <label className="cq-label">Your Vision</label>
              <textarea
                className="cq-input cq-textarea"
                rows={4}
                placeholder="Share the details of your dream celebration..."
              />
            </div>
            <button type="submit" className="cq-submit">
              Request a Consultation
              <span className="material-symbols-outlined cq-submit-arrow">
                arrow_right_alt
              </span>
            </button>
          </form>
        </div>

        {/* Quick Contact Panel */}
        <div className="cq-contact-panel">
          <div className="cq-contact-inner">
            {/* Decorative icon */}
            <span className="material-symbols-outlined cq-contact-deco">
              temple_hindu
            </span>

            <p className="cq-panel-eyebrow cq-panel-eyebrow--light">
              Quick Connect
            </p>
            <h2 className="cq-contact-heading">
              Let&apos;s Craft Your
              <br />
              Royal Celebration
            </h2>
            <p className="cq-contact-body">
              Our heritage consultants are available around the clock for
              bespoke, personalised assistance.
            </p>

            <div className="cq-contact-actions">
              <a href="https://wa.me/yournumber" className="cq-whatsapp">
                <span className="material-symbols-outlined">chat</span>
                <span>WhatsApp Quick Connect</span>
              </a>
              <a href="tel:+917014473061" className="cq-phone">
                <span className="material-symbols-outlined">call</span>
                <span>+91 7014473061</span>
              </a>
            </div>
          </div>

          {/* Location card */}
          <div className="cq-location">
            <div className="cq-location-img-wrap">
              <img
                className="cq-location-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu2wXSFs5y2W0zOKC2N5RE_uHpFqWcypnE0o6va3qrlmRK8OJnr-gotxwTrGNVYw0fj5EOjXo6ufSIB0UDl2ssk0iCLaZlSkZO16exYzyECjiHv3y_-oHB1fwNjnk7seMp_B0J5q7WarE31iyGpVUW3rT0t2HEK0AgiHuGqH5eneJ9P3aP-gKBHeNta43NYhS16WmGkCveVvVfsgNVQ_iu2P6H5c4cjPBVSmXgvqQercXhmHeOs_E6Fvv2uJh5_rjLLkp5eaIpXcQ"
                alt="Jaipur Heritage Office"
              />
              <div className="cq-location-overlay">
                <span className="material-symbols-outlined cq-location-pin">
                  location_on
                </span>
                <p className="cq-location-name">Jaipur Office</p>
                <p className="cq-location-addr">
                  Ajmer Road, Jaipur, Rajasthan
                </p>
                <a
                  href="https://maps.app.goo.gl/P1y3gv8aGt9Rgx1S6"
                  target="_blank"
                  rel="noreferrer"
                  className="cq-directions"
                >
                  Get Directions
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "0.9rem" }}
                  >
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="cq-testimonials">
        <div className="cq-testimonials-header">
          <div className="cq-hero-ornament">
            <div className="cq-hero-line" />
            <span
              className="material-symbols-outlined cq-hero-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              vignette
            </span>
            <div className="cq-hero-line" />
          </div>
          <p className="cq-panel-eyebrow" style={{ textAlign: "center" }}>
            Patron Voices
          </p>
          <h2 className="cq-testimonials-heading">Words of Our Patrons</h2>
        </div>
        <div className="cq-testimonials-grid">
          {testimonials.map(({ quote, author }, i) => (
            <div
              key={author}
              className="cq-testimonial-card"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="cq-stars">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    className="material-symbols-outlined cq-star"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="cq-testi-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="cq-testi-quote">{quote}</p>
              <p className="cq-testi-author">— {author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative spinner */}
      <div className="fixed bottom-8 right-8 pointer-events-none opacity-20 z-10">
        <span className="material-symbols-outlined text-8xl text-[#D4AF37] mandala-spin">
          settings_suggest
        </span>
      </div>
    </div>
  );
}
