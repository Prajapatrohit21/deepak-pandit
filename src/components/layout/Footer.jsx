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
  const { t, lang } = useLanguage();
  const foot = C.footer;
  const nav = C.nav;

  const quickLinks = [
    { to: '/', label: nav.home },
    { to: '/about', label: nav.about },
    { to: '/services', label: nav.services },
    { to: '/kundli-analysis', label: nav.kundli },
    { to: '/mangalnath-mandir-ujjain', label: { hi: 'मंगलनाथ मंदिर कैसे पहुंचे', en: 'Reach Mangalnath' } },
    { to: '/bahar-ke-shahar-puja-booking', label: { hi: 'बाहर के शहरों से बुकिंग', en: 'Outstation Booking' } },
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
            <p className="text-sm leading-relaxed text-cream/70 mb-4 font-devanagari">
              {lang === 'hi'
                ? 'मंगल दोष पूजन केंद्र — वैदिक पंडित दीपक पंड्या (15+ वर्षों का अनुभव)। मंगलनाथ मंदिर व महाकाल की पावन नगरी उज्जैन में समस्त वैदिक पूजन एवं अनुष्ठान।'
                : 'Mangal Dosh Puja Nivaran — Pandit Deepak Pandya (15+ years experience). Authentic Vedic rituals and pujas at Mangalnath Temple, Ujjain.'}
            </p>
            {/* Full NAP Contact Info */}
            <div className="flex flex-col gap-2.5 text-sm">
              <a href={PHONE_HREF} onClick={() => trackPhoneCall('footer')} className="flex items-center gap-2 hover:text-gold transition-colors font-medium">
                <span>📞</span> +91 62634 01651
              </a>
              <a href={WA_HREF} onClick={() => trackWhatsAppClick('footer')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors font-medium">
                <span>💬</span> WhatsApp (24x7)
              </a>
              <a href="mailto:mangaldoshpujanivaran@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors text-xs text-cream/70">
                <span>✉️</span> mangaldoshpujanivaran@gmail.com
              </a>
              <div className="flex items-start gap-2 text-xs text-cream/70 font-devanagari pt-1">
                <span>📍</span>
                <span>मंगलनाथ मंदिर क्षेत्र, उज्जैन, मध्य प्रदेश</span>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent('मंगल दोष पूजा उज्जैन | वैदिक पंडित दीपक पंड्या - https://mangaldoshpujanivaran.in/')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const text = `${document.title} - ${window.location.href}`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-devanagari font-medium transition-colors"
                  aria-label="WhatsApp पर शेयर करें"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp पर शेयर करें</span>
                </a>
              </div>
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
