// ============================================================
// ServiceCard.jsx — Pandits Of Banaras Luxury Service Card
// ============================================================
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { WA_HREF } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';

export default function ServiceCard({ service, featured = false }) {
  const { t, lang } = useLanguage();
  const svc = service;
  const pujaName = t({ hi: svc.hi?.name, en: svc.en?.name });

  const pujaWaUrl = `https://wa.me/916263401651?text=${encodeURIComponent(
    `जय श्री महाकाल! मुझे उज्जैन में ${pujaName} की बुकिंग और विधि के संबंध में जानकारी चाहिए।`
  )}`;

  return (
    <article
      className={`service-card bg-white rounded-3xl border-2 border-[#E8DCC8] shadow-[0_4px_20px_rgba(45,27,0,0.05)] hover:shadow-[0_12px_36px_rgba(45,27,0,0.12)] hover:border-gold/60 transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
        featured ? 'ring-2 ring-gold/40' : ''
      }`}
      data-aos="fade-up"
    >
      {/* Real Puja Photo Thumbnail */}
      <div className="relative h-52 w-full overflow-hidden bg-black">
        {svc.image ? (
          <img
            src={svc.image}
            alt={`${pujaName} उज्जैन - वैदिक पंडित दीपक पंड्या`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-[#1C0A00] flex items-center justify-center text-gold/30 text-4xl">
            🕉️
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Featured / Category Pill Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="bg-[#F5C842] text-[#1C0A00] font-bold text-[10px] sm:text-xs uppercase px-2.5 py-1 rounded shadow-md tracking-wider">
            {featured
              ? t({ hi: 'विशेष वैदिक अनुष्ठान', en: 'Featured Vedic Puja' })
              : t({ hi: 'वैदिक पूजा', en: 'Vedic Puja' })}
          </span>
        </div>

        {/* Duration Badge Bottom Right */}
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5 border border-white/20">
          <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="font-devanagari">{t({ hi: svc.hi?.duration, en: svc.en?.duration })}</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Name - Serif Bold */}
        <h3 className="font-heading font-black text-xl text-[#1F160F] group-hover:text-[#8C3814] transition-colors mb-1.5 leading-snug">
          {pujaName}
        </h3>

        {/* Tagline */}
        <p className="text-xs text-[#8C3814] font-semibold mb-3 font-devanagari flex items-center gap-1">
          <span className="text-gold">✦</span>
          <span>{t({ hi: svc.hi?.tagline, en: svc.en?.tagline })}</span>
        </p>

        {/* Short description */}
        <p className="text-sm text-[#4A3B2C] leading-relaxed font-devanagari mb-5 line-clamp-3 flex-1 font-medium">
          {t({ hi: svc.hi?.shortDesc, en: svc.en?.shortDesc })}
        </p>

        {/* CTAs */}
        <div className="flex gap-2.5 flex-wrap mt-auto pt-2 border-t border-[#F0E6D8]">
          <Link
            to={`/services/${svc.slug}`}
            title={`${pujaName} - संपूर्ण विधि, समय, सामग्री व उज्जैन बुकिंग विवरण`}
            aria-label={`${pujaName} संपूर्ण विधि व विवरण देखें`}
            className="flex-1 text-center justify-center py-2.5 px-3 rounded-xl border border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white font-bold text-xs sm:text-sm font-devanagari transition-all duration-200"
          >
            {lang === 'hi' ? 'संपूर्ण विधि पढ़ें →' : 'View Details →'}
          </Link>
          <a
            href={pujaWaUrl}
            onClick={() => trackWhatsAppClick(`service_card_${svc.slug}`)}
            target="_blank"
            rel="noopener noreferrer"
            title={`WhatsApp पर ${pujaName} की बुकिंग व मुहूर्त परामर्श प्राप्त करें`}
            aria-label={`WhatsApp पर ${pujaName} की बुकिंग करें`}
            className="flex-1 text-center justify-center py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm font-devanagari shadow-sm transition-all duration-200 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>{lang === 'hi' ? 'WhatsApp बुकिंग' : 'Book Puja'}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
