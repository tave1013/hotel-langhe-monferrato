import SchemaOrg from '@/components/SchemaOrg';
import TerritorioClient from '@/app/territorio/TerritorioClient';

export const metadata = {
  title: 'What to See in the Langhe | Area Guide & Attractions',
  description: 'Discover Asti, Alba and truffle experiences, Canelli Underground Cathedrals, Monferrato castles, Big Benches, e-bike tours, local craft brewery and Nizza è Barbera. Mini guides for your stay in the Langhe.',
  openGraph: {
    title: 'Langhe and Monferrato Area | Guides & Attractions',
    description: 'Practical guides to explore Langhe and Monferrato: art, wine, food and nature.',
    type: 'website',
    locale: 'en_US',
    url: 'https://hotel-langhe-monferrato.vercel.app/territorio',
    images: [{ url: '/foto/alba.webp', width: 1200, height: 630 }],
    updatedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Area: Langhe & Monferrato',
    description: 'Practical mini guides to explore Langhe and Monferrato.',
    images: ['/foto/alba.webp'],
  },
};

export default function TerritorioPage() {
  return (
    <>
      <SchemaOrg />
      <TerritorioClient />
    </>
  );
}
