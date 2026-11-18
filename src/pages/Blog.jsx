// ============================================================
// Blog.jsx + BlogDetail.jsx — Pandits Of Banaras Luxury Vedic Articles
// ============================================================
import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { BLOG_ARTICLES } from '../data/blog';
import { WA_HREF, PHONE_HREF } from '../utils/whatsapp';
import { trackWhatsAppClick, trackPhoneCall } from '../utils/analytics';
import SEO from '../components/common/SEO';
import panditImg from '../assets/pandit_deepak_pandya.jpg';

const C = CONTENT;

// ─── Blog Listing ──────────────────────────────────────────
export function Blog() {
  const { t, lang } = useLanguage();
  const bl = C.blog;

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const blogTitle = lang === 'hi'
    ? 'मांगलिक दोष क्या होता है | मंगल दोष उपाय | वैदिक ज्ञान ब्लॉग उज्जैन'
    : 'Manglik Dosh Kya Hota Hai | Mangal Dosh Remedies | Vedic Blog Ujjain';

  const blogDesc = lang === 'hi'
    ? 'पंडित दीपक पंड्या द्वारा — मांगलिक दोष क्या होता है, मांगलिक दोष कब खत्म होता है, मंगल दोष निवारण के उपाय, कालसर्प दोष, उज्जैन पूजा विधि पर विस्तृत वैदिक आलेख।'
    : 'Expert Vedic articles by Pandit Deepak Pandya: What is Manglik Dosh, Mangal Dosh Nivaran remedies, Kaal Sarp Dosh, Ujjain puja vidhi and muhurat guidance.';

  return (
    <main className="pt-20 bg-[#FAF7F2] text-[#2D1B00]">
      <SEO
        title={blogTitle}
        description={blogDesc}
        canonical="https://mangaldoshpujanivaran.in/blog"
      />
      {/* ── Page Header ── */}
      <section
        className="py-16 sm:py-24 text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] border-b border-[#E8DCC8]"
        aria-labelledby="blog-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,_rgba(139,26,26,0.06)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gold/60 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold font-sans uppercase tracking-wider mb-4 shadow-xs">
            <span className="text-gold">✦</span>
            <span>{t({ hi: 'वैदिक ज्ञान एवं धार्मिक आलेख • उज्जैन', en: 'Vedic Knowledge & Religious Insights • Ujjain' })}</span>
            <span className="text-gold">✦</span>
          </span>

          <h1 id="blog-heading" className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F160F] leading-tight mb-4">
            {t(bl.heading)}
          </h1>

          <p className="text-[#5C4D3E] font-devanagari text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {t(bl.subheading)}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full mx-auto mt-6" />
        </div>
      </section>

      {/* ── Articles List ── */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-8">
            {BLOG_ARTICLES.map((article, i) => (
              <article
                key={article.id}
                className="bg-white rounded-3xl border-2 border-[#E8DCC8] shadow-[0_4px_20px_rgba(45,27,0,0.05)] hover:shadow-[0_12px_36px_rgba(45,27,0,0.1)] transition-all duration-300 p-6 sm:p-9"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="flex items-center gap-3 mb-4 flex-wrap text-xs">
                  <span className="bg-[#FFF7E6] text-[#8C3814] border border-gold/40 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {t(article.category)}
                  </span>
                  <span className="text-[#6B4C1E] font-devanagari">
                    📅 {new Date(article.date).toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="text-[#6B4C1E] font-devanagari">
                    ⏱ {article.readTime} min read
                  </span>
                </div>

                <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#1F160F] hover:text-[#8C3814] transition-colors mb-3 leading-snug">
                  <Link
                    to={`/blog/${article.slug}`}
                    title={`${t({ hi: article.hi.title, en: article.en.title })} - पंडित दीपक पंड्या उज्जैन`}
                    aria-label={`Read article: ${t({ hi: article.hi.title, en: article.en.title })}`}
                  >
                    {t({ hi: article.hi.title, en: article.en.title })}
                  </Link>
                </h2>

                <p className="text-[#4A3B2C] font-devanagari text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {t({ hi: article.hi.excerpt, en: article.en.excerpt })}
                </p>

                <Link
                  to={`/blog/${article.slug}`}
                  title={`${t({ hi: article.hi.title, en: article.en.title })} — पूरा आलेख पढ़ें`}
                  aria-label={`Read full article: ${t({ hi: article.hi.title, en: article.en.title })}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white font-bold text-sm font-devanagari transition-all duration-200"
                >
                  <span>{lang === 'hi' ? 'पूरा आलेख पढ़ें' : 'Read Full Article'}</span>
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Blog Detail ──────────────────────────────────────────
export function BlogDetail() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();

  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) return <Navigate to="/blog" replace />;

  const content = lang === 'hi' ? article.hi : article.en;

  return (
    <main className="pt-20 bg-[#FAF7F2] text-[#2D1B00]">
      <SEO
        title={`${content.title} | पंडित दीपक पंड्या उज्जैन`}
        description={content.excerpt}
        canonical={`https://mangaldoshpujanivaran.in/blog/${article.slug}`}
      />
      {/* ── Page Header ── */}
      <section
        className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] border-b border-[#E8DCC8]"
        aria-labelledby="blog-article-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4 flex-wrap text-xs">
            <span className="bg-[#FFF7E6] text-[#8C3814] border border-gold/40 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {t(article.category)}
            </span>
            <span className="text-[#6B4C1E] font-devanagari">
              📅 {new Date(article.date).toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="text-[#6B4C1E] font-devanagari">
              ⏱ {article.readTime} min read
            </span>
          </div>

          <h1 id="blog-article-heading" className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-[#1F160F] leading-tight mb-4">
            {content.title}
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full" />
        </div>
      </section>

      {/* ── Article Content ── */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main content */}
            <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#E8DCC8] shadow-sm">
              <div className="prose prose-lg max-w-none font-devanagari text-[#4A3B2C] leading-relaxed">
                {content.content.trim().split('\n\n').map((para, i) => {
                  const trimmed = para.trim();
                  if (trimmed.startsWith('## ')) return <h2 key={i} className="font-heading font-black text-2xl sm:text-3xl text-[#1F160F] mt-8 mb-4 border-b border-[#F0E6D8] pb-2">{trimmed.replace('## ', '')}</h2>;
                  if (trimmed.startsWith('### ')) return <h3 key={i} className="font-heading font-bold text-xl text-[#8C3814] mt-6 mb-3">{trimmed.replace('### ', '')}</h3>;
                  if (trimmed.startsWith('**') && trimmed.endsWith('**')) return <p key={i} className="font-bold text-[#1F160F] font-devanagari mb-3 text-base">{trimmed.replace(/\*\*/g, '')}</p>;
                  if (trimmed.startsWith('- ')) {
                    const items = trimmed.split('\n').filter(l => l.startsWith('- '));
                    return <ul key={i} className="list-none mb-4 space-y-2">{items.map((item, j) => <li key={j} className="flex items-start gap-2.5 font-devanagari text-sm sm:text-base"><span className="text-[#D97706] mt-0.5">✦</span><span>{item.replace('- ', '')}</span></li>)}</ul>;
                  }
                  if (trimmed.match(/^\d\./)) {
                    const items = trimmed.split('\n').filter(l => l.match(/^\d\./));
                    return <ol key={i} className="mb-4 space-y-2 pl-4">{items.map((item, j) => <li key={j} className="font-devanagari text-[#4A3B2C] text-sm sm:text-base list-decimal">{item.replace(/^\d\.\s*/, '')}</li>)}</ol>;
                  }
                  if (trimmed) return <p key={i} className="mb-4 font-devanagari text-[#4A3B2C] leading-relaxed text-sm sm:text-base font-medium">{trimmed}</p>;
                  return null;
                })}
              </div>

              {/* Consultation CTA inside article */}
              <div className="mt-10 p-6 rounded-2xl bg-[#FFFDF9] border border-gold/40 text-center">
                <h4 className="font-heading font-bold text-lg text-[#1F160F] mb-2">
                  क्या आप उज्जैन में पूजा अनुष्ठान कराना चाहते हैं?
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4D3E] font-devanagari mb-4">
                  पंडित दीपक पंड्या जी से शुभ मुहूर्त व पूजन विधि की निःशुल्क जानकारी प्राप्त करें।
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={PHONE_HREF}
                    onClick={() => trackPhoneCall('blog_detail_cta')}
                    title="पंडित दीपक पंड्या जी को कॉल करें: +91 62634 01651"
                    aria-label="Call Pandit Deepak Pandya for puja consultation"
                    className="bg-[#1C0A00] text-gold hover:text-white px-5 py-2.5 rounded-xl font-bold text-xs font-devanagari transition-all"
                  >
                    📞 कॉल करें
                  </a>
                  <a
                    href={WA_HREF}
                    onClick={() => trackWhatsAppClick('blog_detail_cta')}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp पर पूजा परामर्श एवं बुकिंग करें"
                    aria-label="Contact on WhatsApp for Vedic puja consultation"
                    className="bg-[#25D366] text-white hover:bg-[#1EBE5D] px-5 py-2.5 rounded-xl font-bold text-xs font-devanagari transition-all"
                  >
                    💬 WhatsApp पर बात करें
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 border-2 border-[#E8DCC8] shadow-sm text-center">
                <img
                  src={panditImg}
                  alt="वैदिक पुरोहित पंडित दीपक पंड्या - उज्जैन सिद्ध पीठ"
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-[#D97706]"
                />
                <h4 className="font-heading font-bold text-base text-[#1F160F]">पंडित दीपक पंड्या</h4>
                <p className="text-xs text-[#8C3814] font-medium font-devanagari mb-4">15+ वर्ष वैदिक अनुभव • उज्जैन सिद्ध पीठ</p>
                <a
                  href={WA_HREF}
                  onClick={() => trackWhatsAppClick('blog_sidebar')}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="पंडित दीपक पंड्या जी से WhatsApp पर परामर्श लें"
                  aria-label="Contact Pandit Deepak Pandya on WhatsApp"
                  className="w-full py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs font-devanagari block text-center"
                >
                  WhatsApp पर संपर्क करें
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
