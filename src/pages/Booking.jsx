// ============================================================
// Booking.jsx — Pandits Of Banaras Luxury Dedicated Booking Page
// ============================================================
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import BookingForm from '../components/ui/BookingForm';
import { WA_HREF, PHONE_HREF } from '../utils/whatsapp';
import { trackWhatsAppClick, trackPhoneCall } from '../utils/analytics';
import SectionHeading from '../components/ui/SectionHeading';
import SEO from '../components/common/SEO';
import panditImg from '../assets/pandit_deepak_pandya.jpg';

const C = CONTENT;

export default function Booking() {
  const { t, lang } = useLanguage();
  const bk = C.booking;
  const location = useLocation();
  const defaultService = location.state?.service || '';

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const bookingTitle = lang === 'hi'
    ? 'पूजा बुकिंग उज्जैन | मंगल भात, कालसर्प, रुद्राभिषेक शुभ मुहूर्त'
    : 'Book Puja in Ujjain | Mangal Bhat, Kaal Sarp, Rudrabhishek Muhurat';

  const bookingDesc = lang === 'hi'
    ? 'उज्जैन में वैदिक पंडित दीपक पंड्या से पूजा बुक करें। मंगल भात पूजा, कालसर्प दोष, रुद्राभिषेक सहित सभी वैदिक अनुष्ठान के लिए शुभ मुहूर्त एवं ऑनलाइन संकल्प सेवा उपलब्ध।'
    : 'Book any Vedic Puja in Ujjain with Pandit Deepak Pandya. Mangal Bhat Puja, Kaal Sarp Dosh, Rudrabhishek — in-person or online sankalp with video proof.';

  const steps = [
    { n: '1', hi: 'विवरण भरें', en: '1. Fill Details', desc: 'नाम, मोबाइल, पूजा का प्रकार एवं समस्या' },
    { n: '2', hi: 'शुभ मुहूर्त तय करें', en: '2. Fix Muhurat', desc: 'पंडित जी से अनुकूल तिथि व समय तय करें' },
    { n: '3', hi: 'संकल्प व पूजा', en: '3. Puja & Sankalp', desc: 'उज्जैन पधारकर या ऑनलाइन लाइव संकल्प से' },
  ];

  return (
    <main className="pt-20 bg-[#FAF7F2] text-[#2D1B00]">
      <SEO
        title={bookingTitle}
        description={bookingDesc}
        canonical="https://mangaldoshpujanivaran.in/booking"
      />
      
      {/* ── Page Header ── */}
      <section
        className="py-16 sm:py-24 text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] border-b border-[#E8DCC8]"
        aria-labelledby="booking-page-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,_rgba(139,26,26,0.06)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gold/60 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold font-sans uppercase tracking-wider mb-4 shadow-xs">
            <span className="text-gold">✦</span>
            <span>{t({ hi: 'प्रामाणिक पूजन संकल्प एवं बुकिंग • उज्जैन', en: 'Vedic Puja Sankalp & Booking • Ujjain' })}</span>
            <span className="text-gold">✦</span>
          </span>

          <h1 id="booking-page-heading" className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F160F] leading-tight mb-4">
            {t(bk.heading)}
          </h1>

          <p className="text-[#5C4D3E] font-devanagari text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {t(bk.subheading)}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full mx-auto mt-6" />
        </div>
      </section>

      {/* ── 3-Step Process Timeline ── */}
      <section className="py-10 bg-white border-b border-[#E8DCC8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DCC8]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D97706] to-[#B45309] text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
                  {step.n}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#1F160F]">{step.hi}</h4>
                  <p className="text-xs text-[#5C4D3E] font-devanagari">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Booking Layout ── */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column */}
            <div data-aos="fade-right" className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#E8DCC8] shadow-[0_12px_40px_rgba(45,27,0,0.08)]">
                <div className="mb-6">
                  <span className="bg-[#F5C842] text-[#1C0A00] font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-3">
                    पूजन संकल्प फॉर्म
                  </span>
                  <h3 className="font-heading font-black text-2xl text-[#1F160F]">
                    अपनी पसंदीदा पूजा एवं समय चुनें
                  </h3>
                </div>
                <BookingForm defaultService={defaultService} />
              </div>
            </div>

            {/* Information Column */}
            <div data-aos="fade-left" className="lg:col-span-5 space-y-6">
              
              {/* Purohit Assurance Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#E8DCC8] shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={panditImg}
                    alt="वैदिक पुरोहित पंडित दीपक पंड्या - उज्जैन पूजा बुकिंग"
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#D97706]"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#1F160F]">पंडित दीपक पंड्या</h4>
                    <p className="text-xs text-[#8C3814] font-medium font-devanagari">15+ वर्ष वैदिक अनुभव • उज्जैन सिद्ध पीठ</p>
                    <div className="flex text-amber-500 text-xs mt-0.5">★★★★★ 5.0 Rating</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#4A3B2C] leading-relaxed font-devanagari">
                  "प्रत्येक यजमान का संकल्प हमारे लिए परम पावन है। मंगलनाथ मंदिर एवं महाकाल की पावन धरा पर हम शुद्ध मंत्रोच्चार और संपूर्ण विधि से अनुष्ठान कराते हैं।"
                </p>
              </div>

              {/* Outstation Sankalp Details Card */}
              <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border-2 border-gold/40 shadow-sm">
                <span className="inline-flex items-center gap-1.5 text-[#D97706] font-bold text-xs uppercase tracking-wider mb-2">
                  <span>📹</span> बाहर के शहरों के यजमानों हेतु
                </span>
                <h4 className="font-heading font-bold text-lg text-[#1F160F] mb-3">
                  ऑनलाइन संकल्प एवं लाइव वीडियो सेवा
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C4D3E] font-devanagari">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D97706]">✦</span>
                    <span>यदि आप उज्जैन नहीं आ सकते, तो आपके नाम व गोत्र से विधिवत संकल्प लिया जाता है।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D97706]">✦</span>
                    <span>पूजा का संपूर्ण वीडियो या लाइव दर्शन WhatsApp पर उपलब्ध कराया जाता है।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D97706]">✦</span>
                    <span>सिद्ध रक्षा सूत्र व महाप्रसाद डाक/स्पीड पोस्ट द्वारा आपके घर भेजा जाता है।</span>
                  </li>
                </ul>

                <div className="mt-5 pt-4 border-t border-[#F0E6D8] flex flex-wrap gap-3">
                  <a
                    href={PHONE_HREF}
                    onClick={() => trackPhoneCall('booking_page_sidebar')}
                    title="पंडित दीपक पंड्या जी को सीधे कॉल करें: +91 62634 01651"
                    aria-label="Call Pandit Deepak Pandya to book puja"
                    className="bg-[#1C0A00] text-gold hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all"
                  >
                    <span>📞 62634 01651</span>
                  </a>
                  <a
                    href={WA_HREF}
                    onClick={() => trackWhatsAppClick('booking_page_sidebar')}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp पर तुरंत पूजा बुकिंग करें"
                    aria-label="Book puja via WhatsApp with Pandit Deepak Pandya"
                    className="bg-[#25D366] text-white hover:bg-[#1EBE5D] px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all"
                  >
                    <span>💬 WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
