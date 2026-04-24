/** Digits only (country code + number) for https://wa.me/… */
export const WHATSAPP_NUMBER_DIGITS = '919110640992';

export const PHONE_TEL = 'tel:+919110640992';

export const PHONE_DISPLAY = '+91 91106 40992';

export const EMAIL_ADDRESS = 'shhealthcentre@gmail.com';
export const EMAIL_MAILTO = `mailto:${EMAIL_ADDRESS}`;

export const CLINIC_ADDRESS =
  'No.9, 1st Floor, CMR Main Road, HRBR 2nd Block, Above Indusind Bank, Kalyan Nagar, Bengaluru - 560043.';

export const APPOINTMENT_CALL_WINDOW = 'Call between 9:00 AM - 10:00 AM';

export const CLINIC_HOURS = [
  { day: 'Monday - Friday', lines: ['10:00 AM - 1:00 PM', '4:00 PM - 8:00 PM'] },
  { day: 'Saturday', lines: ['10:00 AM - 1:00 PM'] },
  { day: 'Sunday', lines: ['HOLIDAY'] },
] as const;

const defaultWhatsAppMessage =
  'Hello, I would like to book a consultation at S.H. Health Centre.';

/**
 * Opens WhatsApp chat with the clinic number and an optional pre-filled message.
 */
export function whatsappHref(message: string = defaultWhatsAppMessage): string {
  return `https://wa.me/${WHATSAPP_NUMBER_DIGITS}?text=${encodeURIComponent(message)}`;
}
