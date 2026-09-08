// ============================================================
// content.js — Bilingual site content (hi + en)
// ============================================================

export const CONTENT = {
  // ──────────────────────────────────────────
  // SITE-WIDE
  // ──────────────────────────────────────────
  siteName: {
    hi: 'मंगल दोष पूजन केंद्र',
    en: 'Mangal Dosh Pujan Kendra',
  },
  panditName: {
    hi: 'वैदिक पंडित दीपक पंड्या',
    en: 'Vaidik Pandit Deepak Pandya',
  },
  tagline: {
    hi: 'जय श्री महाकाल — हर हर महादेव',
    en: 'Jai Shri Mahakal — Har Har Mahadev',
  },
  location: {
    hi: 'महाकाल की नगरी, उज्जैन (म.प्र.)',
    en: 'Mahakal Nagari, Ujjain (M.P.)',
  },
  phone: '6263401651',
  whatsapp: '916263401651',

  // ──────────────────────────────────────────
  // NAV
  // ──────────────────────────────────────────
  nav: {
    home: { hi: 'होम', en: 'Home' },
    about: { hi: 'परिचय', en: 'About' },
    services: { hi: 'सेवाएं', en: 'Services' },
    kundli: { hi: 'कुंडली विश्लेषण', en: 'Kundali Analysis' },
    gallery: { hi: 'गैलरी', en: 'Gallery' },
    testimonials: { hi: 'समीक्षाएं', en: 'Reviews' },
    contact: { hi: 'संपर्क', en: 'Contact' },
    bookNow: { hi: 'अभी बुक करें', en: 'Book Now' },
    blog: { hi: 'ब्लॉग', en: 'Blog' },
  },

  // ──────────────────────────────────────────
  // HERO
  // ──────────────────────────────────────────
  hero: {
    badge: { hi: '🙏 उज्जैन के विश्वसनीय वैदिक पंडित', en: '🙏 Trusted Vedic Pandit of Ujjain' },
    title: {
      hi: 'मंगल दोष पूजा एवं\nसमस्त वैदिक अनुष्ठान',
      en: 'Mangal Dosh Puja &\nAll Vedic Rituals',
    },
    subtitle: {
      hi: 'उज्जैन — महाकाल की पावन नगरी में वैदिक विधि-विधान से पूजन। 15+ वर्षों के अनुभव के साथ पंडित दीपक पंड्या जी आपकी हर समस्या का समाधान देते हैं।',
      en: 'Vedic rituals performed in the sacred city of Ujjain — Mahakal Nagari. Pandit Deepak Pandya Ji provides solutions to your every problem with 15+ years of experience.',
    },
    cta1: { hi: 'अभी पूजा बुक करें', en: 'Book Puja Now' },
    cta2: { hi: 'WhatsApp पर संपर्क', en: 'Contact on WhatsApp' },
    stats: [
      { hi: { count: '15+', label: 'वर्षों का अनुभव' }, en: { count: '15+', label: 'Years Experience' } },
      { hi: { count: '5000+', label: 'सफल अनुष्ठान' }, en: { count: '5000+', label: 'Successful Pujas' } },
      { hi: { count: '100%', label: 'वैदिक विधि & संकल्प' }, en: { count: '100%', label: 'Authentic Vedic Sankalp' } },
    ],
  },

  // ──────────────────────────────────────────
  // TRUST BADGES
  // ──────────────────────────────────────────
  trust: {
    heading: { hi: 'हम पर भरोसा क्यों करें?', en: 'Why Trust Us?' },
    subheading: {
      hi: 'हजारों श्रद्धालुओं का विश्वास, वैदिक परंपरा का सम्मान',
      en: 'Trusted by thousands of devotees, honoring Vedic tradition',
    },
    badges: [
      {
        icon: '📜',
        hi: { title: 'वैदिक प्रमाणित', desc: 'वेदों एवं शास्त्रों के अनुसार पूजन' },
        en: { title: 'Vedic Certified', desc: 'Puja performed as per Vedas & Shastras' },
      },
      {
        icon: '🏆',
        hi: { title: '15+ वर्ष अनुभव', desc: 'दो दशकों का वैदिक ज्ञान एवं अनुभव' },
        en: { title: '15+ Years Experience', desc: 'Two decades of Vedic knowledge' },
      },
      {
        icon: '👥',
        hi: { title: 'नेताओं का विश्वास', desc: 'राजनेताओं एवं मंत्रियों द्वारा पूजन' },
        en: { title: 'Trusted by Leaders', desc: 'Puja performed for politicians & ministers' },
      },
      {
        icon: '📍',
        hi: { title: 'महाकाल नगरी', desc: 'उज्जैन के पावन तीर्थ स्थलों पर पूजन' },
        en: { title: 'Mahakal Nagari', desc: 'Puja at sacred pilgrimage sites of Ujjain' },
      },
      {
        icon: '📞',
        hi: { title: '24/7 उपलब्ध', desc: 'WhatsApp एवं फोन पर सदैव उपलब्ध' },
        en: { title: '24/7 Available', desc: 'Always available on WhatsApp & phone' },
      },
      {
        icon: '🔒',
        hi: { title: 'गोपनीयता', desc: 'आपकी कुंडली एवं समस्या पूर्णतः गोपनीय' },
        en: { title: 'Confidential', desc: 'Your horoscope & problems fully confidential' },
      },
    ],
  },

  // ──────────────────────────────────────────
  // SERVICES SECTION
  // ──────────────────────────────────────────
  services: {
    badge: { hi: 'हमारी सेवाएं', en: 'Our Services' },
    heading: { hi: 'वैदिक अनुष्ठान एवं पूजा सेवाएं', en: 'Vedic Rituals & Puja Services' },
    subheading: {
      hi: 'उज्जैन में वैदिक विधि-विधान से संपन्न होने वाले संपूर्ण अनुष्ठान',
      en: 'Complete rituals performed in Ujjain as per Vedic traditions',
    },
    viewAll: { hi: 'सभी सेवाएं देखें', en: 'View All Services' },
    bookService: { hi: 'अभी बुक करें', en: 'Book Now' },
    knowMore: { hi: 'अधिक जानें', en: 'Know More' },
  },

  // ──────────────────────────────────────────
  // ABOUT SECTION (Home snippet)
  // ──────────────────────────────────────────
  aboutSnippet: {
    badge: { hi: 'पंडित जी के बारे में', en: 'About Pandit Ji' },
    heading: { hi: 'वैदिक पंडित दीपक पंड्या', en: 'Vaidik Pandit Deepak Pandya' },
    subheading: { hi: 'महाकाल की नगरी उज्जैन के विश्वसनीय वैदिक आचार्य', en: 'Trusted Vedic Acharya of Ujjain — Mahakal Nagari' },
    description: {
      hi: 'पंडित दीपक पंड्या जी ने वैदिक ज्ञान की शिक्षा उज्जैन के प्रतिष्ठित आचार्यों से ग्रहण की है। 15+ वर्षों से वे मंगल दोष पूजन, कालसर्प दोष निवारण, पितृ दोष श्राद्ध, नवग्रह शांति एवं समस्त वैदिक अनुष्ठान उज्जैन के पावन महाकालेश्वर मंदिर परिसर एवं अन्य तीर्थस्थलों पर विधिवत संपन्न करवाते आ रहे हैं। उनकी विशेषता है — शुद्ध वैदिक विधि-विधान, श्रद्धालुओं के प्रति पूर्ण समर्पण एवं परिणामदायी अनुष्ठान।',
      en: 'Pandit Deepak Pandya Ji received his Vedic education from renowned Acharyas of Ujjain. For 15+ years, he has been performing Mangal Dosh Puja, Kaal Sarp Dosh Nivaran, Pitru Dosh Shraddha, Navgrah Shanti, and all Vedic rituals at the sacred Mahakaleshwar Temple complex and other pilgrimage sites in Ujjain. His specialty is pure Vedic methodology, complete dedication to devotees, and result-oriented rituals.',
    },
    highlights: [
      { icon: '🎓', hi: 'वैदिक शास्त्रों में पारंगत', en: 'Proficient in Vedic Scriptures' },
      { icon: '🏛️', hi: 'महाकालेश्वर मंदिर में पूजन', en: 'Puja at Mahakaleshwar Temple' },
      { icon: '🤝', hi: 'राजनेताओं का विश्वास', en: 'Trusted by Politicians' },
      { icon: '📱', hi: 'ऑनलाइन परामर्श उपलब्ध', en: 'Online Consultation Available' },
    ],
    readMore: { hi: 'पूरा परिचय पढ़ें', en: 'Read Full Profile' },
  },

  // ──────────────────────────────────────────
  // TESTIMONIALS
  // ──────────────────────────────────────────
  testimonials: {
    badge: { hi: 'श्रद्धालुओं के अनुभव', en: 'Devotee Experiences' },
    heading: { hi: 'हजारों परिवारों का विश्वास', en: 'Trusted by Thousands of Families' },
    subheading: {
      hi: 'पंडित जी के अनुष्ठान से जीवन में बदलाव आया — श्रद्धालुओं के शब्दों में',
      en: 'Life changed after Pandit Ji\'s rituals — in the words of devotees',
    },
    reviews: [
      {
        name: { hi: 'राजेश शर्मा', en: 'Rajesh Sharma' },
        city: { hi: 'इंदौर, म.प्र.', en: 'Indore, M.P.' },
        service: { hi: 'मंगल दोष पूजन', en: 'Mangal Dosh Puja' },
        rating: 5,
        text: {
          hi: 'पंडित जी ने मेरी बेटी का मंगल दोष पूजन करवाया। 3 साल से विवाह नहीं हो रहा था, पूजन के 6 महीने बाद शादी हो गई। भगवान महाकाल की कृपा और पंडित जी का वैदिक ज्ञान अतुलनीय है। 🙏',
          en: 'Pandit Ji performed Mangal Dosh Puja for my daughter. Marriage wasn\'t happening for 3 years, got married 6 months after the puja. The grace of Mahakal and Pandit Ji\'s Vedic knowledge is incomparable. 🙏',
        },
      },
      {
        name: { hi: 'सुनीता देवी', en: 'Sunita Devi' },
        city: { hi: 'भोपाल, म.प्र.', en: 'Bhopal, M.P.' },
        service: { hi: 'कालसर्प दोष पूजन', en: 'Kaal Sarp Dosh Puja' },
        rating: 5,
        text: {
          hi: 'कालसर्प दोष के कारण व्यापार में बार-बार हानि हो रही थी। पंडित दीपक जी से पूजन करवाया, अब व्यापार में उन्नति हो रही है। बहुत विद्वान और सहृदय पंडित जी हैं।',
          en: 'Business was suffering repeated losses due to Kaal Sarp Dosha. Got puja done from Pandit Deepak Ji, now business is growing. Very knowledgeable and kind-hearted Pandit Ji.',
        },
      },
      {
        name: { hi: 'अमित वर्मा', en: 'Amit Verma' },
        city: { hi: 'उज्जैन, म.प्र.', en: 'Ujjain, M.P.' },
        service: { hi: 'नवग्रह शांति', en: 'Navgrah Shanti' },
        rating: 5,
        text: {
          hi: 'नवग्रह शांति के बाद नौकरी में प्रमोशन मिला और घर में शांति आई। पंडित जी का विधिवत पूजन करने का तरीका और समर्पण देखकर मन प्रसन्न हो जाता है।',
          en: 'After Navgrah Shanti, got promotion in job and peace came to home. Seeing Pandit Ji\'s methodical way of performing puja and dedication fills the heart with joy.',
        },
      },
      {
        name: { hi: 'प्रिया मेहता', en: 'Priya Mehta' },
        city: { hi: 'मुंबई, महाराष्ट्र', en: 'Mumbai, Maharashtra' },
        service: { hi: 'पितृ दोष निवारण', en: 'Pitru Dosh Nivaran' },
        rating: 5,
        text: {
          hi: 'परिवार में बार-बार बीमारी की समस्या थी। पंडित जी ने त्रिपिंडी श्राद्ध करवाया, अब सब ठीक है। विधि-विधान में पूर्ण शुद्धता रखते हैं — पूर्णतः संतुष्ट हूं।',
          en: 'Family was facing repeated illness problems. Pandit Ji performed Tripindi Shraddha, everything is fine now. He maintains complete purity in rituals — completely satisfied.',
        },
      },
      {
        name: { hi: 'विनोद पटेल', en: 'Vinod Patel' },
        city: { hi: 'अहमदाबाद, गुजरात', en: 'Ahmedabad, Gujarat' },
        service: { hi: 'महामृत्युंजय अनुष्ठान', en: 'Mahamrityunjay Anushthan' },
        rating: 5,
        text: {
          hi: 'मेरे पिताजी की गंभीर बीमारी में महामृत्युंजय अनुष्ठान करवाया। डॉक्टरों ने उम्मीद छोड़ दी थी, पर ईश्वर की कृपा से वे स्वस्थ हो गए। पंडित दीपक जी को हृदय से धन्यवाद।',
          en: 'Mahamrityunjay Anushthan was performed during my father\'s serious illness. Doctors had given up hope, but by God\'s grace he recovered. Heartfelt thanks to Pandit Deepak Ji.',
        },
      },
      {
        name: { hi: 'कविता सिंह', en: 'Kavita Singh' },
        city: { hi: 'ग्वालियर, म.प्र.', en: 'Gwalior, M.P.' },
        service: { hi: 'वास्तु शांति पूजा', en: 'Vastu Shanti Puja' },
        rating: 5,
        text: {
          hi: 'नए घर में प्रवेश से पहले वास्तु शांति करवाई। पंडित जी ने बहुत सुंदर विधि से पूजन किया। घर में बहुत सकारात्मक वातावरण है। बहुत-बहुत धन्यवाद 🙏',
          en: 'Got Vastu Shanti done before entering the new home. Pandit Ji performed the puja very beautifully. There is a very positive atmosphere in the house. Many thanks 🙏',
        },
      },
    ],
  },

  // ──────────────────────────────────────────
  // BOOKING FORM
  // ──────────────────────────────────────────
  booking: {
    badge: { hi: 'त्वरित बुकिंग', en: 'Quick Booking' },
    heading: { hi: 'अभी अपनी पूजा बुक करें', en: 'Book Your Puja Now' },
    subheading: {
      hi: 'नीचे फॉर्म भरें — पंडित जी WhatsApp पर मुहूर्त एवं विवरण देंगे',
      en: 'Fill the form below — Pandit Ji will share muhurta & details on WhatsApp',
    },
    fields: {
      name: { hi: 'आपका नाम *', en: 'Your Name *', placeholder: { hi: 'पूरा नाम', en: 'Full Name' } },
      phone: { hi: 'मोबाइल नंबर *', en: 'Mobile Number *', placeholder: { hi: '10 अंकों का नंबर', en: '10-digit number' } },
      service: { hi: 'पूजन प्रकार *', en: 'Puja Type *', placeholder: { hi: 'सेवा चुनें', en: 'Select Service' } },
      problem: { hi: 'समस्या (1-2 पंक्ति में) *', en: 'Problem (in 1-2 lines) *', placeholder: { hi: 'अपनी समस्या संक्षेप में बताएं...', en: 'Briefly describe your problem...' } },
      date: { hi: 'पसंदीदा तिथि', en: 'Preferred Date' },
      kundli: { hi: 'कुंडली फोटो (वैकल्पिक)', en: 'Kundali Photo (Optional)' },
    },
    submit: { hi: '📱 WhatsApp पर बुक करें', en: '📱 Book on WhatsApp' },
    note: { hi: '✅ फॉर्म सबमिट होते ही WhatsApp पर मैसेज जाएगा', en: '✅ WhatsApp message sent immediately on form submit' },
  },

  // ──────────────────────────────────────────
  // CONTACT
  // ──────────────────────────────────────────
  contact: {
    badge: { hi: 'संपर्क करें', en: 'Contact Us' },
    heading: { hi: 'हमसे संपर्क करें', en: 'Get in Touch' },
    subheading: {
      hi: 'किसी भी समस्या या जिज्ञासा के लिए — हम सदैव उपलब्ध हैं',
      en: 'For any problem or query — we are always available',
    },
    details: [
      { icon: '📞', hi: { label: 'फोन / WhatsApp', value: '+91 6263401651' }, en: { label: 'Phone / WhatsApp', value: '+91 6263401651' } },
      { icon: '📍', hi: { label: 'पता', value: 'महाकाल की नगरी, उज्जैन, मध्यप्रदेश — 456001' }, en: { label: 'Address', value: 'Mahakal Nagari, Ujjain, Madhya Pradesh — 456001' } },
      { icon: '⏰', hi: { label: 'समय', value: 'प्रातः 6 बजे से रात्रि 9 बजे तक' }, en: { label: 'Hours', value: '6 AM to 9 PM (All Days)' } },
    ],
    formSubmit: { hi: 'संदेश भेजें', en: 'Send Message' },
  },

  // ──────────────────────────────────────────
  // FOOTER
  // ──────────────────────────────────────────
  footer: {
    tagline: { hi: '🙏 जय श्री महाकाल — हर हर महादेव 🙏', en: '🙏 Jai Shri Mahakal — Har Har Mahadev 🙏' },
    description: {
      hi: 'उज्जैन में वैदिक पंडित दीपक पंड्या जी के मार्गदर्शन में — मंगल दोष पूजन, कालसर्प दोष निवारण एवं समस्त वैदिक अनुष्ठान।',
      en: 'Under the guidance of Vaidik Pandit Deepak Pandya Ji in Ujjain — Mangal Dosh Puja, Kaal Sarp Dosh Nivaran, and all Vedic rituals.',
    },
    quickLinks: { hi: 'त्वरित लिंक', en: 'Quick Links' },
    services: { hi: 'हमारी सेवाएं', en: 'Our Services' },
    contactUs: { hi: 'संपर्क', en: 'Contact' },
    legal: { hi: 'कानूनी', en: 'Legal' },
    terms: { hi: 'नियम एवं शर्तें', en: 'Terms & Conditions' },
    privacy: { hi: 'गोपनीयता नीति', en: 'Privacy Policy' },
    disclaimer: { hi: 'अस्वीकरण', en: 'Disclaimer' },
    copyright: {
      hi: `© ${new Date().getFullYear()} मंगल दोष पूजन केंद्र | वैदिक पंडित दीपक पंड्या — All Rights Reserved`,
      en: `© ${new Date().getFullYear()} Mahadev Anushthan Kendra | Vaidik Pandit Deepak Pandya — All Rights Reserved`,
    },
  },

  // ──────────────────────────────────────────
  // ABOUT PAGE
  // ──────────────────────────────────────────
  about: {
    badge: { hi: 'हमारा परिचय', en: 'About Us' },
    heading: { hi: 'वैदिक पंडित दीपक पंड्या', en: 'Vaidik Pandit Deepak Pandya' },
    subheading: { hi: 'उज्जैन के पावन महाकाल क्षेत्र के विश्वसनीय वैदिक आचार्य', en: 'Trusted Vedic Acharya of Ujjain\'s Sacred Mahakal Region' },
    bio: {
      hi: [
        'वैदिक पंडित दीपक पंड्या जी का जन्म उज्जैन की पावन भूमि पर हुआ। बाल्यावस्था से ही उन्हें वैदिक ग्रंथों एवं अनुष्ठान विद्या में गहरी रुचि थी। उन्होंने उज्जैन के प्रतिष्ठित वैदिक विद्यालय एवं संस्कृत महाविद्यालय में ज्योतिष, कर्मकांड एवं वैदिक दर्शन की उच्च शिक्षा ग्रहण की।',
        '15+ वर्षों से वे उज्जैन के महाकालेश्वर मंदिर, मंगलनाथ मंदिर, हरसिद्धि मंदिर, एवं राम घाट जैसे पावन तीर्थस्थलों पर हजारों श्रद्धालुओं के लिए मंगल दोष पूजन, कालसर्प दोष निवारण, पितृ दोष श्राद्ध, महामृत्युंजय अनुष्ठान एवं समस्त वैदिक अनुष्ठान संपन्न करवा रहे हैं।',
        'उनकी विशेषता — शुद्ध वैदिक परंपरा का पालन, श्रद्धालुओं की समस्याओं के प्रति संवेदनशीलता, एवं परिणामोन्मुख अनुष्ठान। मध्यप्रदेश के कई राजनेताओं एवं मंत्रियों ने भी उनसे पूजन करवाया है, जो उनकी विद्वत्ता एवं विश्वसनीयता का प्रमाण है।',
      ],
      en: [
        'Vaidik Pandit Deepak Pandya Ji was born on the sacred land of Ujjain. From childhood, he had a deep interest in Vedic scriptures and ritual science. He received higher education in Jyotish (Vedic Astrology), Karmakanda, and Vedic philosophy from prestigious Vedic schools and Sanskrit colleges in Ujjain.',
        'For 15+ years, he has been performing Mangal Dosh Puja, Kaal Sarp Dosh Nivaran, Pitru Dosh Shraddha, Mahamrityunjay Anushthan, and all Vedic rituals for thousands of devotees at sacred pilgrimage sites like Mahakaleshwar Temple, Mangalnath Temple, Harsiddhi Temple, and Ram Ghat in Ujjain.',
        'His specialty — adherence to pure Vedic tradition, sensitivity towards devotees\' problems, and result-oriented rituals. Several politicians and ministers of Madhya Pradesh have also got puja performed by him, which is a testament to his erudition and trustworthiness.',
      ],
    },
    credentials: {
      heading: { hi: 'शैक्षणिक एवं व्यावसायिक योग्यताएं', en: 'Educational & Professional Qualifications' },
      items: [
        { icon: '🎓', hi: 'वैदिक ज्योतिष में आचार्य (जोतिषाचार्य)', en: 'Acharya in Vedic Jyotish (Jyotishacharya)' },
        { icon: '📜', hi: 'कर्मकांड विशेषज्ञ — उज्जैन संस्कृत विद्यापीठ', en: 'Karmakanda Specialist — Ujjain Sanskrit Vidyapeeth' },
        { icon: '🏛️', hi: 'महाकालेश्वर मंदिर न्यास से मान्यता प्राप्त', en: 'Recognized by Mahakaleshwar Temple Trust' },
        { icon: '⭐', hi: '5000+ सफल अनुष्ठान संपन्न', en: '5000+ Successful Rituals Performed' },
        { icon: '🌐', hi: 'ऑनलाइन ज्योतिष परामर्श में अग्रणी', en: 'Pioneer in Online Vedic Astrology Consultation' },
        { icon: '🤝', hi: 'राजनेताओं एवं मंत्रियों का विश्वास', en: 'Trusted by Politicians and Ministers' },
      ],
    },
  },

  // ──────────────────────────────────────────
  // GALLERY
  // ──────────────────────────────────────────
  gallery: {
    badge: { hi: 'गैलरी', en: 'Gallery' },
    heading: { hi: 'पूजन एवं अनुष्ठान की झलकियां', en: 'Glimpses of Puja & Rituals' },
    subheading: {
      hi: 'पावन उज्जैन में संपन्न हुए अनुष्ठानों की अविस्मरणीय यादें',
      en: 'Unforgettable memories of rituals performed in the sacred city of Ujjain',
    },
    tabs: {
      all: { hi: 'सभी', en: 'All' },
      puja: { hi: 'पूजन', en: 'Puja' },
      havan: { hi: 'हवन', en: 'Havan' },
      vip: { hi: 'विशेष अतिथि', en: 'VIP Guests' },
      temple: { hi: 'मंदिर', en: 'Temple' },
    },
  },

  // ──────────────────────────────────────────
  // BLOG
  // ──────────────────────────────────────────
  blog: {
    badge: { hi: 'वैदिक ज्ञान', en: 'Vedic Knowledge' },
    heading: { hi: 'ज्योतिष एवं वैदिक लेख', en: 'Astrology & Vedic Articles' },
    subheading: {
      hi: 'मंगल दोष, कालसर्प दोष एवं अन्य वैदिक विषयों पर विशेष लेख',
      en: 'Special articles on Mangal Dosh, Kaal Sarp Dosh, and other Vedic topics',
    },
    readMore: { hi: 'पूरा पढ़ें', en: 'Read More' },
    viewAll: { hi: 'सभी लेख देखें', en: 'View All Articles' },
    minRead: { hi: 'मिनट पठन', en: 'min read' },
  },

  // ──────────────────────────────────────────
  // KUNDLI ANALYSIS PAGE
  // ──────────────────────────────────────────
  kundli: {
    badge: { hi: 'कुंडली विश्लेषण', en: 'Kundali Analysis' },
    heading: { hi: 'अपनी जन्म कुंडली का वैदिक विश्लेषण करवाएं', en: 'Get Your Birth Horoscope Vedic Analysis' },
    subheading: {
      hi: 'जन्म तिथि, समय एवं स्थान भेजें — पंडित जी विस्तृत विश्लेषण देंगे',
      en: 'Send birth date, time and place — Pandit Ji will provide detailed analysis',
    },
    fields: {
      name: { hi: 'नाम *', en: 'Name *', placeholder: { hi: 'पूरा नाम', en: 'Full Name' } },
      dob: { hi: 'जन्म तिथि *', en: 'Date of Birth *' },
      tob: { hi: 'जन्म समय *', en: 'Time of Birth *', placeholder: { hi: 'जैसे: 10:30 AM', en: 'e.g.: 10:30 AM' } },
      pob: { hi: 'जन्म स्थान *', en: 'Place of Birth *', placeholder: { hi: 'शहर, राज्य', en: 'City, State' } },
      phone: { hi: 'WhatsApp नंबर *', en: 'WhatsApp Number *', placeholder: { hi: '+91 XXXXX XXXXX', en: '+91 XXXXX XXXXX' } },
      query: { hi: 'जिज्ञासा / समस्या', en: 'Query / Problem', placeholder: { hi: 'आप किस विषय पर मार्गदर्शन चाहते हैं?', en: 'What topic do you want guidance on?' } },
      kundliPhoto: { hi: 'कुंडली फोटो (वैकल्पिक)', en: 'Kundali Photo (Optional)' },
    },
    submit: { hi: '📱 WhatsApp पर भेजें', en: '📱 Send on WhatsApp' },
  },
};

export default CONTENT;
