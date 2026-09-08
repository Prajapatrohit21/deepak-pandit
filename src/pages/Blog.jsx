// ============================================================
// Blog.jsx + BlogDetail.jsx — Blog listing and article pages
// ============================================================
import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import { BLOG_ARTICLES } from '../data/blog';
import SectionHeading from '../components/ui/SectionHeading';

const C = CONTENT;

// ─── Blog Listing ──────────────────────────────────────────
export function Blog() {
  const { t } = useLanguage();
  const bl = C.blog;

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      {/* Header */}
      <section
        className="py-14 sm:py-20 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #2D1500)' }}
        aria-labelledby="blog-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="section-tag text-gold/80 mb-4 inline-flex">✍️ {t(bl.badge)}</span>
          <h1 id="blog-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream font-devanagari mb-4">
            {t(bl.heading)}
          </h1>
          <p className="text-cream/70 font-devanagari text-sm sm:text-base">{t(bl.subheading)}</p>
          <div className="gold-line mt-4" />
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-8">
            {BLOG_ARTICLES.map((article, i) => {
              const content = article;
              return (
                <article
                  key={article.id}
                  className="blog-card bg-cream-light"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="p-4 sm:p-8">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="badge badge-gold">{t(article.category)}</span>
                      <span className="text-xs text-divine-muted font-devanagari">
                        📅 {new Date(article.date).toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="text-xs text-divine-muted font-devanagari">
                        ⏱ {article.readTime} {t(bl.minRead)}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-divine-brown font-devanagari mb-3 leading-snug hover:text-saffron transition-colors">
                      <Link to={`/blog/${article.slug}`}>
                        {t({ hi: article.hi.title, en: article.en.title })}
                      </Link>
                    </h2>
                    <p className="text-divine-muted font-devanagari leading-relaxed mb-4">
                      {t({ hi: article.hi.excerpt, en: article.en.excerpt })}
                    </p>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="btn-secondary text-sm py-2 px-5 font-devanagari"
                    >
                      {t(bl.readMore)} →
                    </Link>
                  </div>
                </article>
              );
            })}
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
    <main className="pt-20">
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.hi.title,
            description: article.hi.metaDescription,
            author: { '@type': 'Person', name: 'वैदिक पंडित दीपक पंड्या' },
            publisher: { '@type': 'Organization', name: 'महादेव अनुष्ठान केंद्र' },
            datePublished: article.date,
          }),
        }}
      />

      {/* Header */}
      <section
        className="py-14 sm:py-24 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #2D1500)' }}
        aria-labelledby="blog-article-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="badge badge-gold">{t(article.category)}</span>
            <span className="text-cream/60 text-xs font-devanagari">
              📅 {new Date(article.date).toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="text-cream/60 text-xs font-devanagari">⏱ {article.readTime} min</span>
          </div>
          <h1 id="blog-article-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream font-devanagari leading-snug mb-3">
            {content.title}
          </h1>
          <div className="gold-line" style={{ margin: '1rem 0 0' }} />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <article className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none font-devanagari text-divine-muted leading-relaxed"
                style={{
                  '--tw-prose-headings': '#2D1B00',
                  '--tw-prose-bold': '#2D1B00',
                }}
              >
                {content.content.trim().split('\n\n').map((para, i) => {
                  const trimmed = para.trim();
                  if (trimmed.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-divine-brown font-devanagari mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
                  if (trimmed.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-divine-brown font-devanagari mt-6 mb-3">{trimmed.replace('### ', '')}</h3>;
                  if (trimmed.startsWith('**') && trimmed.endsWith('**')) return <p key={i} className="font-bold text-divine-brown font-devanagari mb-3">{trimmed.replace(/\*\*/g, '')}</p>;
                  if (trimmed.startsWith('- ')) {
                    const items = trimmed.split('\n').filter(l => l.startsWith('- '));
                    return <ul key={i} className="list-none mb-4">{items.map((item, j) => <li key={j} className="flex items-start gap-2 mb-2 font-devanagari"><span className="text-gold mt-1">✦</span><span>{item.replace('- ', '')}</span></li>)}</ul>;
                  }
                  if (trimmed.match(/^\d\./)) {
                    const items = trimmed.split('\n').filter(l => l.match(/^\d\./));
                    return <ol key={i} className="mb-4">{items.map((item, j) => <li key={j} className="mb-2 font-devanagari text-divine-muted">{item}</li>)}</ol>;
                  }
                  if (trimmed) return <p key={i} className="mb-4 font-devanagari text-divine-muted leading-relaxed">{trimmed}</p>;
                  return null;
                })}
              </div>

              {/* CTA at bottom of article */}
              <div
                className="mt-10 rounded-2xl p-6 text-center text-white"
                style={{ background: 'linear-gradient(135deg, #8B1A1A, #C8860A)' }}
              >
                <p className="font-bold text-lg font-devanagari mb-2">
                  {t({ hi: 'पूजन बुक करवाएं — पंडित दीपक पंड्या जी से', en: 'Book Puja — With Pandit Deepak Pandya Ji' })}
                </p>
                <p className="text-cream/80 text-sm font-devanagari mb-4">
                  {t({ hi: 'उज्जैन में वैदिक विधि से पूजन', en: 'Vedic puja in Ujjain' })}
                </p>
                <a href="https://wa.me/916263401651" target="_blank" rel="noopener noreferrer" className="btn-gold font-devanagari">
                  💬 WhatsApp: 6263401651
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 flex flex-col gap-5">
                <div className="gradient-border rounded-2xl p-5">
                  <p className="font-bold text-divine-brown font-devanagari mb-3 text-sm">
                    {t({ hi: 'अन्य लेख', en: 'Other Articles' })}
                  </p>
                  {BLOG_ARTICLES.filter((a) => a.slug !== slug).map((a) => (
                    <Link key={a.id} to={`/blog/${a.slug}`} className="block mb-3 text-sm text-divine-muted hover:text-saffron transition-colors font-devanagari">
                      <span className="text-saffron">›</span> {lang === 'hi' ? a.hi.title : a.en.title}
                    </Link>
                  ))}
                </div>
                <div className="bg-cream-dark rounded-2xl p-5 text-center">
                  <p className="font-bold text-divine-brown font-devanagari mb-3 text-sm">
                    {t({ hi: 'पूजन बुक करें', en: 'Book Puja' })}
                  </p>
                  <a href="https://wa.me/916263401651" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 justify-center w-full font-devanagari">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
