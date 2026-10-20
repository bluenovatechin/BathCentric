// Form validation. Returns { field: message } for every problem found.

export function mobileDigits(v) {
  let d = String(v || '').replace(/\D/g, '');
  if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
  if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
  return d;
}

export function validate(v, { requireMessage = false } = {}) {
  const e = {};
  const name = (v.name || '').trim();
  if (name.length < 2) e.name = 'Please enter your name.';
  else if (name.length > 80 || !/^[\p{L}\p{M}.' -]+$/u.test(name)) e.name = 'Please use letters only (up to 80).';

  if (!(v.phone || '').trim()) e.phone = 'Please enter your mobile number.';
  else if (!/^[6-9]\d{9}$/.test(mobileDigits(v.phone))) e.phone = 'Enter a valid 10-digit mobile number.';

  const city = (v.city || '').trim();
  if (city.length < 2) e.city = 'Please enter your city.';
  else if (city.length > 80) e.city = 'Please keep this under 80 characters.';

  const email = (v.email || '').trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = 'Please enter a valid email address.';

  const msg = (v.message || '').trim();
  if (requireMessage && msg.length < 5) e.message = 'Please tell us how we can help.';
  else if (msg.length > 1000) e.message = 'Please keep your message under 1,000 characters.';
  return e;
}
