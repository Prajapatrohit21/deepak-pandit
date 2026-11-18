// ============================================================
// App.jsx — Root app with routing
// ============================================================
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';
import Preloader from './components/layout/Preloader';
import { trackPageView } from './utils/analytics';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import KundliAnalysis from './pages/KundliAnalysis';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import { Blog, BlogDetail } from './pages/Blog';
import { TermsConditions, PrivacyPolicy, Disclaimer } from './pages/Legal';
import MangalnathMandirGuide from './pages/MangalnathMandirGuide';
import OutstationBookingGuide from './pages/OutstationBookingGuide';

const ROUTE_TITLES = {
  '/': {
    hi: 'मंगल दोष पूजा उज्जैन | मंगल दोष निवारण पूजा | पंडित दीपक पंड्या',
    en: 'Mangal Dosh Puja Ujjain | Mangal Dosh Nivaran Pooja | Pandit Deepak Pandya',
  },
  '/about': {
    hi: 'पंडित दीपक पंड्या उज्जैन | मंगल दोष पूजा पंडित | 15+ वर्ष अनुभव',
    en: 'Pandit Deepak Pandya Ujjain | Mangal Dosh Puja Pandit | 15+ Years',
  },
  '/services': {
    hi: 'मंगल दोष पूजा उज्जैन | मंगल दोष निवारण पूजा, कालसर्प, रुद्राभिषेक',
    en: 'Mangal Dosh Puja Ujjain | Mangal Dosh Nivaran Pooja & Vedic Services',
  },
  '/kundli-analysis': {
    hi: 'मुफ्त कुंडली विश्लेषण | मांगलिक दोष क्या होता है | उज्जैन',
    en: 'Free Kundali Analysis | Manglik Dosh Kya Hota Hai | Ujjain',
  },
  '/gallery': {
    hi: 'मंगल दोष पूजा फोटो गैलरी | उज्जैन वैदिक अनुष्ठान | पंडित दीपक पंड्या',
    en: 'Mangal Dosh Puja Photos Gallery | Ujjain Vedic Rituals | Pandit Deepak Pandya',
  },
  '/testimonials': {
    hi: 'मंगल दोष पूजा उज्जैन समीक्षाएं | पंडित दीपक पंड्या 56+ Google Ratings',
    en: 'Mangal Dosh Puja Ujjain Reviews | Pandit Deepak Pandya 56+ Ratings',
  },
  '/booking': {
    hi: 'मंगल दोष पूजा बुकिंग उज्जैन | दक्षिणा, विधि व मुहूर्त जानकारी',
    en: 'Mangal Dosh Puja Ujjain Cost & Booking | Vidhi, Muhurat Info',
  },
  '/contact': {
    hi: 'संपर्क करें | पंडित दीपक पंड्या उज्जैन | मंगल दोष पूजा बुकिंग 6263401651',
    en: 'Contact Pandit Deepak Pandya Ujjain | Mangal Dosh Puja Booking',
  },
  '/blog': {
    hi: 'मांगलिक दोष क्या होता है | मंगल दोष उपाय | वैदिक ज्ञान ब्लॉग उज्जैन',
    en: 'Manglik Dosh Kya Hota Hai | Mangal Dosh Remedies | Vedic Blog Ujjain',
  },
  '/terms-conditions': {
    hi: 'नियम एवं शर्तें | Terms & Conditions',
    en: 'Terms & Conditions',
  },
  '/privacy-policy': {
    hi: 'गोपनीयता नीति | Privacy Policy',
    en: 'Privacy Policy',
  },
  '/disclaimer': {
    hi: 'अस्वीकरण | Disclaimer',
    en: 'Disclaimer',
  },
  '/mangalnath-mandir-ujjain': {
    hi: 'मंगलनाथ मंदिर उज्जैन — मंगल दोष पूजा स्थल | समय, मार्ग व दर्शन गाइड',
    en: 'Mangalnath Temple Ujjain — Mangal Dosh Puja Location | Timings & Guide',
  },
  '/bahar-ke-shahar-puja-booking': {
    hi: 'बाहर के शहरों से मंगल दोष पूजा बुकिंग | ऑनलाइन संकल्प उज्जैन',
    en: 'Outstation Mangal Dosh Puja Booking Ujjain | Online Sankalp',
  },
};

// Scroll to top on route change, update document title, and record page_view in GA4
function ScrollToTop() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);

    let pageTitle = ROUTE_TITLES[pathname] ? ROUTE_TITLES[pathname][lang] || ROUTE_TITLES[pathname].hi : null;
    if (!pageTitle) {
      if (pathname.startsWith('/services/')) {
        pageTitle = lang === 'hi' ? 'पूजा विवरण | मंगल दोष पूजा उज्जैन — पंडित दीपक पंड्या' : 'Puja Details | Mangal Dosh Puja Ujjain — Pandit Deepak Pandya';
      } else if (pathname.startsWith('/blog/')) {
        pageTitle = lang === 'hi' ? 'वैदिक आलेख | मांगलिक दोष, मंगल दोष उपाय | उज्जैन' : 'Vedic Article | Manglik Dosh, Mangal Dosh Remedies | Ujjain';
      } else {
        pageTitle = lang === 'hi' ? 'मंगल दोष पूजा | उज्जैन — पंडित दीपक पंड्या' : 'Mangal Dosh Puja Ujjain | Pandit Deepak Pandya';
      }
    }

    if (typeof document !== 'undefined') {
      document.title = pageTitle;
    }

    trackPageView(pathname, pageTitle);
  }, [pathname, lang]);

  return null;
}

// Page wrapper with fade-in animation
function PageWrapper({ children }) {
  return (
    <div style={{ animation: 'fadeIn 0.4s ease forwards' }}>
      {children}
    </div>
  );
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen bg-cream w-full" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <Preloader />
      <Navbar />

      <div className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/services/:slug" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
          <Route path="/kundli-analysis" element={<PageWrapper><KundliAnalysis /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
          <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
          <Route path="/booking" element={<PageWrapper><Booking /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/blog/:slug" element={<PageWrapper><BlogDetail /></PageWrapper>} />
          <Route path="/terms-conditions" element={<PageWrapper><TermsConditions /></PageWrapper>} />
          <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
          <Route path="/disclaimer" element={<PageWrapper><Disclaimer /></PageWrapper>} />
          <Route path="/mangalnath-mandir-ujjain" element={<PageWrapper><MangalnathMandirGuide /></PageWrapper>} />
          <Route path="/bahar-ke-shahar-puja-booking" element={<PageWrapper><OutstationBookingGuide /></PageWrapper>} />
          {/* 404 fallback */}
          <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
        </Routes>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}

export default App;
