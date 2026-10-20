// Top-down plan of each enclosure: walls, glass, how the door moves and the space it needs in front.
// A simple drawing so anyone can see how the enclosure sits in the bathroom.
const WALL = 'pv-wall';
const GLASS = 'pv-glass';

function Wall({ d }) { return <path d={d} className={WALL} />; }
function Glass({ x1, y1, x2, y2, door = false }) { return <line x1={x1} y1={y1} x2={x2} y2={y2} className={`${GLASS} ${door ? 'is-door' : ''}`} />; }

const plans = {
  'single-panel': () => (
    <>
      <Wall d="M20 20 H280 M20 20 V160" />
      <Glass x1={170} y1={20} x2={170} y2={112} />
      <path d="M170 112 V160" className="pv-open" />
      <text x="95" y="80" className="pv-room">Shower</text>
      <path d="M232 140 L188 140" className="pv-arrow" markerEnd="url(#pv-head)" />
      <text x="214" y="160" className="pv-note">Walk in</text>
    </>
  ),
  sliding: () => (
    <>
      <Wall d="M30 110 V20 H270 V110" />
      <Glass x1={150} y1={104} x2={270} y2={104} />
      <Glass x1={30} y1={112} x2={168} y2={112} door />
      <text x="150" y="66" className="pv-room">Shower</text>
      <path d="M70 132 H140" className="pv-arrow" markerEnd="url(#pv-head)" markerStart="url(#pv-head-s)" />
      <text x="105" y="152" className="pv-note">Door slides</text>
      <text x="215" y="140" className="pv-note">No space needed</text>
    </>
  ),
  swing: () => (
    <>
      <Wall d="M30 110 V20 H270 V110" />
      <Glass x1={30} y1={110} x2={100} y2={110} />
      <Glass x1={200} y1={110} x2={270} y2={110} />
      <Glass x1={100} y1={110} x2={176} y2={176} door />
      <path d="M100 110 L200 110 A100 100 0 0 1 176 176 Z" className="pv-swing" />
      <text x="150" y="66" className="pv-room">Shower</text>
      <text x="236" y="160" className="pv-note">Space to open</text>
    </>
  ),
  'l-type': () => (
    <>
      <Wall d="M20 20 H280 M20 20 V170" />
      <Glass x1={190} y1={20} x2={190} y2={120} />
      <Glass x1={20} y1={120} x2={70} y2={120} />
      <Glass x1={70} y1={120} x2={124} y2={174} door />
      <Glass x1={146} y1={120} x2={190} y2={120} />
      <path d="M70 120 L146 120 A76 76 0 0 1 124 174 Z" className="pv-swing" />
      <text x="105" y="72" className="pv-room">Shower</text>
      <text x="236" y="80" className="pv-note">Corner</text>
      <text x="200" y="160" className="pv-note">Space to open</text>
    </>
  ),
};

export default function PlanView({ enclosure }) {
  const Plan = plans[enclosure.slug];
  return (
    <svg viewBox="0 0 300 190" className="plan" role="img" aria-label={`${enclosure.name} seen from above`}>
      <defs>
        <marker id="pv-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#14638f" /></marker>
        <marker id="pv-head-s" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M10 0 L0 5 L10 10 z" fill="#14638f" /></marker>
      </defs>
      <rect x="0" y="0" width="300" height="190" className="pv-floor" />
      <Plan />
    </svg>
  );
}
