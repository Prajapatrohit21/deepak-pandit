// ============================================================
// BookingForm.jsx — Quick booking form with WhatsApp redirect
// ============================================================
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CONTENT } from '../../data/content';
import { SERVICES } from '../../data/services';
import { buildBookingMessage, buildWhatsAppUrl } from '../../utils/whatsapp';

const C = CONTENT;

export default function BookingForm({ compact = false, defaultService = '' }) {
  const { lang, t } = useLanguage();
  const bk = C.booking;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: defaultService,
    problem: '',
    date: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = lang === 'hi' ? 'नाम आवश्यक है' : 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s|-/g, '')))
      errs.phone = lang === 'hi' ? 'वैध 10 अंकों का नंबर दर्ज करें' : 'Enter valid 10-digit number';
    if (!form.service) errs.service = lang === 'hi' ? 'सेवा चुनें' : 'Select a service';
    if (!form.problem.trim()) errs.problem = lang === 'hi' ? 'समस्या बताएं' : 'Describe your problem';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const message = buildBookingMessage({ ...form, lang });
    const url = buildWhatsAppUrl(message);

    // Also submit to Web3Forms for email backup (optional)
    // Replace ACCESS_KEY with actual key from web3forms.com
    // fetch('https://api.web3forms.com/submit', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace this
    //     subject: `New Puja Booking — ${form.service}`,
    //     ...form,
    //   }),
    // }).catch(() => {});

    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitting(false);
      setForm({ name: '', phone: '', service: defaultService, problem: '', date: '' });
    }, 300);
  };

  const inputClass = (field) =>
    `form-input ${errors[field] ? 'border-red-400 focus:border-red-400' : ''}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full" id="booking-form">
      <div className={`grid gap-4 ${compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="booking-name">
            {t(bk.fields.name)}
          </label>
          <input
            id="booking-name"
            type="text"
            className={inputClass('name')}
            placeholder={t(bk.fields.name.placeholder)}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            autoComplete="name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="booking-phone">
            {t(bk.fields.phone)}
          </label>
          <input
            id="booking-phone"
            type="tel"
            className={inputClass('phone')}
            placeholder={t(bk.fields.phone.placeholder)}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            autoComplete="tel"
            maxLength={12}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.phone}</p>}
        </div>

        {/* Service Dropdown */}
        <div className={compact ? 'sm:col-span-2' : ''}>
          <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="booking-service">
            {t(bk.fields.service)}
          </label>
          <select
            id="booking-service"
            className={inputClass('service')}
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option value="">{t(bk.fields.service.placeholder)}</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={t({ hi: s.hi?.name, en: s.en?.name })}>
                {t({ hi: s.hi?.name, en: s.en?.name })}
              </option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.service}</p>}
        </div>

        {/* Problem */}
        <div className={compact ? 'sm:col-span-2' : ''}>
          <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="booking-problem">
            {t(bk.fields.problem)}
          </label>
          <textarea
            id="booking-problem"
            className={`${inputClass('problem')} resize-none`}
            rows={compact ? 3 : 4}
            placeholder={t(bk.fields.problem.placeholder)}
            value={form.problem}
            onChange={(e) => setForm({ ...form, problem: e.target.value })}
          />
          {errors.problem && <p className="text-red-500 text-xs mt-1 font-devanagari">{errors.problem}</p>}
        </div>

        {/* Date (optional) */}
        <div className={compact ? '' : ''}>
          <label className="block text-sm font-semibold text-divine-brown mb-1.5 font-devanagari" htmlFor="booking-date">
            {t(bk.fields.date)} ({lang === 'hi' ? 'वैकल्पिक' : 'Optional'})
          </label>
          <input
            id="booking-date"
            type="date"
            className="form-input"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="btn-gold w-full mt-6 py-4 text-base font-devanagari justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        id="booking-submit-btn"
      >
        {submitting
          ? (lang === 'hi' ? '⏳ भेज रहे हैं...' : '⏳ Sending...')
          : t(bk.submit)}
      </button>

      <p className="text-center text-xs text-divine-muted mt-3 font-devanagari">
        {t(bk.note)}
      </p>
    </form>
  );
}
