// ============================================================
// Footer.jsx — Rich footer with links, contact, legal
// ============================================================
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { CONTENT } from '../../data/content';
import { SERVICES } from '../../data/services';
import { WA_HREF, PHONE_HREF } from '../../utils/whatsapp';
import { trackWhatsAppClick, trackPhoneCall } from '../../utils/analytics';
import logoImg from '../../assets/logo.png';

const C = CONTENT;

export default function Footer() {
  const { t } = useLanguage();
  const foot = C.footer;
  const nav = C.nav;

  const quickLinks = [
    { to: '/', label: nav.home },
    { to: '/about', label: nav.about },
    { to: '/services', label: nav.services },
    { to: '/gallery', label: nav.gallery },
    { to: '/testimonials', label: nav.testimonials },
    { to: '/blog', label: nav.blog },
    { to: '/contact', label: nav.contact },
    { to: '/booking', label: nav.bookNow },
  ];

  return (
    <footer className="bg-footer-gradient text-cream/80 pt-16 pb-24 md:pb-8 relative overflow-hidden w-full">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logoImg}
                alt="मंगल पूजा - Mangal Puja"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]"
              />
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 mb-4 font-devanagari">
              {t(foot.description)}
            </p>
            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-sm">
              <a href={PHONE_HREF} onClick={() => trackPhoneCall('footer')} className="flex items-center gap-2 hover:text-gold transition-colors">
                <span>📞</span> +91 6263401651
              </a>
              <a href={WA_HREF} onClick={() => trackWhatsAppClick('footer')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                <span>💬</span> WhatsApp
              </a>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span className="font-devanagari">{t(C.location)}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-gold font-bold mb-4 font-devanagari text-sm uppercase tracking-widest">
              {t(foot.quickLinks)}
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/60 hover:text-gold transition-colors font-devanagari flex items-center gap-1.5"
                  >
                    <span className="text-saffron text-xs">›</span>
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-gold font-bold mb-4 font-devanagari text-sm uppercase tracking-widest">
              {t(foot.services)}
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-cream/60 hover:text-gold transition-colors font-devanagari flex items-center gap-1.5"
                  >
                    <span className="text-saffron text-xs">›</span>
                    {t(s.hi?.name) || s.en?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal + Hours */}
          <div>
            <h3 className="text-gold font-bold mb-4 font-devanagari text-sm uppercase tracking-widest">
              {t(foot.legal)}
            </h3>
            <ul className="flex flex-col gap-2 mb-6">
              <li>
                <Link to="/terms-conditions" className="text-sm text-cream/60 hover:text-gold transition-colors font-devanagari flex items-center gap-1.5">
                  <span className="text-saffron text-xs">›</span>{t(foot.terms)}
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-cream/60 hover:text-gold transition-colors font-devanagari flex items-center gap-1.5">
                  <span className="text-saffron text-xs">›</span>{t(foot.privacy)}
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-cream/60 hover:text-gold transition-colors font-devanagari flex items-center gap-1.5">
                  <span className="text-saffron text-xs">›</span>{t(foot.disclaimer)}
                </Link>
              </li>
            </ul>
            <div className="border-t border-saffron/20 pt-4">
              <p className="text-xs text-cream/50 font-devanagari">⏰ प्रातः 6:00 — रात्रि 9:00</p>
              <p className="text-xs text-cream/50">All Days (Mon–Sun)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-saffron/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gold font-devanagari text-sm text-center font-medium animate-glow">
            {t(foot.tagline)}
          </p>
          <p className="text-xs text-cream/40 text-center font-devanagari">
            {t(foot.copyright)}
          </p>
        </div>
      </div>
    </footer>
  );
}
