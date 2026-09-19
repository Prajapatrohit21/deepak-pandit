// ============================================================
// App.jsx — Root app with routing
// ============================================================
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// Route titles mapping for both Hindi and English
const ROUTE_TITLES = {
  '/': {
    hi: 'मंगल दोष पूजन केंद्र | उज्जैन | वैदिक पंडित दीपक पंड्या',
    en: 'Mangal Dosh Puja Kendra | Ujjain | Pandit Deepak Pandya',
  },
  '/about': {
    hi: 'परिचय — पंडित दीपक पंड्या | वैदिक पुरोहित उज्जैन सिद्ध पीठ',
    en: 'About Pandit Deepak Pandya | Vedic Priest Ujjain',
  },
  '/services': {
    hi: 'वैदिक पूजा अनुष्ठान सेवाएं | मंगल दोष, कालसर्प | उज्जैन',
    en: 'Vedic Puja & Ritual Services | Ujjain',
  },
  '/kundli-analysis': {
    hi: 'निःशुल्क जन्म कुंडली विश्लेषण | वैदिक पंडित दीपक पंड्या',
    en: 'Free Kundali Analysis | Pandit Deepak Pandya',
  },
  '/gallery': {
    hi: 'पूजन एवं सिद्ध पीठ फोटो व वीडियो गैलरी | उज्जैन',
    en: 'Puja Photos & Video Gallery | Ujjain',
  },
  '/testimonials': {
    hi: 'भक्तों के अनुभव एवं समीक्षाएं | उज्जैन अनुष्ठान केंद्र',
    en: 'Devotee Reviews & Testimonials | Ujjain',
  },
  '/booking': {
    hi: 'ऑनलाइन पूजन संकल्प एवं बुकिंग | उज्जैन',
    en: 'Online Puja Booking & Sankalp | Ujjain',
  },
  '/contact': {
    hi: 'संपर्क करें | महाकाल की नगरी, उज्जैन | 6263401651',
    en: 'Contact Us | Near Mahakaleshwar Temple, Ujjain',
  },
  '/blog': {
    hi: 'धार्मिक आलेख एवं वैदिक ज्ञान ब्लॉग | उज्जैन',
    en: 'Vedic Blog & Religious Articles | Ujjain',
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
    hi: 'मंगलनाथ मंदिर उज्जैन कैसे पहुंचे | समय, मार्ग व दर्शन गाइड',
    en: 'How to Reach Mangalnath Temple Ujjain | Guide',
  },
  '/bahar-ke-shahar-puja-booking': {
    hi: 'बाहर के शहरों से पूजा बुकिंग | ऑनलाइन संकल्प उज्जैन',
    en: 'Outstation Puja Booking & Online Sankalp | Ujjain',
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
        pageTitle = lang === 'hi' ? 'पूजा विवरण | मंगल दोष पूजन केंद्र उज्जैन' : 'Puja Details | Mangal Dosh Puja Kendra Ujjain';
      } else if (pathname.startsWith('/blog/')) {
        pageTitle = lang === 'hi' ? 'वैदिक आलेख | मंगल दोष पूजन केंद्र उज्जैन' : 'Vedic Article | Mangal Dosh Puja Kendra Ujjain';
      } else {
        pageTitle = lang === 'hi' ? 'मंगल दोष पूजन केंद्र | उज्जैन' : 'Mangal Dosh Puja Kendra | Ujjain';
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

document.addEventListener('copy', function (event) {
  event.clipboardData.setData('text/plain', '🤡');
  event.preventDefault()
});

export default App;
