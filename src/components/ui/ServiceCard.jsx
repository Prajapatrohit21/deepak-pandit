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
      className={`service-card rounded-2xl bg-cream-light shadow-card relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-divine ${
        featured ? 'border-2 border-saffron/40 shadow-divine' : ''
      }`}
      data-aos="fade-up"
    >
      {/* Real Puja Photo Thumbnail */}
      {svc.image ? (
        <div className="relative h-48 w-full overflow-hidden bg-divine-dark">
          <img
            src={svc.image}
            alt={t({ hi: svc.hi?.name, en: svc.en?.name })}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          {featured && (
            <div className="absolute top-3 right-3">
              <span className="badge badge-gold text-xs shadow-md">
                {t({ hi: 'विशेष वैदिक अनुष्ठान', en: 'Featured Vedic Puja' })}
              </span>
            </div>
          )}
        </div>
      ) : (
        featured && (
          <div className="absolute top-4 right-4">
            <span className="badge badge-gold text-xs">
              {t({ hi: 'विशेष वैदिक अनुष्ठान', en: 'Featured Vedic Puja' })}
            </span>
          </div>
        )
      )}

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Name */}
        <h3 className="text-xl font-bold text-divine-brown font-devanagari mb-2 leading-snug">
          {t({ hi: svc.hi?.name, en: svc.en?.name })}
        </h3>

        {/* Tagline */}
        <p className="text-xs text-saffron font-semibold mb-3 font-devanagari">
          {t({ hi: svc.hi?.tagline, en: svc.en?.tagline })}
        </p>

        {/* Short description */}
        <p className="text-sm text-divine-muted leading-relaxed font-devanagari mb-4 line-clamp-3 flex-1">
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
        <div className="flex gap-2 flex-wrap mt-auto">
          <Link
            to={`/services/${svc.slug}`}
            className="btn-secondary text-sm py-2 px-3 font-devanagari flex-1 text-center justify-center"
          >
            {lang === 'hi' ? `${svc.hi?.name} की विधि` : `${svc.en?.name} Details`}
          </Link>
          <Link
            to="/booking"
            state={{ service: t({ hi: svc.hi?.name, en: svc.en?.name }) }}
            className="btn-primary text-sm py-2 px-3 font-devanagari flex-1 text-center justify-center"
          >
            {lang === 'hi' ? `${svc.hi?.name} बुक करें` : `Book ${svc.en?.name}`}
          </Link>
        </div>
      </div>
    </article>
  );
}
