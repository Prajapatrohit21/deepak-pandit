// ============================================================
// Contact.jsx — Contact page with map embed and form
// ============================================================
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { buildContactMessage, buildWhatsAppUrl } from '../utils/whatsapp';

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

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = lang === 'hi' ? 'नाम आवश्यक है' : 'Name required';
    if (!form.phone.trim()) errs.phone = lang === 'hi' ? 'नंबर आवश्यक है' : 'Phone required';
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
    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitting(false);
      setForm({ name: '', phone: '', message: '' });
    }, 300);
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section
        className="py-20 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #2D1500)' }}
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="section-tag text-gold/80 mb-4 inline-flex">📞 {t(ct.badge)}</span>
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold text-cream font-devanagari mb-4">
            {t(ct.heading)}
          </h1>
          <p className="text-cream/70 font-devanagari">{t(ct.subheading)}</p>
          <div className="gold-line mt-4" />
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left: Contact details + map */}
            <div data-aos="fade-right">
              {/* Details Cards */}
              <div className="flex flex-col gap-4 mb-8">
                {ct.details.map((d, i) => (
                  <div key={i} className="gradient-border rounded-2xl p-5 flex items-start gap-4">
                    <span className="text-2xl shrink-0" aria-hidden="true">{d.icon}</span>
                    <div>
                      <p className="font-bold text-divine-brown text-sm font-devanagari mb-0.5">
                        {t({ hi: d.hi.label, en: d.en.label })}
                      </p>
                      <p className="text-divine-muted text-sm font-devanagari">
                        {t({ hi: d.hi.value, en: d.en.value })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3 flex-wrap mb-8">
                <a href="tel:+916263401651" className="btn-primary font-devanagari">
                  📞 {t({ hi: 'अभी कॉल करें', en: 'Call Now' })}
                </a>
                <a href="https://wa.me/916263401651" target="_blank" rel="noopener noreferrer" className="btn-secondary font-devanagari">
                  💬 WhatsApp
                </a>
              </div>

              {/* Google Map Embed */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9!2d75.7685!3d23.1764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963730a71898c37%3A0x8ad5e88b92e42b8d!2sMahakaleshwar%20Jyotirlinga!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mahadev Anushthan Kendra, Ujjain Location"
                />
              </div>
            </div>

            {/* Right: Contact form */}
            <div data-aos="fade-left">
              <div className="gradient-border rounded-3xl p-8 bg-cream-light shadow-card">
                <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-6">
                  {t({ hi: 'संदेश भेजें', en: 'Send Message' })}
                </h2>
                <form onSubmit={handleSubmit} noValidate id="contact-form" className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="ct-name">
                      {t({ hi: 'नाम *', en: 'Name *' })}
                    </label>
                    <input id="ct-name" type="text" className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                      placeholder={t({ hi: 'पूरा नाम', en: 'Full Name' })} value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="ct-phone">
                      {t({ hi: 'मोबाइल नंबर *', en: 'Mobile Number *' })}
                    </label>
                    <input id="ct-phone" type="tel" className={`form-input ${errors.phone ? 'border-red-400' : ''}`}
                      placeholder="+91 XXXXX XXXXX" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={12} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="ct-message">
                      {t({ hi: 'संदेश *', en: 'Message *' })}
                    </label>
                    <textarea id="ct-message" className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
                      rows={5} placeholder={t({ hi: 'अपना संदेश यहाँ लिखें...', en: 'Write your message here...' })}
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    {errors.message && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={submitting}
                    className="btn-gold w-full py-4 justify-center font-devanagari text-base disabled:opacity-70"
                    id="contact-submit-btn">
                    {submitting
                      ? (lang === 'hi' ? '⏳ भेज रहे हैं...' : '⏳ Sending...')
                      : `📱 ${t(ct.formSubmit)}`}
                  </button>
                  <p className="text-center text-xs text-divine-muted font-devanagari">
                    ✅ {t({ hi: 'संदेश WhatsApp पर भेजा जाएगा', en: 'Message will be sent on WhatsApp' })}
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
