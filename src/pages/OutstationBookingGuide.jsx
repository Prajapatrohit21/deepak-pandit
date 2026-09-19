// ============================================================
// OutstationBookingGuide.jsx — Guide for devotees booking from other cities
// (Indore, Bhopal, Delhi, Mumbai, Pune, Gujarat, etc.)
// ============================================================
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/common/SEO';
import BookingForm from '../components/ui/BookingForm';
import { trackWhatsAppClick, trackPhoneCall } from '../utils/analytics';

export default function OutstationBookingGuide() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const canonicalUrl = 'https://mangaldoshpujanivaran.in/#/bahar-ke-shahar-puja-booking';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'बाहर के शहरों से उज्जैन में पूजा कैसे बुक करें – ऑनलाइन संकल्प व प्रत्यक्ष पूजन',
    description: 'इंदौर, भोपाल, दिल्ली, मुंबई, पुणे, गुजरात एवं अन्य राज्यों से उज्जैन में मंगल भात पूजा, कालसर्प शांति एवं वैदिक अनुष्ठान की बुकिंग प्रक्रिया।',
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
        title="बाहर के शहर से उज्जैन पूजा बुकिंग | ऑनलाइन संकल्प व विधि"
        description="इंदौर, भोपाल, दिल्ली, मुंबई, पुणे, गुजरात से उज्जैन में मंगल भात व कालसर्प पूजा बुकिंग: ऑनलाइन संकल्प विधि, लाइव वीडियो व पंडित दीपक पंड्या सहायता।"
        canonical={canonicalUrl}
        schema={schema}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-cream-dark/80 border-b border-saffron/15 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-divine-muted font-devanagari">
          <Link to="/" className="hover:text-gold transition-colors">{lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</Link>
          <span className="text-saffron/40">›</span>
          <span className="text-divine-brown font-semibold">{lang === 'hi' ? 'बाहर के शहरों से पूजा बुकिंग' : 'Outstation Puja Booking'}</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section
        className="py-12 sm:py-20 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #3D1000, #1C0A00)' }}
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="badge badge-gold mb-3 inline-flex">✦ देश-विदेश के श्रद्धालुओं हेतु सेवा ✦</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-cream font-devanagari mb-4 leading-snug">
            बाहर के शहरों से उज्जैन पूजा कैसे बुक करें – संपूर्ण ऑनलाइन संकल्प प्रक्रिया
          </h1>
          <p className="text-gold font-medium font-devanagari text-sm sm:text-base">
            इंदौर, भोपाल, दिल्ली, मुंबई, पुणे, गुजरात एवं अन्य शहरों के भक्तों के लिए सरल 3-चरणीय बुकिंग गाइड
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">

          {/* Quick Answer */}
          <div className="bg-gold/15 border-l-4 border-gold rounded-r-2xl p-5 sm:p-6 shadow-sm" data-aos="fade-up">
            <h2 className="text-base font-bold text-divine-brown font-devanagari uppercase mb-2">⚡ संक्षेप में उत्तर / Direct Answer</h2>
            <p className="text-divine-brown font-medium leading-relaxed font-devanagari text-base sm:text-lg">
              बाहर के शहरों के भक्त दो प्रकार से पूजा करवा सकते हैं: (1) उज्जैन आकर प्रत्यक्ष पूजन, जिसके लिए अग्रिम तिथि बुक की जाती है, अथवा (2) यदि आप उज्जैन नहीं आ सकते, तो आपके नाम, गोत्र और कुलदेवता के स्मरण से वैदिक ब्राह्मणों द्वारा ऑनलाइन संकल्प लेकर शास्त्रोक्त पूजन संपन्न किया जाता है और वीडियो व प्रसाद भेजा जाता है।
            </p>
          </div>

          {/* 3 Steps */}
          <div className="gradient-border p-6 sm:p-8 rounded-2xl bg-white shadow-card" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-6">
              3 सरल चरणों में बाहर के शहरों से पूजा कैसे बुक करें?
            </h2>

            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-cream-dark/60 border border-saffron/15 flex gap-4">
                <span className="w-10 h-10 rounded-full bg-gold text-divine-dark font-bold text-lg flex items-center justify-center shrink-0">1</span>
                <div>
                  <h3 className="text-lg font-bold text-divine-brown font-devanagari mb-1">
                    संपर्क एवं विवरण साझा करें
                  </h3>
                  <p className="text-divine-muted font-devanagari text-sm leading-relaxed">
                    WhatsApp (+91 62634 01651) पर अपना नाम, जन्म विवरण (तिथि, समय, स्थान), पिता का नाम और गोत्र भेजें। यदि कुंडली में कोई विशिष्ट दोष है तो उसका विवरण साझा करें।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cream-dark/60 border border-saffron/15 flex gap-4">
                <span className="w-10 h-10 rounded-full bg-gold text-divine-dark font-bold text-lg flex items-center justify-center shrink-0">2</span>
                <div>
                  <h3 className="text-lg font-bold text-divine-brown font-devanagari mb-1">
                    शुभ मुहूर्त एवं संकल्प का निर्धारण
                  </h3>
                  <p className="text-divine-muted font-devanagari text-sm leading-relaxed">
                    वैदिक पंडित दीपक पंड्या जी आपकी जन्म कुंडली का सूक्ष्म परीक्षण कर अनुकूल शुभ मुहूर्त (मंगलवार, अमावस्या अथवा ग्रह गोचर) तय करते हैं और संपूर्ण विधि व सामग्री की जानकारी देते हैं।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cream-dark/60 border border-saffron/15 flex gap-4">
                <span className="w-10 h-10 rounded-full bg-gold text-divine-dark font-bold text-lg flex items-center justify-center shrink-0">3</span>
                <div>
                  <h3 className="text-lg font-bold text-divine-brown font-devanagari mb-1">
                    पूजन संपन्नता, वीडियो एवं प्रसाद
                  </h3>
                  <p className="text-divine-muted font-devanagari text-sm leading-relaxed">
                    नियत तिथि पर उज्जैन में मंगलनाथ अथवा सिद्ध पीठ पर आपके नाम से संकल्पपूर्वक पूजा संपन्न होती है। पूजन का वीडियो WhatsApp पर दिया जाता है तथा रक्षा सूत्र व भस्म/प्रसाद आपके पते पर स्पीड पोस्ट द्वारा भेजा जाता है।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* City Coverage Section */}
          <div className="gradient-border p-6 sm:p-8 rounded-2xl bg-white shadow-card" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-4">
              किन शहरों के श्रद्धालुओं के लिए विशेष व्यवस्था है?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-devanagari">
              <div className="p-3.5 rounded-xl bg-cream-dark/70">
                <p className="font-bold text-divine-brown">🚗 इंदौर एवं भोपाल के भक्तों के लिए</p>
                <p className="text-divine-muted text-xs mt-1">मात्र 1 से 3.5 घंटे की सड़क दूरी। सुबह आकर दोपहर तक पूजा कराकर उसी दिन वापस लौट सकते हैं।</p>
              </div>
              <div className="p-3.5 rounded-xl bg-cream-dark/70">
                <p className="font-bold text-divine-brown">🚆 गुजरात (अहमदाबाद, सूरत, वडोदरा)</p>
                <p className="text-divine-muted text-xs mt-1">सीधी ट्रेन और सड़क मार्ग उपलब्ध। सपरिवार दर्शन एवं पूजन के लिए अग्रिम आरक्षण सुविधा।</p>
              </div>
              <div className="p-3.5 rounded-xl bg-cream-dark/70">
                <p className="font-bold text-divine-brown">✈️ दिल्ली, मुंबई एवं पुणे के भक्तों के लिए</p>
                <p className="text-divine-muted text-xs mt-1">इंदौर तक सीधी फ्लाइट अथवा उज्जैन तक सुपरफास्ट ट्रेनें। ऑनलाइन संकल्प की सर्वाधिक सुविधा।</p>
              </div>
              <div className="p-3.5 rounded-xl bg-cream-dark/70">
                <p className="font-bold text-divine-brown">🌍 अनिवासी भारतीय (NRI) एवं दूरस्थ राज्य</p>
                <p className="text-divine-muted text-xs mt-1">वीडियो कॉल एवं डिजिटल संकल्प द्वारा शास्त्रोंक्त पूजा की पूर्ण प्रामाणिक व्यवस्था।</p>
              </div>
            </div>
          </div>

          {/* Quick Booking Form Card */}
          <div className="gradient-border p-6 sm:p-8 rounded-2xl bg-white shadow-card" data-aos="fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-divine-brown font-devanagari mb-2">
              ऑनलाइन पूजा हेतु विवरण भेजें
            </h2>
            <p className="text-xs sm:text-sm text-divine-muted font-devanagari mb-6">
              नीचे दिया गया फॉर्म भरें, पंडित दीपक पंड्या जी सीधे आपसे WhatsApp पर संपर्क करेंगे:
            </p>
            <BookingForm />
          </div>

        </div>
      </section>
    </main>
  );
}
