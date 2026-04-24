import Link from "next/link";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/our-story", label: "services" },
  { href: "/services", label: "Palace Weddings" },
  { href: "/services#gallery", label: "Gallery" },
  { href: "/contact", label: "Inquiry" },
];

const offices = [
  {
    city: "Office Jaipur",
    address: "City Palace Precinct,\nJaipur, Rajasthan",
  },
  {
    city: "Contact",
    address: "Vikram Singh\n+91 7014473061",
  },
];

const socials = [
  { icon: "photo_camera", label: "Instagram" },
  { icon: "alternate_email", label: "Email" },
  { icon: "share", label: "Share" },
];

export default function Footer() {
  return (
    <footer className="footer-royal">
      {/* Ornamental top divider */}
      <div className="footer-top-ornament">
        <div className="footer-ornament-line" />
        <span className="material-symbols-outlined footer-ornament-icon">
          settings_suggest
        </span>
        <div className="footer-ornament-line" />
      </div>

      <div className="footer-inner">
        {/* Brand block */}
        <div className="footer-brand">
          <p className="footer-brand-name">PRATYAGRA EVENTS</p>
          <p className="footer-brand-sub">Curators of Royal Celebrations</p>
          {/* Social icons */}
          <div className="footer-socials">
            {socials.map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="footer-social-btn"
              >
                <span className="material-symbols-outlined">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <nav className="footer-nav">
          {navLinks.map(({ href, label }) => (
            <Link key={label} href={href} className="footer-nav-link">
              {label}
            </Link>
          ))}
        </nav>

        {/* Office columns */}
        <div className="footer-offices">
          {offices.map(({ city, address }, i) => (
            <div
              key={city}
              className={`footer-office-col${i < offices.length - 1 ? " footer-office-col--bordered" : ""}`}
            >
              <p className="footer-office-heading">{city}</p>
              <p className="footer-office-address">
                {address.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j === 0 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <div className="footer-bottom-line" />
        <div className="footer-bottom-row">
          <p className="footer-copy">
            © 2018 Pratyagra Events. All Rights Reserved.
          </p>
          <div className="footer-legal-links">
            <Link href="#" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="footer-legal-sep">·</span>
            <Link href="#" className="footer-legal-link">
              Terms of Heritage
            </Link>
            <span className="footer-legal-sep">·</span>
            <Link href="/contact" className="footer-legal-link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
