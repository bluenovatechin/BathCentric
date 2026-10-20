// Form validation shared by the quote and contact forms. Returns { field: message } for each error.

const digits = (s) => String(s || '').replace(/\D/g, '');

export function normaliseIndianMobile(value) {
  let d = digits(value);
  if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
  if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
  return d;
}

export const isIndianMobile = (value) => /^[6-9]\d{9}$/.test(normaliseIndianMobile(value));
export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value).trim());

export function validateLead(values, { requireMessage = false } = {}) {
  const errors = {};
  const name = String(values.name || '').trim();
  if (name.length < 2) errors.name = 'Please enter your name.';
  else if (name.length > 80) errors.name = 'Please keep your name under 80 characters.';
  else if (!/^[\p{L}\p{M}.' -]+$/u.test(name)) errors.name = 'Please use letters only.';

  if (!String(values.mobile || '').trim()) errors.mobile = 'Please enter your mobile number.';
  else if (!isIndianMobile(values.mobile)) errors.mobile = 'Enter a valid 10-digit Indian mobile number, e.g. 98200 55443.';

  if (values.email && !isEmail(values.email)) errors.email = 'Enter a valid email address, or leave it blank.';

  const location = String(values.location || '').trim();
  if (location.length < 2) errors.location = 'Please tell us your city and area.';
  else if (location.length > 120) errors.location = 'Please keep this under 120 characters.';

  const message = String(values.message || '').trim();
  if (requireMessage && message.length < 10) errors.message = 'Please tell us a little about what you need (at least 10 characters).';
  else if (message.length > 2000) errors.message = 'Please keep your message under 2,000 characters.';

  if (values.dimensions && String(values.dimensions).length > 120) errors.dimensions = 'Please keep this under 120 characters.';
  if (!values.consent) errors.consent = 'Please agree so we can contact you about your enquiry.';
  return errors;
}

export const PHOTO_LIMITS = { maxFiles: 5, maxBytes: 10 * 1024 * 1024, types: ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'] };

export function checkPhoto(file, currentCount) {
  if (currentCount >= PHOTO_LIMITS.maxFiles) return `You can add up to ${PHOTO_LIMITS.maxFiles} photos.`;
  if (!file.type.startsWith('image/')) return `${file.name} is not an image. Please add JPG, PNG or WebP photos.`;
  if (file.size > PHOTO_LIMITS.maxBytes) return `${file.name} is larger than 10 MB.`;
  return null;
}
