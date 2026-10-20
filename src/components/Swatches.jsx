// Visual stand-ins drawn in CSS/SVG: metallic finish swatches and a "plant behind glass" view
// for each glass type (the way the catalogue presents its glass collection).

export function FinishSwatch({ id, size = 'md' }) {
  return <span className={`swatch swatch-${id} swatch-${size}`} aria-hidden="true" />;
}

const Plant = () => (
  <svg viewBox="0 0 120 120" className="glass-plant" aria-hidden="true">
    <path d="M60 70c-8-14-26-18-34-12 10 2 20 8 26 16M60 70c6-16 24-24 34-18-11 1-22 8-28 18M60 72c-2-18 6-34 16-38-6 8-9 22-10 38M60 72c0-16-10-30-20-32 7 7 12 20 14 32" fill="#5E9C6B" />
    <path d="M42 72h36l-5 34H47z" fill="#E07A4F" />
    <path d="M42 72h36v6H42z" fill="#C9653E" />
  </svg>
);

export function GlassView({ id, label }) {
  return (
    <div className={`glass-view glass-${id}`} role="img" aria-label={`${label}: view of a potted plant through the glass`}>
      <Plant />
      <span className="glass-pane" aria-hidden="true" />
    </div>
  );
}
