import { getGuideBySlug, getAllGuideSlugs } from '@/lib/territorioData';
import { guideEn } from '@/lib/territorioDataEn';
import GuidePageClient from '@/app/territorio/[slug]/GuidePageClient';

export async function generateStaticParams() {
  return getAllGuideSlugs();
}

export async function generateMetadata({ params }) {
  const guida = guideEn.find((g) => g.slug === params.slug) || getGuideBySlug(params.slug);
  if (!guida) return {};
  return {
    title: `${guida.nome}: ${guida.sottotitolo} | Hotel Langhe & Monferrato`,
    description: `${guida.tagline} Guida completa a ${guida.nome}: cosa vedere, dove mangiare, informazioni pratiche e come raggiungerlo dall'Hotel Langhe & Monferrato.`,
    keywords: `${guida.nome.toLowerCase()}, ${guida.categoria.toLowerCase()}, langhe monferrato, what to see in piedmont, hotel langhe`,
    alternates: {
      canonical: `/territorio/${params.slug}`,
    },
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
  return <GuidePageClient slug={params.slug} />;
}
