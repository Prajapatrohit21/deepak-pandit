import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/common/SEO';
import BookingForm from '../components/ui/BookingForm';

export default function OutstationBookingGuide() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const canonicalUrl = 'https://mangaldoshpujanivaran.in/bahar-ke-shahar-puja-booking';

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

  const steps = [
    {
      num: '1',
      title: 'संपर्क एवं विवरण साझा करें',
      desc: 'WhatsApp (+91 62634 01651) पर अपना नाम, जन्म विवरण (तिथि, समय, स्थान), पिता का नाम और गोत्र भेजें। यदि कुंडली में कोई विशिष्ट दोष है तो उसका विवरण साझा करें।',
    },
    {
      num: '2',
      title: 'शुभ मुहूर्त एवं संकल्प का निर्धारण',
      desc: 'वैदिक पंडित दीपक पंड्या जी आपकी जन्म कुंडली का सूक्ष्म परीक्षण कर अनुकूल शुभ मुहूर्त (मंगलवार, अमावस्या अथवा ग्रह गोचर) तय करते हैं और संपूर्ण विधि व सामग्री की जानकारी देते हैं।',
    },
    {
      num: '3',
      title: 'पूजन संपन्नता, वीडियो एवं प्रसाद',
      desc: 'नियत तिथि पर उज्जैन में मंगलनाथ अथवा सिद्ध पीठ पर आपके नाम से संकल्पपूर्वक पूजा संपन्न होती है। पूजन का वीडियो WhatsApp पर दिया जाता है तथा रक्षा सूत्र व भस्म/प्रसाद आपके पते पर स्पीड पोस्ट द्वारा भेजा जाता है।',
    },
  ];

  const cities = [
    { icon: '🚗', title: 'इंदौर एवं भोपाल के भक्तों के लिए', desc: 'मात्र 1 से 3.5 घंटे की सड़क दूरी। सुबह आकर दोपहर तक पूजा कराकर उसी दिन वापस लौट सकते हैं।' },
    { icon: '🚆', title: 'गुजरात (अहमदाबाद, सूरत, वडोदरा)', desc: 'सीधी ट्रेन और सड़क मार्ग उपलब्ध। सपरिवार दर्शन एवं पूजन के लिए अग्रिम आरक्षण सुविधा।' },
    { icon: '✈️', title: 'दिल्ली, मुंबई एवं पुणे के भक्तों के लिए', desc: 'इंदौर तक सीधी फ्लाइट अथवा उज्जैन तक सुपरफास्ट ट्रेनें। ऑनलाइन संकल्प की सर्वाधिक सुविधा।' },
    { icon: '🌍', title: 'अनिवासी भारतीय (NRI) एवं दूरस्थ राज्य', desc: 'वीडियो कॉल एवं डिजिटल संकल्प द्वारा शास्त्रोंक्त पूजा की पूर्ण प्रामाणिक व्यवस्था।' },
  ];

  return (
    <main className="pt-20">
      <SEO
        title="बाहर के शहर से उज्जैन पूजा बुकिंग | ऑनलाइन संकल्प व विधि"
        description="इंदौर, भोपाल, दिल्ली, मुंबई, पुणे, गुजरात से उज्जैन में मंगल भात व कालसर्प पूजा बुकिंग: ऑनलाइन संकल्प विधि, लाइव वीडियो व पंडित दीपक पंड्या सहायता।"
        canonical={canonicalUrl}
        schema={schema}
      />

      <nav aria-label="Breadcrumb" className="bg-[#FAF7F2] border-b border-[#E8DCC8] py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-[#8C7A6B]">
          <Link to="/" className="hover:text-[#B45309] transition-colors">{lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</Link>
          <span className="text-[#D4C5B0]">›</span>
          <span className="text-[#1F160F] font-semibold">{lang === 'hi' ? 'बाहर के शहरों से पूजा बुकिंग' : 'Outstation Puja Booking'}</span>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] py-14 sm:py-20 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D97706]/10 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D97706]/10 text-[#B45309] text-xs font-semibold tracking-wide mb-4">
            ✦ देश-विदेश के श्रद्धालुओं हेतु सेवा ✦
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1F160F] font-heading leading-snug mb-4">
            बाहर के शहरों से उज्जैन पूजा कैसे बुक करें – संपूर्ण ऑनलाइन संकल्प प्रक्रिया
          </h1>
          <p className="text-[#8C7A6B] font-medium text-sm sm:text-base max-w-xl mx-auto">
            इंदौर, भोपाल, दिल्ली, मुंबई, पुणे, गुजरात एवं अन्य शहरों के भक्तों के लिए सरल 3-चरणीय बुकिंग गाइड
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309]" />
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">

          <div className="bg-[#D97706]/10 border-l-4 border-[#D97706] rounded-r-2xl p-5 sm:p-6" data-aos="fade-up">
            <h2 className="text-base font-bold text-[#1F160F] uppercase mb-2">⚡ संक्षेप में उत्तर / Direct Answer</h2>
            <p className="text-[#3D2E1F] font-medium leading-relaxed text-base sm:text-lg">
              बाहर के शहरों के भक्त दो प्रकार से पूजा करवा सकते हैं: (1) उज्जैन आकर प्रत्यक्ष पूजन, जिसके लिए अग्रिम तिथि बुक की जाती है, अथवा (2) यदि आप उज्जैन नहीं आ सकते, तो आपके नाम, गोत्र और कुलदेवता के स्मरण से वैदिक ब्राह्मणों द्वारा ऑनलाइन संकल्प लेकर शास्त्रोक्त पूजन संपन्न किया जाता है और वीडियो व प्रसाद भेजा जाता है।
            </p>
          </div>

          <div className="rounded-3xl border border-[#E8DCC8] p-6 sm:p-8 bg-white" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-[#1F160F] font-heading mb-6">
              3 सरल चरणों में बाहर के शहरों से पूजा कैसे बुक करें?
            </h2>
            <div className="space-y-5">
              {steps.map((s) => (
                <div key={s.num} className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC8] flex gap-4">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D97706] to-[#B45309] text-white font-bold text-lg flex items-center justify-center shrink-0">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#1F160F] mb-1">{s.title}</h3>
                    <p className="text-[#5C4A3A] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#E8DCC8] p-6 sm:p-8 bg-white" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-[#1F160F] font-heading mb-4">
              किन शहरों के श्रद्धालुओं के लिए विशेष व्यवस्था है?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {cities.map((c, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC8]">
                  <p className="font-bold text-[#1F160F]">{c.icon} {c.title}</p>
                  <p className="text-[#5C4A3A] text-xs mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#E8DCC8] p-6 sm:p-8 bg-white" data-aos="fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1F160F] font-heading mb-2">
              ऑनलाइन पूजा हेतु विवरण भेजें
            </h2>
            <p className="text-xs sm:text-sm text-[#8C7A6B] mb-6">
              नीचे दिया गया फॉर्म भरें, पंडित दीपक पंड्या जी सीधे आपसे WhatsApp पर संपर्क करेंगे:
            </p>
            <BookingForm />
          </div>

        </div>
      </section>
    </main>
  );
}
