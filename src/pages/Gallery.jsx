// ============================================================
// Gallery.jsx — Pandits Of Banaras Luxury Visual Gallery
// ============================================================
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import SEO from '../components/common/SEO';

// Gallery images
import g1  from '../assets/gallery/g1.jpg';
import g2  from '../assets/gallery/g2.jpg';
import g3  from '../assets/gallery/g3.jpg';
import g4  from '../assets/gallery/g4.jpg';
import g5  from '../assets/gallery/g5.jpg';
import g6  from '../assets/gallery/g6.jpg';
import g7  from '../assets/gallery/g7.jpg';
import g8  from '../assets/gallery/g8.jpg';
import g9  from '../assets/gallery/g9.jpg';
import g10 from '../assets/gallery/g10.jpg';
import g11 from '../assets/gallery/g11.jpg';
import g12 from '../assets/gallery/g12.jpg';
import g13 from '../assets/gallery/g13.jpg';

const C = CONTENT;

const GALLERY_ITEMS = [
  { cat: 'puja',   img: g1,  hi: 'महाकालेश्वर मंदिर में रुद्राभिषेक पूजन',        en: 'Rudrabhishek at Mahakaleshwar Temple'      },
  { cat: 'havan',  img: g2,  hi: 'मंगल दोष भात पूजा व हवन अनुष्ठान',            en: 'Mangal Dosh Havan Ritual'                  },
  { cat: 'vip',    img: g3,  hi: 'विशिष्ट यजमानों के साथ वैदिक संकल्प',         en: 'Vedic Sankalp with Special Devotees'       },
  { cat: 'temple', img: g4,  hi: 'श्री मंगलनाथ मंदिर, उज्जैन सिद्ध पीठ',        en: 'Mangalnath Temple, Ujjain'                 },
  { cat: 'puja',   img: g5,  hi: 'कालसर्प दोष निवारण एवं महाकाल अनुष्ठान',       en: 'Kaal Sarp Dosh Puja'                       },
  { cat: 'vip',    img: g6,  hi: 'विशिष्ट संतों व गणमान्य अतिथियों के साथ',     en: "Special Ritual with Devotees"              },
  { cat: 'havan',  img: g7,  hi: 'नवचंडी महायज्ञ एवं पूर्णाहुति',                en: 'Navchandi Mahayagya'                       },
  { cat: 'temple', img: g8,  hi: 'हरसिद्धि शक्तिपीठ दर्शन एवं पूजन',             en: 'Puja at Harsiddhi Temple'                  },
  { cat: 'puja',   img: g9,  hi: 'पितृ दोष त्रिपिंडी श्राद्ध — राम घाट',         en: 'Pitru Dosh Tripindi Shraddha — Ram Ghat'   },
  { cat: 'vip',    img: g10, hi: 'महामृत्युंजय अनुष्ठान एवं विशेष यजमान',       en: 'Mahamrityunjay with Special Devotees'      },
  { cat: 'havan',  img: g11, hi: 'शतचंडी महायज्ञ अनुष्ठान',                     en: 'Shatchandi Mahayagya Ritual'               },
  { cat: 'temple', img: g12, hi: 'राम घाट एवं सिद्धवट पर पितृ तर्पण',            en: 'Pitru Tarpan at Ram Ghat'                  },
  { cat: 'vip',    img: g13, hi: 'विशिष्ट अतिथियों के साथ महाकाल पूजन',         en: 'Special Puja at Mahakal Temple'            },
];

export default function Gallery() {
  const { t, lang } = useLanguage();
  const gl = C.gallery;
  const [activeTab, setActiveTab] = useState('all');
  const [activeModalImg, setActiveModalImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const galleryTitle = lang === 'hi'
    ? 'मंगल दोष पूजा फोटो गैलरी | उज्जैन वैदिक अनुष्ठान | पंडित दीपक पंड्या'
    : 'Mangal Dosh Puja Photos Gallery | Ujjain Vedic Rituals | Pandit Deepak Pandya';

  const galleryDesc = lang === 'hi'
    ? 'उज्जैन मंगलनाथ मंदिर में मंगल दोष पूजा, मंगल दोष निवारण पूजा, कालसर्प दोष निवारण और हवन की असली तस्वीरें। पंडित दीपक पंड्या के साथ प्रामाणिक वैदिक अनुष्ठान।'
    : 'Real photos of Mangal Dosh Puja, Mangal Dosh Nivaran Pooja, Kaal Sarp Dosh rituals and Havans at Mangalnath Temple Ujjain by Pandit Deepak Pandya.';

  const tabs = [
    { key: 'all', label: gl.tabs.all },
    { key: 'puja', label: gl.tabs.puja },
    { key: 'havan', label: gl.tabs.havan },
    { key: 'vip', label: gl.tabs.vip },
    { key: 'temple', label: gl.tabs.temple },
  ];

  const filtered = activeTab === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.cat === activeTab);

  return (
    <main className="pt-20 bg-[#FAF7F2] text-[#2D1B00]">
      <SEO
        title={galleryTitle}
        description={galleryDesc}
        canonical="https://mangaldoshpujanivaran.in/gallery"
      />
      
      {/* ── Page Header ── */}
      <section
        className="py-16 sm:py-24 text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] border-b border-[#E8DCC8]"
        aria-labelledby="gallery-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,_rgba(139,26,26,0.06)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gold/60 bg-[#FFF7E6] text-[#8C3814] text-xs font-bold font-sans uppercase tracking-wider mb-4 shadow-xs">
            <span className="text-gold">✦</span>
            <span>{t({ hi: 'उज्जैन सिद्ध पीठ फोटो एवं अनुष्ठान गैलरी', en: 'Ujjain Siddha Peeth Visual Gallery' })}</span>
            <span className="text-gold">✦</span>
          </span>

          <h1 id="gallery-heading" className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F160F] leading-tight mb-4">
            {t(gl.heading)}
          </h1>

          <p className="text-[#5C4D3E] font-devanagari text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {t(gl.subheading)}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent rounded-full mx-auto mt-6" />
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="py-8 bg-white border-b border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-devanagari transition-all duration-200 cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-[#1C0A00] text-gold shadow-md border border-gold/40'
                    : 'bg-[#FAF7F2] text-[#5C4D3E] hover:bg-[#F0E6D8] border border-[#E8DCC8]'
                }`}
              >
                {t(tab.label)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Grid ── */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 60}
                className="bg-white rounded-3xl border-2 border-[#E8DCC8] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setActiveModalImg(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={item.img}
                    alt={`${t({ hi: item.hi, en: item.en })} - पंडित दीपक पंड्या उज्जैन`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="bg-[#F5C842] text-[#1C0A00] font-bold text-[10px] uppercase px-2.5 py-0.5 rounded self-start mb-2 tracking-wider">
                      {tabs.find((tab) => tab.key === item.cat)?.label
                        ? t(tabs.find((tab) => tab.key === item.cat).label)
                        : 'वैदिक अनुष्ठान'}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-cream line-clamp-2">
                      {t({ hi: item.hi, en: item.en })}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalImg(null)}
        >
          <div
            className="max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImg(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center font-bold text-lg hover:bg-black cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={activeModalImg.img}
              alt={`${t({ hi: activeModalImg.hi, en: activeModalImg.en })} - पंडित दीपक पंड्या उज्जैन`}
              className="max-h-[75vh] w-auto mx-auto object-contain"
            />
            <div className="p-4 bg-white text-center">
              <p className="font-heading font-bold text-base text-[#1F160F]">
                {t({ hi: activeModalImg.hi, en: activeModalImg.en })}
              </p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
