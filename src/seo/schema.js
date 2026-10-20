// JSON-LD structured data (schema.org) for search engines and AI answer engines.
import { site, SITE_URL, absoluteUrl } from '../config/site';
import { enclosureBySlug, faqs, finishes, glassTypes, warranty, START_PRICE } from '../data/catalog';

const maxPrice = Math.max(...finishes.map((f) => f.price));

export function buildSchema(path, meta) {
  const businessId = `${SITE_URL}/#business`;
  const pageUrl = absoluteUrl(path);

  const business = {
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId,
    name: site.name,
    url: `${SITE_URL}/`,
    logo: absoluteUrl('/images/logo.png'),
    image: absoluteUrl('/images/og-image.jpg'),
    description: site.description,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: `₹${START_PRICE}–₹${maxPrice} per sq ft`,
    currenciesAccepted: 'INR',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
    ...(site.serviceArea ? { areaServed: site.serviceArea } : { areaServed: { '@type': 'Country', name: 'India' } }),
    knowsAbout: ['Shower enclosures', 'Frameless shower glass', 'Toughened glass partitions', 'Sliding shower doors'],
    ...(Object.values(site.social).some(Boolean) ? { sameAs: Object.values(site.social).filter(Boolean) } : {}),
  };

  const graph = [
    business,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: site.name,
      inLanguage: 'en-IN',
      publisher: { '@id': businessId },
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': businessId },
      inLanguage: 'en-IN',
    },
  ];

  if (meta.crumbs) {
    const items = [['Home', '/'], ...meta.crumbs];
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: items.map(([name, href], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: absoluteUrl(href || path),
      })),
    });
  }

  if (meta.enclosure) {
    const e = enclosureBySlug[meta.enclosure];
    graph.push({
      '@type': 'Product',
      '@id': `${pageUrl}#product`,
      name: e.name,
      description: e.description,
      image: absoluteUrl(`/${e.image}`),
      brand: { '@type': 'Brand', name: site.name },
      category: 'Shower Enclosures',
      material: '8mm toughened Saint-Gobain glass, SS 304 stainless steel fittings',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Glass options', value: glassTypes.map((g) => g.name).join(', ') },
        { '@type': 'PropertyValue', name: 'Fitting finishes', value: finishes.map((f) => f.name).join(', ') },
        { '@type': 'PropertyValue', name: 'Fittings warranty', value: `${warranty.fittingsYears} years` },
        { '@type': 'PropertyValue', name: 'Glass breakage warranty', value: `${warranty.glassYears} years` },
      ],
      offers: finishes.map((f) => ({
        '@type': 'Offer',
        name: `${e.shortName} enclosure, ${f.name} finish`,
        price: f.price,
        priceCurrency: 'INR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: f.price,
          priceCurrency: 'INR',
          unitCode: 'FTK',
          unitText: 'per sq ft',
          valueAddedTaxIncluded: false,
        },
        seller: { '@id': businessId },
        url: pageUrl,
      })),
    });
  }

  if (meta.faq) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
