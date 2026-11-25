import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { CONTENT } from '../../data/content';
import { WA_HREF, PHONE_HREF } from '../../utils/whatsapp';
import logoImg from '../../assets/logo.png';

const C = CONTENT;

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const nav = C.nav;

  const navLinks = [
    { to: '/', label: nav.home, title: 'मुख्य पृष्ठ - मंगल दोष पूजन उज्जैन', aria: 'Home' },
    { to: '/about', label: nav.about, title: 'वैदिक पंडित दीपक पंड्या जी का परिचय एवं 15+ वर्षों की परंपरा', aria: 'About Pandit Deepak Pandya' },
    { to: '/services', label: nav.services, title: 'उज्जैन में समस्त वैदिक पूजा एवं अनुष्ठान सेवाएं', aria: 'Vedic Puja Services' },
    { to: '/kundli-analysis', label: nav.kundli, title: 'जन्म कुंडली विश्लेषण एवं मांगलिक दोष परीक्षण', aria: 'Kundli Analysis' },
    { to: '/gallery', label: nav.gallery, title: 'उज्जैन पूजा दर्शन एवं सिद्ध पीठ अनुष्ठान फोटो गैलरी', aria: 'Photo Gallery' },
    { to: '/testimonials', label: nav.testimonials, title: 'संतुष्ट भक्तों के अनुभव एवं Google 5-स्टार समीक्षाएं', aria: 'Devotee Reviews' },
    { to: '/blog', label: nav.blog, title: 'वैदिक ज्ञान, पूजा विधि एवं धार्मिक आलेख', aria: 'Religious Blog' },
    { to: '/contact', label: nav.contact, title: 'पंडित जी से संपर्क एवं उज्जैन मंदिर का पता', aria: 'Contact Information' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#FFFDF9]/98 shadow-[0_2px_20px_rgba(45,27,0,0.08)] backdrop-blur-md py-1.5'
          : 'bg-[#FFFDF9] py-2.5'
          } border-b border-[#E8DCC8]`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 group py-0.6 shrink-0"
            aria-label="मंगल दोष पूजन उज्जैन - मुख्य पृष्ठ"
            title="मंगल दोष पूजन उज्जैन - मुख्य पृष्ठ"
          >
            <img
              src={logoImg}
              alt="मंगल दोष पूजन उज्जैन - वैदिक पंडित दीपक पंड्या Logo"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20 md:h-24'}`}
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-[#1F160F] font-heading font-black text-sm sm:text-base leading-tight">मंगल दोष पूजन</span>
              <span className="text-[#8C7A6B] text-[10px] sm:text-xs font-medium">| उज्जैन</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                title={link.title}
                aria-label={link.aria}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 ${isActive
                    ? 'text-[#B45309] bg-[#D97706]/10'
                    : 'text-[#3D2E1F] hover:text-[#B45309] hover:bg-[#D97706]/5'
                  }`
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="flex rounded-lg overflow-hidden border border-[#E8DCC8] text-xs">
              <button
                onClick={() => { if (lang !== 'hi') toggleLang(); }}
                className={`px-2 py-1.5 font-bold transition-colors ${lang === 'hi' ? 'bg-[#D97706] text-white' : 'bg-white text-[#5C4A3A] hover:bg-[#FAF7F2]'}`}
                aria-pressed={lang === 'hi'}
                title="हिंदी भाषा चुनें"
                aria-label="Switch to Hindi language"
              >
                हिं
              </button>
              <button
                onClick={() => { if (lang !== 'en') toggleLang(); }}
                className={`px-2 py-1.5 font-bold transition-colors ${lang === 'en' ? 'bg-[#D97706] text-white' : 'bg-white text-[#5C4A3A] hover:bg-[#FAF7F2]'}`}
                aria-pressed={lang === 'en'}
                title="Switch to English"
                aria-label="Switch to English language"
              >
                EN
              </button>
            </div>

            <a
              href={PHONE_HREF}
              title="पंडित दीपक पंड्या जी को कॉल करें: +91 62634 01651"
              aria-label="Call Pandit Deepak Pandya at +91 62634 01651"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white text-xs font-bold shadow-sm hover:shadow-md transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" /></svg>
              +91 62634 01651
            </a>

            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp पर 24x7 पूजा परामर्श एवं बुकिंग"
              aria-label="Chat with Pandit Deepak Pandya on WhatsApp"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-sm hover:bg-[#1EBE5D] transition-all"
            >
              WhatsApp
            </a>

            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#D97706]/10 transition-colors shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              title="नेविगेशन मेनू खोलें / बंद करें"
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-[#1F160F] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#1F160F] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#1F160F] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            } bg-[#FFFDF9] border-t border-[#E8DCC8]`}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                title={link.title}
                aria-label={link.aria}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive
                    ? 'text-[#B45309] bg-[#D97706]/10'
                    : 'text-[#3D2E1F] hover:text-[#B45309] hover:bg-[#D97706]/5'
                  }`
                }
              >
                {t(link.label)}
              </NavLink>
            ))}

            <div className="flex gap-2 mt-3 pt-3 border-t border-[#E8DCC8]">
              <a
                href={PHONE_HREF}
                title="पंडित दीपक पंड्या जी को कॉल करें: +91 62634 01651"
                aria-label="Call Pandit Deepak Pandya"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-gradient-to-r from-[#D97706] to-[#B45309] text-white text-sm font-bold"
              >
                📞 Call
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp पर चैट करें"
                aria-label="Chat on WhatsApp"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#25D366] text-white text-sm font-bold"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
