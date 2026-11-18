import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://mangaldoshpujanivaran.in/og-image.jpg',
  ogType = 'website',
  schema = null,
}) {
  const { lang } = useLanguage();

  const siteTitle = lang === 'hi' 
    ? 'मंगल दोष पूजा उज्जैन | वैदिक पंडित दीपक पंड्या' 
    : 'Mangal Dosh Puja Nivaran | Pandit Deepak Pandya Ujjain';

  // Ensure title is trimmed appropriately if combined
  const fullTitle = title ? `${title}` : siteTitle;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://mangaldoshpujanivaran.in/');

  return (
    <Helmet>
      <html lang={lang === 'hi' ? 'hi' : 'en'} />
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === 'hi' ? 'hi_IN' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data — supports single object or array of schemas */}
      {schema && (Array.isArray(schema) ? schema : [schema]).map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
