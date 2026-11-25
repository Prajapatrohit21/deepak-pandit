import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../data/services';
import { BLOG_ARTICLES } from '../data/blog';
import BookingForm from '../components/ui/BookingForm';
import SEO from '../components/common/SEO';
import { WA_HREF, PHONE_HREF } from '../utils/whatsapp';
import panditImg from '../assets/pandit_deepak_pandya.jpg';

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className={`rounded-2xl border border-[#E8DCC8] overflow-hidden bg-white ${open ? 'shadow-sm' : ''}`}>
      <button
        className="w-full text-left p-4 sm:p-5 flex justify-between items-center text-[#1F160F] font-bold text-sm sm:text-base hover:bg-[#FFFDF9] transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className={`text-[#D97706] text-xl font-bold transition-transform duration-300 shrink-0 ml-3 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="text-[#5C4A3A] text-sm leading-relaxed px-4 pb-5 sm:px-5 sm:pb-6 border-t border-[#F0E6D8] bg-[#FFFDF9]">
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
          alternateName: 'मंगल दोष पूजन',
          url: 'https://mangaldoshpujanivaran.in/',
          telephone: '+916263401651',
          email: 'mangaldoshpujanivaran@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'श्री मंगलनाथ मंदिर क्षेत्र, उज्जैन',
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

  const relatedBlogs = (service.relatedBlogs || [])
    .map((blogSlug) => BLOG_ARTICLES.find((b) => b.slug === blogSlug))
    .filter(Boolean);

  const relatedServices = (service.relatedPujas || [])
    .map((sSlug) => SERVICES.find((s) => s.slug === sSlug))
    .filter(Boolean);

  return (
    <main className="pt-20">
      <SEO
        title={service.meta?.title || `${content.name} | पंडित दीपक पंड्या उज्जैन`}
        description={service.meta?.description || content.directAnswer.slice(0, 155)}
        canonical={canonicalUrl}
        schema={serviceSchema}
      />

      <nav aria-label="Breadcrumb" className="bg-[#FAF7F2] border-b border-[#E8DCC8] py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-[#8C7A6B]">
          <Link
            to="/"
            title="मुख्य पृष्ठ पर जाएं"
            aria-label="Navigate to Home"
            className="hover:text-[#B45309] transition-colors"
          >
            {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
          </Link>
          <span className="text-[#D4C5B0]">›</span>
          <Link
            to="/services"
            title="उज्जैन पूजा सेवाएं सूची देखें"
            aria-label="Navigate to Services"
            className="hover:text-[#B45309] transition-colors"
          >
            {lang === 'hi' ? 'पूजा सेवाएं' : 'Services'}
          </Link>
          <span className="text-[#D4C5B0]">›</span>
          <span className="text-[#1F160F] font-semibold truncate" aria-current="page">
            {content.name}
          </span>
        </div>
      </nav>

      <section
        className="py-14 sm:py-20 text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] text-[#1F160F] border-b border-[#E8DCC8]"
        aria-labelledby="service-detail-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D97706]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#8C3814]/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          {service.image ? (
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-3xl overflow-hidden border-2 border-[#D97706] shadow-md bg-black">
              <img
                src={service.image}
                alt={`${content.name} उज्जैन - वैदिक पंडित दीपक पंड्या`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <span className="text-3xl text-[#D97706] mb-3 inline-block font-bold">✦</span>
          )}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#D97706]/40 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="text-[#D97706]">✦</span>
            <span>{t({ hi: 'उज्जैन सिद्ध पीठ वैदिक अनुष्ठान', en: 'Ujjain Siddha Peeth Vedic Ritual' })}</span>
            <span className="text-[#D97706]">✦</span>
          </span>
          <h1 id="service-detail-heading" className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-[#1F160F] mb-3 leading-snug">
            {content.h1}
          </h1>
          <p className="text-[#8C3814] font-semibold mb-4 text-sm sm:text-base">{content.tagline}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full mx-auto mb-6" />

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#E8DCC8] shadow-xs text-[#5C4A3A]">
              <span>⏱</span>
              <span className="font-semibold">{content.vidhi?.duration || '3–5 घंटे'}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#E8DCC8] shadow-xs text-[#5C4A3A]">
              <span>📍</span>
              <span className="font-semibold">{content.location.split('—')[0]}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#E8DCC8] shadow-xs text-[#8C3814] font-bold">
              <span>👤</span>
              <span>पंडित दीपक पंड्या (15+ वर्ष अनुभव)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

            <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8">

              <div className="bg-[#D97706]/10 border-l-4 border-[#D97706] rounded-r-2xl p-5 sm:p-6 shadow-sm" data-aos="fade-up">
                <h2 className="text-base font-bold text-[#1F160F] uppercase tracking-wide mb-2 flex items-center gap-2">
                  <span>⚡</span> {t({ hi: 'संक्षेप में उत्तर / Direct Answer', en: 'Quick Summary' })}
                </h2>
                <p className="text-[#3D2E1F] font-medium leading-relaxed text-base sm:text-lg">
                  "{content.directAnswer}"
                </p>
              </div>

              <div className="rounded-3xl border border-[#E8DCC8] p-6 sm:p-8 bg-white" data-aos="fade-up">
                <h2 className="text-2xl font-bold text-[#1F160F] font-heading mb-5">
                  {content.name} — {t({ hi: 'क्या है, क्यों की जाती है और किसके लिए?', en: 'What, Why and Who?' })}
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#B45309] mb-1">
                      1. {t({ hi: 'यह पूजा क्या है?', en: 'What is this puja?' })}
                    </h3>
                    <p className="text-[#5C4A3A] leading-relaxed text-sm sm:text-base">
                      {content.whatWhyWho?.what}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#B45309] mb-1">
                      2. {t({ hi: 'यह पूजा क्यों की जाती है?', en: 'Why is it performed?' })}
                    </h3>
                    <p className="text-[#5C4A3A] leading-relaxed text-sm sm:text-base">
                      {content.whatWhyWho?.why}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#B45309] mb-1">
                      3. {t({ hi: 'किन लोगों को यह पूजा करानी चाहिए?', en: 'Who should perform this puja?' })}
                    </h3>
                    <p className="text-[#5C4A3A] leading-relaxed text-sm sm:text-base">
                      {content.whatWhyWho?.who}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#F0E6D8]">
                  <h3 className="text-lg font-bold text-[#1F160F] mb-3">
                    {t({ hi: 'पूजन के प्रमुख लाभ', en: 'Key Spiritual Benefits' })}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {content.benefits?.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFFDF9] border border-[#E8DCC8]">
                        <span className="text-[#D97706] text-base mt-0.5 shrink-0">✦</span>
                        <p className="text-xs sm:text-sm text-[#3D2E1F] font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[#E8DCC8] p-6 sm:p-8 bg-white" data-aos="fade-up">
                <h2 className="text-2xl font-bold text-[#1F160F] font-heading mb-4">
                  {t({ hi: 'पूजा विधि (स्टेप बाय स्टेप), अवधि एवं सामग्री', en: 'Step-by-Step Vidhi, Duration & Samagri' })}
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#B45309] mb-3">
                    {t({ hi: 'वैदिक पूजन विधि के प्रमुख चरण:', en: 'Step-by-Step Procedure:' })}
                  </h3>
                  <ol className="space-y-3 list-decimal list-inside text-[#5C4A3A] text-sm sm:text-base leading-relaxed">
                    {content.vidhi?.steps?.map((step, idx) => (
                      <li key={idx} className="pl-2">
                        <span className="text-[#1F160F] font-medium">{step.trim()}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F0E6D8]">
                  <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC8]">
                    <p className="font-bold text-[#1F160F] text-sm mb-1">
                      ⏱ {t({ hi: 'पूजन अवधि (समय)', en: 'Duration' })}
                    </p>
                    <p className="text-[#5C4A3A] text-sm font-semibold">
                      {content.vidhi?.duration}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC8]">
                    <p className="font-bold text-[#1F160F] text-sm mb-1">
                      <span className="text-[#D97706] font-bold">✦</span> {t({ hi: 'प्रमुख पूजन सामग्री', en: 'Materials (Samagri)' })}
                    </p>
                    <p className="text-[#5C4A3A] text-xs sm:text-sm">
                      {content.vidhi?.samagri?.trim()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-[#1C0A00] text-white" data-aos="fade-up">
                <h2 className="text-xl sm:text-2xl font-bold text-[#F5C842] mb-3">
                  ✦ {t({ hi: 'पूजा कहाँ होती है? (उज्जैन स्थान)', en: 'Where is the Puja Performed? (Location)' })}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-white/90">
                  {content.location}
                </p>
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between flex-wrap gap-2 text-xs text-white/70">
                  <span>पवित्र तीर्थ क्षेत्र: मंगलनाथ मंदिर / शिप्रा तट / महाकाल क्षेत्र, उज्जैन (म.प्र.)</span>
                  <Link
                    to="/contact"
                    title="उज्जैन मंदिर एवं आश्रम पता, गूगल मैप निर्देश देखें"
                    aria-label="View map and directions to temple"
                    className="text-[#F5C842] underline hover:text-white transition-colors"
                  >
                    {t({ hi: 'नक्शा एवं दिशा-निर्देश देखें →', en: 'View Map & Directions →' })}
                  </Link>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#E8DCC8]" data-aos="fade-up">
                <h2 className="text-xl font-bold text-[#1F160F] mb-2">
                  <span className="text-[#D97706]">✦</span> {t({ hi: 'पूजा का खर्च एवं दक्षिणा विवरण', en: 'Puja Cost & Dakshina Details' })}
                </h2>
                <p className="text-[#3D2E1F] font-medium text-base leading-relaxed">
                  {content.costInfo?.trim()}
                </p>
                <p className="text-xs text-[#8C7A6B] mt-2">
                  नोट: संकल्प के प्रकार (व्यक्तिगत, सपरिवार अथवा विशेष अनुष्ठान) एवं सामग्री के अनुसार दक्षिणा तय की जाती है। पारदर्शी जानकारी के लिए कॉल या WhatsApp करें।
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DCC8]" data-aos="fade-up">
                <h2 className="text-xl font-bold text-[#1F160F] mb-2">
                  <span className="text-[#D97706]">✦</span> {t({ hi: 'पूजा के लिए शुभ दिन एवं मुहूर्त', en: 'Best Days & Auspicious Muhurat' })}
                </h2>
                <p className="text-[#5C4A3A] text-sm sm:text-base leading-relaxed">
                  {content.bestDays?.trim()}
                </p>
                <p className="text-xs text-[#B45309] mt-2 font-medium">
                  {t({ hi: 'पंडित दीपक पंड्या जी जातक की कुंडली का परीक्षण कर सर्वथा अनुकूल तिथि व लग्न मुहूर्त निकालते हैं।', en: 'Pandit Deepak Pandya advises the exact muhurat after analyzing your birth chart.' })}
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#E8DCC8]" data-aos="fade-up">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1F160F] mb-4">
                  <span className="text-[#D97706]">✦</span> {t({ hi: 'बाहर के शहरों के लिए ऑनलाइन पूजा संकल्प प्रक्रिया', en: 'Online & Outstation Booking Process' })}
                </h2>
                <p className="text-[#5C4A3A] text-sm sm:text-base leading-relaxed mb-5">
                  {content.outstationBooking}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="bg-white p-4 rounded-2xl border border-[#E8DCC8]">
                    <span className="w-8 h-8 rounded-full bg-[#D97706] text-white font-bold text-sm inline-flex items-center justify-center mb-1">1</span>
                    <p className="font-bold text-[#1F160F] text-sm mt-1">विवरण साझा करें</p>
                    <p className="text-xs text-[#8C7A6B]">नाम, गोत्र व जन्म विवरण WhatsApp पर भेजें</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-[#E8DCC8]">
                    <span className="w-8 h-8 rounded-full bg-[#D97706] text-white font-bold text-sm inline-flex items-center justify-center mb-1">2</span>
                    <p className="font-bold text-[#1F160F] text-sm mt-1">मुहूर्त एवं संकल्प</p>
                    <p className="text-xs text-[#8C7A6B]">पंडित जी द्वारा शुभ तिथि व संकल्प तय</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-[#E8DCC8]">
                    <span className="w-8 h-8 rounded-full bg-[#D97706] text-white font-bold text-sm inline-flex items-center justify-center mb-1">3</span>
                    <p className="font-bold text-[#1F160F] text-sm mt-1">पूजन व प्रसाद</p>
                    <p className="text-xs text-[#8C7A6B]">लाइव दर्शन / वीडियो व प्रसाद डाक द्वारा</p>
                  </div>
                </div>
              </div>

              {content.faqs && content.faqs.length > 0 && (
                <div data-aos="fade-up">
                  <h2 className="text-2xl font-bold text-[#1F160F] font-heading mb-4 flex items-center gap-2">
                    <span className="text-[#D97706]">✦</span> {t({ hi: `${content.name} से जुड़े अक्सर पूछे जाने वाले सवाल`, en: 'Frequently Asked Questions' })}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {content.faqs.map((faq, i) => (
                      <FaqItem key={i} q={faq.q} a={faq.a.trim()} index={i} />
                    ))}
                  </div>
                </div>
              )}

              <div className="p-6 rounded-3xl bg-white border border-[#E8DCC8]" data-aos="fade-up">
                <h3 className="text-lg font-bold text-[#1F160F] mb-4">
                  <span className="text-[#D97706]">✦</span> {t({ hi: 'संबंधित वैदिक पूजाएं एवं धार्मिक आलेख', en: 'Related Pujas & Articles' })}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#B45309] uppercase mb-2">अन्य संबंधित पूजाएं:</h4>
                    <div className="flex flex-col gap-2">
                      {relatedServices.map((rel) => (
                        <Link
                          key={rel.id}
                          to={`/services/${rel.slug}`}
                          className="text-sm text-[#1F160F] hover:text-[#B45309] transition-colors font-medium flex items-center gap-2 p-2.5 rounded-xl bg-[#FFFDF9] border border-[#E8DCC8] hover:border-[#D97706]"
                        >
                          <span>{rel.icon}</span>
                          <span>{lang === 'hi' ? rel.hi.name : rel.en.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {relatedBlogs.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold text-[#B45309] uppercase mb-2">पढ़ें उपयोगी आलेख:</h4>
                      <div className="flex flex-col gap-2">
                        {relatedBlogs.map((b) => (
                          <Link
                            key={b.id}
                            to={`/blog/${b.slug}`}
                            className="text-sm text-[#1F160F] hover:text-[#B45309] transition-colors flex items-center gap-2 p-2.5 rounded-xl bg-[#FFFDF9] border border-[#E8DCC8] hover:border-[#D97706]"
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

              <div className="text-xs text-[#8C7A6B] text-right pt-2">
                <span>अंतिम अद्यतन (Last Updated): {service.lastUpdated || '2026-09-19'} | प्रामाणिक वैदिक परंपरा उज्जैन</span>
              </div>

              <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-xl" data-aos="fade-up">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-white p-1 shrink-0 overflow-hidden bg-white shadow-md">
                    <img
                      src={panditImg}
                      alt="वैदिक पुरोहित पंडित दीपक पंड्या - उज्जैन सिद्ध पीठ"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2 inline-block">15+ वर्षों का अनुभव</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">वैदिक पंडित दीपक पंड्या</h3>
                    <p className="text-xs text-white/80 mb-3">
                      श्री मंगलनाथ मंदिर एवं महाकालेश्वर सिद्ध तीर्थ, उज्जैन (मध्य प्रदेश)
                    </p>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                      वैदिक रीति-रिवाज, शुद्ध मंत्रोच्चार और शास्त्रोंक्त संकल्प के साथ मंगल भात पूजा, कालसर्प शांति एवं समस्त वैदिक अनुष्ठान संपन्न कराते हैं।
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                      <a
                        href={PHONE_HREF}
                        title="पंडित दीपक पंड्या जी को कॉल करें: +91 62634 01651"
                        aria-label="Call Pandit Deepak Pandya at +91 62634 01651"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-[#B45309] font-bold text-xs hover:bg-[#FFFDF9] transition-colors"
                      >
                        📞 Call +91 62634 01651
                      </a>
                      <a
                        href={WA_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp पर पूजा परामर्श एवं दक्षिणा जानकारी प्राप्त करें"
                        aria-label="Contact Pandit Deepak Pandya on WhatsApp"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/15 border border-white/30 text-white font-bold text-xs hover:bg-white/25 transition-colors"
                      >
                        💬 WhatsApp पर बात करें
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                <div
                  className="rounded-3xl p-5 sm:p-6 shadow-md border border-[#E8DCC8] bg-white"
                  data-aos="fade-left"
                >
                  <h3 className="text-xl font-bold text-[#1F160F] font-heading mb-1">
                    {t({ hi: 'तत्काल पूजन बुकिंग', en: 'Book This Puja' })}
                  </h3>
                  <p className="text-[#8C7A6B] text-xs mb-4">
                    {t({ hi: 'तिथि व संकल्प पूर्व-आरक्षण हेतु फॉर्म भरें', en: 'Fill form for instant WhatsApp booking' })}
                  </p>
                  <div className="rounded-2xl">
                    <BookingForm defaultService={content.name} compact={true} />
                  </div>
                </div>

                <div className="rounded-3xl p-5 text-center bg-white border border-[#E8DCC8] shadow-sm" data-aos="fade-left" data-aos-delay="100">
                  <p className="font-bold text-[#1F160F] mb-1 text-base">
                    {t({ hi: 'सीधे पंडित जी से बात करें', en: 'Speak Directly to Pandit Ji' })}
                  </p>
                  <p className="text-xs text-[#8C7A6B] mb-4">
                    उपलब्धता: 24x7 कॉल एवं WhatsApp सहायता
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <a
                      href={PHONE_HREF}
                      title="पंडित दीपक पंड्या जी को 24x7 कॉल करें: +91 62634 01651"
                      aria-label="Call Pandit Deepak Pandya at +91 62634 01651"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-bold text-sm shadow-sm hover:shadow-md transition-all"
                    >
                      📞 +91 62634 01651
                    </a>
                    <a
                      href={WA_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp पर तुरंत चैट करें और पूजा बुक करें"
                      aria-label="Chat on WhatsApp with Pandit Deepak Pandya"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-sm hover:bg-[#1EBE5D] transition-all"
                    >
                      💬 WhatsApp चैट
                    </a>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-3xl border border-[#E8DCC8] shadow-sm" data-aos="fade-left" data-aos-delay="150">
                  <h3 className="font-bold text-[#1F160F] mb-3 text-sm flex items-center gap-1.5 font-heading">
                    <span>🕉️</span> {t({ hi: 'सभी वैदिक अनुष्ठान सेवाएं', en: 'All Puja Services' })}
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    {SERVICES.filter((s) => s.slug !== slug).map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        title={`${lang === 'hi' ? s.hi.name : s.en.name} उज्जैन - विस्तृत विधि एवं बुकिंग`}
                        aria-label={`View details for ${lang === 'hi' ? s.hi.name : s.en.name}`}
                        className="text-xs sm:text-sm text-[#5C4A3A] hover:text-[#B45309] transition-colors flex items-center justify-between py-2 px-2.5 rounded-xl hover:bg-[#FAF7F2]"
                      >
                        <span className="flex items-center gap-2">
                          <span>{s.icon}</span>
                          <span>{lang === 'hi' ? s.hi.name : s.en.name}</span>
                        </span>
                        <span className="text-[#D97706] font-bold">›</span>
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
