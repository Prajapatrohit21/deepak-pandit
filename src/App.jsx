// ============================================================
// App.jsx — Root app with routing
// ============================================================
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';
import Preloader from './components/layout/Preloader';

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

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
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
