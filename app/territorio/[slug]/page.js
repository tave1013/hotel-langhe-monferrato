import { getGuideBySlug, getAllGuideSlugs } from '@/lib/territorioData';
import GuideDetailPage from '@/components/GuideDetailPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllGuideSlugs();
}

export async function generateMetadata({ params }) {
  const guida = getGuideBySlug(params.slug);
  if (!guida) return {};
  return {
    title: `${guida.nome}: ${guida.sottotitolo} | Hotel Langhe & Monferrato`,
    description: `${guida.tagline} Mini guida completa su ${guida.nome}: cosa vedere, dove mangiare, informazioni pratiche e come arrivarci dall'Hotel Langhe & Monferrato.`,
    keywords: `${guida.nome.toLowerCase()}, ${guida.categoria.toLowerCase()}, langhe monferrato, cosa vedere piemonte, hotel langhe`,
    openGraph: {
      title: `${guida.nome}: ${guida.sottotitolo}`,
      description: guida.tagline,
      images: [{ url: guida.heroImg, width: 1200, height: 630, alt: guida.nome }],
      type: 'article',
      locale: 'it_IT',
    },
  };
}

export default function GuidaPage({ params }) {
  const guida = getGuideBySlug(params.slug);
  if (!guida) notFound();
  return <GuideDetailPage guida={guida} />;
}
