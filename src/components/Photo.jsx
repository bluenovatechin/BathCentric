import manifest from '../generated/images.json';
import { asset } from '../config';
import { photoFocus } from '../data/catalog';

// Responsive photo from /photos (WebP srcset + JPG fallback, intrinsic size to avoid layout shift).
// `focus` (CSS object-position, e.g. "65% 50%") keeps the subject in frame when a slot crops the photo;
// a default per photo can be set in photoFocus (data/catalog.js).
// Until a photo exists, `fallback` (or a soft neutral panel) is shown instead.
export default function Photo({ name, alt, sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw', priority = false, fallback = null, className = '', focus }) {
  const info = manifest[name];
  if (!info) return fallback ?? <div className={`ph ${className}`} aria-hidden="true" />;
  const pos = focus || photoFocus[name];
  return (
    <picture className={className}>
      <source type="image/webp" sizes={sizes} srcSet={info.widths.map((w) => `${asset(`img/${name}-${w}.webp`)} ${w}w`).join(', ')} />
      <img
        src={asset(`img/${name}.jpg`)}
        alt={alt}
        width={info.w}
        height={info.h}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchpriority={priority ? 'high' : undefined}
        style={pos ? { objectPosition: pos } : undefined}
      />
    </picture>
  );
}

export const hasPhoto = (name) => Boolean(manifest[name]);
