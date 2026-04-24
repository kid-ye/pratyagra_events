import Link from "next/link";

export default function HomePage() {
  return (
    <div className="jaali-pattern">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image — blurred, slow zoom */}
        <div className="absolute inset-0 z-0 hero-zoom">
          <img
            className="w-full h-full object-cover"
            src="/jaipur.jpg"
            style={{ filter: "blur(3px)", transform: "scale(1.08)" }}
            alt="Majestic palace at dusk decorated for a royal wedding"
          />
        </div>

        {/* Layered gradient overlay — preserves image detail, darkens bottom */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(30,0,0,0.35) 0%, rgba(10,0,0,0.55) 60%, rgba(0,0,0,0.82) 100%)",
          }}
        />

        {/* Subtle grain texture for cinematic feel */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        {/* Gold corner frame — integrated, not pasted */}
        <div
          className="absolute inset-6 z-[3] pointer-events-none"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.25)",
          }}
        >
          {/* Corner accents */}
          {[
            "top-0 left-0",
            "top-0 right-0",
            "bottom-0 left-0",
            "bottom-0 right-0",
          ].map((pos, i) => (
            <span
              key={i}
              className={`absolute ${pos} w-8 h-8`}
              style={{
                borderTop: i < 2 ? "1.5px solid #D4AF37" : "none",
                borderBottom: i >= 2 ? "1.5px solid #D4AF37" : "none",
                borderLeft: i % 2 === 0 ? "1.5px solid #D4AF37" : "none",
                borderRight: i % 2 === 1 ? "1.5px solid #D4AF37" : "none",
              }}
            />
          ))}
        </div>

        {/* Hero content — entrance animation */}
        <div className="relative z-[4] text-center px-6 max-w-4xl mx-auto hero-enter">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-[#D4AF37]/60 text-[#D4AF37] text-[10px] uppercase tracking-[0.35em]"
            style={{
              fontFamily: "Manrope, sans-serif",
              backdropFilter: "blur(4px)",
              background: "rgba(0,0,0,0.2)",
            }}
          >
            <span className="w-1 h-1 rounded-full bg-[#D4AF37] inline-block" />
            Est. 2018
            <span className="w-1 h-1 rounded-full bg-[#D4AF37] inline-block" />
          </div>

          {/* Main heading */}
          <h1
            className="text-white mb-4 leading-[1.1] tracking-tight"
            style={{
              fontFamily: "Noto Serif, serif",
              fontWeight: 700,
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              textShadow:
                "0 2px 30px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)",
            }}
          >
            Crafting Royal <br />
            Celebrations
          </h1>

          {/* Subheading — clearly secondary */}
          <p
            className="text-white/60 mb-10 tracking-[0.15em] uppercase"
            style={{
              fontFamily: "Noto Serif, serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              fontWeight: 400,
              textShadow: "0 1px 8px rgba(0,0,0,0.5)",
            }}
          >
            Inspired by Rajasthan
          </p>

          {/* Gold rule */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span
              className="material-symbols-outlined text-[#D4AF37] mandala-spin"
              style={{ fontSize: "1rem" }}
            >
              settings_suggest
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/contact"
              className="hero-btn-primary px-12 py-4 font-serif uppercase tracking-widest text-sm"
            >
              Plan Your Event
            </Link>
            <Link
              href="/services"
              className="hero-btn-secondary px-12 py-4 font-serif uppercase tracking-widest text-sm"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[4] flex flex-col items-center gap-2">
          <span
            className="text-[#D4AF37]/70 text-[10px] uppercase tracking-[0.3em]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37]/80 to-transparent" />
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="flex items-center justify-center py-16 px-12">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[#D4AF37]" />
        <div className="mx-8">
          <span className="material-symbols-outlined text-[#D4AF37] scale-150">
            settings_suggest
          </span>
        </div>
        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#D4AF37]" />
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-image-col">
          {/* Layered premium frame */}
          <div className="about-frame">
            <img
              className="about-img"
              src="history.jpg"
              alt="Intricate hand-embroidered royal Rajasthani silk fabric"
            />
            {/* Floating accent card — anchored bottom-right, overlapping image */}
            <div className="about-card">
              <span
                className="material-symbols-outlined text-[#D4AF37] text-xl mb-2 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                diamond
              </span>
              <span
                className="text-primary text-sm leading-snug"
                style={{ fontFamily: "Noto Serif, serif" }}
              >
                Legacy of
                <br />
                Splendor
              </span>
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <p className="about-eyebrow">Our Heritage</p>
          <h2 className="about-heading">
            Where History Meets
            <br />
            Modern Magnificence
          </h2>
          <p className="about-body">
            PRATYAGRA EVENTS is not just an event management firm; it is a
            custodian of Rajasthani heritage. For three decades, we have curated
            bespoke experiences that mirror the grandeur of the Maharajas,
            blending centuries-old traditions with contemporary luxury.
          </p>
          <div className="about-quote-block">
            <blockquote className="about-quote">
              &ldquo;Every celebration is a verse in the epic poem of heritage.
              We do not just plan events; we weave legacies into the golden
              sands of time.&rdquo;
            </blockquote>
            <cite className="about-cite">— The House Philosophy</cite>
          </div>
          <Link
            href="/our-story"
            className="group flex items-center gap-3 text-primary font-serif tracking-widest uppercase text-xs mt-2"
          >
            Our Heritage Story
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2 text-base">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] block mb-4">
              The Collection
            </span>
            <h2
              className="text-primary text-5xl"
              style={{ fontFamily: "Noto Serif, serif" }}
            >
              Signature Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:h-[800px]">
            <div className="md:col-span-7 relative group overflow-hidden haveli-frame">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="updaipur.jpg"
                alt="Royal courtyard dinner under moonlit sky"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12">
                <h3
                  className="text-white text-3xl mb-4"
                  style={{ fontFamily: "Noto Serif, serif" }}
                >
                  Destination Weddings
                </h3>
                <p className="text-white/80 text-base max-w-md">
                  Theatrical dining experiences set within the historic ramparts
                  of Jodhpur&apos;s finest havelis.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 relative group overflow-hidden haveli-frame">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="haldi.jpg"
                alt="Luxury desert safari wedding setup"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12">
                <h3
                  className="text-white text-3xl mb-4"
                  style={{ fontFamily: "Noto Serif, serif" }}
                >
                  Luxury Sangeet & Mehendi
                </h3>
                <p className="text-white/80 text-base">
                  Luxury glamping and celestial celebrations amidst the vast,
                  golden Thar desert.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 relative group overflow-hidden haveli-frame">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC22IwCkCSvmU_tHMmliQI6MWJ_-4lWu0aWfUPUrTipO1tU8hUV_VCQrA2zB5Up-r6ohcmId0PJ-ffIVHZiWcvkGk2G9mtoOLTVYpPAzBd5KVhhHAbqfU8ufFYB9DhiIEwknEXEqEJs1XCPRjelMComDhavaK77FXEuY_q9a21yQQGZDhjsBXijcZLv_Z80_9lyeHZ3HoTo0p0fzKy1jnGtuV0PgFsGnquX7cnhKuPibMCQJICiXU91SlTBL9Uey_RT19GwtQRL8yE"
                alt="Bride wearing traditional heavy kundan jewelry"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                <h3
                  className="text-white text-2xl mb-2"
                  style={{ fontFamily: "Noto Serif, serif" }}
                >
                  Bridal & Groom Styling
                </h3>
                <p className="text-white/70 text-sm">
                  Bespoke styling and traditional rituals.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 relative group overflow-hidden haveli-frame">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="sangeet.jpeg"
                alt="Lake Palace Udaipur illuminated at night"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                <h3
                  className="text-white text-2xl mb-2"
                  style={{ fontFamily: "Noto Serif, serif" }}
                >
                  Reception & After Parties
                </h3>
                <p className="text-white/70 text-sm">
                  The magic of Udaipur&apos;s shimmering waters and floating
                  palaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl border-2 border-double border-[#D4AF37] p-16 relative bg-white shadow-2xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-6">
            <span
              className="material-symbols-outlined text-[#D4AF37]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          </div>
          <h2
            className="text-primary text-4xl mb-8"
            style={{ fontFamily: "Noto Serif, serif" }}
          >
            Ready to Write Your <br />
            Royal Chapter?
          </h2>
          <p className="text-on-surface-variant mb-10">
            Each inquiry is handled with the same discretion and attention to
            detail that we afford our events. Allow us to curate a proposal that
            transcends your expectations.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="btn-royal px-12 py-4 font-serif uppercase tracking-widest text-sm"
            >
              Begin Your Royal Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
