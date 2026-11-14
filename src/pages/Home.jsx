// ============================================================
// Home.jsx — Full hero page with all home sections
// Phase 5 AEO: Comparative table + FAQ section added
// ============================================================
import { useEffect, useState } from 'react';
import heroBg from '../assets/hero_mangal_puja.jpg';
import panditImg from '../assets/pandit_deepak_pandya.jpg';
import kaalSarpImg from '../assets/gallery/Kaal-Sarp-Puja-Ujjain.webp';
import rudraImg from '../assets/gallery/g1.jpg';
import vipImg from '../assets/vip_guest.jpg';
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

const C = CONTENT;

// ─── Hero Media Slides ─────────────────────────────────────
const HERO_SLIDES = [
  {
    image: heroBg,
    badge: { hi: 'मंगल भात पूजा', en: 'MANGAL BHAT PUJA' },
    title: { hi: 'श्री मंगलनाथ मंदिर वैदिक मंगल भात पूजा', en: 'Vedic Mangal Bhat Puja at Mangalnath' },
  },
  {
    image: panditImg,
    badge: { hi: 'प्रधान पुरोहित', en: 'CHIEF VEDIC PUROHIT' },
    title: { hi: 'वैदिक पंडित दीपक पंड्या (15+ वर्षों का अनुभव)', en: 'Vedic Pandit Deepak Pandya (15+ Yrs Exp)' },
  },
  {
    image: kaalSarpImg,
    badge: { hi: 'कालसर्प दोष', en: 'KAAL SARP DOSH' },
    title: { hi: 'कालसर्प दोष निवारण एवं महाकाल अनुष्ठान', en: 'Kaal Sarp Dosh Nivaran Ujjain' },
  },
  {
    image: rudraImg,
    badge: { hi: 'रुद्राभिषेक', en: 'RUDRABHISHEK' },
    title: { hi: 'महाकालेश्वर ज्योतिर्लिंग महा रुद्राभिषेक पूजन', en: 'Mahakaleshwar Jyotirlinga Rudrabhishek' },
  },
  {
    image: vipImg,
    badge: { hi: 'सिद्ध पीठ अनुष्ठान', en: 'SIDDHA PEETH RITUALS' },
    title: { hi: 'विशिष्ट यजमान एवं प्रामाणिक वैदिक संकल्प', en: 'Authentic Vedic Sankalp for Devotees' },
  },
];

// ─── Hero Section (Pandits Of Banaras Structure) ───────────
function Hero() {
  const { t, lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      className="relative overflow-hidden bg-[#FAF7F2] text-[#2D1B00] pt-28 sm:pt-36 pb-12 sm:pb-16"
      aria-label="Hero Section"
    >
      {/* Subtle warm spiritual background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(139,26,26,0.06)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

      {/* Subtle sacred mandala background pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C8860A' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='30' stroke-width='1' stroke='%23C8860A' fill='none'/%3E%3Ccircle cx='40' cy='40' r='20' stroke-width='0.5' stroke='%23C8860A' fill='none'/%3E%3Ccircle cx='40' cy='40' r='10' stroke-width='0.5' stroke='%23C8860A' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ── LEFT COLUMN: Text & Actions ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Eyebrow Tag */}
            <p className="text-xs sm:text-sm font-bold tracking-[0.16em] text-[#8C3814] uppercase font-sans mb-3 flex items-center gap-2">
              <span className="text-gold">✦</span>
              {t({
                hi: 'AUTHENTIC VEDIC PUJAS & VIDHIS IN UJJAIN',
                en: 'AUTHENTIC VEDIC PUJAS & VIDHIS IN UJJAIN',
              })}
            </p>

            {/* Main Title - Serif Bold */}
            <h1 className="font-heading font-black text-3xl xs:text-4xl sm:text-5xl lg:text-[3.5rem] text-[#1F160F] leading-[1.08] mb-2 tracking-tight">
              {lang === 'hi' ? (
                <>
                  मंगल दोष पूजन केंद्र
                  <br />
                  <span className="text-[#8C3814]">उज्जैन सिद्ध पीठ</span>
                </>
              ) : (
                <>
                  MANGAL DOSH PUJA
                  <br />
                  <span className="text-[#8C3814]">NIVARAN UJJAIN</span>
                </>
              )}
            </h1>

            {/* Subtitle / Acharya Name */}
            <h2 className="text-base sm:text-xl font-bold text-[#8C3814] tracking-wider uppercase font-heading mb-4">
              {t({
                hi: 'BY VEDIC PANDIT DEEPAK PANDYA',
                en: 'BY VEDIC PANDIT DEEPAK PANDYA',
              })}
            </h2>

            {/* Sacred Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/70 bg-[#FFF7E6] text-[#7A3F0C] text-xs sm:text-sm font-semibold mb-5 shadow-sm">
              <span className="text-sm">🕉️</span>
              <span>
                {t({
                  hi: 'श्री मंगलनाथ मंदिर मंगल भात पूजा एवं कालसर्प दोष',
                  en: 'Shri Mangalnath Mandir Mangal Bhat & Kaal Sarp Puja',
                })}
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-[#4A3B2C] leading-relaxed mb-6 font-medium max-w-2xl font-devanagari">
              {t({
                hi: 'मंगल दोष पूजा निवारण, उज्जैन में पंडित दीपक पंड्या द्वारा की जाने वाली प्रामाणिक वैदिक पूजा सेवा है। 15+ वर्षों के अनुभव के साथ यहाँ मंगल भात पूजा, कालसर्प दोष, पितृ दोष, नवग्रह शांति, रुद्राभिषेक और समस्त वैदिक अनुष्ठान विधिपूर्वक कराए जाते हैं। परामर्श एवं बुकिंग 24x7 उपलब्ध है।',
                en: 'Mangal Dosh Puja Nivaran Ujjain, led by Vedic Pandit Deepak Pandya, performs authentic Vedic rituals including Mangal Bhat Puja at Mangalnath Temple, Kaal Sarp Dosh, Pitru Dosh, Navgrah Shanti, and Mahamrityunjay Anushthan with 15+ years of Vedic heritage.',
              })}
            </p>

            {/* 2 Big Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-5">
              {/* Phone Button */}
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneCall('hero_call_btn')}
                className="bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(217,119,6,0.35)] flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
                </svg>
                <span>+91 62634 01651</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={WA_HREF}
                onClick={() => trackWhatsAppClick('hero_whatsapp_btn')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(37,211,102,0.35)] flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>{t({ hi: 'WhatsApp Consultation', en: 'WhatsApp Consultation' })}</span>
              </a>
            </div>

            {/* Location Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E8DCC8] text-xs sm:text-sm text-[#5C4D3E] shadow-sm mb-6 font-devanagari">
              <span className="text-[#C8860A]">📍</span>
              <span>{t({ hi: 'श्री मंगलनाथ मंदिर क्षेत्र, उज्जैन (मध्य प्रदेश) 456001', en: 'Mangalnath Temple Area, Ujjain, MP 456001' })}</span>
            </div>

            {/* Trust Cards Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-xl">
              <div className="bg-white/80 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-[#E8DCC8] text-center shadow-xs">
                <span className="text-xs sm:text-sm font-bold text-[#1F160F] block font-heading">SHUKLA YAJURVEDA</span>
                <span className="text-[10px] sm:text-xs text-[#8C3814] font-medium font-devanagari">100% प्रामाणिक विधि</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-[#E8DCC8] text-center shadow-xs">
                <span className="text-xs sm:text-sm font-bold text-[#1F160F] block font-heading">15+ YRS PUROHIT</span>
                <span className="text-[10px] sm:text-xs text-[#8C3814] font-medium font-devanagari">सिद्ध पीठ अनुभव</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-[#E8DCC8] text-center shadow-xs">
                <span className="text-xs sm:text-sm font-bold text-[#1F160F] block font-heading">5.0 STAR RATING</span>
                <span className="text-[10px] sm:text-xs text-[#8C3814] font-medium font-devanagari">150+ संतुष्ट भक्त</span>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Interactive Media Showcase Card & Google Reviews ── */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border-2 border-[#E8DCC8] shadow-[0_12px_40px_rgba(45,27,0,0.08)]">
              
              {/* Media Viewport */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-black shadow-inner group">
                <img
                  src={HERO_SLIDES[currentSlide].image}
                  alt={t(HERO_SLIDES[currentSlide].title)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Overlay Icons */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                  <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white text-xs shadow-md">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                    </svg>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white text-xs shadow-md">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3 sm:p-4 z-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="bg-[#F5C842] text-[#1C0A00] font-bold text-[10px] sm:text-xs uppercase px-2.5 py-0.5 rounded tracking-wider">
                      {t(HERO_SLIDES[currentSlide].badge)}
                    </span>
                    <span className="bg-black/70 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded-full font-mono border border-white/20">
                      {currentSlide + 1}/{HERO_SLIDES.length}
                    </span>
                  </div>
                  <p className="font-heading font-bold text-xs sm:text-sm text-cream tracking-wide uppercase line-clamp-1 drop-shadow-sm">
                    {t(HERO_SLIDES[currentSlide].title)}
                  </p>
                </div>
              </div>

              {/* Slider Navigation Controls */}
              <div className="flex items-center justify-between py-2.5 px-1 mt-1 text-[#5C4D3E]">
                <button
                  onClick={prevSlide}
                  className="text-xs sm:text-sm font-semibold hover:text-[#D97706] px-2 py-1 flex items-center gap-1 transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  ‹ Prev
                </button>

                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                        currentSlide === idx ? 'w-6 bg-[#D97706]' : 'w-2 bg-[#E8DCC8] hover:bg-[#D97706]/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="text-xs sm:text-sm font-semibold hover:text-[#D97706] px-2 py-1 flex items-center gap-1 transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  Next ›
                </button>
              </div>

              {/* ── GOOGLE REVIEW & VERIFIED BADGE ROW (AS HIGHLIGHTED IN SCREENSHOT) ── */}
              <div className="border-t border-[#F0E6D8] pt-3 mt-1 flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm">
                
                {/* Left: Google 5.0 Star Reviews */}
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <div className="flex text-amber-500 tracking-tighter text-sm sm:text-base leading-none">
                    ★★★★★
                  </div>
                  <span className="font-bold text-[#1F160F]">5.0</span>
                  <span className="text-[#6B4C1E] text-xs">
                    {t({ hi: '(150+ Google समीक्षाएं)', en: '(150+ Google Reviews)' })}
                  </span>
                </div>

                {/* Right: Verified Ujjain Purohit */}
                <div className="flex items-center gap-1 text-emerald-700 font-semibold text-xs sm:text-sm">
                  <svg className="w-4 h-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>{t({ hi: 'Verified Ujjain Purohit', en: 'Verified Ujjain Purohit' })}</span>
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
    <section className="py-14 sm:py-20 bg-pattern" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t({ hi: 'विश्वसनीय वैदिक सेवा', en: 'Trusted Vedic Service' })}
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
            <div className="rounded-2xl overflow-hidden shadow-divine aspect-[3/4] sm:aspect-[4/5] max-h-[480px] border-2 border-gold/30 relative group bg-divine-dark">
              <img
                src={panditImg}
                alt={t(ab.heading)}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Bottom gradient overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="badge badge-gold">15+ {t({ hi: 'वर्ष अनुभव', en: 'Years Exp' })}</span>
                  <span className="badge badge-primary">{t({ hi: 'वैदिक पुरोहित', en: 'Vedic Priest' })}</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-cream font-devanagari drop-shadow-md">
                  {t(C.panditName)}
                </p>
                <p className="text-xs text-gold/90 font-devanagari mt-1 flex items-center gap-1">
                  📍 {t(C.location)}
                </p>
              </div>
            </div>
            {/* Decorative glows */}
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

// ─── AEO: Comparative Puja Table ───────────────────────────
const PUJA_TABLE = [
  { slug: 'mangal-dosh-puja',      emoji: '✦', hi: { name: 'मंगल भात पूजा',       kisLiye: 'मांगलिक दोष, विवाह बाधा',       avadhi: '3–5 घंटे' }, en: { name: 'Mangal Bhat Puja',      kisLiye: 'Manglik dosha, marriage delays', avadhi: '3–5 hrs' } },
  { slug: 'kaal-sarp-dosh',        emoji: '✦', hi: { name: 'कालसर्प दोष निवारण',   kisLiye: 'करियर, स्वास्थ्य, मानसिक शांति', avadhi: '4–6 घंटे' }, en: { name: 'Kaal Sarp Dosh Puja',  kisLiye: 'Career, health, mental peace',  avadhi: '4–6 hrs' } },
  { slug: 'pitru-dosh-nivaran',    emoji: '✦', hi: { name: 'पितृ दोष निवारण',      kisLiye: 'पितरों की शांति, संतान लाभ',    avadhi: '3–5 घंटे' }, en: { name: 'Pitru Dosh Nivaran',   kisLiye: 'Ancestor peace, progeny blessings', avadhi: '3–5 hrs' } },
  { slug: 'navgrah-shanti',        emoji: '✦', hi: { name: 'नवग्रह शांति',          kisLiye: 'सर्व ग्रह दोष शमन',             avadhi: '4–5 घंटे' }, en: { name: 'Navgrah Shanti',       kisLiye: 'All planetary dosha relief',    avadhi: '4–5 hrs' } },
  { slug: 'mahamrityunjay',        emoji: '✦', hi: { name: 'महामृत्युंजय जाप',      kisLiye: 'गंभीर रोग, मृत्यु भय, दीर्घायु', avadhi: '3–7 घंटे' }, en: { name: 'Mahamrityunjay Jaap', kisLiye: 'Serious illness, longevity',    avadhi: '3–7 hrs' } },
  { slug: 'rudrabhishek',          emoji: '✦', hi: { name: 'रुद्राभिषेक',            kisLiye: 'सुख-समृद्धि, शिव कृपा',         avadhi: '2–4 घंटे' }, en: { name: 'Rudrabhishek',        kisLiye: 'Prosperity, Shiva blessings',  avadhi: '2–4 hrs' } },
  { slug: 'vastu-shanti',          emoji: '✦', hi: { name: 'वास्तु शांति',           kisLiye: 'नया घर, कार्यालय, वास्तु दोष', avadhi: '3–5 घंटे' }, en: { name: 'Vastu Shanti',        kisLiye: 'New home, office, vastu dosha', avadhi: '3–5 hrs' } },
  { slug: 'navchandi-shatchandi',  emoji: '✦', hi: { name: 'नवचंडी / शतचंडी',       kisLiye: 'विशेष मनोकामना पूर्ति',          avadhi: '1–3 दिन' }, en: { name: 'Navchandi/Shatchandi',kisLiye: 'Fulfillment of special wishes', avadhi: '1–3 days' } },
];

function PujaComparisonTable() {
  const { t, lang } = useLanguage();
  return (
    <section className="py-16 bg-cream" aria-labelledby="puja-table-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t({ hi: 'संक्षिप्त विवरण तालिका', en: 'Puja Overview Table' })}
          heading={t({ hi: 'सभी पूजाएं — एक नज़र में', en: 'All Pujas at a Glance' })}
          subheading={t({ hi: 'कौन सी पूजा किसके लिए है, कितनी देर चलती है — यहाँ देखें', en: 'Which puja is for whom and how long it lasts — see here' })}
        />
        <div className="overflow-x-auto mt-8 rounded-2xl shadow-card" data-aos="fade-up">
          <table className="w-full text-sm font-devanagari" role="table" aria-label={t({ hi: 'पूजा तुलना तालिका', en: 'Puja Comparison Table' })}>
            <thead>
              <tr className="bg-divine-dark text-cream">
                <th className="text-left px-4 py-3 font-bold" scope="col">{t({ hi: 'पूजा', en: 'Puja' })}</th>
                <th className="text-left px-4 py-3 font-bold" scope="col">{t({ hi: 'किस लिए?', en: 'Purpose' })}</th>
                <th className="text-left px-4 py-3 font-bold" scope="col">{t({ hi: 'अवधि', en: 'Duration' })}</th>
                <th className="text-left px-4 py-3 font-bold" scope="col">{t({ hi: 'बुकिंग', en: 'Book' })}</th>
              </tr>
            </thead>
            <tbody>
              {PUJA_TABLE.map((row, i) => {
                const d = lang === 'hi' ? row.hi : row.en;
                return (
                  <tr key={row.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-cream-dark/40'}>
                    <td className="px-4 py-3 font-semibold text-divine-brown">
                      <Link to={`/services/${row.slug}`} className="flex items-center gap-2 hover:text-saffron transition-colors">
                        <span className="text-gold font-bold">✦</span> {d.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-divine-muted">{d.kisLiye}</td>
                    <td className="px-4 py-3 text-divine-muted">{d.avadhi}</td>
                    <td className="px-4 py-3">
                      <Link to={`/services/${row.slug}`} className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-saffron/10 text-saffron font-semibold border border-saffron/30 hover:bg-saffron hover:text-white transition-all duration-200">
                        {lang === 'hi' ? `${d.name} जानकारी` : `${d.name} Info`} →
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
  {
    q: { hi: 'उज्जैन में मंगल दोष पूजा कहाँ होती है?', en: 'Where is Mangal Dosh Puja done in Ujjain?' },
    a: { hi: 'उज्जैन में मंगल दोष (मांगलिक दोष) की पूजा श्री मंगलनाथ मंदिर में होती है, जिसे पुराणों में मंगल ग्रह का जन्म स्थान माना गया है। वैदिक पंडित दीपक पंड्या यहाँ 15+ वर्षों से पूजन करवाते हैं।', en: 'Mangal Dosh puja is performed at Shri Mangalnath Mandir, Ujjain — considered the birthplace of Mars (Mangal graha) in the Puranas. Pandit Deepak Pandya has been conducting these rituals here for 15+ years.' },
  },
  {
    q: { hi: 'कालसर्प दोष की पूजा उज्जैन में कैसे करवाएं?', en: 'How to get Kaal Sarp Dosh puja done in Ujjain?' },
    a: { hi: 'उज्जैन में कालसर्प दोष निवारण के लिए +91 62634 01651 पर WhatsApp करें या बुकिंग फ़ॉर्म भरें। पंडित जी नाम, गोत्र और कुंडली देखकर उचित तिथि और विधि बताएंगे।', en: 'For Kaal Sarp Dosh puja in Ujjain, WhatsApp +91 62634 01651 or fill the booking form. Pandit ji will review your kundali and suggest the right date and procedure.' },
  },
  {
    q: { hi: 'बाहर के शहर से उज्जैन पूजा बुकिंग कैसे होगी?', en: 'How to book puja in Ujjain from another city?' },
    a: { hi: 'इंदौर, भोपाल, दिल्ली, मुंबई या किसी भी शहर से WhatsApp पर नाम, गोत्र, जन्म विवरण भेजें। पंडित जी आपकी ओर से संकल्प लेकर पूजा करेंगे और वीडियो भेजेंगे।', en: 'From Indore, Bhopal, Delhi, Mumbai or any city — send your name, gotra, and birth details via WhatsApp. Pandit ji will perform the puja on your behalf with video proof.' },
  },
  {
    q: { hi: 'पूजा में कितना खर्च आता है?', en: 'What is the cost of puja?' },
    a: { hi: 'पूजा का खर्च पूजा के प्रकार और विधि पर निर्भर करता है। सटीक जानकारी के लिए +91 62634 01651 पर सीधे संपर्क करें। सभी पूजाएं वैदिक विधि से संपन्न होती हैं।', en: 'The puja cost depends on the type and scale of ritual. For exact information, contact directly at +91 62634 01651. All pujas are performed with complete Vedic vidhi.' },
  },
  {
    q: { hi: 'पंडित दीपक पंड्या कौन हैं?', en: 'Who is Pandit Deepak Pandya?' },
    a: { hi: 'पंडित दीपक पंड्या उज्जैन के वैदिक पुरोहित हैं जिनका अनुभव 15+ वर्षों का है। वे मंगलनाथ मंदिर, राम घाट एवं महाकाल परिसर में मंगल दोष, कालसर्प, पितृ दोष, नवग्रह शांति सहित सभी अनुष्ठान संपन्न करवाते हैं।', en: 'Pandit Deepak Pandya is a Vedic priest from Ujjain with 15+ years of experience. He performs Mangal Dosh, Kaal Sarp, Pitru Dosh, Navgrah Shanti and all Vedic rituals at Mangalnath Temple, Ram Ghat, and Mahakal complex.' },
  },
  {
    q: { hi: 'क्या ऑनलाइन पूजा बुकिंग संभव है?', en: 'Is online puja booking possible?' },
    a: { hi: 'हाँ। WhatsApp (+91 62634 01651) पर या वेबसाइट के बुकिंग फ़ॉर्म के माध्यम से ऑनलाइन संकल्प और पूजा बुकिंग की जा सकती है।', en: 'Yes. Online sankalp and puja booking can be done via WhatsApp (+91 62634 01651) or the booking form on this website.' },
  },
];

function HomeFaqSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16 bg-cream-dark" aria-labelledby="home-faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t({ hi: 'जिज्ञासा एवं समाधान', en: 'Common Queries' })}
          heading={t({ hi: 'अक्सर पूछे जाने वाले प्रश्न', en: 'Frequently Asked Questions' })}
          subheading={t({ hi: 'उज्जैन पूजा बुकिंग, खर्च और विधि से जुड़े सवाल', en: 'Questions about Ujjain puja booking, cost, and process' })}
        />
        <div className="mt-8 space-y-3" data-aos="fade-up">
          {HOME_FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl border border-saffron/20 overflow-hidden bg-white shadow-sm">
              <button
                className="w-full text-left font-devanagari p-4 sm:p-5 flex justify-between items-center text-divine-brown font-bold text-sm sm:text-base hover:bg-cream-dark/50 transition-colors"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{t(faq.q)}</span>
                <span className={`text-saffron text-xl font-bold transition-transform duration-300 shrink-0 ml-3 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="font-devanagari text-divine-muted text-sm leading-relaxed px-4 pb-5 sm:px-5 sm:pb-6 border-t border-cream-dark bg-cream/40">
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
      <PujaComparisonTable />
      <AboutSnippet />
      <TestimonialsSection />
      <HomeFaqSection />
      <QuickBookingSection />
    </main>
  );
}
