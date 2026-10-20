// Small form building blocks with consistent labels, hints and accessible error messages.

export function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p className="field-error" id={id} role="alert">
      {message}
    </p>
  );
}

export function Field({ label, optional, hint, error, children, htmlFor, errorId }) {
  return (
    <div className={`form-group ${error ? 'has-error' : ''}`}>
      <label className="form-label" htmlFor={htmlFor}>
        {label}
        {optional ? <span className="optional"> (optional)</span> : <span className="required" aria-hidden="true"> *</span>}
      </label>
      {hint && <p className="field-hint">{hint}</p>}
      {children}
      <FieldError id={errorId} message={error} />
    </div>
  );
}

// Hidden field that only bots fill in. Kept off-screen rather than display:none so naive bots still see it.
export function Honeypot({ inputRef }) {
  return (
    <div className="hp-field" aria-hidden="true">
      <label htmlFor="website-hp">Leave this field empty</label>
      <input ref={inputRef} type="text" id="website-hp" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
    </div>
  );
}

export function OptionCards({ legend, name, options, value, onChange, optional = true }) {
  return (
    <fieldset className="form-group">
      <legend className="form-label">
        {legend}
        {optional && <span className="optional"> (optional)</span>}
      </legend>
      <div className="option-cards-grid">
        {options.map((o) => (
          <label key={o.value} className="radio-card">
            <input type="radio" name={name} value={o.value} checked={value === o.value} onChange={onChange} />
            <span className="radio-card-label">
              <span>{o.label}</span>
              {o.sub && <span className="radio-card-sub">{o.sub}</span>}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
