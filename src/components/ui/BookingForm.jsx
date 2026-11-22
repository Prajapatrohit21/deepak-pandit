import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CONTENT } from '../../data/content';
import { SERVICES } from '../../data/services';
import { buildBookingMessage, buildWhatsAppUrl } from '../../utils/whatsapp';
import { trackBookingSubmit } from '../../utils/analytics';

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
    trackBookingSubmit(form.service);

    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitting(false);
      setForm({ name: '', phone: '', service: defaultService, problem: '', date: '' });
    }, 300);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-white text-[#1F160F] placeholder-[#8C7A6B] text-sm font-devanagari transition-all focus:outline-none ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 ring-1 ring-red-400'
        : 'border-[#E8DCC8] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full" id="booking-form">
      <div className={`grid gap-4 ${compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
        <div>
          <label className="block text-sm font-bold text-[#1F160F] mb-1.5 font-devanagari" htmlFor="booking-name">
            {t(bk.fields.name)} <span className="text-red-500">*</span>
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

        <div>
          <label className="block text-sm font-bold text-[#1F160F] mb-1.5 font-devanagari" htmlFor="booking-phone">
            {t(bk.fields.phone)} <span className="text-red-500">*</span>
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

        <div className={compact ? 'sm:col-span-2' : ''}>
          <label className="block text-sm font-bold text-[#1F160F] mb-1.5 font-devanagari" htmlFor="booking-service">
            {t(bk.fields.service)} <span className="text-red-500">*</span>
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

        <div className={compact ? 'sm:col-span-2' : ''}>
          <label className="block text-sm font-bold text-[#1F160F] mb-1.5 font-devanagari" htmlFor="booking-problem">
            {t(bk.fields.problem)} <span className="text-red-500">*</span>
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

        <div className={compact ? 'sm:col-span-2' : ''}>
          <label className="block text-sm font-bold text-[#1F160F] mb-1.5 font-devanagari" htmlFor="booking-date">
            {t(bk.fields.date)} ({lang === 'hi' ? 'वैकल्पिक' : 'Optional'})
          </label>
          <input
            id="booking-date"
            type="date"
            className={inputClass('date')}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-bold font-devanagari text-base shadow-[0_4px_16px_rgba(217,119,6,0.35)] flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        id="booking-submit-btn"
      >
        {submitting ? (
          lang === 'hi' ? 'विवरण भेजा जा रहा है...' : 'Sending Details...'
        ) : (
          <span className="inline-flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0 text-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>{t(bk.submit)}</span>
          </span>
        )}
      </button>

      <p className="text-center text-xs text-[#6B4C1E] mt-3 font-devanagari">
        🔒 {t(bk.note)}
      </p>
    </form>
  );
}
