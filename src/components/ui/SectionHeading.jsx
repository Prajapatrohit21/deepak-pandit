// ============================================================
// SectionHeading.jsx — Consistent section headers
// ============================================================
export default function SectionHeading({ badge, heading, subheading, light = false, center = true }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`} data-aos="fade-up">
      {badge && (
        <span className="section-tag mb-3 inline-flex">
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-snug font-devanagari mb-3 break-words ${
          light ? 'text-cream' : 'text-divine-brown'
        }`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-devanagari ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-cream/70' : 'text-divine-muted'}`}
        >
          {subheading}
        </p>
      )}
      <div className="gold-line mt-4" style={{ margin: center ? '1rem auto 0' : '1rem 0 0' }} />
    </div>
  );
}
