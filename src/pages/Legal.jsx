// ============================================================
// Legal.jsx — Terms, Privacy Policy, Disclaimer pages
// ============================================================
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';

function LegalPage({ titleHi, titleEn, children }) {
  const { lang } = useLanguage();
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <section
        className="py-16 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0A00, #2D1500)' }}
      >
        <div className="absolute inset-0 bg-mandala opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-cream font-devanagari">
            {lang === 'hi' ? titleHi : titleEn}
          </h1>
          <div className="gold-line mt-4" />
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="gradient-border rounded-2xl p-8 bg-cream-light shadow-card prose max-w-none">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Terms & Conditions ────────────────────────────────────
export function TermsConditions() {
  const { lang } = useLanguage();

  if (lang === 'en') return (
    <LegalPage titleHi="नियम एवं शर्तें" titleEn="Terms & Conditions">
      <p className="text-divine-muted text-sm mb-6">Last updated: November 2024</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">1. Acceptance of Terms</h2>
      <p className="text-divine-muted leading-relaxed mb-4">By accessing and using the services of Mahadev Anushthan Kendra ("we", "us", "Pandit Ji"), you accept and agree to be bound by the terms and provisions of this agreement.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">2. Services Offered</h2>
      <p className="text-divine-muted leading-relaxed mb-4">We offer faith-based Vedic religious services including Mangal Dosh Puja, Kaal Sarp Dosh Nivaran, Pitru Dosh Shraddha, Navgrah Shanti, Mahamrityunjay Anushthan, Rudrabhishek, Vastu Shanti Puja, Navchandi/Shatchandi Anushthan, and Kundali Analysis. All services are performed by Vaidik Pandit Deepak Pandya as per authentic Vedic traditions.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">3. Booking & Confirmation</h2>
      <p className="text-divine-muted leading-relaxed mb-4">Bookings are confirmed via WhatsApp communication. The booking is considered confirmed only after verbal/written confirmation from Pandit Ji. We reserve the right to reschedule or cancel services in case of unavoidable circumstances, with prior notice.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">4. Cancellation & Refund Policy</h2>
      <p className="text-divine-muted leading-relaxed mb-4">Cancellation requests must be made at least 48 hours before the scheduled puja. Advance payments made for samagri (puja materials) are non-refundable as materials are procured in advance. In case of cancellation by us, full advance payment will be refunded. There is no cancellation charge if cancelled 48+ hours before.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">5. WhatsApp Communication Consent</h2>
      <p className="text-divine-muted leading-relaxed mb-4">By submitting our booking form or contacting via WhatsApp, you consent to receiving puja confirmations, muhurta details, and follow-up communication on your WhatsApp number. You may opt out at any time by informing us.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">6. Faith-Based Services Disclaimer</h2>
      <p className="text-divine-muted leading-relaxed mb-4">Our services are faith-based religious rituals. We do not guarantee specific material outcomes, results, or benefits. Results are subject to individual karma, faith, and divine grace. We are not responsible for any expectations of specific outcomes.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">7. Data & Privacy</h2>
      <p className="text-divine-muted leading-relaxed mb-4">Personal information shared with us (name, phone, birth details, kundali) is kept strictly confidential and used only for the purpose of providing our services. We do not share your data with third parties.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">8. Governing Law</h2>
      <p className="text-divine-muted leading-relaxed">These terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Ujjain, Madhya Pradesh.</p>
    </LegalPage>
  );

  return (
    <LegalPage titleHi="नियम एवं शर्तें" titleEn="Terms & Conditions">
      <p className="text-divine-muted text-sm mb-6">अंतिम अद्यतन: नवंबर 2024</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">1. शर्तों की स्वीकृति</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">महादेव अनुष्ठान केंद्र की सेवाओं का उपयोग करके, आप इन नियम एवं शर्तों से सहमत होते हैं।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">2. सेवाएं</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">हम मंगल दोष पूजन, कालसर्प दोष निवारण, पितृ दोष श्राद्ध, नवग्रह शांति, महामृत्युंजय अनुष्ठान, रुद्राभिषेक, वास्तु शांति, नवचंडी/शतचंडी अनुष्ठान एवं कुंडली विश्लेषण की सेवाएं प्रदान करते हैं। सभी सेवाएं वैदिक पंडित दीपक पंड्या जी द्वारा प्रामाणिक वैदिक विधि से संपन्न की जाती हैं।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">3. बुकिंग एवं पुष्टि</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">बुकिंग WhatsApp के माध्यम से पुष्ट की जाती है। पंडित जी की लिखित/मौखिक पुष्टि के बाद ही बुकिंग मान्य होती है।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">4. रद्दीकरण एवं धनवापसी</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">पूजन से कम से कम 48 घंटे पहले रद्दीकरण अनुरोध करना अनिवार्य है। सामग्री के लिए जमा की गई राशि अप्रतिदेय है। हमारे द्वारा रद्दीकरण की स्थिति में पूरी अग्रिम राशि वापस की जाएगी।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">5. WhatsApp संचार सहमति</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">बुकिंग फॉर्म भरने या WhatsApp पर संपर्क करने से आप अपने WhatsApp नंबर पर पूजन पुष्टि, मुहूर्त विवरण और अनुवर्ती संचार प्राप्त करने की सहमति देते हैं।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">6. आस्था आधारित सेवा</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">हमारी सेवाएं आस्था एवं श्रद्धा पर आधारित धार्मिक अनुष्ठान हैं। हम किसी विशेष भौतिक परिणाम की गारंटी नहीं देते।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">7. गोपनीयता</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">आपकी व्यक्तिगत जानकारी (नाम, फोन, जन्म विवरण, कुंडली) पूर्णतः गोपनीय रखी जाती है और केवल सेवा प्रदान करने के उद्देश्य से उपयोग की जाती है।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">8. विधिक क्षेत्राधिकार</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari">ये शर्तें भारतीय कानून द्वारा शासित होंगी। कोई भी विवाद उज्जैन, मध्यप्रदेश के न्यायालयों के अधीन होगा।</p>
    </LegalPage>
  );
}

// ─── Privacy Policy ────────────────────────────────────────
export function PrivacyPolicy() {
  const { lang } = useLanguage();

  if (lang === 'en') return (
    <LegalPage titleHi="गोपनीयता नीति" titleEn="Privacy Policy">
      <p className="text-divine-muted text-sm mb-6">Last updated: November 2024</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">1. Information We Collect</h2>
      <p className="text-divine-muted leading-relaxed mb-4">We collect information that you voluntarily provide when you use our booking forms or contact us: Name, Phone number/WhatsApp number, Date/time/place of birth (for kundali analysis), Problem description, and Preferred puja date.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">2. How We Use Your Information</h2>
      <p className="text-divine-muted leading-relaxed mb-4">Your information is used solely to: Confirm puja bookings and communicate muhurta; Provide Kundali analysis; Send puja-related updates via WhatsApp; Respond to your queries. We do NOT use your data for marketing, advertising, or selling to third parties.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">3. WhatsApp Communication</h2>
      <p className="text-divine-muted leading-relaxed mb-4">Communication primarily happens via WhatsApp. By contacting us, you consent to WhatsApp communication. You can opt out at any time. Your WhatsApp number is not shared with anyone else.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">4. Data Security</h2>
      <p className="text-divine-muted leading-relaxed mb-4">We take reasonable measures to protect your personal information. Kundali and birth details are treated with the utmost confidentiality, consistent with our dharmic values.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">5. Third Parties</h2>
      <p className="text-divine-muted leading-relaxed mb-4">We do not sell, trade, or transfer your personally identifiable information to outside parties. Our website uses Google Fonts and Google Maps (which have their own privacy policies).</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">6. Contact</h2>
      <p className="text-divine-muted leading-relaxed">For privacy concerns, contact us at: WhatsApp: +91 6263401651 | Location: Ujjain, Madhya Pradesh, India</p>
    </LegalPage>
  );

  return (
    <LegalPage titleHi="गोपनीयता नीति" titleEn="Privacy Policy">
      <p className="text-divine-muted text-sm font-devanagari mb-6">अंतिम अद्यतन: नवंबर 2024</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">1. हम क्या जानकारी एकत्र करते हैं</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">हम आपकी स्वेच्छा से दी गई जानकारी एकत्र करते हैं जैसे: नाम, फोन/WhatsApp नंबर, जन्म तिथि/समय/स्थान (कुंडली विश्लेषण के लिए), समस्या विवरण, और पूजन तिथि।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">2. जानकारी का उपयोग</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">आपकी जानकारी केवल पूजन बुकिंग पुष्टि, मुहूर्त सूचना, कुंडली विश्लेषण, और WhatsApp के माध्यम से पूजन संबंधी अपडेट के लिए उपयोग की जाती है। हम आपका डेटा विपणन, विज्ञापन, या तृतीय पक्षों को नहीं बेचते।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">3. WhatsApp संचार</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">संचार मुख्यतः WhatsApp के माध्यम से होता है। आपका WhatsApp नंबर किसी के साथ साझा नहीं किया जाता। आप कभी भी ऑप्ट-आउट कर सकते हैं।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">4. डेटा सुरक्षा</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">आपकी व्यक्तिगत जानकारी, विशेषतः कुंडली एवं जन्म विवरण, पूर्णतः गोपनीय रखे जाते हैं।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">5. संपर्क</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari">गोपनीयता संबंधी किसी भी चिंता के लिए: WhatsApp: +91 6263401651 | उज्जैन, मध्यप्रदेश</p>
    </LegalPage>
  );
}

// ─── Disclaimer ────────────────────────────────────────────
export function Disclaimer() {
  const { lang } = useLanguage();

  if (lang === 'en') return (
    <LegalPage titleHi="अस्वीकरण" titleEn="Disclaimer">
      <h2 className="text-xl font-bold text-divine-brown mb-3">1. Faith-Based Service</h2>
      <p className="text-divine-muted leading-relaxed mb-4">Mahadev Anushthan Kendra provides faith-based Vedic religious and astrological services. These services are based on ancient Indian Vedic traditions, astrology, and religious beliefs. They are intended as spiritual guidance and ritual support.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">2. No Guaranteed Results</h2>
      <p className="text-divine-muted leading-relaxed mb-4">We do NOT guarantee specific outcomes, results, cures, or material benefits from any puja, ritual, or astrological consultation performed by us. Results depend on individual karma, faith, divine grace, and many factors beyond human control. Testimonials shared on this website represent individual experiences and are not guarantees of similar results for others.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">3. Not a Substitute for Professional Advice</h2>
      <p className="text-divine-muted leading-relaxed mb-4">Our astrological and Kundali analysis services are NOT a substitute for medical, legal, financial, or psychological professional advice. For medical conditions, please consult a licensed medical practitioner. Our services are complementary spiritual support only.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">4. Accuracy of Astrological Predictions</h2>
      <p className="text-divine-muted leading-relaxed mb-4">Vedic astrology is an ancient science based on planetary positions. While we strive for accuracy, astrological predictions are indicative and not absolute. Individual free will and actions also significantly influence life outcomes.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">5. Religious Beliefs</h2>
      <p className="text-divine-muted leading-relaxed mb-4">Our services are rooted in Hindu Vedic traditions. We respect all faiths and beliefs. Participation in our services is entirely voluntary and based on personal faith.</p>
      <h2 className="text-xl font-bold text-divine-brown mb-3">6. Limitation of Liability</h2>
      <p className="text-divine-muted leading-relaxed">Mahadev Anushthan Kendra shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services, reliance on astrological guidance, or outcomes of religious rituals.</p>
    </LegalPage>
  );

  return (
    <LegalPage titleHi="अस्वीकरण" titleEn="Disclaimer">
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">1. आस्था आधारित सेवा</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">महादेव अनुष्ठान केंद्र प्राचीन भारतीय वैदिक परंपराओं, ज्योतिष एवं धार्मिक विश्वासों पर आधारित आस्था-केंद्रित सेवाएं प्रदान करता है। ये सेवाएं आध्यात्मिक मार्गदर्शन एवं अनुष्ठान सहायता के रूप में हैं।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">2. परिणाम की कोई गारंटी नहीं</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">हम किसी भी पूजन, अनुष्ठान या ज्योतिष परामर्श से किसी विशेष परिणाम, उपचार, या भौतिक लाभ की गारंटी नहीं देते। परिणाम व्यक्ति के कर्म, श्रद्धा, एवं ईश्वरीय कृपा पर निर्भर करते हैं। वेबसाइट पर दी गई प्रशंसापत्र व्यक्तिगत अनुभव हैं।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">3. पेशेवर सलाह का विकल्प नहीं</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">हमारी ज्योतिष एवं कुंडली विश्लेषण सेवाएं चिकित्सा, कानूनी, वित्तीय या मनोवैज्ञानिक पेशेवर सलाह का विकल्प नहीं हैं। स्वास्थ्य समस्याओं के लिए कृपया योग्य चिकित्सक से परामर्श लें।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">4. ज्योतिषीय भविष्यवाणी</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari mb-4">वैदिक ज्योतिष एक प्राचीन विद्या है। ज्योतिषीय भविष्यवाणियां संकेतात्मक हैं, पूर्णतः निश्चित नहीं। व्यक्ति का स्वतंत्र इच्छाशक्ति एवं कार्य भी जीवन परिणामों को महत्वपूर्ण रूप से प्रभावित करते हैं।</p>
      <h2 className="text-xl font-bold text-divine-brown font-devanagari mb-3">5. दायित्व की सीमा</h2>
      <p className="text-divine-muted leading-relaxed font-devanagari">महादेव अनुष्ठान केंद्र हमारी सेवाओं के उपयोग, ज्योतिषीय मार्गदर्शन पर निर्भरता, या धार्मिक अनुष्ठानों के परिणामों से उत्पन्न किसी भी क्षति के लिए उत्तरदायी नहीं होगा।</p>
    </LegalPage>
  );
}
