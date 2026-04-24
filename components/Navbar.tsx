"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/services", label: "Services" },
  { href: "/services#gallery", label: "Gallery" },
  { href: "/contact", label: "Inquiry" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar-royal ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-gold-line" />
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">PRATYAGRA EVENTS</Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} className={`navbar-link ${active ? "navbar-link--active" : ""}`}>
                  {label}
                  {active && <span className="navbar-dot" />}
                </Link>
              );
            })}
          </nav>

          {/* Hamburger */}
          <button
            className="navbar-menu-btn md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
        <div className="navbar-gold-line" />
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div className="mobile-drawer" onClick={() => setMenuOpen(false)}>
          <nav className="mobile-drawer-nav" onClick={(e) => e.stopPropagation()}>
            {/* Ornament */}
            <div className="mobile-drawer-ornament">
              <div className="mobile-drawer-line" />
              <span className="material-symbols-outlined mobile-drawer-icon mandala-spin">settings_suggest</span>
              <div className="mobile-drawer-line" />
            </div>

            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`mobile-drawer-link ${active ? "mobile-drawer-link--active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                  {active && <span className="mobile-drawer-dot" />}
                </Link>
              );
            })}

            <div className="mobile-drawer-ornament" style={{ marginTop: "1rem" }}>
              <div className="mobile-drawer-line" />
              <span className="material-symbols-outlined mobile-drawer-icon" style={{ fontVariationSettings: "'FILL' 1" }}>vignette</span>
              <div className="mobile-drawer-line" />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
