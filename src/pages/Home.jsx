// ============================================================
// Home.jsx — Full hero page with all home sections
// ============================================================
import { useEffect } from 'react';
import heroBg from '../assets/hero_mangal_puja.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { SERVICES } from '../data/services';
import { WA_HREF, PHONE_HREF } from '../utils/whatsapp';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import BookingForm from '../components/ui/BookingForm';

const C = CONTENT;

// ─── Hero Section ──────────────────────────────────────────
function Hero() {
  const { t } = useLanguage();
  const hero = C.hero;

  return (
    <section
      className="hero-section relative flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 25%',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
      aria-label="Hero Section"
    >
      {/* Soft Vignette Overlay: Light & transparent so image is clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-[#1C0A00]/90 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.05)_0%,_rgba(10,3,0,0.55)_100%)] z-0 pointer-events-none" />

      {/* Subtle mandala background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F5C842' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='30' stroke-width='1' stroke='%23F5C842' fill='none'/%3E%3Ccircle cx='40' cy='40' r='20' stroke-width='0.5' stroke='%23F5C842' fill='none'/%3E%3Ccircle cx='40' cy='40' r='10' stroke-width='0.5' stroke='%23F5C842' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Floating Om symbols */}
      <div className="absolute top-1/4 left-4 sm:left-12 text-gold/20 text-4xl sm:text-7xl animate-float font-devanagari select-none pointer-events-none z-0 hidden sm:block" aria-hidden="true">ॐ</div>
      <div className="absolute bottom-1/3 right-4 sm:right-12 text-gold/15 text-4xl sm:text-6xl animate-float font-devanagari select-none pointer-events-none z-0 hidden sm:block" style={{ animationDelay: '1.5s' }} aria-hidden="true">ॐ</div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:py-32 text-center flex flex-col items-center justify-center min-h-screen w-full">
        
        {/* Top Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-gold/40 bg-black/60 backdrop-blur-md text-gold text-xs sm:text-sm font-semibold tracking-wide font-devanagari mb-6 shadow-[0_4px_20px_rgba(245,200,66,0.2)] animate-slide-up hover:border-gold/60 transition-all duration-300"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          {t(hero.badge)}
        </div>

        {/* Heading */}
        <h1
          className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.2] font-devanagari mb-5 tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] animate-slide-up w-full"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <span className="text-shimmer drop-shadow-[0_2px_10px_rgba(245,200,66,0.4)]">{t(hero.title).split('\n')[0]}</span>
          <br />
          <span className="text-cream font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">{t(hero.title).split('\n')[1]}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl text-cream/95 max-w-3xl mx-auto leading-relaxed font-devanagari mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-medium animate-slide-up"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {t(hero.subtitle)}
        </p>

        {/* Highlight Pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-xs sm:text-sm font-devanagari text-gold animate-slide-up w-full"
          style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-gold/30 flex items-center gap-1.5 shadow-md text-xs">
            ✨ {t({ hi: '100% प्रामाणिक वैदिक विधि', en: '100% Authentic Vedic Rituals' })}
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-gold/30 flex items-center gap-1.5 shadow-md text-xs">
            🔥 {t({ hi: 'उज्जैन सिद्ध पीठ अनुष्ठान', en: 'Ujjain Siddha Peeth Puja' })}
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-gold/30 flex items-center gap-1.5 shadow-md text-xs">
            📹 {t({ hi: 'लाइव वीडियो & संकल्प', en: 'Live Video & Sankalp' })}
          </span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mb-4 animate-slide-up hero-cta-group"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <Link
            to="/booking"
            className="btn-gold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto font-devanagari font-bold shadow-[0_6px_25px_rgba(245,200,66,0.35)] hover:shadow-[0_8px_35px_rgba(245,200,66,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>🙏</span> {t(hero.cta1)}
          </Link>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto font-devanagari font-semibold border-gold/70 text-gold bg-black/50 backdrop-blur-md hover:bg-gold/20 hover:border-gold shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>💬</span> {t(hero.cta2)}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-gold/50 bg-black/40 backdrop-blur-sm flex items-start justify-center p-1 shadow-lg">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Badges ──────────────────────────────────────────
function TrustSection() {
  const { t } = useLanguage();
  const tr = C.trust;

  return (
    <section className="py-14 sm:py-20 bg-pattern" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t({ hi: '✅ भरोसेमंद', en: '✅ Trusted' })}
          heading={t(tr.heading)}
          subheading={t(tr.subheading)}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 mt-10">
          {tr.badges.map((badge, i) => (
            <div
              key={i}
              className="trust-badge gradient-border p-5 text-center"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <span className="text-3xl mb-2 block" role="img" aria-label={t(badge.hi)?.title}>
                {badge.icon}
              </span>
              <p className="text-sm font-bold text-divine-brown font-devanagari leading-tight mb-1">
                {t({ hi: badge.hi.title, en: badge.en.title })}
              </p>
              <p className="text-xs text-divine-muted font-devanagari leading-tight">
                {t({ hi: badge.hi.desc, en: badge.en.desc })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ──────────────────────────────────────
function ServicesSection() {
  const { t } = useLanguage();
  const sv = C.services;

  return (
    <section className="py-20 bg-divine-dark relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background Om */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="font-devanagari leading-none text-white/[0.02] select-none" style={{ fontSize: 'min(400px, 80vw)' }}>ॐ</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t(sv.badge)}
          heading={t(sv.heading)}
          subheading={t(sv.subheading)}
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {SERVICES.slice(0, 6).map((svc, i) => (
            <div key={svc.id} data-aos="fade-up" data-aos-delay={i * 80}>
              <ServiceCard service={svc} featured={i === 0} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-gold font-devanagari">
            {t(sv.viewAll)} →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── About Snippet ─────────────────────────────────────────
function AboutSnippet() {
  const { t } = useLanguage();
  const ab = C.aboutSnippet;

  return (
    <section className="py-20 bg-cream" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div data-aos="fade-right" className="relative">
            <div className="rounded-2xl overflow-hidden shadow-divine aspect-[4/5] bg-gradient-to-br from-primary/10 to-saffron/10 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <span className="text-8xl mb-4 font-devanagari text-saffron" aria-hidden="true">ॐ</span>
                <p className="text-2xl font-bold text-divine-brown font-devanagari">{t(ab.heading)}</p>
                <p className="text-divine-muted font-devanagari mt-2 text-sm">{t(ab.subheading)}</p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="badge badge-gold">15+ {t({ hi: 'वर्ष', en: 'Years' })}</span>
                  <span className="badge badge-primary">{t({ hi: 'वैदिक पंडित', en: 'Vedic Pandit' })}</span>
                </div>
                <p className="mt-4 text-xs text-divine-muted font-devanagari">{t(C.location)}</p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-saffron/20 to-gold/20 rounded-full blur-2xl" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-saffron/20 rounded-full blur-xl" aria-hidden="true" />
          </div>

          {/* Text side */}
          <div data-aos="fade-left">
            <span className="section-tag mb-4 inline-flex">{t(ab.badge)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-divine-brown font-devanagari leading-snug mb-2">
              {t(ab.heading)}
            </h2>
            <p className="text-saffron font-semibold text-sm font-devanagari mb-4">{t(ab.subheading)}</p>
            <div className="gold-line mb-6" style={{ margin: '0 0 1.5rem' }} />
            <p className="text-divine-muted leading-relaxed font-devanagari mb-6">
              {t(ab.description)}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {ab.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-cream-dark">
                  <span className="text-xl" role="img" aria-hidden="true">{h.icon}</span>
                  <span className="text-sm font-medium text-divine-brown font-devanagari">{t(h)}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary font-devanagari">
              {t(ab.readMore)} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────
function TestimonialsSection() {
  const { t } = useLanguage();
  const tm = C.testimonials;

  return (
    <section className="py-20 bg-cream-dark" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t(tm.badge)}
          heading={t(tm.heading)}
          subheading={t(tm.subheading)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tm.reviews.map((review, i) => (
            <article
              key={i}
              className="testimonial-card gradient-border p-6 bg-cream-light shadow-card"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Stars */}
              <div className="stars text-lg mb-3" aria-label={`${review.rating} stars`}>
                {'★'.repeat(review.rating)}
              </div>

              {/* Text */}
              <p className="text-sm text-divine-muted leading-relaxed font-devanagari mb-4">
                "{t(review.text)}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center text-saffron font-bold text-sm">
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

        <div className="text-center mt-10">
          <Link to="/testimonials" className="btn-secondary font-devanagari">
            {t({ hi: 'सभी समीक्षाएं देखें', en: 'View All Reviews' })} →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Quick Booking Section ─────────────────────────────────
function QuickBookingSection() {
  const { t } = useLanguage();
  const bk = C.booking;

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #4A0E0E 100%)' }} aria-labelledby="booking-heading">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-mandala opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="section-tag text-gold/80 mb-3 inline-flex">
            {t(bk.badge)}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cream font-devanagari mb-3">
            {t(bk.heading)}
          </h2>
          <p className="text-cream/70 font-devanagari">{t(bk.subheading)}</p>
          <div className="gold-line mt-4" />
        </div>

        <div className="bg-cream/95 rounded-3xl p-6 sm:p-8 shadow-2xl" data-aos="fade-up" data-aos-delay="100">
          <BookingForm compact />
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ─────────────────────────────────────────────
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <AboutSnippet />
      <TestimonialsSection />
      <QuickBookingSection />
    </main>
  );
}
