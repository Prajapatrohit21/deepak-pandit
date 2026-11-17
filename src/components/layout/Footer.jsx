// ============================================================
// Footer.jsx — Pandits Of Banaras Luxury Vedic Footer
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
    { to: '/gallery', label: nav.gallery },
    { to: '/testimonials', label: nav.testimonials },
    { to: '/mangalnath-mandir-ujjain', label: { hi: 'मंगलनाथ मंदिर दर्शन गाइड', en: 'Mangalnath Temple Guide' } },
    { to: '/bahar-ke-shahar-puja-booking', label: { hi: 'बाहर के शहरों से पूजा बुकिंग', en: 'Outstation Booking' } },
    { to: '/blog', label: nav.blog },
    { to: '/contact', label: nav.contact },
    { to: '/booking', label: nav.bookNow },
  ];

  return (
    <footer className="bg-[#1C0A00] text-cream/80 pt-16 pb-24 md:pb-8 relative overflow-hidden w-full border-t border-gold/30">

      {/* Background Om watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5" aria-hidden="true">
        <span className="font-devanagari text-white text-[280px]">ॐ</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Top Trust & Verification Banner inside Footer */}
        <div className="bg-[#2D1400]/70 border border-gold/30 rounded-2xl p-4 sm:p-6 mb-12 flex flex-wrap items-center justify-between gap-4 backdrop-blur-sm">
          {/* Google Review Badge */}
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <div className="flex text-amber-400 text-sm leading-none">★★★★☆</div>
            <span className="font-bold text-white text-sm">3.9</span>
            <span className="text-gold/90 text-xs sm:text-sm font-devanagari">
              {t({ hi: '(56+ Google प्रमाणित समीक्षाएं)', en: '(56+ Verified Google Reviews)' })}
            </span>
          </div>

          {/* Verified Purohit Badge */}
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs sm:text-sm font-semibold">
            <svg className="w-5 h-5 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>{t({ hi: 'उज्जैन सिद्ध पीठ अधिकृत वैदिक पुरोहित', en: 'Verified Ujjain Siddha Peeth Purohit' })}</span>
          </div>

          {/* Direct WhatsApp Pill */}
          <a
            href={WA_HREF}
            onClick={() => trackWhatsAppClick('footer_top_bar')}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp पर 24x7 निःशुल्क पूजा परामर्श एवं बुकिंग"
            aria-label="24x7 WhatsApp Consultation"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            <span>💬 24x7 WhatsApp Consultation</span>
          </a>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">

          {/* Col 1: Brand & NAP */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-block mb-4"
              title="मंगल दोष पूजन उज्जैन - मुख्य पृष्ठ"
              aria-label="मंगल दोष पूजन होम पेज"
            >
              <img
                src={logoImg}
                alt="मंगल दोष पूजन उज्जैन - वैदिक पंडित दीपक पंड्या Logo"
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]"
                loading="lazy"
              />
            </Link>
            <p className="text-sm leading-relaxed text-cream/70 mb-4 font-devanagari">
              {lang === 'hi'
                ? 'मंगल दोष पूजन — वैदिक पंडित दीपक पंड्या (15+ वर्षों का अनुभव)। मंगलनाथ मंदिर व महाकाल की पावन नगरी उज्जैन में समस्त वैदिक पूजन एवं अनुष्ठान।'
                : 'Mangal Dosh Puja Nivaran — Led by Vedic Pandit Deepak Pandya (15+ years experience). Authentic Vedic rituals and pujas at Mangalnath Temple, Ujjain.'}
            </p>

            {/* Full NAP Contact Info */}
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneCall('footer')}
                title="पंडित दीपक पंड्या जी को तुरंत कॉल करें: +91 62634 01651"
                aria-label="Call Pandit Deepak Pandya at +91 62634 01651"
                className="flex items-center gap-2 text-gold font-bold hover:text-white transition-colors"
              >
                <span>📞</span> +91 62634 01651
              </a>
              <a
                href={WA_HREF}
                onClick={() => trackWhatsAppClick('footer')}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp पर 24x7 चैट एवं पूजा बुकिंग"
                aria-label="Chat with Pandit Deepak Pandya on WhatsApp"
                className="flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
              >
                <span>💬</span> WhatsApp पर संपर्क (24x7)
              </a>
              <a
                href="mailto:mangaldoshpujanivaran@gmail.com"
                title="ईमेल द्वारा संपर्क करें: mangaldoshpujanivaran@gmail.com"
                aria-label="Email Pandit Deepak Pandya at mangaldoshpujanivaran@gmail.com"
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-xs"
              >
                <span>✉️</span> mangaldoshpujanivaran@gmail.com
              </a>
              <div className="flex items-start gap-2 text-xs text-cream/70 font-devanagari pt-1">
                <span>📍</span>
                <span>श्री मंगलनाथ मंदिर क्षेत्र, उज्जैन (मध्य प्रदेश) 456001</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-gold font-bold mb-4 font-heading text-sm uppercase tracking-widest border-b border-gold/20 pb-2">
              {t(foot.quickLinks)}
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    title={`${t(link.label)} - मंगल दोष पूजन उज्जैन`}
                    aria-label={t(link.label)}
                    className="text-sm text-cream/70 hover:text-gold transition-colors font-devanagari flex items-center gap-1.5"
                  >
                    <span className="text-gold text-xs">✦</span>
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-gold font-bold mb-4 font-heading text-sm uppercase tracking-widest border-b border-gold/20 pb-2">
              {t(foot.services)}
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    title={`${t(s.hi?.name) || s.en?.name} - संपूर्ण विधि, समय व बुकिंग विवरण`}
                    aria-label={t(s.hi?.name) || s.en?.name}
                    className="text-sm text-cream/70 hover:text-gold transition-colors font-devanagari flex items-center gap-1.5"
                  >
                    <span className="text-gold text-xs">✦</span>
                    {t(s.hi?.name) || s.en?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Timings & Outstation Sankalp */}
          <div>
            <h3 className="text-gold font-bold mb-4 font-heading text-sm uppercase tracking-widest border-b border-gold/20 pb-2">
              {t({ hi: 'परामर्श व अनुष्ठान समय', en: 'Consultation & Timings' })}
            </h3>
            <div className="bg-[#2D1400]/60 p-4 rounded-xl border border-gold/20 mb-4">
              <p className="text-xs text-gold font-bold mb-1 font-devanagari">⏰ पूजन समय (दैनिक):</p>
              <p className="text-xs text-cream/80">प्रातः 6:00 बजे से रात्रि 9:00 बजे तक</p>
              <p className="text-xs text-cream/50 mt-1">सभी 7 दिन (सोमवार — रविवार)</p>
            </div>

            <div className="bg-[#2D1400]/60 p-4 rounded-xl border border-gold/20">
              <p className="text-xs text-emerald-400 font-bold mb-1 font-devanagari">🌐 ऑनलाइन संकल्प सुविधा:</p>
              <p className="text-xs text-cream/80 leading-relaxed font-devanagari">
                बाहर के शहरों (Indore, Bhopal, Delhi, Mumbai आदि) के यजमानों हेतु लाइव वीडियो संकल्प उपलब्ध।
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gold font-heading text-sm text-center font-bold tracking-wider">
            ॥ ॐ श्री मंगलनाथाय नमः ॥
          </p>
          <p className="text-xs text-cream/50 text-center font-devanagari">
            © 2026 Mangal Dosh Puja Nivaran (मंगल दोष पूजन), उज्जैन। सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
}
