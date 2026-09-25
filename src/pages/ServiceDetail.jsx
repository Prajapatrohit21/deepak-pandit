// ============================================================
// ServiceDetail.jsx — Individual service detail page
// Implements the strict 13-point AEO/SEO structure, Answer-First,
// Question-based headings, Schema, and Breadcrumbs.
// ============================================================
import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../data/services';
import { BLOG_ARTICLES } from '../data/blog';
import BookingForm from '../components/ui/BookingForm';
import SEO from '../components/common/SEO';
import { trackWhatsAppClick, trackPhoneCall } from '../utils/analytics';

// FAQ Accordion / Expandable Item
function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className={`faq-item rounded-xl border border-saffron/20 overflow-hidden bg-white ${open ? 'open shadow-sm' : ''}`}>
      <button
        className="faq-question w-full text-left font-devanagari p-4 sm:p-5 flex justify-between items-center text-divine-brown font-bold text-base hover:bg-cream-dark/50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className={`text-saffron text-xl font-bold transition-transform duration-300 shrink-0 ml-3 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="faq-answer font-devanagari text-divine-muted text-sm leading-relaxed px-4 pb-5 sm:px-5 sm:pb-6 border-t border-cream-dark bg-cream/40">
          {a}
        </div>
      )}
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
  const canonicalUrl = `https://mangaldoshpujanivaran.in/services/${service.slug}`;

  // Structured Data (Service + FAQPage)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: content.h1,
        alternateName: service.hi.name,
        serviceType: 'Vedic Ritual & Puja',
        provider: {
          '@type': 'ProfessionalService',
          name: 'Mangal Dosh Puja Nivaran',
          alternateName: 'मंगल दोष पूजन केंद्र',
          url: 'https://mangaldoshpujanivaran.in/',
          telephone: '+916263401651',
          email: 'mangaldoshpujanivaran@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'मंगलनाथ मंदिर मार्ग, उज्जैन (TODO: Confirm exact street address)',
            addressLocality: 'Ujjain',
            addressRegion: 'Madhya Pradesh',
            postalCode: '456001',
            addressCountry: 'IN',
          },
        },
        areaServed: [
          { '@type': 'City', name: 'Ujjain' },
          { '@type': 'City', name: 'Indore' },
          { '@type': 'City', name: 'Bhopal' },
          { '@type': 'City', name: 'Delhi' },
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'City', name: 'Pune' },
          { '@type': 'State', name: 'Gujarat' },
        ],
        description: content.directAnswer,
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: (content.faqs || []).map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://mangaldoshpujanivaran.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://mangaldoshpujanivaran.in/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: content.name,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  // Find related blogs
  const relatedBlogs = (service.relatedBlogs || [])
    .map((blogSlug) => BLOG_ARTICLES.find((b) => b.slug === blogSlug))
    .filter(Boolean);

  // Find related services
  const relatedServices = (service.relatedPujas || [])
    .map((sSlug) => SERVICES.find((s) => s.slug === sSlug))
    .filter(Boolean);

  return (
    <main className="pt-20">
      {/* SEO Head Tags */}
      <SEO
        title={service.meta?.title || `${content.name} | पंडित दीपक पंड्या उज्जैन`}
        description={service.meta?.description || content.directAnswer.slice(0, 155)}
        canonical={canonicalUrl}
        schema={serviceSchema}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-cream-dark/80 border-b border-saffron/15 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-divine-muted font-devanagari">
          <Link to="/" className="hover:text-gold transition-colors">
            {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
          </Link>
          <span className="text-saffron/40">›</span>
          <Link to="/services" className="hover:text-gold transition-colors">
            {lang === 'hi' ? 'पूजा सेवाएं' : 'Services'}
          </Link>
          <span className="text-saffron/40">›</span>
          <span className="text-divine-brown font-semibold truncate" aria-current="page">
            {content.name}
          </span>
        </div>
      </nav>

      {/* Hero Banner: 1. H1 with puja name + Ujjain */}
      <section
        className="py-12 sm:py-20 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #3D1000, #1C0A00)' }}
        aria-labelledby="service-detail-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-4xl sm:text-6xl mb-4 animate-float" role="img" aria-hidden="true">{service.icon}</div>
          <span className="badge badge-gold mb-4 inline-flex">
            ✦ {t({ hi: 'उज्जैन वैदिक अनुष्ठान सेवा', en: 'Ujjain Vedic Ritual' })} ✦
          </span>
          <h1 id="service-detail-heading" className="text-2xl sm:text-4xl md:text-5xl font-bold text-cream font-devanagari mb-3 leading-snug">
            {content.h1}
          </h1>
          <p className="text-gold font-semibold font-devanagari mb-4 text-sm sm:text-base">{content.tagline}</p>
          <div className="gold-line mb-6" />

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <span>⏱</span>
              <span className="font-devanagari text-cream">{content.vidhi?.duration || '3–5 घंटे'}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <span>📍</span>
              <span className="font-devanagari text-cream">{content.location.split('—')[0]}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <span>👤</span>
              <span className="font-devanagari text-gold">पंडित दीपक पंड्या (15+ वर्ष अनुभव)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left 2 Cols: The 13 Points in exact order */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* 2. 40-60 word direct answer (Answer-First Box) */}
              <div className="bg-gold/10 border-l-4 border-gold rounded-r-2xl p-5 sm:p-6 shadow-sm" data-aos="fade-up">
                <h2 className="text-base font-bold text-divine-brown uppercase tracking-wide font-devanagari mb-2 flex items-center gap-2">
                  <span>⚡</span> {t({ hi: 'संक्षेप में उत्तर / Direct Answer', en: 'Quick Summary' })}
                </h2>
                <p className="text-divine-brown font-medium leading-relaxed font-devanagari text-base sm:text-lg">
                  "{content.directAnswer}"
                </p>
              </div>

              {/* 3. Kya hai, kyun ki jati hai, kin logon ke liye */}
              <div className="gradient-border p-6 sm:p-8 rounded-2xl bg-white shadow-card" data-aos="fade-up">
                <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-5">
                  {content.name} — {t({ hi: 'क्या है, क्यों की जाती है और किसके लिए?', en: 'What, Why and Who?' })}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-saffron font-devanagari mb-1">
                      1. {t({ hi: 'यह पूजा क्या है?', en: 'What is this puja?' })}
                    </h3>
                    <p className="text-divine-muted font-devanagari leading-relaxed">
                      {content.whatWhyWho?.what}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-saffron font-devanagari mb-1">
                      2. {t({ hi: 'यह पूजा क्यों की जाती है?', en: 'Why is it performed?' })}
                    </h3>
                    <p className="text-divine-muted font-devanagari leading-relaxed">
                      {content.whatWhyWho?.why}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-saffron font-devanagari mb-1">
                      3. {t({ hi: 'किन लोगों को यह पूजा करानी चाहिए?', en: 'Who should perform this puja?' })}
                    </h3>
                    <p className="text-divine-muted font-devanagari leading-relaxed">
                      {content.whatWhyWho?.who}
                    </p>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mt-6 pt-6 border-t border-cream-dark">
                  <h3 className="text-lg font-bold text-divine-brown font-devanagari mb-3">
                    {t({ hi: 'पूजन के प्रमुख लाभ', en: 'Key Spiritual Benefits' })}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {content.benefits?.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-cream-dark/60 border border-saffron/10">
                        <span className="text-gold text-base mt-0.5 shrink-0">✦</span>
                        <p className="text-xs sm:text-sm text-divine-brown font-devanagari font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Vidhi step by step (general), avadhi, samagri (general) */}
              <div className="gradient-border p-6 sm:p-8 rounded-2xl bg-white shadow-card" data-aos="fade-up">
                <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-4">
                  {t({ hi: 'पूजा विधि (स्टेप बाय स्टेप), अवधि एवं सामग्री', en: 'Step-by-Step Vidhi, Duration & Samagri' })}
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-saffron font-devanagari mb-3">
                    {t({ hi: 'वैदिक पूजन विधि के प्रमुख चरण:', en: 'Step-by-Step Procedure:' })}
                  </h3>
                  <ol className="space-y-3 list-decimal list-inside text-divine-muted font-devanagari text-sm sm:text-base leading-relaxed">
                    {content.vidhi?.steps?.map((step, idx) => (
                      <li key={idx} className="pl-2">
                        <span className="text-divine-brown font-medium">{step.replace(/\/\*.*?\*\//g, '').trim()}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-cream-dark">
                  <div className="p-4 rounded-xl bg-cream-dark/70">
                    <p className="font-bold text-divine-brown text-sm font-devanagari mb-1">
                      ⏱ {t({ hi: 'पूजन अवधि (समय)', en: 'Duration' })}
                    </p>
                    <p className="text-divine-muted text-sm font-devanagari font-semibold">
                      {content.vidhi?.duration}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-cream-dark/70">
                    <p className="font-bold text-divine-brown text-sm font-devanagari mb-1">
                      🌿 {t({ hi: 'प्रमुख पूजन सामग्री', en: 'Materials (Samagri)' })}
                    </p>
                    <p className="text-divine-muted text-xs sm:text-sm font-devanagari">
                      {content.vidhi?.samagri?.replace(/\/\*.*?\*\//g, '').trim()}
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Kahan hoti hai (Ujjain location) */}
              <div className="p-6 rounded-2xl bg-divine-brown text-cream shadow-card" data-aos="fade-up">
                <h2 className="text-xl sm:text-2xl font-bold font-devanagari text-gold mb-3">
                  📍 {t({ hi: 'पूजा कहाँ होती है? (उज्जैन स्थान)', en: 'Where is the Puja Performed? (Location)' })}
                </h2>
                <p className="font-devanagari text-sm sm:text-base leading-relaxed text-cream/90">
                  {content.location}
                </p>
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between flex-wrap gap-2 text-xs text-cream/70 font-devanagari">
                  <span>पवित्र तीर्थ क्षेत्र: मंगलनाथ मंदिर / शिप्रा तट / महाकाल क्षेत्र, उज्जैन (म.प्र.)</span>
                  <Link to="/contact" className="text-gold underline hover:text-gold-light">
                    {t({ hi: 'नक्शा एवं दिशा-निर्देश देखें →', en: 'View Map & Directions →' })}
                  </Link>
                </div>
              </div>

              {/* 6. Kharch / cost (no number; standard wording) */}
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200" data-aos="fade-up">
                <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-2">
                  💰 {t({ hi: 'पूजा का खर्च कितना होता है?', en: 'What is the Puja Cost?' })}
                </h2>
                <p className="text-divine-brown font-medium font-devanagari text-base leading-relaxed">
                  {content.costInfo?.replace(/\/\*.*?\*\//g, '').trim()}
                </p>
                <p className="text-xs text-divine-muted font-devanagari mt-2">
                  नोट: संकल्प के प्रकार (व्यक्तिगत, सपरिवार अथवा विशेष अनुष्ठान) एवं सामग्री के अनुसार दक्षिणा तय की जाती है। पारदर्शी जानकारी के लिए कॉल या WhatsApp करें।
                </p>
              </div>

              {/* 7. Best days / muhurat */}
              <div className="p-6 rounded-2xl bg-white border border-saffron/20 shadow-card" data-aos="fade-up">
                <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-2">
                  📅 {t({ hi: 'पूजा के लिए शुभ दिन एवं मुहूर्त', en: 'Best Days & Auspicious Muhurat' })}
                </h2>
                <p className="text-divine-muted font-devanagari text-sm sm:text-base leading-relaxed">
                  {content.bestDays?.replace(/\/\*.*?\*\//g, '').trim()}
                </p>
                <p className="text-xs text-saffron font-devanagari mt-2 font-medium">
                  {t({ hi: 'पंडित दीपक पंड्या जी जातक की कुंडली का परीक्षण कर सर्वथा अनुकूल तिथि व लग्न मुहूर्त निकालते हैं।', en: 'Pandit Deepak Pandya advises the exact muhurat after analyzing your birth chart.' })}
                </p>
              </div>

              {/* 8. Online / outstation booking process */}
              <div className="p-6 sm:p-8 rounded-2xl bg-cream-dark/80 border border-saffron/20 shadow-card" data-aos="fade-up">
                <h2 className="text-xl sm:text-2xl font-bold text-divine-brown font-devanagari mb-4">
                  🌐 {t({ hi: 'बाहर के शहरों के लिए ऑनलाइन पूजा संकल्प प्रक्रिया', en: 'Online & Outstation Booking Process' })}
                </h2>
                <p className="text-divine-muted font-devanagari text-sm sm:text-base leading-relaxed mb-4">
                  {content.outstationBooking}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="bg-white p-4 rounded-xl border border-saffron/15">
                    <span className="text-xl font-bold text-gold">1</span>
                    <p className="font-bold text-divine-brown text-sm font-devanagari mt-1">विवरण साझा करें</p>
                    <p className="text-xs text-divine-muted font-devanagari">नाम, गोत्र व जन्म विवरण WhatsApp पर भेजें</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-saffron/15">
                    <span className="text-xl font-bold text-gold">2</span>
                    <p className="font-bold text-divine-brown text-sm font-devanagari mt-1">मुहूर्त एवं संकल्प</p>
                    <p className="text-xs text-divine-muted font-devanagari">पंडित जी द्वारा शुभ तिथि व संकल्प तय</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-saffron/15">
                    <span className="text-xl font-bold text-gold">3</span>
                    <p className="font-bold text-divine-brown text-sm font-devanagari mt-1">पूजन व प्रसाद</p>
                    <p className="text-xs text-divine-muted font-devanagari">लाइव दर्शन / वीडियो व प्रसाद डाक द्वारा</p>
                  </div>
                </div>
              </div>

              {/* 10. 4-8 visible FAQs */}
              {content.faqs && content.faqs.length > 0 && (
                <div data-aos="fade-up">
                  <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-4 flex items-center gap-2">
                    <span>❓</span> {t({ hi: `${content.name} से जुड़े अक्सर पूछे जाने वाले सवाल`, en: 'Frequently Asked Questions' })}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {content.faqs.map((faq, i) => (
                      <FaqItem key={i} q={faq.q} a={faq.a.replace(/\/\*.*?\*\//g, '').trim()} index={i} />
                    ))}
                  </div>
                </div>
              )}

              {/* 11. Internal links to 2-3 related pujas and 1-2 blog posts */}
              <div className="p-6 rounded-2xl bg-white border border-saffron/20 shadow-card" data-aos="fade-up">
                <h3 className="text-lg font-bold text-divine-brown font-devanagari mb-4">
                  🔗 {t({ hi: 'संबंधित वैदिक पूजाएं एवं धार्मिक आलेख', en: 'Related Pujas & Articles' })}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Related Pujas */}
                  <div>
                    <h4 className="text-sm font-bold text-saffron uppercase font-devanagari mb-2">अन्य संबंधित पूजाएं:</h4>
                    <div className="flex flex-col gap-2">
                      {relatedServices.map((rel) => (
                        <Link
                          key={rel.id}
                          to={`/services/${rel.slug}`}
                          className="text-sm text-divine-brown hover:text-gold transition-colors font-devanagari font-medium flex items-center gap-2 p-2 rounded-lg bg-cream/60 hover:bg-cream"
                        >
                          <span>{rel.icon}</span>
                          <span>{lang === 'hi' ? rel.hi.name : rel.en.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Related Blogs */}
                  {relatedBlogs.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold text-saffron uppercase font-devanagari mb-2">पढ़ें उपयोगी आलेख:</h4>
                      <div className="flex flex-col gap-2">
                        {relatedBlogs.map((b) => (
                          <Link
                            key={b.id}
                            to={`/blog/${b.slug}`}
                            className="text-sm text-divine-brown hover:text-gold transition-colors font-devanagari flex items-center gap-2 p-2 rounded-lg bg-cream/60 hover:bg-cream"
                          >
                            <span>📖</span>
                            <span className="line-clamp-1">{lang === 'hi' ? b.hi.title : b.en.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 12. Last updated date */}
              <div className="text-xs text-divine-muted font-devanagari text-right pt-2">
                <span>अंतिम अद्यतन (Last Updated): {service.lastUpdated || '2026-09-19'} | प्रामाणिक वैदिक परंपरा उज्जैन</span>
              </div>

              {/* 13. Pandit Box: Pandit Deepak Pandya, 15+ years, call/WhatsApp */}
              <div className="gradient-border p-6 rounded-2xl bg-divine-dark text-cream shadow-divine" data-aos="fade-up">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-gold p-1 shrink-0 overflow-hidden bg-cream">
                    <img
                      src="/pandit_deepak_pandya.jpg"
                      alt="पंडित दीपक पंड्या - उज्जैन"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.src = '/logo.jpg';
                      }}
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <span className="badge badge-gold text-xs mb-1.5 inline-block">15+ वर्षों का अनुभव</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-devanagari text-gold">वैदिक पंडित दीपक पंड्या</h3>
                    <p className="text-xs text-cream/70 font-devanagari mb-3">
                      श्री मंगलनाथ मंदिर एवं महाकालेश्वर सिद्ध तीर्थ, उज्जैन (मध्य प्रदेश)
                    </p>
                    <p className="text-xs sm:text-sm text-cream/90 font-devanagari leading-relaxed mb-4">
                      वैदिक रीति-रिवाज, शुद्ध मंत्रोच्चार और शास्त्रोंक्त संकल्प के साथ मंगल भात पूजा, कालसर्प शांति एवं समस्त वैदिक अनुष्ठान संपन्न कराते हैं।
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                      <a
                        href="tel:+916263401651"
                        onClick={() => trackPhoneCall('service_pandit_box')}
                        className="btn-primary text-xs py-2 px-4 justify-center font-devanagari"
                      >
                        📞 Call +91 62634 01651
                      </a>
                      <a
                        href="https://wa.me/916263401651"
                        onClick={() => trackWhatsAppClick('service_pandit_box')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs py-2 px-4 justify-center font-devanagari"
                      >
                        💬 WhatsApp पर बात करें
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* 9. Short booking form */}
                <div
                  className="rounded-2xl p-5 sm:p-6 shadow-divine"
                  style={{ background: 'linear-gradient(135deg, #8B1A1A, #C8860A)' }}
                  data-aos="fade-left"
                >
                  <h3 className="text-xl font-bold text-cream font-devanagari mb-1">
                    {t({ hi: 'तत्काल पूजन बुकिंग', en: 'Book This Puja' })}
                  </h3>
                  <p className="text-cream/80 text-xs font-devanagari mb-4">
                    {t({ hi: 'तिथि व संकल्प पूर्व-आरक्षण हेतु फॉर्म भरें', en: 'Fill form for instant WhatsApp booking' })}
                  </p>
                  <div className="bg-cream/95 rounded-xl p-4">
                    <BookingForm defaultService={content.name} compact={true} />
                  </div>
                </div>

                {/* Instant Assistance Box (Tracked elements preserved) */}
                <div className="gradient-border rounded-2xl p-5 text-center bg-white shadow-card" data-aos="fade-left" data-aos-delay="100">
                  <p className="font-bold text-divine-brown font-devanagari mb-1 text-base">
                    {t({ hi: 'सीधे पंडित जी से बात करें', en: 'Speak Directly to Pandit Ji' })}
                  </p>
                  <p className="text-xs text-divine-muted font-devanagari mb-4">
                    उपलब्धता: 24x7 कॉल एवं WhatsApp सहायता
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <a
                      href="tel:+916263401651"
                      onClick={() => trackPhoneCall('service_detail_page')}
                      className="btn-primary text-sm py-2.5 justify-center font-devanagari w-full"
                    >
                      📞 +91 62634 01651
                    </a>
                    <a
                      href="https://wa.me/916263401651"
                      onClick={() => trackWhatsAppClick('service_detail_page')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm py-2.5 justify-center font-devanagari w-full"
                    >
                      💬 WhatsApp चैट
                    </a>
                  </div>
                </div>

                {/* Other Services Navigation */}
                <div className="p-5 bg-cream-dark/80 rounded-2xl border border-saffron/15 shadow-sm" data-aos="fade-left" data-aos-delay="150">
                  <h3 className="font-bold text-divine-brown font-devanagari mb-3 text-sm flex items-center gap-1.5">
                    <span>🕉️</span> {t({ hi: 'सभी वैदिक अनुष्ठान सेवाएं', en: 'All Puja Services' })}
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    {SERVICES.filter((s) => s.slug !== slug).map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="text-xs sm:text-sm text-divine-brown hover:text-gold transition-colors font-devanagari flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white"
                      >
                        <span className="flex items-center gap-2">
                          <span>{s.icon}</span>
                          <span>{lang === 'hi' ? s.hi.name : s.en.name}</span>
                        </span>
                        <span className="text-gold font-bold">›</span>
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
