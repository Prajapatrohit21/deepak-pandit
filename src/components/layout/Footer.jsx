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

            {/* Social Media Links */}
            <div className="mt-5 pt-4 border-t border-gold/20">
              <p className="text-xs font-semibold text-gold mb-3 font-devanagari flex items-center gap-1.5">
                <span>✦</span>
                <span>{lang === 'hi' ? 'सोशल मीडिया पर जुड़ें:' : 'Connect on Social Media:'}</span>
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://youtube.com/@ujjainkepandit21?si=Se-LrqHsRSi2QUv5"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube - @ujjainkepandit21"
                  aria-label="Pandit Deepak Pandya YouTube Channel"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-600/15 hover:bg-red-600 text-red-500 hover:text-white border border-red-500/30 transition-all duration-300 text-xs font-bold group shadow-sm hover:shadow-red-500/20"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube</span>
                </a>
                <a
                  href="https://www.instagram.com/mahadev_anushthan__kendra?evlk=NDJ1Zjk0cG13cHJn"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram - @mahadev_anushthan__kendra"
                  aria-label="Mahadev Anushthan Kendra Instagram Profile"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-tr from-[#f09433]/15 via-[#dc2743]/15 to-[#bc1888]/15 hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-pink-400 hover:text-white border border-pink-500/30 transition-all duration-300 text-xs font-bold group shadow-sm hover:shadow-pink-500/20"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
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
          <div className="flex items-center gap-3">
            <span className="text-xs text-cream/50 font-devanagari">{t({ hi: 'सोशल मीडिया:', en: 'Social Media:' })}</span>
            <a
              href="https://youtube.com/@ujjainkepandit21?si=Se-LrqHsRSi2QUv5"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube (@ujjainkepandit21)"
              aria-label="YouTube Channel"
              className="w-8 h-8 rounded-full bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white border border-red-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mahadev_anushthan__kendra?evlk=NDJ1Zjk0cG13cHJn"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram (@mahadev_anushthan__kendra)"
              aria-label="Instagram Profile"
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-pink-400 hover:text-white border border-pink-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <p className="text-xs text-cream/50 text-center font-devanagari">
            © 2026 Mangal Dosh Puja Nivaran (मंगल दोष पूजन), उज्जैन। सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
}
