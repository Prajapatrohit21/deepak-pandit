// ============================================================
// Testimonials.jsx — Pandits Of Banaras Luxury Devotee Reviews
// ============================================================
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import SEO from '../components/common/SEO';
import { WA_HREF } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';

const C = CONTENT;

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const tm = C.testimonials;

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const testimonialsTitle = lang === 'hi'
    ? 'यजमानों के अनुभव एवं समीक्षाएं | पंडित दीपक पंड्या उज्जैन (56+ Reviews)'
    : 'Client Reviews & Testimonials | Pandit Deepak Pandya Ujjain';

  const testimonialsDesc = lang === 'hi'
    ? 'उज्जैन में वैदिक पंडित दीपक पंड्या जी द्वारा कराई गई मंगल भात पूजा, कालसर्प शांति एवं रुद्राभिषेक पर यजमानों के सच्चे अनुभव एवं Google समीक्षाएं।'
    : 'Read 56+ verified Google reviews and testimonials from devotees for Vedic Pujas performed by Pandit Deepak Pandya in Ujjain.';

  return (
    <main className="pt-20 bg-[#FAF7F2] text-[#2D1B00]">
      <SEO
        title={testimonialsTitle}
        description={testimonialsDesc}
        canonical="https://mangaldoshpujanivaran.in/testimonials"
      />
      
      {/* ── Page Header ── */}
      <section
        className="py-16 sm:py-24 text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] border-b border-[#E8DCC8]"
        aria-labelledby="testimonials-page-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,_rgba(139,26,26,0.06)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gold/60 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold font-sans uppercase tracking-wider mb-4 shadow-xs">
            <span className="text-gold">✦</span>
            <span>{t({ hi: 'संतुष्ट यजमानों के अनुभव • उज्जैन सिद्ध पीठ', en: 'Verified Devotee Experiences • Ujjain' })}</span>
            <span className="text-gold">✦</span>
          </span>

          <h1 id="testimonials-page-heading" className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F160F] leading-tight mb-4">
            {t(tm.heading)}
          </h1>

          <p className="text-[#5C4D3E] font-devanagari text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {t(tm.subheading)}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full mx-auto mt-6" />
        </div>
      </section>

      {/* ── Google 5.0 Star Trust Banner ── */}
      <section className="py-8 bg-white border-b border-[#E8DCC8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-6 border border-[#E8DCC8] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-2xl text-[#1F160F]">3.9</span>
                  <div className="flex text-amber-500 text-lg leading-none">★★★★☆</div>
                </div>
                <p className="text-xs text-[#5C4D3E] font-medium font-devanagari">
                  Google Verified Devotee Reviews (56+ समीक्षाएं)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              <span>✓ 100% प्रामाणिक वैदिक पूजन अनुभव</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...tm.reviews, ...tm.reviews].map((review, i) => (
              <article
                key={i}
                className="bg-white rounded-3xl border-2 border-[#E8DCC8] p-6 sm:p-7 shadow-[0_4px_20px_rgba(45,27,0,0.05)] hover:shadow-[0_12px_36px_rgba(45,27,0,0.1)] transition-all duration-300 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 60}
              >
                <div>
                  {/* Google Star Rating & Quote Mark */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-500 text-base leading-none">
                      {'★'.repeat(review.rating)}
                    </div>
                    <span className="text-2xl text-gold/30 font-serif">“</span>
                  </div>

                  {/* Devotee Review Text */}
                  <p className="text-sm sm:text-base text-[#4A3B2C] leading-relaxed font-devanagari mb-6 font-medium italic">
                    "{t(review.text)}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#F0E6D8] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D97706] to-[#B45309] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                      {t(review.name)[0]}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm text-[#1F160F]">{t(review.name)}</p>
                      <p className="text-xs text-[#8C3814] font-medium font-devanagari">{t(review.city)}</p>
                    </div>
                  </div>
                  <span className="bg-[#FFF7E6] text-[#8C3814] border border-gold/40 text-[11px] font-bold px-2.5 py-1 rounded-full font-devanagari">
                    {t(review.service)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="py-16 bg-gradient-to-r from-[#D97706] to-[#B45309] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-2xl sm:text-4xl mb-3">
            {t({ hi: 'आप भी वैदिक शांति एवं दोष निवारण का संकल्प लें', en: 'Book Your Auspicious Vedic Puja in Ujjain' })}
          </h2>
          <p className="text-white/90 font-devanagari text-base mb-8 max-w-2xl mx-auto">
            {t({
              hi: 'उज्जैन पधारकर या घर बैठे ऑनलाइन संकल्प के माध्यम से पूजा संपन्न कराएं।',
              en: 'Perform puja by visiting Ujjain or through authentic online sankalp.',
            })}
          </p>
          <a
            href={WA_HREF}
            onClick={() => trackWhatsAppClick('testimonials_cta_banner')}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp पर पूजा बुक करें एवं परामर्श प्राप्त करें"
            aria-label="Book Vedic Puja on WhatsApp with Pandit Deepak Pandya"
            className="bg-white text-[#8C3814] hover:bg-[#FFF8E6] px-8 py-4 rounded-xl font-bold font-devanagari text-base shadow-xl inline-flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <span>💬 WhatsApp पर पूजा बुक करें</span>
          </a>
        </div>
      </section>

    </main>
  );
}
