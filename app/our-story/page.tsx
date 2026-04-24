import Link from "next/link";

const experiences = [
  {
    label: "Palatial Union",
    title: "Palace-themed Weddings",
    desc: "Exchange vows under a canopy of stars in ancient courtyards where kings once stood.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASctkNQZ2l2ZkPDtODfdNDWwOX96k0Lsojh5AELQit3sCN9QQHAVlrjN-461r1aVN6LzWDvikEShs71Q7ZnhmbfSm0415Hd6qlPGvQBxdmDs6ZZ6VxD-ns_cR5e2GINSzDZ3CK9uLY3n57XGs6efVZOHCZPj9qeJzuxRT1dvN0-7HcJOp5tceTM0irCZaEy_wmanZP79Lv_kNHxcewArjsnTt9BKnStbAgfHH7T5xEndyPD1snQpT17x1LbPCCLAkjDmWj1LfVlJs",
  },
  {
    label: "Living Art",
    title: "Folk Performances",
    desc: "Witness the mesmerizing Ghoomar and Kalbeliya dancers accompanied by soulful Manganiyar melodies.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlDHCwl8pW_hnkpGgD_W6nG6-T10BqwhOXX1J2gdhCV-qsu_vPBd1_Ox2VqQNFvjiOD1D4RMe6lhwPUkuIxfWDMVR4bVdaKFCzylGxul-FiDfzb7igoQeLb-Wetc3ZqVCTw2y_8S0tQKwBnRQPFjeCZBQmiIPpFlZLtxC-goUuATOHNOSz1U29LsS1o9KLSRfE-2UJyc_c7-uLQ4C_sNs2FnmW7XyfF_CqtZNkmCg1sM59uXuEy9ZQx-GlgVNHek7BVRr3DFrGZeY",
  },
  {
    label: "Regal Arrival",
    title: "Elephant & Horse Processions",
    desc: "Make an entrance that echoes through history with decorated tusks and silver-saddled steeds.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC83bTsxdHpsoXC-IKx9OfWpP06TZP0l5ohkpt1w7V4GGXQmtFu0XZevDN_nZGmVHYpLJyk91RXr9GTHFcu4OOu_0tLDV0329L6biO-XtNov25TurF4HCqj2VNU5_ex8P7SLnjqrubGPjiZFkUuKSjy5MH1ERaY0Z2A6Hzcm-XALkAGh5LBYUXGSLgAQMOjNsbFvIXFGg7RnhQ9BRKdGRY5QvhEF74WXC91ncxlE8fa9YiVuKxC-HnaP50cf5rP7YN9_LxGQ6GRLkk",
  },
  {
    label: "Culinary Royalty",
    title: "Royal Dining",
    desc: "Indulge in a curated 'Thali' experience featuring recipes preserved for generations in royal kitchens.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPiyP7jbsNNzTLoelAT66yYP-EIYJj759V4mndHcfgrqw3QzC573NBQYluoACN8FIvxMC4p6KI0IWIdHz6GUbLatfvqAi71KE7vRqoax6jEQ275YsjcB2cnrxWIIJvd4Zfg88CXOgMvqz_qQAKM9ED7PqnpBbQfZ5CDrMTXEbwePMt9EYeLCAk9bhxHeGlVWGE72gnfXxOFCatOsMlN2zOFOzjie-O0mbiW4gt3T5NAxd2oVxexbexS6Sug6UD0QST8ov6S-2MdUc",
  },
];

const values = [
  {
    icon: "diamond",
    title: "Authenticity",
    desc: "We partner exclusively with certified heritage sites and local master artisans.",
  },
  {
    icon: "castle",
    title: "Exclusivity",
    desc: "Access to private estates and hidden bastions not available to the public.",
  },
  {
    icon: "verified",
    title: "Meticulous Detail",
    desc: "Every thread, spice, and note is hand-selected by our heritage experts.",
  },
];

export default function OurStoryPage() {
  return (
    <div className="bg-background text-on-surface">
      {/* Hero: Brand Philosophy */}
      <section className="legacy-section">
        {/* Background image at low opacity */}
        <div className="legacy-bg-img">
          <img
            alt=""
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEYBG_cmgU4XxyuP8DZTzBceRVC_mWr29B4m0Q5CpG3jQAPXcExk56n6mHfZ5B9pCBvlUu1U-MEnm0GLONMX-pqYvLRcztpwt3mlAmvHzFJ946LXM2G734XLKht48GjcqNiny5nCBiDdb1jFHYMmnpsvolc52xcdc8uX0g610rz0QtLU3bmrFXCn77hxkzWVt9Yuvt-deEa_sJmzaaw3Pm1on1Knj3MmiCPvJG0dZVUoe9ZOHyFlCoZvLTuUIOgU3wWsqCAgRIg4c"
          />
        </div>

        {/* Heritage plaque panel */}
        <div className="legacy-panel">
          {/* Corner accents */}
          {[
            "legacy-corner--tl",
            "legacy-corner--tr",
            "legacy-corner--bl",
            "legacy-corner--br",
          ].map((cls) => (
            <span key={cls} className={`legacy-corner ${cls}`} />
          ))}

          {/* Icon */}
          <div className="legacy-icon-wrap">
            <span className="material-symbols-outlined legacy-icon">
              universal_currency
            </span>
          </div>

          {/* Heading */}
          <h1 className="legacy-heading">A Legacy of Grandeur</h1>

          {/* Ornamental rule */}
          <div className="legacy-rule">
            <div className="legacy-rule-line" />
            <span className="material-symbols-outlined legacy-rule-icon mandala-spin">
              settings_suggest
            </span>
            <div className="legacy-rule-line" />
          </div>

          {/* Quote */}
          <div className="legacy-quote-wrap">
            <span className="legacy-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="legacy-quote">
              At PRATYAGRA EVENTS, we do not merely plan celebrations; we weave
              modern narratives into the timeless fabric of Rajputana&apos;s
              soul. Our philosophy is rooted in &lsquo;Atithi Devo
              Bhava&rsquo;—where every guest is a deity, and every moment is an
              heirloom.
            </p>
          </div>

          {/* Bottom rule */}
          <div className="legacy-rule legacy-rule--bottom">
            <div className="legacy-rule-line" />
            <span
              className="material-symbols-outlined legacy-rule-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              vignette
            </span>
            <div className="legacy-rule-line" />
          </div>

          {/* Est. */}
          <p className="legacy-est">Est. 2018</p>
        </div>
      </section>

      {/* Founder Note */}
      <section className="founder-section">
        <div className="founder-inner">
          {/* Image column */}
          <div className="founder-image-col">
            <div className="founder-frame">
              <img
                alt="Distinguished Indian gentleman in traditional royal sherwani"
                className="founder-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUglurUkVMGldouRGFZt6hgQ-eHEWgG6194_oB7CTo4bh-nJmO6qrnZaYtQj92oTeKtPBGqfxfDFA2EVNFEFYEwPkciuQBveR82gPadg7-dcAUlN5DoHhY5AwrLUslBkD6_83DuD0cu4XhuEOG8WAGZgWqm5OF1ec5LbfNeSV0zr-tpSfCfI1eTkWk6D6GSyRQyyms9l-fB3uISr7QgeL3S64T3Acna7bgGe47RebM5_2cAWKQZzgQV3LXaj3dw_UBqKx3zsdSZPg"
              />
              {/* Offset shadow frame */}
              <div className="founder-frame-shadow" />
            </div>
          </div>

          {/* Text column */}
          <div className="founder-text-col">
            {/* Section label */}
            <div className="founder-label-wrap">
              <span className="material-symbols-outlined founder-label-icon">
                history_edu
              </span>
              <span className="founder-label">Founder&apos;s Note</span>
              <div className="founder-label-line" />
            </div>

            <h2 className="founder-heading">
              Preserving the Soul
              <br />
              of Rajasthan
            </h2>

            {/* Editorial quote body */}
            <div className="founder-quote-wrap">
              <span className="founder-quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="founder-body">
                Having grown up within the storied halls of Jaipur, I learned
                that true luxury is not defined by opulence, but by the legacy
                it carries. PRATYAGRA EVENTS was envisioned as a way to bring
                this heritage to life, crafting weddings and gatherings that
                reflect the artistry, warmth, and traditions passed down through
                generations.
              </p>
            </div>

            {/* Founder identity */}
            <div className="founder-identity">
              <div className="founder-identity-line" />
              <p className="founder-name">— Vikram Singh Rajawat</p>
              <p className="founder-title">Chairman &amp; Founder</p>
            </div>

            <Link href="/contact" className="founder-cta">
              Our Full Story
              <span className="material-symbols-outlined founder-cta-arrow">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Experiences Carousel */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2
              className="text-primary text-3xl uppercase mb-2"
              style={{ fontFamily: "Noto Serif, serif" }}
            >
              Signature Experiences
            </h2>
            <p className="text-on-surface-variant">
              The Pinnacle of Rajputana Hospitality
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="w-12 h-12 border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="w-12 h-12 border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-8 px-6 md:px-24 hide-scrollbar pb-12">
          {experiences.map(({ label, title, desc, img }) => (
            <div
              key={title}
              className="min-w-[400px] bg-surface haveli-frame-corners group cursor-pointer overflow-hidden border-0"
            >
              <div className="relative h-[500px] overflow-hidden">
                <img
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8 text-on-primary">
                  <span className="text-xs uppercase tracking-widest mb-2 opacity-80">
                    {label}
                  </span>
                  <h3
                    className="text-2xl mb-4"
                    style={{ fontFamily: "Noto Serif, serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="pillars-section">
        <div className="pillars-header">
          <div className="pillars-label-wrap">
            <div className="pillars-label-line" />
            <span className="pillars-label">The Pratyagra Standard</span>
            <div className="pillars-label-line" />
          </div>
          <h2 className="pillars-heading">Our Philosophy</h2>
        </div>
        <div className="pillars-grid">
          {values.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className={`pillar-card${i === 1 ? " pillar-card--featured" : ""}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="pillar-icon-wrap">
                <span
                  className="material-symbols-outlined pillar-icon"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}
                >
                  {icon}
                </span>
              </div>
              <div className="pillar-divider" />
              <h4 className="pillar-title">{title}</h4>
              <p className="pillar-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
