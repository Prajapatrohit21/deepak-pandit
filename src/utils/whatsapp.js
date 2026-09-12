// ============================================================
// whatsapp.js — WhatsApp URL builder utilities
// ============================================================

const WA_NUMBER = '916263401651';
export const WEBSITE_URL = 'https://mangaldoshpujanivaran.in/';

/**
 * Build a WhatsApp deep-link with pre-filled message
 */
export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
}

/**
 * Build booking WhatsApp message from form data
 */
export function buildBookingMessage({ name, phone, service, problem, date, lang = 'hi' }) {
  if (lang === 'en') {
    return `🙏 *New Puja Booking Request*

*Name:* ${name}
*Phone:* ${phone}
*Puja/Service:* ${service}
*Problem:* ${problem}
${date ? `*Preferred Date:* ${date}` : ''}

*Source:* ${WEBSITE_URL}

Jai Shri Mahakal 🙏`;
  }

  return `🙏 *नई पूजा बुकिंग अनुरोध*

*नाम:* ${name}
*फोन:* ${phone}
*पूजन सेवा:* ${service}
*समस्या:* ${problem}
${date ? `*पसंदीदा तिथि:* ${date}` : ''}

*स्रोत:* ${WEBSITE_URL}

जय श्री महाकाल 🙏`;
}

/**
 * Build Kundali analysis WhatsApp message
 */
export function buildKundliMessage({ name, phone, dob, tob, pob, query, lang = 'hi' }) {
  if (lang === 'en') {
    return `🔮 *Kundali Analysis Request*

*Name:* ${name}
*Phone/WhatsApp:* ${phone}
*Date of Birth:* ${dob}
*Time of Birth:* ${tob}
*Place of Birth:* ${pob}
${query ? `*Query:* ${query}` : ''}

*Source:* ${WEBSITE_URL}

Jai Shri Mahakal 🙏`;
  }

  return `🔮 *कुंडली विश्लेषण अनुरोध*

*नाम:* ${name}
*फोन/WhatsApp:* ${phone}
*जन्म तिथि:* ${dob}
*जन्म समय:* ${tob}
*जन्म स्थान:* ${pob}
${query ? `*जिज्ञासा:* ${query}` : ''}

*स्रोत:* ${WEBSITE_URL}

जय श्री महाकाल 🙏`;
}

/**
 * Build contact WhatsApp message
 */
export function buildContactMessage({ name, phone, message, lang = 'hi' }) {
  if (lang === 'en') {
    return `📞 *Contact Message*

*Name:* ${name}
*Phone:* ${phone}
*Message:* ${message}

*Source:* ${WEBSITE_URL}

Jai Shri Mahakal 🙏`;
  }

  return `📞 *संपर्क संदेश*

*नाम:* ${name}
*फोन:* ${phone}
*संदेश:* ${message}

*स्रोत:* ${WEBSITE_URL}

जय श्री महाकाल 🙏`;
}

export const PHONE = '6263401651';
export const PHONE_HREF = 'tel:+916263401651';
export const WA_HREF = `https://wa.me/${WA_NUMBER}`;
