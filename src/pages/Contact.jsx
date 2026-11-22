// ============================================================
// Contact.jsx — Pandits Of Banaras Luxury Contact Page
// ============================================================
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { buildContactMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { trackContactSubmit, trackPhoneCall, trackWhatsAppClick } from '../utils/analytics';
import { WA_HREF, PHONE_HREF } from '../utils/whatsapp';
import SEO from '../components/common/SEO';

const C = CONTENT;

export default function Contact() {
  const { lang, t } = useLanguage();
  const ct = C.contact;

  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const contactTitle = lang === 'hi'
    ? 'मंगल दोष पूजा बुकिंग उज्जैन | संपर्क करें — पंडित दीपक पंड्या'
    : 'Mangal Dosh Puja Booking Ujjain | Contact Pandit Deepak Pandya';

  const contactDesc = lang === 'hi'
    ? 'उज्जैन में मंगल दोष पूजा बुकिंग व परामर्श के लिए पंडित दीपक पंड्या से संपर्क करें। फोन, WhatsApp +91 62634 01651 — 24x7 उपलब्ध। मंगल दोष, मांगलिक दोष व कालसर्प पूजा विधि जानकारी।'
    : 'Book Mangal Dosh Puja in Ujjain — Contact Pandit Deepak Pandya via Call or WhatsApp +91 62634 01651. 24x7 available for Mangal Dosh Nivaran, Manglik dosh and Kaal Sarp puja queries.';

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = lang === 'hi' ? 'नाम आवश्यक है' : 'Name required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s|-/g, ''))) errs.phone = lang === 'hi' ? 'वैध 10 अंकों का नंबर आवश्यक है' : 'Valid 10-digit phone required';
    if (!form.message.trim()) errs.message = lang === 'hi' ? 'संदेश आवश्यक है' : 'Message required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    const msg = buildContactMessage({ ...form, lang });
    const url = buildWhatsAppUrl(msg);
    trackContactSubmit();
    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitting(false);
      setForm({ name: '', phone: '', message: '' });
    }, 300);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-white text-[#1F160F] placeholder-[#8C7A6B] text-sm font-devanagari transition-all focus:outline-none ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 ring-1 ring-red-400'
        : 'border-[#E8DCC8] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]'
    }`;

  return (
    <main className="pt-20 bg-[#FAF7F2] text-[#2D1B00]">
      <SEO
        title={contactTitle}
        description={contactDesc}
        canonical="https://mangaldoshpujanivaran.in/contact"
      />
      
      {/* ── Page Header ── */}
      <section
        className="py-16 sm:py-24 text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] border-b border-[#E8DCC8]"
        aria-labelledby="contact-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,_rgba(139,26,26,0.06)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gold/60 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold font-sans uppercase tracking-wider mb-4 shadow-xs">
            <span className="text-gold">✦</span>
            <span>{t({ hi: '24x7 वैदिक सहायता एवं परामर्श • उज्जैन', en: '24x7 Vedic Helpline & Assistance • Ujjain' })}</span>
            <span className="text-gold">✦</span>
          </span>

          <h1 id="contact-heading" className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F160F] leading-tight mb-4">
            {t(ct.heading)}
          </h1>

          <p className="text-[#5C4D3E] font-devanagari text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {t(ct.subheading)}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full mx-auto mt-6" />
        </div>
      </section>

      {/* ── Contact Details & Form ── */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact Info Cards & Map */}
            <div data-aos="fade-right" className="lg:col-span-5 space-y-5">
              
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#E8DCC8] shadow-sm">
                <span className="bg-[#F5C842] text-[#1C0A00] font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-4">
                  संपर्क सूत्र
                </span>

                <div className="space-y-4 text-sm font-devanagari">
                  {/* Phone */}
                  <a
                    href={PHONE_HREF}
                    onClick={() => trackPhoneCall('contact_page')}
                    title="पंडित दीपक पंड्या जी को सीधे कॉल करें: +91 62634 01651"
                    aria-label="Call Pandit Deepak Pandya at +91 62634 01651"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#FFF7E6] border border-[#E8DCC8] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D97706] to-[#B45309] text-white flex items-center justify-center shrink-0">
                      📞
                    </div>
                    <div>
                      <p className="text-xs text-[#8C3814] font-bold">हेल्पलाइन फोन नंबर</p>
                      <p className="font-heading font-bold text-base text-[#1F160F]">+91 62634 01651</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={WA_HREF}
                    onClick={() => trackWhatsAppClick('contact_page')}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp पर 24x7 वैदिक पूजा परामर्श एवं बुकिंग सहायता"
                    aria-label="Chat on WhatsApp with Pandit Deepak Pandya 24x7"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-emerald-50 border border-[#E8DCC8] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      💬
                    </div>
                    <div>
                      <p className="text-xs text-emerald-700 font-bold">24x7 WhatsApp चैट</p>
                      <p className="font-heading font-bold text-base text-[#1F160F]">+91 62634 01651</p>
                    </div>
                  </a>

                  {/* Email */}
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DCC8]">
                    <div className="w-10 h-10 rounded-xl bg-[#1C0A00] text-gold flex items-center justify-center shrink-0">
                      ✉️
                    </div>
                    <div>
                      <p className="text-xs text-[#8C3814] font-bold">आधिकारिक ईमेल</p>
                      <p className="font-mono text-xs text-[#1F160F]">mangaldoshpujanivaran@gmail.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DCC8]">
                    <div className="w-10 h-10 rounded-xl bg-[#8C3814] text-white flex items-center justify-center shrink-0 mt-0.5">
                      📍
                    </div>
                    <div>
                      <p className="text-xs text-[#8C3814] font-bold">पूजन केंद्र का पता</p>
                      <p className="text-xs text-[#1F160F] leading-relaxed">
                        श्री मंगलनाथ मंदिर क्षेत्र एवं महाकालेश्वर, उज्जैन (मध्य प्रदेश) 456001
                      </p>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DCC8]">
                    <p className="text-xs text-[#8C3814] font-bold mb-2.5 font-devanagari">
                      {lang === 'hi' ? 'सोशल मीडिया पर जुड़ें' : 'Connect on Social Media'}
                    </p>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href="https://youtube.com/@ujjainkepandit21?si=Se-LrqHsRSi2QUv5"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="YouTube - @ujjainkepandit21"
                        aria-label="YouTube Channel"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 hover:border-red-600 transition-all text-xs font-bold shadow-xs"
                      >
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span>YouTube</span>
                      </a>
                      <a
                        href="https://www.instagram.com/mahadev_anushthan__kendra?evlk=NDJ1Zjk0cG13cHJn"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram - @mahadev_anushthan__kendra"
                        aria-label="Instagram Profile"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-50 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-pink-600 hover:text-white border border-pink-200 hover:border-pink-500 transition-all text-xs font-bold shadow-xs"
                      >
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span>YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="rounded-3xl overflow-hidden border-2 border-[#E8DCC8] shadow-sm aspect-[16/10] bg-white">
                <iframe
                  title="Mangalnath Temple Ujjain Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674.238472551468!2d75.7667!3d23.2104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963740e70a3c2cf%3A0x8ddf73f8a00277df!2sMangalnath%20Mandir%2C%20Ujjain!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

            {/* Right: Message Form */}
            <div data-aos="fade-left" className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#E8DCC8] shadow-[0_12px_40px_rgba(45,27,0,0.08)]">
                
                <div className="mb-6">
                  <span className="bg-[#F5C842] text-[#1C0A00] font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-3">
                    सीधा संदेश
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#1F160F] mb-2">
                    {t({ hi: 'पंडित जी से संपर्क हेतु संदेश भेजें', en: 'Send a Message to Pandit Ji' })}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4D3E] font-devanagari">
                    अपना प्रश्न या पूजा से जुड़ी कोई भी जिज्ञासा साझा करें।
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-[#1F160F] mb-1 font-devanagari">
                      आपका नाम <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className={inputClass('name')}
                      placeholder="पूरा नाम दर्ज करें"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-[#1F160F] mb-1 font-devanagari">
                      मोबाइल नंबर <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className={inputClass('phone')}
                      placeholder="10 अंकों का नंबर"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={12}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.phone}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-[#1F160F] mb-1 font-devanagari">
                      आपका संदेश / समस्या <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      className={`${inputClass('message')} resize-none`}
                      placeholder="अपनी समस्या या पूजा के संबंध में लिखें..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-bold font-devanagari text-base shadow-[0_4px_16px_rgba(217,119,6,0.35)] flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-70"
                  >
                    <span>💬 WhatsApp पर संदेश भेजें</span>
                  </button>

                  <p className="text-center text-xs text-[#6B4C1E] font-devanagari pt-1">
                    🔒 आपकी गोपनीयता सर्वोपरि है। जानकारी केवल पूजा परामर्श हेतु प्रयुक्त होगी।
                  </p>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
