const _d = (s) => (typeof atob !== 'undefined' ? atob(s) : '');

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || _d('Ry1WU0o5UkdXOUhD');

export function initGoogleTag() {
  if (typeof window === 'undefined') return;
  if (window.__gtag_loaded) return;
  window.__gtag_loaded = true;

  const tagId = GA_MEASUREMENT_ID;
  if (!tagId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', tagId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${tagId}`;
  document.head.appendChild(script);
}

export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch (err) {
      console.warn('Analytics tracking error:', err);
    }
  }
}

export function trackPageView(path, title) {
  trackEvent('page_view', {
    page_title: title || (typeof document !== 'undefined' ? document.title : ''),
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    page_path: path || (typeof window !== 'undefined' ? window.location.pathname : ''),
    send_to: GA_MEASUREMENT_ID,
  });
}

export function trackLead(leadType, details = {}) {
  trackEvent('generate_lead', {
    lead_type: leadType,
    send_to: GA_MEASUREMENT_ID,
    ...details,
  });
}

export function trackBookingSubmit(serviceName) {
  trackEvent('booking_submit', {
    service: serviceName,
  });
  trackLead('booking_form', {
    service: serviceName,
  });
}

export function trackKundliSubmit() {
  trackEvent('kundli_submit', {});
  trackLead('kundli_form', {});
}

export function trackContactSubmit() {
  trackEvent('contact_submit', {});
  trackLead('contact_form', {});
}

export function trackWhatsAppClick(location = 'unknown') {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: location,
  });
  trackLead('whatsapp', {
    source_location: location,
  });
}

export function trackPhoneCall(location = 'unknown') {
  trackEvent('phone_call_click', {
    event_category: 'engagement',
    event_label: location,
  });
  trackLead('phone_call', {
    source_location: location,
  });
}
