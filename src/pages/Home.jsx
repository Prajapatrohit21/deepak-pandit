// ============================================================
// Home.jsx — panditsofbanaras.in luxury cream style
// All sections: Hero, Trust, Services, Comparison, About,
// Testimonials, FAQ, Booking — fully cream+white aesthetic
// ============================================================
import { useEffect, useState, useRef } from 'react';
import heroBg from '../assets/hero_mangal_puja.jpg';
import panditImg from '../assets/pandit_deepak_pandya.jpg';
import kaalSarpImg from '../assets/gallery/Kaal-Sarp-Puja-Ujjain.webp';
import rudraImg from '../assets/gallery/g1.jpg';
import vipImg from '../assets/vip_guest.jpg';
import pujaVideo from '../assets/puja_video.mp4';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { SERVICES } from '../data/services';
import { WA_HREF, PHONE_HREF } from '../utils/whatsapp';
import { trackWhatsAppClick, trackPhoneCall } from '../utils/analytics';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import BookingForm from '../components/ui/BookingForm';
import SEO from '../components/common/SEO';

const C = CONTENT;

// ─── Hero Media Slides ─────────────────────────────────────
const HERO_SLIDES = [
  {
    type: 'image',
    image: vipImg,
    badge: { hi: 'विशिष्ट यजमान दर्शन', en: 'VIP GUEST PUJA' },
    title: { hi: 'विशिष्ट यजमान एवं प्रामाणिक वैदिक संकल्प', en: 'Authentic Vedic Sankalp for Devotees' },
  },
  {
    type: 'video',
    video: pujaVideo,
    badge: { hi: 'लाइव पूजन वीडियो', en: 'LIVE PUJA VIDEO' },
    title: { hi: 'उज्जैन मंगलनाथ मंदिर मंगल भात पूजा एवं अनुष्ठान दर्शन', en: 'Ujjain Mangal Bhat Puja & Vedic Anushthan Video' },
  },
  {
    type: 'image',
    image: heroBg,
    badge: { hi: 'मंगल भात पूजा', en: 'MANGAL BHAT PUJA' },
    title: { hi: 'श्री मंगलनाथ मंदिर वैदिक मंगल भात पूजा', en: 'Vedic Mangal Bhat Puja at Mangalnath' },
  },
  {
    type: 'image',
    image: panditImg,
    badge: { hi: 'प्रधान पुरोहित', en: 'CHIEF VEDIC PUROHIT' },
    title: { hi: 'वैदिक पंडित दीपक पंड्या (15+ वर्षों का अनुभव)', en: 'Vedic Pandit Deepak Pandya (15+ Yrs Exp)' },
  },
  {
    type: 'image',
    image: kaalSarpImg,
    badge: { hi: 'कालसर्प दोष', en: 'KAAL SARP DOSH' },
    title: { hi: 'कालसर्प दोष निवारण एवं महाकाल अनुष्ठान', en: 'Kaal Sarp Dosh Nivaran Ujjain' },
  },
  {
    type: 'image',
    image: rudraImg,
    badge: { hi: 'रुद्राभिषेक', en: 'RUDRABHISHEK' },
    title: { hi: 'महाकालेश्वर ज्योतिर्लिंग महा रुद्राभिषेक पूजन', en: 'Mahakaleshwar Jyotirlinga Rudrabhishek' },
  },
];

// ─── Hero Section ──────────────────────────────────────────
function Hero() {
  const { t, lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const viewportRef = useRef(null);

  useEffect(() => {
    const isVideo = HERO_SLIDES[currentSlide]?.type === 'video';
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, isVideo ? 12000 : 4500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  useEffect(() => {
    if (HERO_SLIDES[currentSlide]?.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide]);

  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] pt-24 sm:pt-32 pb-12 sm:pb-16" aria-label="Hero Section">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D97706]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#8C3814]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <p className="text-xs sm:text-sm font-bold tracking-[0.16em] text-[#8C3814] uppercase mb-3">
              <span className="text-[#D97706]">✦</span>{' '}
              {t({ hi: 'AUTHENTIC VEDIC PUJAS & VIDHIS IN UJJAIN', en: 'AUTHENTIC VEDIC PUJAS & VIDHIS IN UJJAIN' })}
            </p>

            <h1 className="font-heading font-black text-3xl xs:text-4xl sm:text-5xl lg:text-[3.5rem] text-[#1F160F] leading-[1.08] mb-2 tracking-tight">
              {lang === 'hi' ? (<>मंगल दोष पूजन<br /><span className="text-[#8C3814]">उज्जैन सिद्ध पीठ</span></>) : (<>MANGAL DOSH PUJA<br /><span className="text-[#8C3814]">NIVARAN UJJAIN</span></>)}
            </h1>

            <h2 className="text-base sm:text-xl font-bold text-[#8C3814] tracking-wider uppercase font-heading mb-4">
              {t({ hi: 'BY VEDIC PANDIT DEEPAK PANDYA', en: 'BY VEDIC PANDIT DEEPAK PANDYA' })}
            </h2>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D97706]/40 bg-[#FFF7E6] text-[#7A3F0C] text-xs sm:text-sm font-semibold mb-5">
              🕉️ {t({ hi: 'श्री मंगलनाथ मंदिर मंगल भात पूजा एवं कालसर्प दोष', en: 'Shri Mangalnath Mandir Mangal Bhat & Kaal Sarp Puja' })}
            </div>

            <p className="text-sm sm:text-base text-[#4A3B2C] leading-relaxed mb-6 font-medium max-w-2xl">
              {t({
                hi: 'मंगल दोष पूजा निवारण, उज्जैन में पंडित दीपक पंड्या द्वारा की जाने वाली प्रामाणिक वैदिक पूजा सेवा है। 15+ वर्षों के अनुभव के साथ यहाँ मंगल भात पूजा, कालसर्प दोष, पितृ दोष, नवग्रह शांति, रुद्राभिषेक और समस्त वैदिक अनुष्ठान विधिपूर्वक कराए जाते हैं। परामर्श एवं बुकिंग 24x7 उपलब्ध है।',
                en: 'Mangal Dosh Puja Nivaran Ujjain, led by Vedic Pandit Deepak Pandya, performs authentic Vedic rituals including Mangal Bhat Puja at Mangalnath Temple, Kaal Sarp Dosh, Pitru Dosh, Navgrah Shanti, and Mahamrityunjay Anushthan with 15+ years of Vedic heritage.',
              })}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-5">
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneCall('hero_call_btn')}
                title="पंडित दीपक पंड्या जी को तुरंत कॉल करें: +91 62634 01651"
                aria-label="Call Pandit Deepak Pandya at +91 62634 01651"
                className="bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(217,119,6,0.35)] flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/></svg>
                +91 62634 01651
              </a>
              <a
                href={WA_HREF}
                onClick={() => trackWhatsAppClick('hero_whatsapp_btn')}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp पर 24x7 निःशुल्क पूजा परामर्श एवं बुकिंग"
                aria-label="Chat on WhatsApp with Pandit Deepak Pandya for Puja Consultation"
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(37,211,102,0.35)] flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {t({ hi: 'WhatsApp Consultation', en: 'WhatsApp Consultation' })}
              </a>
            </div>

            {/* Location */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E8DCC8] text-xs sm:text-sm text-[#5C4D3E] shadow-sm mb-6">
              📍 {t({ hi: 'श्री मंगलनाथ मंदिर क्षेत्र, उज्जैन (मध्य प्रदेश) 456001', en: 'Mangalnath Temple Area, Ujjain, MP 456001' })}
            </div>

            {/* Trust Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-xl">
              {[
                { t: 'SHUKLA YAJURVEDA', s: { hi: '100% प्रामाणिक विधि', en: '100% Authentic Vidhi' } },
                { t: '15+ YRS PUROHIT', s: { hi: 'सिद्ध पीठ अनुभव', en: 'Siddha Peeth Exp' } },
                { t: '3.9 STAR RATING', s: { hi: '56+ संतुष्ट भक्त', en: '56+ Happy Devotees' } },
              ].map((card, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-[#E8DCC8] text-center">
                  <span className="text-xs sm:text-sm font-bold text-[#1F160F] block font-heading">{card.t}</span>
                  <span className="text-[10px] sm:text-xs text-[#8C3814] font-medium">{t(card.s)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Slider + Google Review */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border-2 border-[#E8DCC8] shadow-[0_12px_40px_rgba(45,27,0,0.08)]">
              {/* Media Viewport */}
              <div ref={viewportRef} className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#1C0A00] group">
                {HERO_SLIDES[currentSlide].type === 'video' ? (
                  <video
                    ref={videoRef}
                    src={HERO_SLIDES[currentSlide].video}
                    className="w-full h-full object-cover"
                    autoPlay
                    playsInline
                    muted={isMuted}
                    loop
                  />
                ) : (
                  <img
                    src={HERO_SLIDES[currentSlide].image}
                    alt={`${t(HERO_SLIDES[currentSlide].title)} - मंगल दोष पूजन उज्जैन`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Top Overlay Icons */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                  {HERO_SLIDES[currentSlide].type === 'video' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white text-xs hover:bg-black/90 transition-all cursor-pointer shadow-md"
                      title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                      aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                    >
                      {isMuted ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                      ) : (
                        <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                      )}
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (viewportRef.current) {
                        if (document.fullscreenElement) {
                          document.exitFullscreen?.();
                        } else {
                          viewportRef.current.requestFullscreen?.();
                        }
                      }
                    }}
                    className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white text-xs hover:bg-black/90 transition-all cursor-pointer shadow-md"
                    title="Fullscreen"
                    aria-label="Toggle fullscreen"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
                  </button>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3 sm:p-4 z-10">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="bg-[#F5C842] text-[#1C0A00] font-bold text-[10px] sm:text-xs uppercase px-2.5 py-0.5 rounded tracking-wider">{t(HERO_SLIDES[currentSlide].badge)}</span>
                    <span className="bg-black/70 text-white text-[11px] px-2 py-0.5 rounded-full font-mono border border-white/20">{currentSlide + 1}/{HERO_SLIDES.length}</span>
                  </div>
                  <p className="font-heading font-bold text-xs sm:text-sm text-white tracking-wide uppercase line-clamp-1">{t(HERO_SLIDES[currentSlide].title)}</p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between py-2.5 px-1 mt-1 text-[#5C4D3E]">
                <button onClick={prevSlide} className="text-xs sm:text-sm font-semibold hover:text-[#D97706] px-2 py-1 transition-colors cursor-pointer" aria-label="Previous">‹ Prev</button>
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${currentSlide === idx ? 'w-6 bg-[#D97706]' : 'w-2 bg-[#E8DCC8] hover:bg-[#D97706]/60'}`} aria-label={`Slide ${idx + 1}`} />
                  ))}
                </div>
                <button onClick={nextSlide} className="text-xs sm:text-sm font-semibold hover:text-[#D97706] px-2 py-1 transition-colors cursor-pointer" aria-label="Next">Next ›</button>
              </div>

              {/* Google Review Row */}
              <div className="border-t border-[#F0E6D8] pt-3 mt-1 flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                  <div className="flex text-amber-500 text-sm sm:text-base leading-none">★★★★☆</div>
                  <span className="font-bold text-[#1F160F]">3.9</span>
                  <span className="text-[#6B4C1E] text-xs">{t({ hi: '(56+ Google समीक्षाएं)', en: '(56+ Google Reviews)' })}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-700 font-semibold text-xs sm:text-sm">
                  <svg className="w-4 h-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  {t({ hi: 'Verified Ujjain Purohit', en: 'Verified Ujjain Purohit' })}
                </div>
              </div>
            </div>
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
    <section className="py-14 sm:py-20 bg-white" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t({ hi: 'विश्वसनीय वैदिक सेवा', en: 'Trusted Vedic Service' })}
          heading={t(tr.heading)}
          subheading={t(tr.subheading)}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 mt-10">
          {tr.badges.map((badge, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E8DCC8] bg-[#FFFDF9] p-5 text-center hover:shadow-md hover:border-[#D97706]/30 transition-all"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <span className="text-3xl mb-2 block">{badge.icon}</span>
              <p className="text-sm font-bold text-[#1F160F] leading-tight mb-1">{t({ hi: badge.hi.title, en: badge.en.title })}</p>
              <p className="text-xs text-[#8C7A6B] leading-tight">{t({ hi: badge.hi.desc, en: badge.en.desc })}</p>
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
    <section className="py-20 bg-[#FAF7F2] relative overflow-hidden" aria-labelledby="services-heading">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="font-heading leading-none text-[#D97706]/[0.03] select-none" style={{ fontSize: 'min(400px, 80vw)' }}>ॐ</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t(sv.badge)}
          heading={t(sv.heading)}
          subheading={t(sv.subheading)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {SERVICES.slice(0, 6).map((svc, i) => (
            <div key={svc.id} data-aos="fade-up" data-aos-delay={i * 80}>
              <ServiceCard service={svc} featured={i === 0} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            title="उज्जैन में सभी वैदिक पूजाएं और अनुष्ठान देखें"
            aria-label="View all Vedic Pujas in Ujjain"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
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
    <section className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div data-aos="fade-right" className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] max-h-[480px] border-2 border-[#E8DCC8] relative group bg-[#1C0A00] shadow-[0_12px_40px_rgba(45,27,0,0.12)]">
              <img
                src={panditImg}
                alt="वैदिक पुरोहित पंडित दीपक पंड्या - मंगल दोष पूजन उज्जैन"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#D97706]/90 text-white text-xs font-bold">15+ {t({ hi: 'वर्ष अनुभव', en: 'Years Exp' })}</span>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-sm">{t({ hi: 'वैदिक पुरोहित', en: 'Vedic Priest' })}</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white font-heading">{t(C.panditName)}</p>
                <p className="text-xs text-[#F5C842] mt-1">📍 {t(C.location)}</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D97706]/15 rounded-full blur-2xl" aria-hidden="true" />
          </div>

          {/* Text side */}
          <div data-aos="fade-left">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D97706]/10 text-[#B45309] text-xs font-semibold tracking-wide mb-4">
              ✦ {t(ab.badge)} ✦
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F160F] font-heading leading-snug mb-2">{t(ab.heading)}</h2>
            <p className="text-[#B45309] font-semibold text-sm mb-4">{t(ab.subheading)}</p>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] mb-6" />
            <p className="text-[#5C4A3A] leading-relaxed mb-6">{t(ab.description)}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {ab.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-[#FFFDF9] border border-[#E8DCC8]">
                  <span className="text-xl">{h.icon}</span>
                  <span className="text-sm font-medium text-[#1F160F]">{t(h)}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              title="वैदिक पंडित दीपक पंड्या जी के बारे में और अधिक जानें"
              aria-label="Read more about Pandit Deepak Pandya Ujjain"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
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
    <section className="py-20 bg-[#FAF7F2]" aria-labelledby="testimonials-heading">
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
              className="rounded-3xl border border-[#E8DCC8] p-6 bg-white hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flex text-amber-500 text-lg mb-3" aria-label={`${review.rating} stars`}>
                {'★'.repeat(review.rating)}
              </div>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">"{t(review.text)}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D97706]/20 to-[#B45309]/20 flex items-center justify-center text-[#B45309] font-bold text-sm">
                  {t(review.name)[0]}
                </div>
                <div>
                  <p className="font-bold text-[#1F160F] text-sm">{t(review.name)}</p>
                  <p className="text-xs text-[#8C7A6B]">{t(review.city)}</p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#D97706]/10 text-[#B45309] text-[10px] font-semibold mt-0.5">{t(review.service)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/testimonials"
            title="यजमानों और भक्तों के अनुभव एवं 56+ समीक्षाएं पढ़ें"
            aria-label="View all client reviews and testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#D97706] text-[#B45309] font-bold text-sm hover:bg-[#D97706] hover:text-white transition-all"
          >
            {t({ hi: 'सभी समीक्षाएं देखें', en: 'View All Reviews' })} →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── AEO: Comparative Puja Table ───────────────────────────
const PUJA_TABLE = [
  { slug: 'mangal-dosh-puja', hi: { name: 'मंगल भात पूजा', kisLiye: 'मांगलिक दोष, विवाह बाधा', avadhi: '3–5 घंटे' }, en: { name: 'Mangal Bhat Puja', kisLiye: 'Manglik dosha, marriage delays', avadhi: '3–5 hrs' } },
  { slug: 'kaal-sarp-dosh', hi: { name: 'कालसर्प दोष निवारण', kisLiye: 'करियर, स्वास्थ्य, मानसिक शांति', avadhi: '4–6 घंटे' }, en: { name: 'Kaal Sarp Dosh Puja', kisLiye: 'Career, health, mental peace', avadhi: '4–6 hrs' } },
  { slug: 'pitru-dosh-nivaran', hi: { name: 'पितृ दोष निवारण', kisLiye: 'पितरों की शांति, संतान लाभ', avadhi: '3–5 घंटे' }, en: { name: 'Pitru Dosh Nivaran', kisLiye: 'Ancestor peace, progeny blessings', avadhi: '3–5 hrs' } },
  { slug: 'navgrah-shanti', hi: { name: 'नवग्रह शांति', kisLiye: 'सर्व ग्रह दोष शमन', avadhi: '4–5 घंटे' }, en: { name: 'Navgrah Shanti', kisLiye: 'All planetary dosha relief', avadhi: '4–5 hrs' } },
  { slug: 'mahamrityunjay', hi: { name: 'महामृत्युंजय जाप', kisLiye: 'गंभीर रोग, मृत्यु भय, दीर्घायु', avadhi: '3–7 घंटे' }, en: { name: 'Mahamrityunjay Jaap', kisLiye: 'Serious illness, longevity', avadhi: '3–7 hrs' } },
  { slug: 'rudrabhishek', hi: { name: 'रुद्राभिषेक', kisLiye: 'सुख-समृद्धि, शिव कृपा', avadhi: '2–4 घंटे' }, en: { name: 'Rudrabhishek', kisLiye: 'Prosperity, Shiva blessings', avadhi: '2–4 hrs' } },
  { slug: 'vastu-shanti', hi: { name: 'वास्तु शांति', kisLiye: 'नया घर, कार्यालय, वास्तु दोष', avadhi: '3–5 घंटे' }, en: { name: 'Vastu Shanti', kisLiye: 'New home, office, vastu dosha', avadhi: '3–5 hrs' } },
  { slug: 'navchandi-shatchandi', hi: { name: 'नवचंडी / शतचंडी', kisLiye: 'विशेष मनोकामना पूर्ति', avadhi: '1–3 दिन' }, en: { name: 'Navchandi/Shatchandi', kisLiye: 'Fulfillment of special wishes', avadhi: '1–3 days' } },
];

function PujaComparisonTable() {
  const { t, lang } = useLanguage();
  return (
    <section className="py-16 bg-white" aria-labelledby="puja-table-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t({ hi: 'संक्षिप्त विवरण तालिका', en: 'Puja Overview Table' })}
          heading={t({ hi: 'सभी पूजाएं — एक नज़र में', en: 'All Pujas at a Glance' })}
          subheading={t({ hi: 'कौन सी पूजा किसके लिए है, कितनी देर चलती है — यहाँ देखें', en: 'Which puja is for whom and how long it lasts — see here' })}
        />
        <div className="overflow-x-auto mt-8 rounded-2xl border border-[#E8DCC8]" data-aos="fade-up">
          <table className="w-full text-sm" role="table">
            <thead>
              <tr className="bg-gradient-to-r from-[#D97706] to-[#B45309] text-white">
                <th className="text-left px-4 py-3.5 font-bold" scope="col">{t({ hi: 'पूजा', en: 'Puja' })}</th>
                <th className="text-left px-4 py-3.5 font-bold" scope="col">{t({ hi: 'किस लिए?', en: 'Purpose' })}</th>
                <th className="text-left px-4 py-3.5 font-bold" scope="col">{t({ hi: 'अवधि', en: 'Duration' })}</th>
                <th className="text-left px-4 py-3.5 font-bold" scope="col">{t({ hi: 'बुकिंग', en: 'Book' })}</th>
              </tr>
            </thead>
            <tbody>
              {PUJA_TABLE.map((row, i) => {
                const d = lang === 'hi' ? row.hi : row.en;
                return (
                  <tr key={row.slug} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FFFDF9]'} border-b border-[#F0E6D8] last:border-b-0`}>
                    <td className="px-4 py-3.5 font-semibold text-[#1F160F]">
                      <Link
                        to={`/services/${row.slug}`}
                        title={`${d.name} उज्जैन - संपूर्ण विधि, मुहूर्त और बुकिंग जानकारी`}
                        aria-label={`View details for ${d.name}`}
                        className="flex items-center gap-2 hover:text-[#D97706] transition-colors"
                      >
                        <span className="text-[#D97706] font-bold">✦</span> {d.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3.5 text-[#5C4A3A]">{d.kisLiye}</td>
                    <td className="px-4 py-3.5 text-[#5C4A3A]">{d.avadhi}</td>
                    <td className="px-4 py-3.5">
                      <Link
                        to={`/services/${row.slug}`}
                        title={`${d.name} विवरण एवं मुहूर्त जानकारी देखें`}
                        aria-label={`Book or learn more about ${d.name}`}
                        className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-[#D97706]/10 text-[#B45309] font-semibold border border-[#D97706]/30 hover:bg-[#D97706] hover:text-white transition-all"
                      >
                        {lang === 'hi' ? 'जानकारी →' : 'Details →'}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─── AEO: FAQ Section ──────────────────────────────────────
const HOME_FAQS = [
  { q: { hi: 'उज्जैन में मंगल दोष पूजा कहाँ होती है?', en: 'Where is Mangal Dosh Puja done in Ujjain?' }, a: { hi: 'उज्जैन में मंगल दोष (मांगलिक दोष) की पूजा श्री मंगलनाथ मंदिर में होती है, जिसे पुराणों में मंगल ग्रह का जन्म स्थान माना गया है। वैदिक पंडित दीपक पंड्या यहाँ 15+ वर्षों से पूजन करवाते हैं।', en: 'Mangal Dosh puja is performed at Shri Mangalnath Mandir, Ujjain — considered the birthplace of Mars in the Puranas. Pandit Deepak Pandya has been conducting these rituals here for 15+ years.' } },
  { q: { hi: 'कालसर्प दोष की पूजा उज्जैन में कैसे करवाएं?', en: 'How to get Kaal Sarp Dosh puja done in Ujjain?' }, a: { hi: 'उज्जैन में कालसर्प दोष निवारण के लिए +91 62634 01651 पर WhatsApp करें या बुकिंग फ़ॉर्म भरें। पंडित जी नाम, गोत्र और कुंडली देखकर उचित तिथि और विधि बताएंगे।', en: 'For Kaal Sarp Dosh puja in Ujjain, WhatsApp +91 62634 01651 or fill the booking form. Pandit ji will review your kundali and suggest the right date and procedure.' } },
  { q: { hi: 'बाहर के शहर से उज्जैन पूजा बुकिंग कैसे होगी?', en: 'How to book puja in Ujjain from another city?' }, a: { hi: 'इंदौर, भोपाल, दिल्ली, मुंबई या किसी भी शहर से WhatsApp पर नाम, गोत्र, जन्म विवरण भेजें। पंडित जी आपकी ओर से संकल्प लेकर पूजा करेंगे और वीडियो भेजेंगे।', en: 'From Indore, Bhopal, Delhi, Mumbai or any city — send your name, gotra, and birth details via WhatsApp. Pandit ji will perform the puja on your behalf with video proof.' } },
  { q: { hi: 'पूजा में कितना खर्च आता है?', en: 'What is the cost of puja?' }, a: { hi: 'पूजा का खर्च पूजा के प्रकार और विधि पर निर्भर करता है। सटीक जानकारी के लिए +91 62634 01651 पर सीधे संपर्क करें।', en: 'The puja cost depends on the type and scale of ritual. Contact directly at +91 62634 01651 for exact information.' } },
  { q: { hi: 'पंडित दीपक पंड्या कौन हैं?', en: 'Who is Pandit Deepak Pandya?' }, a: { hi: 'पंडित दीपक पंड्या उज्जैन के वैदिक पुरोहित हैं जिनका अनुभव 15+ वर्षों का है। वे मंगलनाथ मंदिर, राम घाट एवं महाकाल परिसर में सभी अनुष्ठान संपन्न करवाते हैं।', en: 'Pandit Deepak Pandya is a Vedic priest from Ujjain with 15+ years of experience performing all Vedic rituals at Mangalnath Temple, Ram Ghat, and Mahakal complex.' } },
  { q: { hi: 'क्या ऑनलाइन पूजा बुकिंग संभव है?', en: 'Is online puja booking possible?' }, a: { hi: 'हाँ। WhatsApp (+91 62634 01651) पर या वेबसाइट के बुकिंग फ़ॉर्म के माध्यम से ऑनलाइन संकल्प और पूजा बुकिंग की जा सकती है।', en: 'Yes. Online sankalp and puja booking can be done via WhatsApp (+91 62634 01651) or the booking form on this website.' } },
];

function HomeFaqSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16 bg-[#FAF7F2]" aria-labelledby="home-faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t({ hi: 'जिज्ञासा एवं समाधान', en: 'Common Queries' })}
          heading={t({ hi: 'अक्सर पूछे जाने वाले प्रश्न', en: 'Frequently Asked Questions' })}
          subheading={t({ hi: 'उज्जैन पूजा बुकिंग, खर्च और विधि से जुड़े सवाल', en: 'Questions about Ujjain puja booking, cost, and process' })}
        />
        <div className="mt-8 space-y-3" data-aos="fade-up">
          {HOME_FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-[#E8DCC8] overflow-hidden bg-white">
              <button
                className="w-full text-left p-4 sm:p-5 flex justify-between items-center text-[#1F160F] font-bold text-sm sm:text-base hover:bg-[#FFFDF9] transition-colors"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{t(faq.q)}</span>
                <span className={`text-[#D97706] text-xl font-bold transition-transform duration-300 shrink-0 ml-3 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="text-[#5C4A3A] text-sm leading-relaxed px-4 pb-5 sm:px-5 sm:pb-6 border-t border-[#F0E6D8] bg-[#FFFDF9]">
                  {t(faq.a)}
                </div>
              )}
            </div>
          ))}
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
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#D97706] to-[#B45309]" aria-labelledby="booking-heading">
      {/* Ambient Om */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="font-heading leading-none text-white/[0.06] select-none" style={{ fontSize: 'min(400px, 80vw)' }}>ॐ</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wide mb-3">
            ✦ {t(bk.badge)} ✦
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-3">{t(bk.heading)}</h2>
          <p className="text-white/80">{t(bk.subheading)}</p>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-white/40" />
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl" data-aos="fade-up" data-aos-delay="100">
            <BookingForm compact />
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ─────────────────────────────────────────────
export default function Home() {
  const { lang } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const homeTitle = lang === 'hi'
    ? 'मंगल दोष पूजा उज्जैन | मंगल भात पूजा | वैदिक पंडित दीपक पंड्या'
    : 'Mangal Dosh Puja Ujjain | Mangal Bhat Puja | Pandit Deepak Pandya';
  
  const homeDesc = lang === 'hi'
    ? 'उज्जैन श्री मंगलनाथ मंदिर में 100% प्रामाणिक वैदिक मंगल दोष भात पूजा, कालसर्प दोष निवारण, नवग्रह शांति। 15+ वर्ष अनुभवी वैदिक पुरोहित पंडित दीपक पंड्या। तुरंत संपर्क करें।'
    : 'Authentic Mangal Dosh Bhat Puja, Kaal Sarp Dosh Nivaran at Shri Mangalnath Mandir Ujjain by Pandit Deepak Pandya. 15+ years experience. 24x7 Consultation.';

  return (
    <main>
      <SEO
        title={homeTitle}
        description={homeDesc}
        canonical="https://mangaldoshpujanivaran.in/"
      />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <PujaComparisonTable />
      <AboutSnippet />
      <TestimonialsSection />
      <HomeFaqSection />
      <QuickBookingSection />
    </main>
  );
}
