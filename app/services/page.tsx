import Link from "next/link";

const services = [
  {
    icon: "favorite",
    title: "Destination Weddings",
    desc: "Full-scale management of royal weddings across iconic Rajasthan forts.",
    label: "Signature",
    featured: true,
  },
  {
    icon: "business_center",
    title: "Corporate Events",
    desc: "Regal retreats and gala dinners for high-profile executive gatherings.",
    label: null,
    featured: false,
  },
  {
    icon: "theater_comedy",
    title: "Cultural Events",
    desc: "Folk festivals and traditional art showcases curated for elite guests.",
    label: "Most Requested",
    featured: false,
  },
  {
    icon: "wine_bar",
    title: "Private Celebrations",
    desc: "Anniversaries and bespoke gatherings in intimate courtyard settings.",
    label: null,
    featured: false,
  },
  {
    icon: "palette",
    title: "Decor & Styling",
    desc: "Exquisite jaali lattices, silk draping, and royal floral arrangements.",
    label: null,
    featured: false,
  },
];

const galleryItems = [
  {
    title: "The Maharani's Vow",
    sub: "Udaipur City Palace",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Xu-anTwIa0wowMyDpLJ0eUyoQ5guvDTyeYLHg5hiy3SdZez9sPcJjetLA77LUV4rpi54WBGm5XlI7bbb7M_OM51MjI2P0EpkWnT9nQPxPCjsYWlSQKrLef_Z-lkm-ok_JhFwHZgCD_ID-XYT-UGQXp89r-P-t4x59AGekFr6TGyIt3AoNeVttWGmgM1Qw1LwqWFG3N86fBnDz6WlDsJ2z1Z9g51YVp561JARKqQW-XlORjg7y3i6svF7s7Rsh83ava_DYfSkj8M",
  },
  {
    title: "Desert Glow Sangeet",
    sub: "Jodhpur Fort",
    span: "md:col-span-4",
    aspect: "aspect-square",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl8DhIYTCw2h50Vk1h_TqQN7d3ud9uV2vMVw_pEjMam-wQpuz9ZujtGBS_8gZ7t0yY1PXI_jjwRZQ7pl3K1-UuMKvmRl96e1Xo4-CkaGE2ueDal_bl-7dFfKEpQpvoJnqE5UCzBXntTDgspblrUZLpXLIqL20I7P9gfaqsya9I8TC8uPHypSx8AFrPBoaH_877oA_0HidmrWH6jWPgYt00HC_0RC4KSu9AlnDpcMR5niss91vsRis7IQTZU5sZwgv0ePRwDMBKChA",
  },
  {
    title: "Fortune 500 Gala",
    sub: "Rambagh Palace",
    span: "md:col-span-4",
    aspect: "aspect-square",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuConnqrO4AVsq_4yageAY1_qahqKowCM0kbqSW-8vElpMzaEd1C8xlczBAtb_wT15f39PCEdghNvL0SfcZwfNEbrBTcBbgf6CFpwFWB-9sf3-gImRcu3h5Ky3MmKfG31SldlKQbgtyisPolhOZxKaBp79usQuNE4oyHQbN3ycwXp9LKlJWeiod204fIZDML6fgRFlmWQ2wxhcwn6bhvpuKzQAIqS2v1rnDwFj7-hiwG_VivM4G9GQ4nUor97EgXU1aBFFUHmN5EN0s",
  },
  {
    title: "Intimate Mehendi",
    sub: "Samode Haveli",
    span: "md:col-span-4",
    aspect: "aspect-square",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH-tPnYzTuln0EK5fE24AXH47O-k8dteXNXghbQQpQByVj9QJ5hOCTSekY5e0oYXyHjh_7TZx74QQK4XklPbWqkkgkaGpQU6v8SAQuXruZZbZuN2_Hkf7habzHQH6e5CZo-05lX6bNIvYHWafnsyHUGCAM09lJEodSa2zE2thmZy8e28NLUZ7O4GHFicgiVuU8nstLcO74p_4zO3H1RsmZz9Z9p-4YEhKQTVVl-_OiZRAUrgvR2ij6b2daliafjHPSuzQ-FDGHevo",
  },
  {
    title: "Floating Fantasy",
    sub: "Lake Pichola",
    span: "md:col-span-4",
    aspect: "aspect-square",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeQ2dA6cHZSY5n53Cp0N2liPmK7HO1OBixrtbro5Kz3M8PLiIWleS0gtyJVtpXQcdxKIKz0wCc-sOCfJJcdDi2WAaduB9LoIHUHrYkWjzOMi9FLRyeIsS5pi9FiFtEegumo16tscMUlJci6rO28QJcQ-rk1UMzpHK7PkhRU-0Kmbc3OTSFHDh5xBNtBaZS71l1tZb3M2szLpjvfwBKGbAJOhDiYX91nkdSbCfJ_I1PeaOHcwRaAsEmW5NE7K0K9ZYO8Nps6im_gtM",
  },
];

export default function servicesPage() {
  return (
    <div className="bg-background text-on-background min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 jaali-dots pointer-events-none" />

      {/* Hero */}
      <section className="relative pt-24 pb-16 px-8 text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="material-symbols-outlined text-secondary text-5xl">
            star_rate
          </span>
        </div>
        <h1
          className="text-primary text-5xl mb-4"
          style={{ fontFamily: "Noto Serif, serif", fontWeight: 700 }}
        >
          Curated Heritage Experiences
        </h1>
        <div className="w-48 h-px bg-secondary mx-auto mb-8" />
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto italic">
          From the sand dunes of Jaisalmer to the floating palaces of Udaipur,
          we orchestrate events that transcend time and tradition.
        </p>
      </section>

      {/* Services Grid */}
      <section className="svc-section">
        {/* Row 1: featured + 2 */}
        <div className="svc-row svc-row--top">
          {services.slice(0, 3).map(({ icon, title, desc, label, featured }, i) => (
            <div
              key={title}
              className={`svc-card${featured ? " svc-card--featured" : ""}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {label && <span className="svc-label">{label}</span>}
              <div className="svc-icon-wrap">
                <span
                  className="material-symbols-outlined svc-icon"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}
                >
                  {icon}
                </span>
              </div>
              <div className="svc-divider" />
              <h3 className="svc-title">{title}</h3>
              <p className="svc-desc">{desc}</p>
            </div>
          ))}
        </div>
        {/* Row 2: 2 cards centered */}
        <div className="svc-row svc-row--bottom">
          {services.slice(3).map(({ icon, title, desc, label }, i) => (
            <div
              key={title}
              className="svc-card"
              style={{ animationDelay: `${(i + 3) * 0.12}s` }}
            >
              {label && <span className="svc-label">{label}</span>}
              <div className="svc-icon-wrap">
                <span
                  className="material-symbols-outlined svc-icon"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}
                >
                  {icon}
                </span>
              </div>
              <div className="svc-divider" />
              <h3 className="svc-title">{title}</h3>
              <p className="svc-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section
        id="gallery"
        className="py-16 px-8 bg-tertiary text-on-tertiary overflow-hidden"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-secondary pl-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-secondary">
                Our Legacy
              </span>
              <h2
                className="text-3xl mt-2"
                style={{ fontFamily: "Noto Serif, serif", fontWeight: 600 }}
              >
                The Portfolio Gallery
              </h2>
            </div>
            <div className="flex gap-6 mt-6 md:mt-0">
              {[
                "All Portfolio",
                "Weddings",
                "Mehendi/Sangeet",
                "Corporate",
              ].map((tab, i) => (
                <button
                  key={tab}
                  className={`text-xs uppercase tracking-widest pb-1 ${i === 0 ? "text-secondary border-b-2 border-secondary" : "opacity-60 hover:opacity-100 transition-opacity"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {galleryItems.map(({ title, sub, span, aspect, img }) => (
              <div
                key={title}
                className={`${span} group relative overflow-hidden haveli-frame ${aspect}`}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={img}
                  alt={title}
                />
                <div className="absolute inset-0 bg-[#002c31]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8">
                  <h4
                    className="text-on-tertiary text-xl"
                    style={{ fontFamily: "Noto Serif, serif" }}
                  >
                    {title}
                  </h4>
                  <p className="text-on-tertiary-container mt-2">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 text-center relative">
        <div className="max-w-2xl mx-auto p-12 haveli-frame bg-surface-container">
          <h2
            className="text-primary text-4xl mb-6"
            style={{ fontFamily: "Noto Serif, serif" }}
          >
            Begin Your Royal Chapter
          </h2>
          <p className="text-on-surface text-lg mb-8">
            Consult with our heritage event specialists to design an experience
            that mirrors the grandeur of Rajasthan&apos;s golden age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-on-primary text-xs uppercase tracking-[0.2em] hover:bg-tertiary transition-all"
            >
              Book Consultation
            </Link>
            <button className="px-8 py-4 border border-secondary text-primary text-xs uppercase tracking-[0.2em] hover:bg-secondary hover:text-on-secondary transition-all">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Decorative spinner */}
      <div className="fixed bottom-8 right-8 z-[100] w-12 h-12 flex items-center justify-center opacity-40 pointer-events-none">
        <span
          className="material-symbols-outlined text-4xl text-secondary animate-spin"
          style={{ animationDuration: "10s" }}
        >
          settings_suggest
        </span>
      </div>
    </div>
  );
}
