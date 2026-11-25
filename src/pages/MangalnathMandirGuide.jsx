import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/common/SEO';

const WA_HREF = 'https://wa.me/916263401651?text=Jai%20Shri%20Mahakal%2C%20mujhe%20Mangalnath%20Mandir%20puja%20booking%20aur%20pahunchne%20ki%20jankari%20chahiye';
const PHONE_HREF = 'tel:+916263401651';

export default function MangalnathMandirGuide() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const canonicalUrl = 'https://mangaldoshpujanivaran.in/mangalnath-mandir-ujjain';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'मंगलनाथ मंदिर उज्जैन कैसे पहुंचे – समय, मार्ग एवं पूजा विवरण',
    description: 'उज्जैन रेलवे स्टेशन, इंदौर एयरपोर्ट एवं बस स्टैंड से मंगलनाथ मंदिर पहुंचने के मार्ग, दूरी, वाहन सुविधा, मंदिर का समय व भात पूजा बुकिंग।',
    author: {
      '@type': 'Person',
      name: 'Pandit Deepak Pandya',
    },
    publisher: {
      '@type': 'ProfessionalService',
      name: 'Mangal Dosh Puja Nivaran',
      telephone: '+916263401651',
    },
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <main className="pt-20">
      <SEO
        title="मंगलनाथ मंदिर उज्जैन कैसे पहुंचे | समय, मार्ग व पूजा गाइड"
        description="उज्जैन रेलवे स्टेशन, इंदौर एयरपोर्ट से मंगलनाथ मंदिर कैसे पहुंचे? दूरी, टैक्सी, ऑटो, मंदिर का समय, मंगल भात पूजा व पंडित दीपक पंड्या संपर्क।"
        canonical={canonicalUrl}
        schema={schema}
      />

      <nav aria-label="Breadcrumb" className="bg-[#FAF7F2] border-b border-[#E8DCC8] py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-[#8C7A6B]">
          <Link to="/" className="hover:text-[#B45309] transition-colors">{lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</Link>
          <span className="text-[#D4C5B0]">›</span>
          <span className="text-[#1F160F] font-semibold">{lang === 'hi' ? 'मंगलनाथ मंदिर कैसे पहुंचे' : 'How to Reach Mangalnath Temple'}</span>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] py-14 sm:py-20 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D97706]/10 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D97706]/10 text-[#B45309] text-xs font-semibold tracking-wide mb-4">
            ✦ उज्जैन तीर्थ यात्रा गाइड ✦
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1F160F] font-heading leading-snug mb-4">
            मंगलनाथ मंदिर उज्जैन कैसे पहुंचे – संपूर्ण यात्रा व दर्शन गाइड
          </h1>
          <p className="text-[#8C7A6B] font-medium text-sm sm:text-base max-w-xl mx-auto">
            रेलवे स्टेशन, इंदौर हवाई अड्डे एवं सड़क मार्ग से पहुंचने की दूरी, समय और मंगल भात पूजा की जानकारी
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309]" />
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">

          <div className="bg-[#D97706]/10 border-l-4 border-[#D97706] rounded-r-2xl p-5 sm:p-6" data-aos="fade-up">
            <h2 className="text-base font-bold text-[#1F160F] uppercase mb-2">⚡ संक्षेप में उत्तर / Direct Answer</h2>
            <p className="text-[#3D2E1F] font-medium leading-relaxed text-base sm:text-lg">
              मंगलनाथ मंदिर उज्जैन रेलवे स्टेशन से लगभग 6 किमी और महाकालेश्वर मंदिर से करीब 5 किमी उत्तर में शिप्रा नदी के तट पर स्थित है। यहाँ पहुंचने के लिए उज्जैन स्टेशन से ई-रिक्शा, ऑटो और टैक्सी आसानी से उपलब्ध हैं। निकटतम हवाई अड्डा इंदौर (लगभग 58 किमी) है। मंदिर दर्शन का समय सुबह 6:00 से रात 9:00 बजे तक रहता है।
            </p>
          </div>

          <div className="rounded-3xl border border-[#E8DCC8] p-6 sm:p-8 bg-white" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-[#1F160F] font-heading mb-6">
              परिवहन के विभिन्न साधनों से मंगलनाथ मंदिर कैसे पहुंचे?
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC8]">
                <h3 className="text-lg font-bold text-[#B45309] mb-1">
                  🚆 1. उज्जैन रेलवे स्टेशन से (दूरी: लगभग 6 किमी)
                </h3>
                <p className="text-[#5C4A3A] text-sm leading-relaxed">
                  उज्जैन जंक्शन (UJN) देश के सभी प्रमुख शहरों (दिल्ली, मुंबई, अहमदाबाद, जयपुर, भोपाल) से सीधे जुड़ा है। स्टेशन के बाहर 24 घंटे ऑटो, ई-रिक्शा और टैक्सी उपलब्ध रहती हैं। स्टेशन से मंगलनाथ मंदिर पहुंचने में मात्र 15–20 मिनट लगते हैं।
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC8]">
                <h3 className="text-lg font-bold text-[#B45309] mb-1">
                  ✈️ 2. हवाई मार्ग द्वारा (इंदौर एयरपोर्ट से, दूरी: लगभग 58 किमी)
                </h3>
                <p className="text-[#5C4A3A] text-sm leading-relaxed">
                  निकटतम हवाई अड्डा देवी अहिल्याबाई होल्कर अंतरराष्ट्रीय हवाई अड्डा, इंदौर (IDR) है। यहाँ से उज्जैन के लिए 4-लेन सुपर कॉरिडोर हाईवे है। एयरपोर्ट से उज्जैन आने में लगभग 1 घंटा 15 मिनट का समय लगता है। कैब या बस सरलता से उपलब्ध हैं।
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC8]">
                <h3 className="text-lg font-bold text-[#B45309] mb-1">
                  🚗 3. सड़क मार्ग द्वारा (इंदौर, भोपाल एवं गुजरात से)
                </h3>
                <p className="text-[#5C4A3A] text-sm leading-relaxed">
                  • <strong>इंदौर से:</strong> 55 किमी (इंदौर-उज्जैन 4 लेन स्टेट हाईवे, 1 घंटा)<br />
                  • <strong>भोपाल से:</strong> 190 किमी (आष्टा-देवास-उज्जैन मार्ग, 3.5 घंटे)<br />
                  • <strong>गुजरात (अहमदाबाद/वडोदरा) से:</strong> गोधरा-दाहोद-रतलाम-उज्जैन नेशनल हाईवे।
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E8DCC8] p-6 sm:p-8 bg-white" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-[#1F160F] font-heading mb-4">
              मंगलनाथ मंदिर दर्शन एवं भात पूजा का समय
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC8]">
                <p className="font-bold text-[#1F160F] mb-1">⏰ मंदिर खुलने का समय</p>
                <p className="text-[#5C4A3A]">सुबह 6:00 बजे से रात्रि 9:00 बजे तक (दैनिक)</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC8]">
                <p className="font-bold text-[#1F160F] mb-1">🔴 भात पूजा के लिए सर्वोत्तम दिन</p>
                <p className="text-[#5C4A3A]">मंगलवार, अंगारक चतुर्थी एवं विशेष मुहूर्त</p>
              </div>
            </div>
            <p className="text-xs text-[#8C7A6B] mt-4">
              सलाह: मंगलवार के दिन भक्तों की अधिक संख्या रहती है, अतः उज्जैन आने से पूर्व पंडित दीपक पंड्या जी से समय व तिथि का अग्रिम आरक्षण करवा लें।
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-[#D97706] to-[#B45309] p-6 sm:p-8 text-white" data-aos="fade-up">
            <h2 className="text-xl sm:text-2xl font-bold font-heading mb-2">
              उज्जैन आगमन पर सहायता एवं पूजा बुकिंग
            </h2>
            <p className="text-sm text-white/85 mb-5 leading-relaxed">
              यदि आप अन्य शहर से मंगलनाथ मंदिर दर्शन अथवा मंगल भात पूजा, कालसर्प शांति के लिए उज्जैन पधार रहे हैं, तो मंदिर पहुंचने के सही मार्ग, पूजन सामग्री और समय की जानकारी के लिए सीधे संपर्क करें:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                title="मंगलनाथ मंदिर पहुंचने के मार्ग हेतु पंडित दीपक पंड्या को कॉल करें"
                aria-label="Call Pandit Deepak Pandya for Mangalnath Temple route and puja guidance"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#B45309] font-bold text-sm hover:bg-[#FFFDF9] transition-colors"
              >
                📞 Call: +91 62634 01651
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp पर मंगलनाथ मंदिर मार्ग एवं पूजा सामग्री जानकारी प्राप्त करें"
                aria-label="WhatsApp Pandit Deepak Pandya for Mangalnath Temple directions and puja details"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-colors"
              >
                💬 WhatsApp पर मार्ग व पूजा जानकारी लें
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
