import { useState } from 'react';
import Photo, { hasPhoto } from '../components/Photo';
import { PageHeader, CtaBand } from '../components/Blocks';
import { gallery } from '../data/catalog';

const FILTERS = [
  ['all', 'All'],
  ['single-panel', 'Single Panel'],
  ['l-type', 'L-Type'],
  ['sliding', 'Sliding'],
  ['swing', 'Swing'],
  ['glass', 'Glass & add-ons'],
  ['project', 'Projects'],
];

export default function Gallery() {
  const items = gallery.filter((g) => hasPhoto(g.photo));
  const filters = FILTERS.filter(([id]) => id === 'all' || items.some((g) => g.type === id));
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? items : items.filter((g) => g.type === filter);

  return (
    <>
      <PageHeader crumbs={[['Gallery']]} kicker="Gallery" no="01" title={<>Ideas for your <em>space</em></>}>
        Enclosure types, glass and finishes, so you can picture what suits your bathroom.
      </PageHeader>
      <section className="section">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter the gallery">
            {filters.map(([id, label]) => (
              <button key={id} type="button" className="filter" aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}</button>
            ))}
          </div>
          <div className="mosaic" data-reveal="stagger" aria-live="polite">
            {shown.map((g) => (
              <figure key={g.photo}>
                <div className="figure-frame"><Photo name={g.photo} alt={g.caption || 'Shower enclosure installation'} sizes="(min-width: 900px) 33vw, 50vw" /></div>
                {g.caption && <figcaption>{g.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
