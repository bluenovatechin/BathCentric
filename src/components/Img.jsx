import manifest from '../data/image-manifest.json';
import { asset } from '../config/site';

// Responsive photo: WebP srcset with the original JPG as fallback, intrinsic width/height
// to prevent layout shift, lazy-loaded unless `priority` is set (use it for the LCP image only).
export default function Img({ src, alt, sizes = '(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 100vw', priority = false, className, style }) {
  const key = src.replace(/^\/+/, '');
  const info = manifest[key];
  const base = key.replace(/^images\//, '').replace(/\.\w+$/, '');
  const srcSet = info?.v.map((w) => `${asset(`images/w/${base}-${w}.webp`)} ${w}w`).join(', ');

  const img = (
    <img
      src={asset(key)}
      alt={alt}
      width={info?.w}
      height={info?.h}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchpriority={priority ? 'high' : undefined}
      className={className}
      style={style}
    />
  );

  if (!srcSet) return img;
  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      {img}
    </picture>
  );
}
