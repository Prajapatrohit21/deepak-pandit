// ============================================================
// Booking.jsx — Full dedicated booking page
// ============================================================
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import BookingForm from '../components/ui/BookingForm';

const C = CONTENT;

export default function Booking() {
  const { t } = useLanguage();
  const bk = C.booking;
  const location = useLocation();
  const defaultService = location.state?.service || '';

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    { n: '1', hi: 'फॉर्म भरें', en: 'Fill Form', hi2: 'नाम, नंबर, पूजन प्रकार और समस्या', en2: 'Name, number, puja type and problem' },
    { n: '2', hi: 'WhatsApp पर भेजें', en: 'Send on WhatsApp', hi2: 'Submit बटन दबाते ही WhatsApp खुलेगा', en2: 'WhatsApp opens as soon as you click Submit' },
    { n: '3', hi: 'पुष्टि प्राप्त करें', en: 'Get Confirmation', hi2: 'पंडित जी मुहूर्त एवं विवरण देंगे', en2: 'Pandit Ji will share muhurta & details' },
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section
        className="py-14 sm:py-20 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #2D1500)' }}
        aria-labelledby="booking-page-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="text-3xl sm:text-4xl mb-3 animate-float" aria-hidden="true">📅</div>
          <span className="section-tag text-gold/80 mb-4 inline-flex">{t(bk.badge)}</span>
          <h1 id="booking-page-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream font-devanagari mb-4">
            {t(bk.heading)}
          </h1>
          <p className="text-cream/70 font-devanagari text-sm sm:text-base">{t(bk.subheading)}</p>
          <div className="gold-line mt-4" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-saffron text-white font-bold text-xl flex items-center justify-center mx-auto mb-3 shadow-divine">
                  {step.n}
                </div>
                <p className="font-bold text-divine-brown font-devanagari mb-1">
                  {t({ hi: step.hi, en: step.en })}
                </p>
                <p className="text-xs text-divine-muted font-devanagari">
                  {t({ hi: step.hi2, en: step.en2 })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form + Sidebar */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3" data-aos="fade-right">
              <div className="gradient-border rounded-3xl p-4 sm:p-8 bg-cream-light shadow-card">
                <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-6">
                  {t({ hi: 'पूजा बुकिंग फॉर्म', en: 'Puja Booking Form' })}
                </h2>
                <BookingForm defaultService={defaultService} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5" data-aos="fade-left">
              {/* Direct contact */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: 'linear-gradient(135deg, #8B1A1A, #C8860A)' }}
              >
                <p className="font-bold text-lg mb-1 font-devanagari">
                  {t({ hi: 'सीधे संपर्क करें', en: 'Direct Contact' })}
                </p>
                <p className="text-cream/70 text-sm font-devanagari mb-4">
                  {t({ hi: 'प्रातः 6 से रात्रि 9 बजे तक', en: '6 AM to 9 PM daily' })}
                </p>
                <a href="tel:+916263401651" className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-3">
                  <span className="text-xl">📞</span>
                  <span className="font-bold">+91 6263401651</span>
                </a>
                <a href="https://wa.me/916263401651" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <span className="text-xl">💬</span>
                  <span className="font-bold">WhatsApp Chat</span>
                </a>
              </div>

              {/* Why book with us */}
              <div className="gradient-border rounded-2xl p-6">
                <h3 className="font-bold text-divine-brown font-devanagari mb-3">
                  {t({ hi: 'हमारे साथ क्यों बुक करें?', en: 'Why Book With Us?' })}
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { hi: '✅ वैदिक विधि-विधान से पूजन', en: '✅ Puja as per Vedic rituals' },
                    { hi: '✅ 15+ वर्षों का अनुभव', en: '✅ 15+ years of experience' },
                    { hi: '✅ शुभ मुहूर्त की व्यवस्था', en: '✅ Auspicious muhurta arranged' },
                    { hi: '✅ पूर्ण गोपनीयता', en: '✅ Complete confidentiality' },
                    { hi: '✅ तत्काल WhatsApp प्रतिक्रिया', en: '✅ Instant WhatsApp response' },
                    { hi: '✅ ऑनलाइन एवं ऑफलाइन पूजन', en: '✅ Online & offline puja' },
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-divine-muted font-devanagari">{t(item)}</li>
                  ))}
                </ul>
              </div>

              {/* Location */}
              <div className="bg-cream-dark rounded-2xl p-5">
                <p className="font-bold text-divine-brown font-devanagari mb-2 flex items-center gap-2">
                  <span>📍</span> {t({ hi: 'हमारा स्थान', en: 'Our Location' })}
                </p>
                <p className="text-sm text-divine-muted font-devanagari">
                  {t(C.location)}
                </p>
                <a
                  href="https://maps.google.com/?q=Ujjain+Madhya+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron text-xs hover:underline mt-2 inline-block font-devanagari"
                >
                  {t({ hi: '→ Google Maps पर देखें', en: '→ View on Google Maps' })}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
