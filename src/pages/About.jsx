// ============================================================
// About.jsx
// ============================================================
import { useEffect } from 'react';
import vipGuestImg from '../assets/vip_guest.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';

const C = CONTENT;

// VIP Photo Gallery
const VIP_PHOTOS = [
  { img: null, emoji: '🙏', hi: 'नेता जी के आवास पर पूजन — इंदौर', en: 'Puja at Leader\'s Residence — Indore' },
  { img: null, emoji: '🌟', hi: 'जिला कलेक्टर के साथ — उज्जैन', en: 'With District Collector — Ujjain' },
  { img: null, emoji: '📜', hi: 'विधायक जी का गृह प्रवेश पूजन', en: 'MLA\'s Griha Pravesh Puja' },
  { img: null, emoji: '🏆', hi: 'सांसद जी के साथ विशेष अनुष्ठान', en: 'Special Ritual with MP Ji' },
  { img: null, emoji: '⭐', hi: 'मंत्री जी के साथ महामृत्युंजय अनुष्ठान', en: 'Mahamrityunjay with Minister Ji' },
];

export default function About() {
  const { t } = useLanguage();
  const ab = C.about;

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section
        className="py-20 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #2D1500)' }}
        aria-labelledby="about-page-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="section-tag text-gold/80 mb-4 inline-flex">{t(ab.badge)}</span>
          <h1 id="about-page-heading" className="text-4xl md:text-5xl font-bold text-cream font-devanagari mb-4">
            {t(ab.heading)}
          </h1>
          <p className="text-gold font-devanagari font-semibold mb-2">{t(ab.subheading)}</p>
          <div className="gold-line" />
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Photo + Quick stats */}
            <div data-aos="fade-right">
              <div className="rounded-2xl overflow-hidden shadow-divine bg-gradient-to-br from-primary/10 via-saffron/10 to-gold/10 aspect-[4/5] flex flex-col items-center justify-center text-center p-8 mb-6">
                <div className="text-7xl mb-4 animate-float" aria-hidden="true">🕉️</div>
                <h2 className="text-2xl font-bold text-divine-brown font-devanagari">{t(C.panditName)}</h2>
                <p className="text-saffron font-semibold mt-1 font-devanagari text-sm">{t(C.location)}</p>
                <div className="gold-line mt-3 mb-4" />
                <div className="grid grid-cols-2 gap-3 w-full">
                  {[
                    { hi: { count: '15+', label: 'वर्ष' }, en: { count: '15+', label: 'Years' } },
                    { hi: { count: '5000+', label: 'अनुष्ठान' }, en: { count: '5000+', label: 'Rituals' } },
                    { hi: { count: '9', label: 'सेवाएं' }, en: { count: '9', label: 'Services' } },
                    { hi: { count: '4.9⭐', label: 'रेटिंग' }, en: { count: '4.9⭐', label: 'Rating' } },
                  ].map((s, i) => {
                    const sv = t(s);
                    return (
                      <div key={i} className="bg-cream/80 rounded-xl p-3 text-center">
                        <p className="text-2xl font-bold text-shimmer">{sv?.count}</p>
                        <p className="text-xs text-divine-muted font-devanagari">{sv?.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Contact Quick */}
              <div className="gradient-border p-5 rounded-2xl text-center">
                <p className="font-bold text-divine-brown font-devanagari mb-3">
                  {t({ hi: 'अभी संपर्क करें', en: 'Contact Now' })}
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <a href="tel:+916263401651" className="btn-primary text-sm py-2 px-4">📞 6263401651</a>
                  <a href="https://wa.me/916263401651" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">💬 WhatsApp</a>
                </div>
              </div>
            </div>

            {/* Right: Bio */}
            <div data-aos="fade-left">
              <SectionHeading
                badge={t({ hi: 'जीवन परिचय', en: 'Biography' })}
                heading={t(ab.heading)}
                subheading=""
                center={false}
              />
              {t(ab.bio).map((para, i) => (
                <p key={i} className="text-divine-muted leading-relaxed font-devanagari mb-4">
                  {para}
                </p>
              ))}

              {/* Credentials */}
              <h3 className="text-xl font-bold text-divine-brown font-devanagari mt-8 mb-4">
                {t(ab.credentials.heading)}
              </h3>
              <div className="flex flex-col gap-3">
                {ab.credentials.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-cream-dark" data-aos="fade-up" data-aos-delay={i * 60}>
                    <span className="text-xl shrink-0" aria-hidden="true">{item.icon}</span>
                    <p className="text-sm text-divine-brown font-devanagari font-medium">{t(item)}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Link to="/booking" className="btn-gold font-devanagari">
                  🙏 {t({ hi: 'अभी पूजा बुक करें', en: 'Book Puja Now' })}
                </Link>
                <Link to="/services" className="btn-secondary font-devanagari">
                  {t({ hi: 'सेवाएं देखें', en: 'View Services' })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP / Credibility Gallery */}
      <section className="py-20 bg-divine-dark" aria-labelledby="vip-gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge={t({ hi: '🏆 विशेष अतिथि', en: '🏆 VIP Guests' })}
            heading={t({ hi: 'राजनेताओं एवं मंत्रियों का विश्वास', en: 'Trusted by Politicians & Ministers' })}
            subheading={t({ hi: 'मध्यप्रदेश के कई प्रतिष्ठित जनप्रतिनिधियों ने पंडित जी से पूजन करवाया है', en: 'Several prominent representatives of Madhya Pradesh have had puja performed by Pandit Ji' })}
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {/* Real VIP Photo — first card */}
            <div
              className="gallery-item rounded-2xl overflow-hidden border border-saffron/30 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={0}
              style={{ gridColumn: 'span 1' }}
            >
              <img
                src={vipGuestImg}
                alt={t({ hi: 'राज्य मंत्री के साथ — विशेष पूजन', en: 'Special Puja with State Minister' })}
                className="w-full h-full object-cover"
                style={{ minHeight: '200px', maxHeight: '280px' }}
              />
              <div className="bg-gradient-to-t from-black/70 to-transparent p-3 -mt-12 relative">
                <p className="text-cream/90 text-xs font-devanagari text-center">
                  {t({ hi: 'राज्य मंत्री के साथ — भोपाल', en: 'With State Minister — Bhopal' })}
                </p>
              </div>
            </div>

            {VIP_PHOTOS.map((ph, i) => (
              <div
                key={i}
                className="gallery-item bg-gradient-to-br from-primary/20 to-saffron/10 rounded-2xl p-8 text-center border border-saffron/20"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 80}
              >
                <div className="text-5xl mb-3">{ph.emoji}</div>
                <p className="text-cream/80 text-sm font-devanagari">{t(ph)}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-cream/40 text-xs mt-6 font-devanagari">
            {t({ hi: '* वास्तविक फोटो जल्द अपलोड की जाएंगी', en: '* Real photos will be uploaded soon' })}
          </p>
        </div>
      </section>
    </main>
  );
}
