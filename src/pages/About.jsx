import { useEffect } from 'react';
import vipGuestImg from '../assets/vip_guest.jpg';
import panditImg from '../assets/pandit_deepak_pandya.jpg';
import heroBg from '../assets/hero_mangal_puja.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import SEO from '../components/common/SEO';
import { WA_HREF, PHONE_HREF } from '../utils/whatsapp';
import { trackWhatsAppClick, trackPhoneCall } from '../utils/analytics';

const C = CONTENT;

export default function About() {
  const { t, lang } = useLanguage();
  const ab = C.about;

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const aboutTitle = lang === 'hi'
    ? 'पंडित दीपक पंड्या उज्जैन | मंगल दोष पूजा पंडित | 15+ वर्ष अनुभव'
    : 'Pandit Deepak Pandya Ujjain | Mangal Dosh Puja Pandit | 15+ Years Experience';

  const aboutDesc = lang === 'hi'
    ? 'पंडित दीपक पंड्या — उज्जैन के विश्वसनीय मंगल दोष पूजा पंडित। 15+ वर्षों का अनुभव, शुक्ल यजुर्वेद परंपरा, मंगलनाथ मंदिर में मंगल दोष निवारण पूजा, मांगलिक दोष उपाय एवं कालसर्प दोष निवारण।'
    : 'Pandit Deepak Pandya — Trusted Mangal Dosh Puja Pandit in Ujjain with 15+ years. Specializes in Mangal Dosh Nivaran Pooja, Manglik dosh remedies, Kaal Sarp ritual at Mangalnath Temple.';

  return (
    <main className="pt-20 bg-[#FAF7F2] text-[#2D1B00]">
      <SEO
        title={aboutTitle}
        description={aboutDesc}
        canonical="https://mangaldoshpujanivaran.in/about"
      />
      
      <section
        className="py-16 sm:py-24 text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] border-b border-[#E8DCC8]"
        aria-labelledby="about-page-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,_rgba(139,26,26,0.06)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gold/60 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold font-sans uppercase tracking-wider mb-4 shadow-xs">
            <span className="text-gold">✦</span>
            <span>{t({ hi: 'वैदिक पुरोहित परंपरा • उज्जैन सिद्ध पीठ', en: 'Vedic Purohit Lineage • Ujjain Siddha Peeth' })}</span>
            <span className="text-gold">✦</span>
          </span>

          <h1 id="about-page-heading" className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F160F] leading-tight mb-4">
            {lang === 'hi' ? 'वैदिक पंडित दीपक पंड्या — परिचय एवं परंपरा' : 'About Vedic Pandit Deepak Pandya'}
          </h1>

          <p className="text-[#5C4D3E] font-devanagari text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {t({
              hi: 'महाकाल की पावन नगरी उज्जैन में 15+ वर्षों से वैदिक विधि-विधान द्वारा मंगल दोष, कालसर्प, पितृ दोष व समस्त अनुष्ठान संपन्न करवाने वाले प्रामाणिक पुरोहित।',
              en: 'Authentic Vedic priest in the sacred city of Ujjain, performing Mangal Dosh, Kaal Sarp, Pitru Dosh, and divine Vedic rituals for 15+ years.',
            })}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full mx-auto mt-6" />
        </div>
      </section>

      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div data-aos="fade-right" className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-4 border-2 border-[#E8DCC8] shadow-[0_12px_40px_rgba(45,27,0,0.08)]">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img
                    src={panditImg}
                    alt="वैदिक पुरोहित पंडित दीपक पंड्या - उज्जैन मंगल दोष एवं कालसर्प पूजा"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5C842] text-[#1C0A00] text-xs font-bold font-heading self-start mb-2 uppercase tracking-wider">
                      ✦ 15+ YRS VEDIC PUROHIT
                    </span>
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-cream">
                      {t(C.panditName)}
                    </h2>
                    <p className="text-gold text-xs sm:text-sm font-devanagari mt-1 flex items-center gap-1">
                      <span>📍</span> {t(C.location)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0E6D8] flex items-center justify-between text-xs sm:text-sm text-[#5C4D3E]">
                  <div className="flex items-center gap-1 font-bold text-[#1F160F]">
                    <span className="text-amber-500">★★★★☆</span>
                    <span>3.9 (56+ Reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <span>✓</span> Verified Ujjain Purohit
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="lg:col-span-7 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/60 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold uppercase tracking-wider mb-3 self-start">
                AUTHENTIC VEDIC HERITAGE
              </span>

              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#1F160F] mb-4 leading-tight">
                {t({
                  hi: 'शास्त्रसम्मत वैदिक विधि एवं सनातन परंपरा के संवाहक',
                  en: 'Bearer of Ancient Shastric Vidhi & Sanatan Tradition',
                })}
              </h2>

              <p className="text-base text-[#4A3B2C] leading-relaxed font-devanagari mb-5 font-medium">
                {t({
                  hi: 'पंडित दीपक पंड्या जी का जन्म उज्जैन के प्रतिष्ठित वैदिक ब्राह्मण परिवार में हुआ। शुक्ल यजुर्वेद परंपरा से दीक्षित होकर, उन्होंने वेद-वेदांग, कर्मकांड एवं ज्योतिष शास्त्र का गहन अध्ययन किया है। विगत 15 वर्षों से वे भगवान महाकालेश्वर की नगरी में मंगलनाथ मंदिर, रामघाट एवं सिद्धवट क्षेत्र में अनुष्ठान करवा रहे हैं।',
                  en: 'Pandit Deepak Pandya was born into a respected Vedic Brahmin family of Ujjain. Educated in the Shukla Yajurveda tradition, he has extensively studied Karmakanda, Vedic rituals, and Astrology. For over 15 years, he has guided devotees at Mangalnath Temple, Ramghat, and sacred shrines of Ujjain.',
                })}
              </p>

              <p className="text-base text-[#4A3B2C] leading-relaxed font-devanagari mb-6 font-medium">
                {t({
                  hi: 'हमारा मुख्य ध्येय प्रत्येक यजमान की समस्या का वास्तविक ज्योतिषीय कारण समझकर, निष्काम भाव व शुद्ध उच्चारण से पूजा संपन्न कराना है, ताकि संकल्प का पूर्ण फल प्राप्त हो सके।',
                  en: 'Our primary mission is to diagnose the root astrological cause and perform rituals with pure Sanskrit mantra chanting and authentic devotion so every devotee receives the full divine fruit of their Sankalp.',
                })}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="bg-white p-3.5 rounded-2xl border border-[#E8DCC8] shadow-xs flex items-center gap-3">
                  <span className="text-2xl">🔱</span>
                  <div>
                    <h4 className="font-bold text-[#1F160F] text-sm font-devanagari">शुक्ल यजुर्वेद परंपरा</h4>
                    <p className="text-xs text-[#5C4D3E]">100% शुद्ध वैदिक मंत्रोच्चार</p>
                  </div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-[#E8DCC8] shadow-xs flex items-center gap-3">
                  <span className="text-2xl">🪔</span>
                  <div>
                    <h4 className="font-bold text-[#1F160F] text-sm font-devanagari">मंगलनाथ सिद्ध पीठ</h4>
                    <p className="text-xs text-[#5C4D3E]">मंगल ग्रह की मूल जन्मभूमि पर पूजन</p>
                  </div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-[#E8DCC8] shadow-xs flex items-center gap-3">
                  <span className="text-2xl">📜</span>
                  <div>
                    <h4 className="font-bold text-[#1F160F] text-sm font-devanagari">पारदर्शी दक्षिणा व सामग्री</h4>
                    <p className="text-xs text-[#5C4D3E]">कोई छिपा हुआ शुल्क नहीं</p>
                  </div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-[#E8DCC8] shadow-xs flex items-center gap-3">
                  <span className="text-2xl">📹</span>
                  <div>
                    <h4 className="font-bold text-[#1F160F] text-sm font-devanagari">लाइव वीडियो संकल्प</h4>
                    <p className="text-xs text-[#5C4D3E]">बाहर के शहरों के यजमानों हेतु सुविधा</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={PHONE_HREF}
                  onClick={() => trackPhoneCall('about_page')}
                  title="पंडित दीपक पंड्या जी को सीधे कॉल करें: +91 62634 01651"
                  aria-label="Call Pandit Deepak Pandya at +91 62634 01651"
                  className="bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>📞 सीधे पंडित जी से बात करें</span>
                </a>
                <a
                  href={WA_HREF}
                  onClick={() => trackWhatsAppClick('about_page')}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp पर वैदिक पूजा परामर्श हेतु संपर्क करें"
                  aria-label="Contact Pandit Deepak Pandya on WhatsApp for Vedic consultation"
                  className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>💬 WhatsApp परामर्श</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge={t({ hi: 'विशिष्ट यजमान एवं अनुभव', en: 'Devotee Experiences & Rituals' })}
            heading={t({ hi: 'उज्जैन सिद्ध पीठ में विशिष्ट अनुष्ठान', en: 'Distinguished Rituals at Ujjain' })}
            subheading={t({
              hi: 'देशभर के विभिन्न शहरों से आए विशिष्ट यजमानों, संतों व श्रद्धालुओं द्वारा कराए गए सफल पूजन।',
              en: 'Successful pujas performed for distinguished guests, spiritual seekers, and devotees from across India.',
            })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
            <div className="rounded-3xl overflow-hidden border-2 border-[#E8DCC8] shadow-lg group relative aspect-[16/10]">
              <img
                src={vipGuestImg}
                alt="विशिष्ट यजमान वैदिक संकल्प पूजन - पंडित दीपक पंड्या उज्जैन"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="bg-[#F5C842] text-[#1C0A00] font-bold text-xs uppercase px-2.5 py-1 rounded self-start mb-1.5">
                  विशिष्ट यजमान सम्मान
                </span>
                <p className="font-heading font-bold text-base sm:text-lg text-cream">
                  महाकाल एवं मंगलनाथ क्षेत्र में वैदिक संकल्प पूजन
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border-2 border-[#E8DCC8] shadow-lg group relative aspect-[16/10]">
              <img
                src={heroBg}
                alt="मंगल भात पूजा अनुष्ठान श्री मंगलनाथ मंदिर उज्जैन - पंडित दीपक पंड्या"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="bg-[#F5C842] text-[#1C0A00] font-bold text-xs uppercase px-2.5 py-1 rounded self-start mb-1.5">
                  मंगलनाथ मंदिर उज्जैन
                </span>
                <p className="font-heading font-bold text-base sm:text-lg text-cream">
                  विधिपूर्वक मंगल भात पूजा एवं मांगलिक दोष शांति
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#D97706] to-[#B45309] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-2xl sm:text-4xl mb-4">
            {t({ hi: 'क्या आपकी कुंडली में मांगलिक या कालसर्प दोष है?', en: 'Do you have Mangal or Kaal Sarp Dosh in your Kundali?' })}
          </h2>
          <p className="text-white/90 font-devanagari text-base mb-8 max-w-2xl mx-auto">
            {t({
              hi: 'अपनी जन्म तिथि व समय भेजें और पंडित दीपक पंड्या जी से निःशुल्क प्राथमिक कुंडली विश्लेषण प्राप्त करें।',
              en: 'Send your birth details and get free primary kundali consultation directly from Pandit Deepak Pandya.',
            })}
          </p>
          <a
            href={WA_HREF}
            onClick={() => trackWhatsAppClick('about_cta_banner')}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp पर कुंडली भेजें एवं निःशुल्क परामर्श प्राप्त करें"
            aria-label="Send Kundali on WhatsApp for free consultation with Pandit Deepak Pandya"
            className="bg-white text-[#8C3814] hover:bg-[#FFF8E6] px-8 py-4 rounded-xl font-bold font-devanagari text-base shadow-xl inline-flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <span>💬 WhatsApp पर कुंडली भेजें</span>
          </a>
        </div>
      </section>

    </main>
  );
}
