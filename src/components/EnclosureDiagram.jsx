import { useId } from 'react';
import { fittings } from '../data/catalog';

// Isometric line drawing of each enclosure with numbered fittings, after the catalogue's
// "An ensemble of fittings" spreads. Numbers match the order of enclosure.fittings.
// 3D units: x = width (right), y = height (up), z = depth (into the room).
const W = 240;
const H = 220;
const D = 160;
const pt = (x, y, z) => [24 + x + z * 0.5, 292 - y - z * 0.3];
const poly = (pts) => pts.map((p) => pt(...p).join(',')).join(' ');

const walls = {
  floor: [[0, 0, 0], [W, 0, 0], [W, 0, D], [0, 0, D]],
  back: [[0, 0, D], [W, 0, D], [W, H, D], [0, H, D]],
  left: [[0, 0, 0], [0, 0, D], [0, H, D], [0, H, 0]],
  right: [[W, 0, 0], [W, 0, D], [W, H, D], [W, H, 0]],
};

// glass: quads; rods: [from, to]; marks: { id, at: [[x,y,z]...], kind, off: [dx,dy] }
const layouts = {
  'single-panel': {
    walls: ['left'],
    glass: [[[120, 0, D], [120, 0, 50], [120, 200, 50], [120, 200, D]]],
    rods: [[[0, 200, 58], [120, 200, 58]]],
    marks: {
      'support-rod': { at: [[60, 200, 58]], kind: 'none', off: [-6, -26] },
      'rod-to-glass': { at: [[120, 200, 58]], kind: 'block', off: [22, -16] },
      'l-connector': { at: [[120, 150, D], [120, 50, D]], kind: 'block', off: [24, -4] },
      'wall-to-rod': { at: [[0, 200, 58]], kind: 'block', off: [-20, -14] },
      'u-connector': { at: [[120, 0, 105]], kind: 'block', off: [22, 14] },
    },
  },
  'l-type': {
    walls: ['left'],
    glass: [
      [[150, 0, 50], [150, 0, D], [150, 200, D], [150, 200, 50]],
      [[90, 0, 50], [150, 0, 50], [150, 200, 50], [90, 200, 50]],
      [[0, 0, 50], [88, 0, 50], [88, 200, 50], [0, 200, 50]],
    ],
    rods: [[[110, 200, 50], [110, 200, D]]],
    marks: {
      'support-rod': { at: [[110, 200, 105]], kind: 'none', off: [-4, -24] },
      'wall-to-rod': { at: [[110, 200, D]], kind: 'block', off: [18, -16] },
      'rod-to-glass': { at: [[110, 200, 50]], kind: 'block', off: [-20, -16] },
      'handle-towel-rod': { at: [[76, 110, 50]], kind: 'handle', off: [-24, 0] },
      'l-connector': { at: [[150, 130, 50], [150, 40, 50]], kind: 'block', off: [22, 4] },
      'door-hinge': { at: [[0, 165, 50], [0, 35, 50]], kind: 'hinge', off: [-20, 6] },
    },
  },
  sliding: {
    walls: ['left', 'right'],
    glass: [
      [[110, 0, 60], [W, 0, 60], [W, 200, 60], [110, 200, 60]],
      [[0, 0, 50], [130, 0, 50], [130, 200, 50], [0, 200, 50]],
    ],
    rods: [[[0, 210, 52], [W, 210, 52]]],
    marks: {
      'sliding-wheel': { at: [[25, 204, 50], [105, 204, 50]], kind: 'wheel', off: [-10, -24] },
      'l-connector': { at: [[W, 140, 60], [W, 40, 60]], kind: 'block', off: [22, 0] },
      'door-handle': { at: [[118, 108, 50]], kind: 'knob', off: [22, 14] },
      'floor-guide': { at: [[122, 0, 55]], kind: 'block', off: [10, 20] },
    },
  },
  swing: {
    walls: ['left', 'right'],
    glass: [
      [[0, 0, 60], [68, 0, 60], [68, 200, 60], [0, 200, 60]],
      [[70, 0, 60], [168, 0, 60], [168, 200, 60], [70, 200, 60]],
      [[170, 0, 60], [W, 0, 60], [W, 200, 60], [170, 200, 60]],
    ],
    rods: [[[205, 200, 60], [205, 200, D]]],
    marks: {
      'door-hinge': { at: [[70, 165, 60], [70, 35, 60]], kind: 'hinge', off: [-22, 0] },
      'support-rod': { at: [[205, 200, 110]], kind: 'none', off: [-6, -22] },
      'wall-to-rod': { at: [[205, 200, D]], kind: 'block', off: [20, -14] },
      'handle-towel-rod': { at: [[158, 110, 60]], kind: 'handle', off: [-24, 4] },
      'l-connector': { at: [[W, 130, 60], [0, 130, 60]], kind: 'block', off: [22, 0] },
    },
  },
};

function Mark({ kind, at, on }) {
  const [x, y] = pt(...at);
  const cls = `dg-fit ${on ? 'is-on' : ''}`;
  if (kind === 'none') return null;
  if (kind === 'hinge') return <rect x={x - 3.5} y={y - 7} width="7" height="14" rx="1.5" className={cls} />;
  if (kind === 'handle') return <rect x={x - 2} y={y - 22} width="4" height="44" rx="2" className={cls} />;
  if (kind === 'knob' || kind === 'wheel') return <circle cx={x} cy={y} r={kind === 'wheel' ? 5.5 : 4.5} className={cls} />;
  return <rect x={x - 4} y={y - 4} width="8" height="8" rx="1.5" className={cls} />;
}

// `active` highlights one fitting; `onPick(id)` makes the numbered callouts clickable (the list
// beside the drawing is the keyboard-accessible control).
export default function EnclosureDiagram({ enclosure, className = '', showNumbers = true, active, onPick }) {
  const id = useId().replace(/:/g, '');
  const L = layouts[enclosure.slug];
  const label = `${enclosure.name} diagram showing: ${enclosure.fittings.map((f, i) => `${i + 1} ${fittings[f]}`).join(', ')}`;

  return (
    <svg viewBox="0 0 380 312" className={`diagram ${className}`} role="img" aria-label={label}>
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#339CD3" stopOpacity=".26" />
          <stop offset=".55" stopColor="#339CD3" stopOpacity=".09" />
          <stop offset="1" stopColor="#339CD3" stopOpacity=".18" />
        </linearGradient>
      </defs>
      <polygon points={poly(walls.floor)} className="dg-floor" />
      <polygon points={poly(walls.back)} className="dg-wall" />
      {L.walls.map((w) => <polygon key={w} points={poly(walls[w])} className="dg-side" />)}
      {L.glass.map((q, i) => (
        <g key={i}>
          <polygon points={poly(q)} fill={`url(#g${id})`} className="dg-glass" />
          <line x1={pt(...q[0])[0] + 10} y1={pt(...q[0])[1] - 40} x2={pt(...q[0])[0] + 34} y2={pt(...q[0])[1] - 100} className="dg-sheen" />
        </g>
      ))}
      {L.rods.map(([a, b], i) => {
        const [x1, y1] = pt(...a);
        const [x2, y2] = pt(...b);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className={`dg-rod ${active === 'support-rod' ? 'is-on' : ''}`} />;
      })}
      {enclosure.fittings.map((f) => L.marks[f].at.map((a, j) => <Mark key={`${f}${j}`} kind={L.marks[f].kind} at={a} on={active === f} />))}
      {showNumbers &&
        enclosure.fittings.map((f, i) => {
          const m = L.marks[f];
          const [x, y] = pt(...m.at[0]);
          const [dx, dy] = m.off;
          return (
            <g key={f} className={`dg-callout ${active === f ? 'is-on' : ''} ${active && active !== f ? 'is-dim' : ''}`} onClick={onPick ? () => onPick(f) : undefined} style={onPick ? { cursor: 'pointer' } : undefined}>
              <line x1={x} y1={y} x2={x + dx} y2={y + dy} />
              <circle cx={x + dx} cy={y + dy} r="9" />
              <text x={x + dx} y={y + dy + 3.6} textAnchor="middle">{i + 1}</text>
            </g>
          );
        })}
    </svg>
  );
}
