// ============================================================
// Services.jsx — All 9 services listing page
// ============================================================
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { SERVICES } from '../data/services';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';

const C = CONTENT;

export default function Services() {
  const { t } = useLanguage();
  const sv = C.services;

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      {/* Header */}
      <section
        className="py-14 sm:py-20 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #2D1500)' }}
        aria-labelledby="services-page-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="section-tag text-gold/80 mb-4 inline-flex">🙏 {t(sv.badge)}</span>
          <h1 id="services-page-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream font-devanagari mb-4">
            {t(sv.heading)}
          </h1>
          <p className="text-cream/70 font-devanagari text-sm sm:text-base">{t(sv.subheading)}</p>
          <div className="gold-line mt-4" />
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-cream">
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

      {/* CTA Banner */}
      <section
        className="py-12 sm:py-16 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #8B1A1A, #C8860A)' }}
      >
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream font-devanagari mb-4">
            {t({ hi: 'आज ही अपनी पूजा बुक करवाएं', en: 'Book Your Puja Today' })}
          </h2>
          <p className="text-cream/80 font-devanagari mb-6 text-sm sm:text-base">
            {t({ hi: 'WhatsApp पर संपर्क करें या नीचे फॉर्म भरें', en: 'Contact on WhatsApp or fill the form below' })}
          </p>
          <a
            href="https://wa.me/916263401651"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold font-devanagari text-base sm:text-lg px-6 sm:px-10 py-3.5 sm:py-4"
          >
            💬 {t({ hi: 'WhatsApp पर संपर्क करें', en: 'Contact on WhatsApp' })}
          </a>
        </div>
      </section>
    </main>
  );
}
