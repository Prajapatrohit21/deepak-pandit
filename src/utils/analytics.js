// ============================================================
// analytics.js — Google tag (gtag.js) tracking utilities
// ============================================================

/**
 * Safely send an event to Google Tag / Google Ads / GA4
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch (err) {
      console.warn('Analytics tracking error:', err);
    }
  }
}

/**
 * Track lead conversions (Google Ads / GA4 primary conversion)
 */
export function trackLead(leadType, details = {}) {
  trackEvent('generate_lead', {
    lead_type: leadType,
    send_to: 'G-CZVLTH4CHD',
    ...details,
  });
}

/**
 * Track Booking form submit
 */
export function trackBookingSubmit(serviceName) {
  trackEvent('booking_submit', {
    service: serviceName,
  });
  trackLead('booking_form', {
    service: serviceName,
  });
}

/**
 * Track Kundali Analysis form submit
 */
export function trackKundliSubmit() {
  trackEvent('kundli_submit', {});
  trackLead('kundli_form', {});
}

/**
 * Track Contact form submit
 */
export function trackContactSubmit() {
  trackEvent('contact_submit', {});
  trackLead('contact_form', {});
}

/**
 * Track WhatsApp click / conversation start
 */
export function trackWhatsAppClick(location = 'unknown') {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: location,
  });
  trackLead('whatsapp', {
    source_location: location,
  });
}

/**
 * Track direct phone call click
 */
export function trackPhoneCall(location = 'unknown') {
  trackEvent('phone_call_click', {
    event_category: 'engagement',
    event_label: location,
  });
  trackLead('phone_call', {
    source_location: location,
  });
}
