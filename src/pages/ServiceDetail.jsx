// ============================================================
// ServiceDetail.jsx — Individual service detail page
// ============================================================
import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../data/services';
import { CONTENT } from '../data/content';
import BookingForm from '../components/ui/BookingForm';

const C = CONTENT;

// FAQ Accordion Item
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-question w-full text-left font-devanagari"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className={`text-saffron text-xl transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`faq-answer font-devanagari text-divine-muted text-sm leading-relaxed ${open ? 'open' : ''}`}>
        {a}
      </div>
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();

  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/services" replace />;

  const content = lang === 'hi' ? service.hi : service.en;
  const altContent = lang === 'hi' ? service.en : service.hi;

  return (
    <main className="pt-20">
      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `${service.hi.name} — Mahadev Anushthan Kendra, Ujjain`,
            description: service.hi.description,
            provider: {
              '@type': 'LocalBusiness',
              name: 'महादेव अनुष्ठान केंद्र',
              telephone: '+916263401651',
              address: { '@type': 'PostalAddress', addressLocality: 'Ujjain', addressRegion: 'Madhya Pradesh', addressCountry: 'IN' },
            },
            areaServed: 'Ujjain, Madhya Pradesh, India',
          }),
        }}
      />

      {/* Hero Banner */}
      <section
        className="py-24 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #3D1000, #1C0A00)' }}
        aria-labelledby="service-detail-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="text-6xl mb-4 animate-float" role="img" aria-hidden="true">{service.icon}</div>
          <span className="badge badge-gold mb-4 inline-flex">
            {t({ hi: 'वैदिक अनुष्ठान सेवा', en: 'Vedic Ritual Service' })}
          </span>
          <h1 id="service-detail-heading" className="text-4xl md:text-5xl font-bold text-cream font-devanagari mb-3 leading-snug">
            {content.name}
          </h1>
          <p className="text-gold font-semibold font-devanagari mb-2">{content.tagline}</p>
          <div className="gold-line" />
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-1.5 text-cream/70">
              <span>⏱</span>
              <span className="font-devanagari">{content.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-cream/70">
              <span>📍</span>
              <span className="font-devanagari">{t(C.location)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: Main content */}
            <div className="lg:col-span-2">

              {/* Description */}
              <div className="gradient-border p-8 mb-8 rounded-2xl" data-aos="fade-up">
                <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-4">
                  {content.name} {t({ hi: 'क्या है?', en: '— Overview' })}
                </h2>
                <p className="text-divine-muted leading-relaxed font-devanagari whitespace-pre-line">
                  {content.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8" data-aos="fade-up">
                <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-4">
                  {t({ hi: 'पूजन के लाभ', en: 'Benefits of Puja' })}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {content.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-cream-dark border border-saffron/10">
                      <span className="text-gold text-lg mt-0.5 shrink-0">✦</span>
                      <p className="text-sm text-divine-brown font-devanagari font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Should Do */}
              <div className="gradient-border p-6 mb-8 rounded-2xl" data-aos="fade-up">
                <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">
                  {t({ hi: 'किसे करवानी चाहिए यह पूजा?', en: 'Who Should Perform This Puja?' })}
                </h2>
                <p className="text-divine-muted font-devanagari leading-relaxed">{content.whoShouldDo}</p>
              </div>

              {/* Samagri */}
              <div className="bg-cream-dark rounded-2xl p-6 mb-8" data-aos="fade-up">
                <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">
                  {t({ hi: 'पूजन सामग्री', en: 'Puja Materials' })}
                </h2>
                <p className="text-divine-muted font-devanagari leading-relaxed">{content.samagri}</p>
              </div>

              {/* FAQ */}
              {content.faqs && content.faqs.length > 0 && (
                <div data-aos="fade-up">
                  <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-4">
                    {t({ hi: 'अक्सर पूछे जाने वाले प्रश्न', en: 'Frequently Asked Questions' })}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {content.faqs.map((faq, i) => (
                      <FaqItem key={i} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Quick Booking */}
                <div
                  className="rounded-2xl p-6 shadow-divine mb-6"
                  style={{ background: 'linear-gradient(135deg, #8B1A1A, #C8860A)' }}
                  data-aos="fade-left"
                >
                  <h3 className="text-xl font-bold text-cream font-devanagari mb-1">
                    {t({ hi: 'अभी बुक करें', en: 'Book Now' })}
                  </h3>
                  <p className="text-cream/70 text-sm font-devanagari mb-4">
                    {t({ hi: 'WhatsApp पर तत्काल प्रतिक्रिया', en: 'Instant response on WhatsApp' })}
                  </p>
                  <div className="bg-cream/95 rounded-xl p-4">
                    <BookingForm defaultService={content.name} />
                  </div>
                </div>

                {/* Contact Quick */}
                <div className="gradient-border rounded-2xl p-5 text-center" data-aos="fade-left" data-aos-delay="100">
                  <p className="font-bold text-divine-brown font-devanagari mb-1">
                    {t({ hi: 'तत्काल सहायता के लिए', en: 'For Immediate Help' })}
                  </p>
                  <p className="text-xs text-divine-muted font-devanagari mb-3">
                    {t({ hi: 'सुबह 6 बजे से रात 9 बजे तक उपलब्ध', en: 'Available 6 AM to 9 PM' })}
                  </p>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+916263401651" className="btn-primary text-sm py-2 justify-center font-devanagari">
                      📞 6263401651
                    </a>
                    <a href="https://wa.me/916263401651" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 justify-center font-devanagari">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

                {/* Related Services */}
                <div className="mt-6 p-5 bg-cream-dark rounded-2xl" data-aos="fade-left" data-aos-delay="150">
                  <h3 className="font-bold text-divine-brown font-devanagari mb-3 text-sm">
                    {t({ hi: 'अन्य सेवाएं', en: 'Other Services' })}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {SERVICES.filter((s) => s.slug !== slug).slice(0, 4).map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="text-sm text-divine-muted hover:text-saffron transition-colors font-devanagari flex items-center gap-1.5 py-1"
                      >
                        <span className="text-saffron text-xs">›</span>
                        {lang === 'hi' ? s.hi.name : s.en.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
