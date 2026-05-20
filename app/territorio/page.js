import SchemaOrg from '@/components/SchemaOrg';
import TerritorioClient from '@/app/territorio/TerritorioClient';

export const metadata = {
  title: 'Cosa Vedere nelle Langhe e Monferrato | Guide Pratiche',
  description: 'Scopri le attrazioni di Langhe e Monferrato: Alba, castelli, Big Bench, cantine, e-bike e tartufi. Guide pratiche per il tuo soggiorno a Costigliole d\'Asti.',
  openGraph: {
    title: 'Cosa Vedere nelle Langhe e Monferrato | Guide Pratiche',
    description: 'Scopri le attrazioni di Langhe e Monferrato: Alba, castelli, Big Bench, cantine, e-bike e tartufi. Guide pratiche per il tuo soggiorno a Costigliole d\'Asti.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://hotel-langhe-monferrato.vercel.app/territorio',
    images: [{ url: '/foto/cantine-soto-terra.webp', width: 1200, height: 630 }],
    updatedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosa Vedere nelle Langhe e Monferrato | Guide Pratiche',
    description: 'Scopri le attrazioni di Langhe e Monferrato: Alba, castelli, Big Bench, cantine, e-bike e tartufi. Guide pratiche per il tuo soggiorno.',
    images: ['/foto/cantine-soto-terra.webp'],
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
