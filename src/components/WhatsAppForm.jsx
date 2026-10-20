import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { validate } from '../lib/validate';
import { sendToWhatsApp, whatsappReady } from '../lib/whatsapp';
import { brand, telHref, mailHref } from '../config';

// Shared WhatsApp form shell: text fields, validation, optional choice groups, and the
// "WhatsApp opened" confirmation with a fallback link (for browsers that block pop-ups).
export function TextField({ id, label, optional, error, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}{optional ? <span className="opt"> (optional)</span> : <span className="req" aria-hidden="true"> *</span>}</label>
      {children}
      {error && <p className="error" id={`${id}-error`}>{error}</p>}
    </div>
  );
}

export function ChoiceGroup({ legend, name, value, onChange, options, multiple = false }) {
  return (
    <fieldset className="field">
      <legend>{legend}<span className="opt"> (optional)</span></legend>
      <div className="chips">
        {options.map((o) => (
          <label className="chip" key={o.value}>
            <input type={multiple ? 'checkbox' : 'radio'} name={name} value={o.value} checked={multiple ? value.includes(o.value) : value === o.value} onChange={onChange} />
            <span>{o.icon}{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function WhatsAppForm({ formName, title, initial, toFields, requireMessage = false, submitLabel = 'Send on WhatsApp', render }) {
  const [v, setV] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);
  const form = useRef(null);
  const done = useRef(null);
  const ready = whatsappReady();

  useEffect(() => { if (sent) done.current?.focus(); }, [sent]);

  const set = (name, value) => setV((s) => ({ ...s, [name]: value }));
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && Array.isArray(v[name])) set(name, checked ? [...v[name], value] : v[name].filter((x) => x !== value));
    else set(name, value);
    if (errors[name]) setErrors((x) => ({ ...x, [name]: undefined }));
  };
  const aria = (n) => ({ 'aria-invalid': errors[n] ? 'true' : undefined, 'aria-describedby': errors[n] ? `${formName}-${n}-error` : undefined });

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(v, { requireMessage });
    setErrors(errs);
    const bad = Object.keys(errs)[0];
    if (bad) {
      form.current?.querySelector(`[name="${bad}"]`)?.focus();
      return;
    }
    setSent(sendToWhatsApp(formName, title, toFields(v)));
  };

  if (sent) {
    return (
      <div className="result" tabIndex={-1} ref={done}>
        <span className="result-icon" aria-hidden="true"><Icon name="chat" size={26} /></span>
        <h2 className="h3">Your message is ready in WhatsApp</h2>
        <p>Press send in WhatsApp to reach us on <strong>{brand.whatsappDisplay}</strong>{formName === 'quote' ? ', and attach photos of your bathroom in the chat' : ''}. If WhatsApp did not open, use the button below.</p>
        <div className="result-actions">
          <a className="btn btn-ink" href={sent.url} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={16} /> Open WhatsApp · {brand.whatsappDisplay}</a>
          <button type="button" className="btn btn-line" onClick={() => setSent(null)}>Edit details</button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" ref={form} onSubmit={submit} noValidate>
      <p className="form-note">Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required. Your details open in WhatsApp, ready to send to {brand.name} on <strong>{brand.whatsappDisplay}</strong>.</p>
      {render({ v, errors, onChange, aria, set })}
      {ready ? (
        <button type="submit" className="btn btn-ink btn-block btn-lg"><Icon name="chat" size={18} /> {submitLabel}</button>
      ) : (
        <p className="alert" role="status">
          Online enquiries are being set up.{' '}
          {brand.phone && <>Call <a href={telHref}>{brand.phone}</a>{brand.email ? ' or ' : '.'}</>}
          {brand.email && <>email <a href={mailHref}>{brand.email}</a>.</>}
        </p>
      )}
    </form>
  );
}
