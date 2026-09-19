// ============================================================
// prerender.js — Post-build static HTML injection for SEO/AEO/GEO
// Ensures Googlebot, GPTBot, ClaudeBot, and all crawlers receive
// full semantic HTML on initial fetch without waiting for JS execution.
// ============================================================

import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf-8');

// Semantic HTML content for the initial server-rendered body
const prerenderedBody = `
<div id="root">
  <!-- Prerendered Static Content for Search Engines & AI Crawlers -->
  <header style="background:#1A0700;color:#FFF;padding:16px 24px;border-bottom:1px solid #D4AF37;">
    <div style="max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:24px;color:#F5C842;font-weight:bold;">मंगल दोष पूजन केंद्र</span>
        <span style="font-size:14px;color:#E6D3B3;">| उज्जैन</span>
      </div>
      <nav style="display:flex;gap:16px;font-size:14px;">
        <a href="/" style="color:#F5C842;text-decoration:none;">मुख्य पृष्ठ</a>
        <a href="/#/about" style="color:#FFF;text-decoration:none;">परिचय</a>
        <a href="/#/services" style="color:#FFF;text-decoration:none;">पूजा सेवाएं</a>
        <a href="/#/kundli-analysis" style="color:#FFF;text-decoration:none;">कुंडली विश्लेषण</a>
        <a href="/#/booking" style="color:#FFF;text-decoration:none;">बुकिंग</a>
        <a href="/#/contact" style="color:#FFF;text-decoration:none;">संपर्क</a>
      </nav>
      <div>
        <a href="tel:+916263401651" style="color:#F5C842;font-weight:bold;text-decoration:none;margin-right:12px;">📞 +91 62634 01651</a>
        <a href="https://wa.me/916263401651" style="background:#25D366;color:#FFF;padding:6px 14px;border-radius:20px;text-decoration:none;font-weight:bold;">WhatsApp</a>
      </div>
    </div>
  </header>

  <main style="max-width:1200px;margin:0 auto;padding:32px 20px;font-family:system-ui,-apple-system,sans-serif;color:#2D1500;line-height:1.7;">
    
    <!-- Hero / Answer-First Section -->
    <section style="margin-bottom:48px;text-align:center;">
      <p style="display:inline-block;padding:4px 16px;background:#FFF4D9;color:#8B4513;border:1px solid #D4AF37;border-radius:20px;font-size:14px;font-weight:600;margin-bottom:16px;">
        ✦ श्री मंगलनाथ मंदिर एवं महाकालेश्वर ज्योतिर्लिंग, उज्जैन ✦
      </p>
      <h1 style="font-size:32px;color:#8B2500;margin-bottom:16px;line-height:1.3;">
        उज्जैन में मंगल दोष पूजा एवं वैदिक अनुष्ठान – पंडित दीपक पंड्या
      </h1>
      <p style="font-size:18px;max-width:850px;margin:0 auto 24px;color:#4A2810;font-weight:500;">
        Mangal Dosh Puja Nivaran Ujjain me Pandit Deepak Pandya dwara ki jane wali vaidik puja seva hai. 15+ saal ke anubhav ke saath yahan Mangal Bhat, Kaal Sarp, Pitru Dosh, Navgrah Shanti, Rudrabhishek aur anya anushthan karaye jate hain. Booking ke liye call ya WhatsApp 24x7 uplabdh hai.
      </p>
      <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-top:20px;">
        <a href="tel:+916263401651" style="background:#B83000;color:#FFF;padding:12px 28px;border-radius:8px;font-weight:bold;text-decoration:none;">📞 तुरंत कॉल करें: +91 62634 01651</a>
        <a href="https://wa.me/916263401651" style="background:#25D366;color:#FFF;padding:12px 28px;border-radius:8px;font-weight:bold;text-decoration:none;">💬 WhatsApp पर बात करें</a>
      </div>
    </section>

    <!-- Quick Facts / Ek Nazar Me Table -->
    <section style="margin-bottom:48px;background:#FDF8F2;padding:24px;border-radius:12px;border:1px solid #E6D0B3;">
      <h2 style="font-size:24px;color:#8B2500;margin-bottom:16px;">एक नज़र में / Quick Facts</h2>
      <table style="width:100%;border-collapse:collapse;text-align:left;">
        <thead>
          <tr style="background:#EFE2D3;color:#4A2810;">
            <th style="padding:10px 14px;border:1px solid #D9C3AB;">विवरण</th>
            <th style="padding:10px 14px;border:1px solid #D9C3AB;">जानकारी</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">संस्थान</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">Mangal Dosh Puja Nivaran (मंगल दोष पूजन केंद्र)</td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">प्रधान पुरोहित</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">वैदिक पंडित दीपक पंड्या (15+ वर्षों का अनुभव)</td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">स्थान</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">मंगलनाथ मंदिर क्षेत्र एवं महाकालेश्वर, उज्जैन (मध्य प्रदेश)</td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">हेल्पलाइन / WhatsApp</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">+91 62634 01651 (24x7 उपलब्ध)</td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">ईमेल</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">mangaldoshpujanivaran@gmail.com</td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">पूजा का प्रकार</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">मंगल भात पूजा, कालसर्प दोष, पितृ दोष त्रिपिंडी, नवग्रह शांति, रुद्राभिषेक, महामृत्युंजय, वास्तु शांति</td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">पूजा का खर्च</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">Puja ka kharch puja ke prakar par nirbhar karta hai. Sahi jankari ke liye call ya WhatsApp karein.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Services Overview -->
    <section style="margin-bottom:48px;">
      <h2 style="font-size:26px;color:#8B2500;margin-bottom:20px;border-bottom:2px solid #D4AF37;padding-bottom:8px;">
        उज्जैन में प्रमुख वैदिक पूजा सेवाएं
      </h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:20px;">
        
        <article style="border:1px solid #E6D0B3;border-radius:10px;padding:20px;background:#FFF;">
          <h3 style="color:#B83000;margin-top:0;">1. मंगल भात पूजा (Mangal Bhat Puja Ujjain)</h3>
          <p>Mangal Bhat Puja Ujjain ke Mangalnath Mandir se jude kshetra me hone wali vaidik puja hai, jo Mangal grah ki shanti ke liye ki jati hai. Manglik dosh nivaran aur vivah me aa rahi badhaon ke samadhan hetu Mangalwar ko shubh mana jata hai.</p>
          <a href="/#/services/mangal-dosh-puja" style="color:#B83000;font-weight:bold;">संपूर्ण विवरण एवं बुकिंग →</a>
        </article>

        <article style="border:1px solid #E6D0B3;border-radius:10px;padding:20px;background:#FFF;">
          <h3 style="color:#B83000;margin-top:0;">2. कालसर्प दोष निवारण पूजा (Kaal Sarp Dosh Puja)</h3>
          <p>Kaal Sarp Dosh tab mana jata hai jab kundli me sabhi grah Rahu aur Ketu ke beech aa jate hain. Iski shanti ke liye Ujjain me Kaal Sarp Dosh Nivaran Puja vaidik vidhi se ki jati hai. Amavasya aur Nag Panchami par vishesh mahatva.</p>
          <a href="/#/services/kaal-sarp-dosh" style="color:#B83000;font-weight:bold;">संपूर्ण विवरण एवं बुकिंग →</a>
        </article>

        <article style="border:1px solid #E6D0B3;border-radius:10px;padding:20px;background:#FFF;">
          <h3 style="color:#B83000;margin-top:0;">3. पितृ दोष निवारण एवं त्रिपिंडी श्राद्ध</h3>
          <p>Pitru Dosh nivaran aur Tripindi Shradh vo vaidik karm hain jo pitron ki shanti aur tript ke uddeshya se kiye jate hain. Ujjain Ram Ghat par pitro ke tarpan aur pind daan ki vaidik parampara hai.</p>
          <a href="/#/services/pitru-dosh-nivaran" style="color:#B83000;font-weight:bold;">संपूर्ण विवरण एवं बुकिंग →</a>
        </article>

        <article style="border:1px solid #E6D0B3;border-radius:10px;padding:20px;background:#FFF;">
          <h3 style="color:#B83000;margin-top:0;">4. नवग्रह शांति एवं ग्रह दोष निवारण</h3>
          <p>Navgrah Shanti puja me Surya se Ketu tak nau grahon ki shanti ke liye mantra jaap aur havan kiya jata hai. Sabhi grahon ki anukoolta ke liye vidhipurvak pujan.</p>
          <a href="/#/services/navgrah-shanti" style="color:#B83000;font-weight:bold;">संपूर्ण विवरण एवं बुकिंग →</a>
        </article>

        <article style="border:1px solid #E6D0B3;border-radius:10px;padding:20px;background:#FFF;">
          <h3 style="color:#B83000;margin-top:0;">5. महामृत्युंजय अनुष्ठान एवं जप</h3>
          <p>Mahamrityunjay anushthan Bhagwan Shiv ke Mahamrityunjay mantra ka vidhipurvak jaap hai, jo swasthya, suraksha aur dirghayu ki kamna se Mahakal nagri Ujjain me karaya jata hai.</p>
          <a href="/#/services/mahamrityunjay" style="color:#B83000;font-weight:bold;">संपूर्ण विवरण एवं बुकिंग →</a>
        </article>

        <article style="border:1px solid #E6D0B3;border-radius:10px;padding:20px;background:#FFF;">
          <h3 style="color:#B83000;margin-top:0;">6. रुद्राभिषेक (Rudrabhishek Ujjain)</h3>
          <p>Rudrabhishek me Bhagwan Shiv ka jal, doodh, panchamrit aur anya dravyon se mantron ke saath abhishek kiya jata hai. Somwar aur Shravan maas me vishesh mahatva.</p>
          <a href="/#/services/rudrabhishek" style="color:#B83000;font-weight:bold;">संपूर्ण विवरण एवं बुकिंग →</a>
        </article>

        <article style="border:1px solid #E6D0B3;border-radius:10px;padding:20px;background:#FFF;">
          <h3 style="color:#B83000;margin-top:0;">7. वास्तु शांति पूजा (Vastu Shanti Puja)</h3>
          <p>Naye ghar, dukan ya karyalay me pravesh se pehle vastu dosh nivaran evam sakaratmak urja ke sanchar hetu Vastu Shanti pujan aur havan.</p>
          <a href="/#/services/vastu-shanti" style="color:#B83000;font-weight:bold;">संपूर्ण विवरण एवं बुकिंग →</a>
        </article>

        <article style="border:1px solid #E6D0B3;border-radius:10px;padding:20px;background:#FFF;">
          <h3 style="color:#B83000;margin-top:0;">8. नवचंडी एवं शतचंडी अनुष्ठान</h3>
          <p>Maa Durga ki aradhana me Durga Saptashati ke path aur havan ke roop me shatru badha mukti aur sarv-manokamna purti ke liye kiya jane wala anushthan.</p>
          <a href="/#/services/navchandi-shatchandi" style="color:#B83000;font-weight:bold;">संपूर्ण विवरण एवं बुकिंग →</a>
        </article>

        <article style="border:1px solid #E6D0B3;border-radius:10px;padding:20px;background:#FFF;">
          <h3 style="color:#B83000;margin-top:0;">9. विस्तृत वैदिक कुंडली विश्लेषण</h3>
          <p>Janm tithi, samay aur sthan ke aadhar par grahon ki sthiti, dasha-antardasha aur doshon ka vishleshan. Online aur phone consultation uplabdh.</p>
          <a href="/#/kundli-analysis" style="color:#B83000;font-weight:bold;">संपूर्ण विवरण एवं परामर्श →</a>
        </article>

      </div>
    </section>

    <!-- Services Comparison Table -->
    <section style="margin-bottom:48px;">
      <h2 style="font-size:24px;color:#8B2500;margin-bottom:16px;">पूजा तुलना सारणी / Puja Comparison Table</h2>
      <table style="width:100%;border-collapse:collapse;text-align:left;">
        <thead>
          <tr style="background:#EFE2D3;color:#4A2810;">
            <th style="padding:10px 14px;border:1px solid #D9C3AB;">Puja</th>
            <th style="padding:10px 14px;border:1px solid #D9C3AB;">Kis Liye</th>
            <th style="padding:10px 14px;border:1px solid #D9C3AB;">Avadhi</th>
            <th style="padding:10px 14px;border:1px solid #D9C3AB;">Booking</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">मंगल भात पूजा</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">मांगलिक दोष, विवाह में बाधा निवारण</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">3-5 घंटे</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;"><a href="https://wa.me/916263401651" style="color:#25D366;font-weight:bold;">WhatsApp</a></td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">कालसर्प दोष पूजा</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">राहु-केतु शांति, असफलता व सर्प स्वप्न मुक्ति</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">4-6 घंटे</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;"><a href="https://wa.me/916263401651" style="color:#25D366;font-weight:bold;">WhatsApp</a></td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">त्रिपिंडी श्राद्ध</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">पितृ दोष निवारण, पूर्वजों की शांति</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">5-8 घंटे</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;"><a href="https://wa.me/916263401651" style="color:#25D366;font-weight:bold;">WhatsApp</a></td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">नवग्रह शांति</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">समस्त 9 ग्रहों की अनुकूलता, ग्रह दोष शांति</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">4-7 घंटे</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;"><a href="https://wa.me/916263401651" style="color:#25D366;font-weight:bold;">WhatsApp</a></td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">महामृत्युंजय अनुष्ठान</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">स्वास्थ्य लाभ, अकाल मृत्यु भय निवारण, दीर्घायु</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">2-3 दिन (सवा लाख जप)</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;"><a href="https://wa.me/916263401651" style="color:#25D366;font-weight:bold;">WhatsApp</a></td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;font-weight:bold;">रुद्राभिषेक</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">भगवान शिव की विशेष कृपा, मनोकामना पूर्ति</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;">2-3 घंटे</td>
            <td style="padding:10px 14px;border:1px solid #D9C3AB;"><a href="https://wa.me/916263401651" style="color:#25D366;font-weight:bold;">WhatsApp</a></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Pandit Ji About Box -->
    <section style="margin-bottom:48px;background:#FFF9F0;border:1px solid #E6D0B3;border-radius:12px;padding:24px;">
      <h2 style="font-size:24px;color:#8B2500;margin-top:0;">वैदिक पंडित दीपक पंड्या के बारे में</h2>
      <p style="font-size:16px;">
        पंडित दीपक पंड्या जी को उज्जैन के पवित्र तीर्थ क्षेत्र एवं मंगलनाथ मंदिर में 15 से अधिक वर्षों का वैदिक कर्मकांड एवं ज्योतिषीय अनुभव है। वे शास्त्रोंक्त विधि से प्रत्येक पूजन विधिपूर्वक संपन्न कराते हैं। देश-विदेश से आने वाले भक्तों के लिए उज्जैन में पूजन एवं ऑनलाइन संकल्प की विशेष व्यवस्था उपलब्ध है।
      </p>
      <p style="font-weight:bold;color:#4A2810;">
        📍 पता: मंगलनाथ मंदिर मार्ग, उज्जैन, मध्य प्रदेश | 📞 दूरभाष: +91 62634 01651 | ✉️ mangaldoshpujanivaran@gmail.com
      </p>
    </section>

    <!-- Devotees From Other Cities -->
    <section style="margin-bottom:48px;background:#FDF8F2;border:1px solid #E6D0B3;border-radius:12px;padding:24px;">
      <h2 style="font-size:24px;color:#8B2500;margin-top:0;">बाहर के शहरों के भक्तों के लिए (Indore, Bhopal, Delhi, Mumbai, Pune, Gujarat)</h2>
      <p>
        यदि आप उज्जैन नहीं आ सकते, तो वैदिक विधि से आपके नाम, गोत्र और जन्म विवरण से ऑनलाइन संकल्प लेकर पूजा संपन्न की जाती है। पूजा का लाइव वीडियो या वीडियो रिकॉर्डिंग WhatsApp पर उपलब्ध कराई जाती है और प्रसाद डाक द्वारा भेजा जाता है।
      </p>
      <ol style="padding-left:20px;">
        <li><strong>स्टेप 1:</strong> Call या WhatsApp (+91 62634 01651) पर संपर्क करें।</li>
        <li><strong>स्टेप 2:</strong> अपनी जन्म कुंडली या समस्या साझा करें और शुभ तिथि तय करें।</li>
        <li><strong>स्टेप 3:</strong> उज्जैन पधारकर या घर बैठे ऑनलाइन संकल्प के माध्यम से पूजा संपन्न कराएं।</li>
      </ol>
    </section>

    <!-- Frequently Asked Questions (FAQ) -->
    <section style="margin-bottom:48px;">
      <h2 style="font-size:24px;color:#8B2500;margin-bottom:20px;border-bottom:2px solid #D4AF37;padding-bottom:8px;">
        अक्सर पूछे जाने वाले प्रश्न (FAQs)
      </h2>
      
      <div style="margin-bottom:16px;">
        <h3 style="font-size:18px;color:#8B2500;margin-bottom:6px;">Q: मंगल दोष पूजा उज्जैन में क्यों करानी चाहिए?</h3>
        <p style="margin:0;color:#4A2810;">उज्जैन का मंगलनाथ मंदिर मत्स्य पुराण के अनुसार मंगल ग्रह का जन्म स्थान माना जाता है। यहाँ की गई मंगल भात पूजा सर्वाधिक फलदायी और प्रभावी मानी जाती है।</p>
      </div>

      <div style="margin-bottom:16px;">
        <h3 style="font-size:18px;color:#8B2500;margin-bottom:6px;">Q: पूजा का खर्च कितना होता है?</h3>
        <p style="margin:0;color:#4A2810;">Puja ka kharch puja ke prakar par nirbhar karta hai. Sahi jankari ke liye call ya WhatsApp karein.</p>
      </div>

      <div style="margin-bottom:16px;">
        <h3 style="font-size:18px;color:#8B2500;margin-bottom:6px;">Q: क्या बाहर के शहरों से ऑनलाइन पूजा संभव है?</h3>
        <p style="margin:0;color:#4A2810;">हाँ, जो श्रद्धालु उज्जैन नहीं आ सकते, उनके नाम और गोत्र से विधिपूर्वक संकल्प लेकर पूजा कराई जाती है और वीडियो विवरण साझा किया जाता है।</p>
      </div>

      <div style="margin-bottom:16px;">
        <h3 style="font-size:18px;color:#8B2500;margin-bottom:6px;">Q: कालसर्प दोष पूजा के लिए कौन सा दिन सबसे अच्छा है?</h3>
        <p style="margin:0;color:#4A2810;">अमावस्या, नाग पंचमी, महाशिवरात्रि और श्रावण मास के दिन कालसर्प दोष शांति के लिए अत्यंत शुभ माने जाते हैं।</p>
      </div>

      <div style="margin-bottom:16px;">
        <h3 style="font-size:18px;color:#8B2500;margin-bottom:6px;">Q: पूजा की बुकिंग कैसे करें?</h3>
        <p style="margin:0;color:#4A2810;">आप सीधे +91 62634 01651 पर कॉल या WhatsApp करके अपनी पसंदीदा तिथि और समय पर बुकिंग कर सकते हैं। सेवा 24x7 उपलब्ध है।</p>
      </div>
    </section>

  </main>

  <footer style="background:#1A0700;color:#E6D3B3;padding:24px 20px;text-align:center;font-size:14px;border-top:1px solid #D4AF37;">
    <p style="margin:0 0 8px;">© 2026 Mangal Dosh Puja Nivaran (मंगल दोष पूजन केंद्र), उज्जैन। सर्वाधिकार सुरक्षित।</p>
    <p style="margin:0;">संपर्क: +91 62634 01651 | ईमेल: mangaldoshpujanivaran@gmail.com | मंगलनाथ मंदिर क्षेत्र, उज्जैन, मध्य प्रदेश</p>
  </footer>
</div>
`;

// Replace <div id="root"></div> with prerenderedBody
if (html.includes('<div id="root"></div>')) {
  html = html.replace('<div id="root"></div>', prerenderedBody);
  fs.writeFileSync(indexPath, html, 'utf-8');
  console.log('✓ Successfully injected prerendered static HTML into dist/index.html');
} else {
  console.log('Notice: <div id="root"></div> already contains content or was replaced.');
}

// Generate dist/404.html with the same bundle for GitHub Pages SPA fallback
const notFoundPath = path.join(distDir, '404.html');
fs.writeFileSync(notFoundPath, html, 'utf-8');
console.log('✓ Successfully created dist/404.html fallback for GitHub Pages');
