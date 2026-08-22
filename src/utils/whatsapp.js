import { COMPANY } from '../data/company';

/**
 * Builds a direct WhatsApp chat URL with optional customized message
 */
export function getWhatsAppUrl(customMessage) {
  const defaultMessage = `Hello Kailaash Enterprises, I would like to enquire about your services in Pune. Please share details and quotation options.`;
  const message = customMessage || defaultMessage;
  const encodedText = encodeURIComponent(message.trim());
  const phone = COMPANY.phoneRaw.replace(/\D/g, ''); // Extract only digits
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Generates specific inquiry message for a given service
 */
export function getServiceInquiryUrl(serviceTitle) {
  const message = `Hello Kailaash Enterprises, I am interested in your *${serviceTitle}* service in Pune. Please share details, pricing, and availability for a site visit.`;
  return getWhatsAppUrl(message);
}

/**
 * Generates site visit booking message
 */
export function getSiteVisitUrl(serviceName = '') {
  const serviceText = serviceName ? ` for *${serviceName}*` : '';
  const message = `Hello Kailaash Enterprises, I would like to book a *Free Site Visit & Laser Measurement* in Pune${serviceText}. Please let me know your available schedule.`;
  return getWhatsAppUrl(message);
}

/**
 * Generates quick topic inquiry message
 */
export function getQuickInquiryUrl(topic) {
  const message = `Hello Kailaash Enterprises, I would like to enquire about: *${topic}*. Please share information and pricing options.`;
  return getWhatsAppUrl(message);
}

/**
 * Backward compatibility helper for quotation messages
 */
export function getQuoteSubmissionUrl(formData = {}) {
  const { fullName, phone, email, service, message } = formData;
  let text = `Hello Kailaash Enterprises,\nName: ${fullName || 'Client'}\nPhone: ${phone || ''}\nService: ${service || 'General'}\n${message ? `Note: ${message}` : ''}`;
  return getWhatsAppUrl(text);
}
