export default function SchemaOrg() {
  const hotelSchema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Hotel Langhe & Monferrato',
    description: 'Hotel a Costigliole d\'Asti, punto di partenza ideale per visitare Langhe e Monferrato.',
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
    priceRange: '€€€',
    amenityFeature: [
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
    petsAllowed: 'https://schema.org/False',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Dove si trova l\'Hotel Langhe & Monferrato?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'hotel si trova a Costigliole d\'Asti, nel cuore delle Langhe e del Monferrato, patrimonio UNESCO. Dista 15 minuti da Asti e 30 minuti da Alba.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quali servizi offre l\'hotel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'hotel offre camere accoglienti, Wi-Fi gratuito, parcheggio e sale meeting. Contattaci per informazioni aggiornate sui servizi disponibili durante il soggiorno.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual è il prezzo delle camere?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le camere partono da €120 a notte per la Camera Standard. Offriamo anche Camere Triple (€150), Quadruple (€200), Family (€220) e Suite Deluxe (€140).',
        },
      },
      {
        '@type': 'Question',
        name: 'È possibile cancellare la prenotazione?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì, offriamo cancellazione gratuita fino a 48 ore prima dell\'arrivo. Per prenotazioni non rimborsabili con sconto, la cancellazione non è possibile.',
        },
      },
      {
        '@type': 'Question',
        name: 'Gli animali sono ammessi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gli animali domestici non sono ammessi nelle nostre strutture per garantire comfort e igiene a tutti gli ospiti.',
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
