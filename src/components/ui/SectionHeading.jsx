// ============================================================
// SectionHeading.jsx — Pandits Of Banaras Luxury Vedic Header
// ============================================================
export default function SectionHeading({ badge, heading, subheading, light = false, center = true }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`} data-aos="fade-up">
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gold/60 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold font-sans uppercase tracking-wider mb-3 shadow-xs">
          <span className="text-gold">✦</span>
          <span>{badge}</span>
          <span className="text-gold">✦</span>
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-heading leading-tight mb-3 break-words ${
          light ? 'text-cream' : 'text-[#1F160F]'
        }`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-devanagari font-medium ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-cream/80' : 'text-[#5C4D3E]'}`}
        >
          {subheading}
        </p>
      )}
      <div
        className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full mt-4"
        style={{ margin: center ? '1rem auto 0' : '1rem 0 0' }}
      />
    </div>
  );
}
