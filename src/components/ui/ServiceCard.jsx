// ============================================================
// ServiceCard.jsx — Service listing card
// ============================================================
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { CONTENT } from '../../data/content';

export default function ServiceCard({ service, featured = false }) {
  const { t, lang } = useLanguage();
  const svc = service;
  const C = CONTENT;

  return (
    <article
      className={`service-card rounded-2xl p-6 bg-cream-light shadow-card relative overflow-hidden ${
        featured ? 'border-2 border-saffron/40 shadow-divine' : ''
      }`}
      data-aos="fade-up"
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="badge badge-gold text-xs">
            {t({ hi: 'विशेष वैदिक अनुष्ठान', en: 'Featured Vedic Puja' })}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="service-icon mb-4">
        <span role="img" aria-label={t(svc.hi?.name || svc.en?.name)} className="text-2xl">
          {svc.icon}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-divine-brown font-devanagari mb-2 leading-snug">
        {t({ hi: svc.hi?.name, en: svc.en?.name })}
      </h3>

      {/* Tagline */}
      <p className="text-xs text-saffron font-semibold mb-3 font-devanagari">
        {t({ hi: svc.hi?.tagline, en: svc.en?.tagline })}
      </p>

      {/* Short description */}
      <p className="text-sm text-divine-muted leading-relaxed font-devanagari mb-4 line-clamp-3">
        {t({ hi: svc.hi?.shortDesc, en: svc.en?.shortDesc })}
      </p>

      {/* Duration */}
      <div className="flex items-center gap-1.5 text-xs text-divine-muted mb-4">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-saffron shrink-0" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span className="font-devanagari">{t({ hi: svc.hi?.duration, en: svc.en?.duration })}</span>
      </div>

      {/* CTAs */}
      <div className="flex gap-2 flex-wrap">
        <Link
          to={`/services/${svc.slug}`}
          className="btn-secondary text-sm py-2 px-4 font-devanagari"
        >
          {lang === 'hi' ? `${svc.hi?.name} की विधि` : `${svc.en?.name} Details`}
        </Link>
        <Link
          to="/booking"
          state={{ service: t({ hi: svc.hi?.name, en: svc.en?.name }) }}
          className="btn-primary text-sm py-2 px-4 font-devanagari"
        >
          {lang === 'hi' ? `${svc.hi?.name} बुक करें` : `Book ${svc.en?.name}`}
        </Link>
      </div>
    </article>
  );
}
