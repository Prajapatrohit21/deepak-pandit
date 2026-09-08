// ============================================================
// Navbar.jsx — Sticky header with lang toggle + mobile menu
// ============================================================
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { CONTENT } from '../../data/content';
import logoImg from '../../assets/logo.png';

const C = CONTENT;

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const nav = C.nav;
  const isHome = location.pathname === '/';

  const navLinks = [
    { to: '/', label: nav.home },
    { to: '/about', label: nav.about },
    { to: '/services', label: nav.services, hasDropdown: true },
    { to: '/kundli-analysis', label: nav.kundli },
    { to: '/gallery', label: nav.gallery },
    { to: '/testimonials', label: nav.testimonials },
    { to: '/blog', label: nav.blog },
    { to: '/contact', label: nav.contact },
  ];

  const navBg = scrolled
    ? 'bg-divine-dark/98 backdrop-blur-md shadow-2xl'
    : isHome
    ? 'bg-transparent'
    : 'bg-divine-dark';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${
          scrolled ? 'py-2' : 'py-3'
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Image Logo */}
          <Link to="/" className="flex items-center group py-0.5" aria-label="Home">
            <img
              src={logoImg}
              alt="मंगल पूजा - Mangal Puja"
              className="h-20 sm:h-28 md:h-32 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-devanagari ${
                    isActive
                      ? 'text-gold bg-white/10'
                      : 'text-cream/80 hover:text-gold hover:bg-white/8'
                  }`
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>

          {/* Right: Lang Toggle + Book Now + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="lang-toggle" role="group" aria-label="Language toggle">
              <button
                onClick={() => { if (lang !== 'hi') toggleLang(); }}
                className={lang === 'hi' ? 'active' : ''}
                aria-pressed={lang === 'hi'}
              >
                हिं
              </button>
              <button
                onClick={() => { if (lang !== 'en') toggleLang(); }}
                className={lang === 'en' ? 'active' : ''}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            {/* Book Now CTA (desktop) */}
            <Link
              to="/booking"
              className="hidden sm:inline-flex btn-gold text-sm py-2 px-4 font-devanagari"
            >
              {t(nav.bookNow)}
            </Link>

            {/* Hamburger (mobile) */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } bg-divine-dark/98 backdrop-blur-md border-t border-saffron/20`}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium font-devanagari transition-colors ${
                    isActive
                      ? 'text-gold bg-white/10'
                      : 'text-cream/80 hover:text-gold hover:bg-white/8'
                  }`
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
            <Link
              to="/booking"
              className="btn-gold text-center mt-2 font-devanagari"
            >
              {t(nav.bookNow)}
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
