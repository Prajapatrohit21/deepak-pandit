// ============================================================
// Testimonials.jsx — Full testimonials page
// ============================================================
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';

const C = CONTENT;

export default function Testimonials() {
  const { t } = useLanguage();
  const tm = C.testimonials;

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
        aria-labelledby="testimonials-page-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="section-tag text-gold/80 mb-4 inline-flex">⭐ {t(tm.badge)}</span>
          <h1 id="testimonials-page-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream font-devanagari mb-4">
            {t(tm.heading)}
          </h1>
          <p className="text-cream/70 font-devanagari text-sm sm:text-base">{t(tm.subheading)}</p>
          <div className="gold-line mt-4" />
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { hi: { count: '4.9/5', label: 'औसत रेटिंग' }, en: { count: '4.9/5', label: 'Avg Rating' } },
              { hi: { count: '500+', label: 'समीक्षाएं' }, en: { count: '500+', label: 'Reviews' } },
              { hi: { count: '5000+', label: 'संतुष्ट श्रद्धालु' }, en: { count: '5000+', label: 'Happy Devotees' } },
              { hi: { count: '15+', label: 'वर्षों का विश्वास' }, en: { count: '15+', label: 'Years of Trust' } },
            ].map((s, i) => {
              const sv = t(s);
              return (
                <div key={i} className="trust-badge" data-aos="fade-up" data-aos-delay={i * 80}>
                  <p className="count">{sv?.count}</p>
                  <p className="text-sm text-divine-muted font-devanagari">{sv?.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...tm.reviews, ...tm.reviews].map((review, i) => (
              <article
                key={i}
                className="testimonial-card gradient-border p-6 bg-cream-light shadow-card rounded-2xl"
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 80}
              >
                <div className="stars text-lg mb-3" aria-label={`${review.rating} stars`}>
                  {'★'.repeat(review.rating)}
                </div>
                <p className="text-sm text-divine-muted leading-relaxed font-devanagari mb-4">
                  "{t(review.text)}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center text-saffron font-bold text-sm shrink-0">
                    {t(review.name)[0]}
                  </div>
                  <div>
                    <p className="font-bold text-divine-brown text-sm font-devanagari">{t(review.name)}</p>
                    <p className="text-xs text-divine-muted font-devanagari">{t(review.city)}</p>
                    <span className="badge badge-gold text-xs mt-0.5 inline-flex">{t(review.service)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-cream-dark">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-2xl font-bold text-divine-brown font-devanagari mb-4">
            {t({ hi: 'आप भी अपना अनुभव साझा करें', en: 'Share Your Experience Too' })}
          </p>
          <a href="https://wa.me/916263401651" target="_blank" rel="noopener noreferrer" className="btn-gold font-devanagari">
            💬 {t({ hi: 'WhatsApp पर संदेश भेजें', en: 'Send Message on WhatsApp' })}
          </a>
        </div>
      </section>
    </main>
  );
}
