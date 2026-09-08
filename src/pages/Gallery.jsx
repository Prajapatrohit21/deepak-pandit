// ============================================================
// Gallery.jsx — Photo gallery with category tabs
// ============================================================
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';

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

// Gallery items with real photos
const GALLERY_ITEMS = [
  { cat: 'puja',   img: g1,  hi: 'महाकालेश्वर मंदिर में रुद्राभिषेक',        en: 'Rudrabhishek at Mahakaleshwar Temple'      },
  { cat: 'havan',  img: g2,  hi: 'मंगल दोष हवन अनुष्ठान',                    en: 'Mangal Dosh Havan Ritual'                  },
  { cat: 'vip',    img: g3,  hi: 'विधायक जी के साथ पूजन',                    en: 'Puja with MLA Ji'                          },
  { cat: 'temple', img: g4,  hi: 'मंगलनाथ मंदिर, उज्जैन',                   en: 'Mangalnath Temple, Ujjain'                 },
  { cat: 'puja',   img: g5,  hi: 'कालसर्प दोष पूजन',                         en: 'Kaal Sarp Dosh Puja'                       },
  { cat: 'vip',    img: g6,  hi: 'मंत्री जी के आवास पर अनुष्ठान',           en: "Ritual at Minister's Residence"            },
  { cat: 'havan',  img: g7,  hi: 'नवचंडी हवन — 2 दिन का अनुष्ठान',          en: 'Navchandi Havan — 2 Day Ritual'            },
  { cat: 'temple', img: g8,  hi: 'हरसिद्धि मंदिर में विशेष पूजन',           en: 'Special Puja at Harsiddhi Temple'          },
  { cat: 'puja',   img: g9,  hi: 'पितृ दोष त्रिपिंडी श्राद्ध — राम घाट',   en: 'Pitru Dosh Tripindi Shraddha — Ram Ghat'   },
  { cat: 'vip',    img: g10, hi: 'सांसद जी के साथ महामृत्युंजय',            en: 'Mahamrityunjay with MP Ji'                 },
  { cat: 'havan',  img: g11, hi: 'शतचंडी महायज्ञ — 7 दिन',                  en: 'Shatchandi Mahayagya — 7 Days'             },
  { cat: 'temple', img: g12, hi: 'राम घाट पर पितृ तर्पण',                   en: 'Pitru Tarpan at Ram Ghat'                  },
  { cat: 'vip',    img: g13, hi: 'मध्यप्रदेश मुख्यमंत्री जी के साथ — विशेष पूजन', en: 'Special Puja with CM of Madhya Pradesh'    },
];

export default function Gallery() {
  const { t } = useLanguage();
  const gl = C.gallery;
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    { key: 'all', label: gl.tabs.all },
    { key: 'puja', label: gl.tabs.puja },
    { key: 'havan', label: gl.tabs.havan },
    { key: 'vip', label: gl.tabs.vip },
    { key: 'temple', label: gl.tabs.temple },
  ];

  const filtered = activeTab === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.cat === activeTab);

  return (
    <main className="pt-20">
      {/* Header */}
      <section
        className="py-14 sm:py-20 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #2D1500)' }}
        aria-labelledby="gallery-heading"
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="section-tag text-gold/80 mb-4 inline-flex">📸 {t(gl.badge)}</span>
          <h1 id="gallery-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream font-devanagari mb-4">
            {t(gl.heading)}
          </h1>
          <p className="text-cream/70 font-devanagari text-sm sm:text-base">{t(gl.subheading)}</p>
          <div className="gold-line mt-4" />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Tab Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 px-2" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 font-devanagari whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-primary to-saffron text-white shadow-divine'
                    : 'bg-cream-dark text-divine-muted hover:bg-saffron/10 hover:text-saffron'
                }`}
              >
                {t(tab.label)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="gallery-item relative aspect-square overflow-hidden border border-saffron/10 group"
                data-aos="fade-up"
                data-aos-delay={i * 50}
                role="figure"
              >
                <img
                  src={item.img}
                  alt={item.hi}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-devanagari leading-snug">{t(item)}</p>
                </div>
              </div>
            ))}
          </div>



        </div>
      </section>
    </main>
  );
}
