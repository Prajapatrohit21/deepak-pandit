// ============================================================
// ServiceCard.jsx — Service listing card
// ============================================================
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { CONTENT } from '../../data/content';

export default function ServiceCard({ service, featured = false }) {
  const { t } = useLanguage();
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
            {t({ hi: '⭐ मुख्य सेवा', en: '⭐ Main Service' })}
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
        <span>⏱</span>
        <span className="font-devanagari">{t({ hi: svc.hi?.duration, en: svc.en?.duration })}</span>
      </div>

      {/* CTAs */}
      <div className="flex gap-2 flex-wrap">
        <Link
          to={`/services/${svc.slug}`}
          className="btn-secondary text-sm py-2 px-4 font-devanagari"
        >
          {t(C.services.knowMore)}
        </Link>
        <Link
          to="/booking"
          state={{ service: t({ hi: svc.hi?.name, en: svc.en?.name }) }}
          className="btn-primary text-sm py-2 px-4 font-devanagari"
        >
          {t(C.services.bookService)}
        </Link>
      </div>
    </article>
  );
}
