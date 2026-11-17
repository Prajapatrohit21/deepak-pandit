// ============================================================
// Services.jsx — Pandits Of Banaras Luxury Services Listing
// ============================================================
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { SERVICES } from '../data/services';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import SEO from '../components/common/SEO';
import { WA_HREF, PHONE_HREF } from '../utils/whatsapp';
import { trackWhatsAppClick, trackPhoneCall } from '../utils/analytics';

const C = CONTENT;

export default function Services() {
  const { t, lang } = useLanguage();
  const sv = C.services;

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const servicesTitle = lang === 'hi'
    ? 'उज्जैन वैदिक पूजा सेवाएं | मंगल दोष, कालसर्प, पितृ दोष, रुद्राभिषेक'
    : 'Vedic Puja Services Ujjain | Mangal Dosh, Kaal Sarp, Rudrabhishek';

  const servicesDesc = lang === 'hi'
    ? 'उज्जैन में वैदिक पंडित दीपक पंड्या द्वारा मंगल भात पूजा, कालसर्प दोष, पितृ दोष निवारण, महामृत्युंजय जाप, रुद्राभिषेक और नवग्रह शांति अनुष्ठान। प्रामाणिक विधि एवं शुभ मुहूर्त।'
    : 'Complete list of authentic Vedic Pujas in Ujjain: Mangal Dosh Bhat Puja, Kaal Sarp Dosh Nivaran, Rudrabhishek, Mahamrityunjay Jaap by Pandit Deepak Pandya.';

  return (
    <main className="pt-20 bg-[#FAF7F2] text-[#2D1B00]">
      <SEO
        title={servicesTitle}
        description={servicesDesc}
        canonical="https://mangaldoshpujanivaran.in/services"
      />
      
      {/* ── Page Header ── */}
      <section
        className="py-16 sm:py-24 text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] border-b border-[#E8DCC8]"
        aria-labelledby="services-page-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,_rgba(139,26,26,0.06)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gold/60 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold font-sans uppercase tracking-wider mb-4 shadow-xs">
            <span className="text-gold">✦</span>
            <span>{t({ hi: 'वैदिक अनुष्ठान सूची • उज्जैन सिद्ध क्षेत्र', en: 'Vedic Ritual Offerings • Ujjain Siddha Kshetra' })}</span>
            <span className="text-gold">✦</span>
          </span>

          <h1 id="services-page-heading" className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F160F] leading-tight mb-4">
            {t(sv.heading)}
          </h1>

          <p className="text-[#5C4D3E] font-devanagari text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {t(sv.subheading)}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full mx-auto mt-6" />
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc, i) => (
              <div key={svc.id} data-aos="fade-up" data-aos-delay={i * 60}>
                <ServiceCard service={svc} featured={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Puja Inclusions & Standards Bar ── */}
      <section className="py-16 bg-white border-t border-b border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge={t({ hi: 'वैदिक शुद्धता मानक', en: 'Vedic Ritual Standards' })}
            heading={t({ hi: 'हमारी प्रत्येक पूजा में क्या सम्मिलित है?', en: 'What is Included in Every Puja?' })}
            subheading={t({
              hi: 'हम शास्त्रों के नियमों का 100% पालन करते हैं ताकि पूजा का संपूर्ण फल यजमान को प्राप्त हो।',
              en: 'We strictly follow Vedic injunctions so every ritual delivers maximum spiritual efficacy.',
            })}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E8DCC8] shadow-xs text-center">
              <span className="text-3xl mb-3 block">🪔</span>
              <h4 className="font-heading font-bold text-lg text-[#1F160F] mb-1.5">शुद्ध वैदिक पूजन सामग्री</h4>
              <p className="text-xs text-[#5C4D3E] leading-relaxed font-devanagari">
                गंगाजल, गंध, अक्षत, पंचामृत, विशेष हवन समिधा व नैवेद्य।
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E8DCC8] shadow-xs text-center">
              <span className="text-3xl mb-3 block">📜</span>
              <h4 className="font-heading font-bold text-lg text-[#1F160F] mb-1.5">गोत्रोच्चार एवं संकल्प</h4>
              <p className="text-xs text-[#5C4D3E] leading-relaxed font-devanagari">
                यजमान के नाम, गोत्र व नक्षत्र से विधिपूर्वक वैदिक संकल्प।
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E8DCC8] shadow-xs text-center">
              <span className="text-3xl mb-3 block">📹</span>
              <h4 className="font-heading font-bold text-lg text-[#1F160F] mb-1.5">लाइव दर्शन एवं वीडियो प्रमाण</h4>
              <p className="text-xs text-[#5C4D3E] leading-relaxed font-devanagari">
                ऑनलाइन संकल्प पूजन में संपूर्ण अनुष्ठान का वीडियो रिकॉर्डिंग।
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E8DCC8] shadow-xs text-center">
              <span className="text-3xl mb-3 block">📦</span>
              <h4 className="font-heading font-bold text-lg text-[#1F160F] mb-1.5">प्रसाद एवं रक्षा सूत्र</h4>
              <p className="text-xs text-[#5C4D3E] leading-relaxed font-devanagari">
                पूजा उपरांत सिद्ध रक्षा सूत्र, भस्म व महाप्रसाद डाक द्वारा प्रेषित।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct Booking CTA ── */}
      <section className="py-16 bg-gradient-to-r from-[#D97706] to-[#B45309] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-2xl sm:text-4xl mb-3">
            {t({ hi: 'उज्जैन में पूजा हेतु शुभ मुहूर्त एवं तिथि जानें', en: 'Know the Auspicious Muhurat for Puja in Ujjain' })}
          </h2>
          <p className="text-white/90 font-devanagari text-base mb-8 max-w-2xl mx-auto">
            {t({
              hi: 'मंगल भात पूजा, कालसर्प दोष या रुद्राभिषेक के लिए सीधे पंडित दीपक पंड्या जी से फोन या WhatsApp पर संपर्क करें।',
              en: 'Contact Pandit Deepak Pandya directly via phone or WhatsApp to find the best shubh muhurat.',
            })}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneCall('services_cta_banner')}
              title="पंडित दीपक पंड्या जी को कॉल करें: +91 62634 01651"
              aria-label="Call Pandit Deepak Pandya at +91 62634 01651"
              className="bg-white text-[#8C3814] hover:bg-[#FFF8E6] px-8 py-3.5 rounded-xl font-bold font-devanagari text-sm sm:text-base shadow-xl inline-flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>📞 कॉल करें: +91 62634 01651</span>
            </a>
            <a
              href={WA_HREF}
              onClick={() => trackWhatsAppClick('services_cta_banner')}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp पर पूजा मुहूर्त और दक्षिणा जानकारी प्राप्त करें"
              aria-label="Contact on WhatsApp for puja muhurat and details"
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-3.5 rounded-xl font-bold font-devanagari text-sm sm:text-base shadow-xl inline-flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>💬 WhatsApp पर बात करें</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
