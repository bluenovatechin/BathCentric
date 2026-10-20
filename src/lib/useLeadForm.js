import { useCallback, useRef, useState } from 'react';
import { validateLead } from './validation';
import { submitLead } from './leads';
import { track } from './analytics';

// State, validation and submission shared by the quote and contact forms.
export default function useLeadForm({ initial, formName, requireMessage = false, toFields }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle' }); // idle | sending | sent | error | handoff
  const [turnstileToken, setTurnstileToken] = useState('');
  const startedAt = useRef(Date.now());
  const honeypotRef = useRef(null);
  const formRef = useRef(null);

  const onChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
    setErrors((errs) => (errs[name] ? { ...errs, [name]: undefined } : errs));
  }, []);

  const set = useCallback((name, value) => setValues((v) => ({ ...v, [name]: value })), []);

  const focusFirstError = (errs) => {
    const first = Object.keys(errs).find((k) => errs[k]);
    const el = first && formRef.current?.querySelector(`[name="${first}"]`);
    if (el) el.focus();
  };

  const onSubmit = async (e, photos = []) => {
    e.preventDefault();
    const errs = validateLead(values, { requireMessage });
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      setStatus({ state: 'idle' });
      focusFirstError(errs);
      return;
    }
    setStatus({ state: 'sending' });
    const fields = toFields(values);
    const result = await submitLead({
      formName,
      fields,
      photos,
      honeypot: honeypotRef.current?.value || '',
      startedAt: startedAt.current,
      turnstileToken,
    });
    if (result.ok) {
      if (!result.spam) track('generate_lead', { form_name: formName });
      setStatus({ state: 'sent', fields });
    } else if (result.notConfigured) {
      setStatus({ state: 'handoff', fields });
    } else {
      track('form_submit_error', { form_name: formName });
      setStatus({ state: 'error', message: result.error, fields });
    }
  };

  const fieldProps = (name) => ({
    name,
    id: `${formName}-${name}`,
    value: values[name] ?? '',
    onChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${formName}-${name}-error` : undefined,
  });

  return { values, set, errors, status, setStatus, onChange, onSubmit, fieldProps, honeypotRef, formRef, setTurnstileToken };
}
