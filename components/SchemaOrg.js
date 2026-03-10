export default function SchemaOrg() {
  const hotelSchema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Hotel Langhe & Monferrato',
    description: 'Hotel 4 stelle nel cuore delle Langhe e del Monferrato, immerso nel verde del Parco della Contessa a Costigliole d\'Asti.',
    image: 'https://hotel-langhe-monferrato.vercel.app/foto/hotel-langhe-monferrato.jpg',
    '@id': 'https://hotel-langhe-monferrato.vercel.app',
    url: 'https://hotel-langhe-monferrato.vercel.app',
    telephone: '+39-0141-966-012',
    email: 'info@hotellanghe.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Parco della Contessa',
      addressLocality: 'Costigliole d\'Asti',
      addressRegion: 'Piemonte',
      postalCode: '14055',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.7881,
      longitude: 8.1834,
    },
    starRating: {
      '@type': 'Rating',
      ratingValue: '4',
    },
    priceRange: '€€€',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Piscina',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Ristorante',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Spa',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Wi-Fi gratuito',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Parcheggio gratuito',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Sale meeting',
        value: true,
      },
    ],
    checkinTime: '15:00',
    checkoutTime: '11:00',
    numberOfRooms: '58',
    petsAllowed: 'https://schema.org/False',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.1',
      reviewCount: '600',
      bestRating: '5',
      worstRating: '1',
    },
    containsPlace: [
      {
        '@type': 'Restaurant',
        name: 'Ristorante Gourmet',
        servesCuisine: 'Italiana, Piemontese',
        acceptsReservations: 'https://schema.org/True',
      },
      {
        '@type': 'HealthAndBeautyBusiness',
        name: 'Spa & Benessere',
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Massaggi' },
          { '@type': 'LocationFeatureSpecification', name: 'Sauna' },
          { '@type': 'LocationFeatureSpecification', name: 'Bagno turco' },
        ],
      },
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://hotel-langhe-monferrato.vercel.app/prenota',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'LodgingReservation',
        name: 'Prenotazione Hotel',
      },
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hotel Langhe & Monferrato',
    url: 'https://hotel-langhe-monferrato.vercel.app',
    logo: 'https://hotel-langhe-monferrato.vercel.app/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+39-0141-966-012',
      contactType: 'customer service',
      email: 'info@hotellanghe.com',
      areaServed: 'IT',
      availableLanguage: ['Italian', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/hotellanghe',
      'https://www.instagram.com/hotellanghe',
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hotel-langhe-monferrato.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Camere',
        item: 'https://hotel-langhe-monferrato.vercel.app/camere',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Offerte',
        item: 'https://hotel-langhe-monferrato.vercel.app/offerte',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
