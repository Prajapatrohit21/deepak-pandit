// ============================================================
// KundliAnalysis.jsx — Kundali analysis form page
// ============================================================
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { SERVICES } from '../data/services';
import { buildKundliMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import SectionHeading from '../components/ui/SectionHeading';

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
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s|-/g, ''))) errs.phone = lang === 'hi' ? 'वैध नंबर दर्ज करें' : 'Enter valid number';
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
    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitting(false);
    }, 300);
  };

  const content = lang === 'hi' ? kundliService?.hi : kundliService?.en;

  return (
    <main className="pt-20">
      {/* Header */}
      <section
        className="py-24 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #2D1500)' }}
        aria-labelledby="kundli-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="text-5xl mb-3 animate-float" aria-hidden="true">🔮</div>
          <span className="section-tag text-gold/80 mb-4 inline-flex">{t(kd.badge)}</span>
          <h1 id="kundli-heading" className="text-4xl md:text-5xl font-bold text-cream font-devanagari mb-4">
            {t(kd.heading)}
          </h1>
          <p className="text-cream/70 font-devanagari">{t(kd.subheading)}</p>
          <div className="gold-line mt-4" />
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: Form */}
            <div data-aos="fade-right">
              <div className="gradient-border rounded-3xl p-8 bg-cream-light shadow-card">
                <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-6">
                  {t({ hi: 'अपनी जन्म विवरण भरें', en: 'Enter Your Birth Details' })}
                </h2>
                <form onSubmit={handleSubmit} noValidate id="kundli-form" className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="kd-name">{t(kd.fields.name)}</label>
                    <input id="kd-name" type="text" className={`form-input ${errors.name ? 'border-red-400' : ''}`} placeholder={t(kd.fields.name.placeholder)} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="kd-phone">{t(kd.fields.phone)}</label>
                    <input id="kd-phone" type="tel" className={`form-input ${errors.phone ? 'border-red-400' : ''}`} placeholder={t(kd.fields.phone.placeholder)} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={12} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.phone}</p>}
                  </div>

                  {/* DOB */}
                  <div>
                    <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="kd-dob">{t(kd.fields.dob)}</label>
                    <input id="kd-dob" type="date" className={`form-input ${errors.dob ? 'border-red-400' : ''}`} value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
                    {errors.dob && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.dob}</p>}
                  </div>

                  {/* TOB */}
                  <div>
                    <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="kd-tob">{t(kd.fields.tob)}</label>
                    <input id="kd-tob" type="text" className={`form-input ${errors.tob ? 'border-red-400' : ''}`} placeholder={t(kd.fields.tob.placeholder)} value={form.tob} onChange={(e) => setForm({ ...form, tob: e.target.value })} />
                    {errors.tob && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.tob}</p>}
                  </div>

                  {/* POB */}
                  <div>
                    <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="kd-pob">{t(kd.fields.pob)}</label>
                    <input id="kd-pob" type="text" className={`form-input ${errors.pob ? 'border-red-400' : ''}`} placeholder={t(kd.fields.pob.placeholder)} value={form.pob} onChange={(e) => setForm({ ...form, pob: e.target.value })} />
                    {errors.pob && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.pob}</p>}
                  </div>

                  {/* Query */}
                  <div>
                    <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="kd-query">{t(kd.fields.query)} ({lang === 'hi' ? 'वैकल्पिक' : 'Optional'})</label>
                    <textarea id="kd-query" className="form-input resize-none" rows={3} placeholder={t(kd.fields.query.placeholder)} value={form.query} onChange={(e) => setForm({ ...form, query: e.target.value })} />
                  </div>

                  <button type="submit" disabled={submitting} className="btn-gold w-full py-4 justify-center font-devanagari text-base mt-2 disabled:opacity-70" id="kundli-submit-btn">
                    {submitting ? (lang === 'hi' ? '⏳ भेज रहे हैं...' : '⏳ Sending...') : t(kd.submit)}
                  </button>
                  <p className="text-center text-xs text-divine-muted font-devanagari">
                    ✅ {t({ hi: 'WhatsApp पर विवरण जाएगा — पंडित जी 24 घंटे में उत्तर देंगे', en: 'Details sent on WhatsApp — Pandit Ji responds within 24 hours' })}
                  </p>
                </form>
              </div>
            </div>

            {/* Right: Info */}
            <div data-aos="fade-left">
              <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-4">
                {t({ hi: 'कुंडली विश्लेषण में क्या मिलेगा?', en: 'What\'s Included in Kundali Analysis?' })}
              </h2>
              {content?.benefits && (
                <div className="flex flex-col gap-3 mb-8">
                  {content.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-cream-dark">
                      <span className="text-gold text-lg">✦</span>
                      <p className="text-sm font-devanagari text-divine-brown">{b}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Online consultation info */}
              <div className="gradient-border rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-divine-brown font-devanagari mb-3">
                  {t({ hi: '📱 ऑनलाइन परामर्श', en: '📱 Online Consultation' })}
                </h3>
                <ul className="text-sm text-divine-muted font-devanagari flex flex-col gap-2">
                  <li>✅ {t({ hi: 'WhatsApp वीडियो कॉल पर परामर्श', en: 'Consultation via WhatsApp video call' })}</li>
                  <li>✅ {t({ hi: 'कुंडली PDF मेल/WhatsApp पर', en: 'Horoscope PDF on mail/WhatsApp' })}</li>
                  <li>✅ {t({ hi: '60-90 मिनट विस्तृत सत्र', en: '60-90 minute detailed session' })}</li>
                  <li>✅ {t({ hi: 'आगामी 5 वर्षों का भविष्यफल', en: 'Predictions for next 5 years' })}</li>
                  <li>✅ {t({ hi: 'उपाय एवं रत्न सुझाव', en: 'Remedies and gemstone recommendations' })}</li>
                </ul>
              </div>

              <div className="bg-cream-dark rounded-2xl p-5 text-center">
                <p className="text-divine-muted font-devanagari text-sm mb-3">
                  {t({ hi: 'सीधे WhatsApp पर संपर्क करें', en: 'Contact directly on WhatsApp' })}
                </p>
                <a href="https://wa.me/916263401651" target="_blank" rel="noopener noreferrer" className="btn-gold font-devanagari">
                  💬 WhatsApp: 6263401651
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
