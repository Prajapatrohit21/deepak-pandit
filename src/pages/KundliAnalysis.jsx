// ============================================================
// KundliAnalysis.jsx — Pandits Of Banaras Luxury Kundali Consultation
// ============================================================
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { SERVICES } from '../data/services';
import { buildKundliMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { trackKundliSubmit, trackWhatsAppClick, trackPhoneCall } from '../utils/analytics';
import SectionHeading from '../components/ui/SectionHeading';
import panditImg from '../assets/pandit_deepak_pandya.jpg';

const C = CONTENT;
const kundliService = SERVICES.find((s) => s.slug === 'kundli-analysis');

export default function KundliAnalysis() {
  const { lang, t } = useLanguage();
  const kd = C.kundli;

  const [form, setForm] = useState({ name: '', phone: '', dob: '', tob: '', pob: '', query: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = lang === 'hi' ? 'नाम आवश्यक है' : 'Name required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s|-/g, ''))) errs.phone = lang === 'hi' ? 'वैध 10 अंकों का नंबर दर्ज करें' : 'Enter valid 10-digit number';
    if (!form.dob) errs.dob = lang === 'hi' ? 'जन्म तिथि आवश्यक' : 'Birth date required';
    if (!form.tob.trim()) errs.tob = lang === 'hi' ? 'जन्म समय आवश्यक' : 'Birth time required';
    if (!form.pob.trim()) errs.pob = lang === 'hi' ? 'जन्म स्थान आवश्यक' : 'Birth place required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    const message = buildKundliMessage({ ...form, lang });
    const url = buildWhatsAppUrl(message);
    trackKundliSubmit();
    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitting(false);
      setForm({ name: '', phone: '', dob: '', tob: '', pob: '', query: '' });
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
      
      {/* ── Page Header ── */}
      <section
        className="py-16 sm:py-24 text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] border-b border-[#E8DCC8]"
        aria-labelledby="kundli-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,_rgba(139,26,26,0.06)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gold/60 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold font-sans uppercase tracking-wider mb-4 shadow-xs">
            <span className="text-gold">✦</span>
            <span>{t({ hi: 'प्रामाणिक वैदिक ज्योतिष परामर्श • उज्जैन', en: 'Authentic Vedic Astrology Consultation • Ujjain' })}</span>
            <span className="text-gold">✦</span>
          </span>

          <h1 id="kundli-heading" className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F160F] leading-tight mb-4">
            {t(kd.heading)}
          </h1>

          <p className="text-[#5C4D3E] font-devanagari text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {t(kd.subheading)}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full mx-auto mt-6" />
        </div>
      </section>

      {/* ── Form & Info Section ── */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Astrology Guidance & Trust */}
            <div data-aos="fade-right" className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E8DCC8] shadow-[0_10px_35px_rgba(45,27,0,0.06)]">
                <span className="bg-[#F5C842] text-[#1C0A00] font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-4">
                  वैदिक कुंडली विश्लेषण
                </span>

                <h3 className="font-heading font-black text-2xl text-[#1F160F] mb-3">
                  {t({ hi: 'कुंडली में क्या जांचा जाता है?', en: 'What is Analyzed in Your Horoscope?' })}
                </h3>

                <p className="text-sm text-[#4A3B2C] leading-relaxed font-devanagari mb-6 font-medium">
                  जन्म तिथि, सटीक समय एवं जन्म स्थान के आधार पर वैदिक गणित द्वारा लग्न कुंडली, चंद्र कुंडली व नवमांश का विश्लेषण किया जाता है।
                </p>

                <ul className="space-y-3.5 text-sm font-devanagari text-[#1F160F]">
                  <li className="flex items-center gap-3">
                    <span className="text-[#D97706] text-base">✦</span>
                    <span><strong>मांगलिक दोष (Mangal Dosh):</strong> विवाह में देरी, बाधा या वैवाहिक क्लेश</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#D97706] text-base">✦</span>
                    <span><strong>कालसर्प योग (Kaal Sarp Yoga):</strong> 12 प्रकार के कालसर्प दोषों की पहचान</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#D97706] text-base">✦</span>
                    <span><strong>पितृ दोष एवं गुरु चांडाल:</strong> वंश वृद्धि, स्वास्थ्य व पारिवारिक अशांति</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#D97706] text-base">✦</span>
                    <span><strong>शनि साढ़ेसाती व ढैय्या:</strong> वर्तमान दशा-महादशा का प्रभाव एवं शांति</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#D97706] text-base">✦</span>
                    <span><strong>सटीक वैदिक उपाय:</strong> जप, अनुष्ठान, दान व रत्न परामर्श</span>
                  </li>
                </ul>

                {/* Purohit seal */}
                <div className="mt-8 pt-6 border-t border-[#F0E6D8] flex items-center gap-4">
                  <img
                    src={panditImg}
                    alt="पंडित दीपक पंड्या"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D97706]"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#1F160F]">पंडित दीपक पंड्या</h4>
                    <p className="text-xs text-[#8C3814] font-medium font-devanagari">15+ वर्ष वैदिक अनुभव • उज्जैन सिद्ध पीठ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Birth Details Form */}
            <div data-aos="fade-left" className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#E8DCC8] shadow-[0_12px_40px_rgba(45,27,0,0.08)]">
                
                <div className="mb-6">
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#1F160F] mb-2">
                    {t({ hi: 'जन्म विवरण दर्ज करें', en: 'Enter Birth Details for Analysis' })}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4D3E] font-devanagari">
                    फॉर्म सबमिट करते ही आपका विवरण सीधे पंडित जी के WhatsApp पर पहुंच जाएगा।
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-bold text-[#1F160F] mb-1 font-devanagari">
                        आपका पूरा नाम <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className={inputClass('name')}
                        placeholder="उदा. राहुल शर्मा"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-[#1F160F] mb-1 font-devanagari">
                        WhatsApp मोबाइल नंबर <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className={inputClass('phone')}
                        placeholder="10 अंकों का मोबाइल नंबर"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        maxLength={12}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* DOB */}
                    <div>
                      <label className="block text-sm font-bold text-[#1F160F] mb-1 font-devanagari">
                        जन्म तिथि <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        className={inputClass('dob')}
                        value={form.dob}
                        onChange={(e) => setForm({ ...form, dob: e.target.value })}
                      />
                      {errors.dob && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.dob}</p>}
                    </div>

                    {/* TOB */}
                    <div>
                      <label className="block text-sm font-bold text-[#1F160F] mb-1 font-devanagari">
                        जन्म समय <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className={inputClass('tob')}
                        placeholder="उदा. 08:30 AM"
                        value={form.tob}
                        onChange={(e) => setForm({ ...form, tob: e.target.value })}
                      />
                      {errors.tob && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.tob}</p>}
                    </div>

                    {/* POB */}
                    <div>
                      <label className="block text-sm font-bold text-[#1F160F] mb-1 font-devanagari">
                        जन्म स्थान <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className={inputClass('pob')}
                        placeholder="शहर, राज्य"
                        value={form.pob}
                        onChange={(e) => setForm({ ...form, pob: e.target.value })}
                      />
                      {errors.pob && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.pob}</p>}
                    </div>
                  </div>

                  {/* Query */}
                  <div>
                    <label className="block text-sm font-bold text-[#1F160F] mb-1 font-devanagari">
                      मुख्य समस्या या प्रश्न (विवाह, करियर, स्वास्थ्य आदि)
                    </label>
                    <textarea
                      rows={3}
                      className={`${inputClass('query')} resize-none`}
                      placeholder="अपनी समस्या का संक्षेप में विवरण दें..."
                      value={form.query}
                      onChange={(e) => setForm({ ...form, query: e.target.value })}
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-bold font-devanagari text-base shadow-[0_4px_16px_rgba(217,119,6,0.35)] flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-70"
                  >
                    <span>💬 WhatsApp पर कुंडली विश्लेषण प्राप्त करें</span>
                  </button>

                  <p className="text-center text-xs text-[#6B4C1E] font-devanagari pt-1">
                    🔒 आपका विवरण 100% गोपनीय रखा जाता है।
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
