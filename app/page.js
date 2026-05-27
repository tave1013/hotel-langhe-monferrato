import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import Testimonials from '@/components/Testimonials';
import ExperienceShowcase from '@/components/ExperienceShowcase';
import Deals from '@/components/Deals';
import TerritoryGuides from '@/components/TerritoryGuides';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SchemaOrg from '@/components/SchemaOrg';
import geoContext from '@/lib/geoContext';

export const metadata = {
  title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle a Costigliole d\'Asti',
  description: geoContext.positioning.long,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle a Costigliole d\'Asti',
    description: geoContext.positioning.long,
    url: 'https://hotel-langhe-monferrato.vercel.app',
    siteName: geoContext.brand,
    type: 'website',
    locale: 'it_IT',
    images: [{ url: '/foto/hotel-langhe-monferrato.jpg', width: 1200, height: 630, alt: 'Hotel Langhe & Monferrato Costigliole d\'Asti' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle a Costigliole d\'Asti',
    description: geoContext.positioning.long,
    images: ['/foto/hotel-langhe-monferrato.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Rooms />
      <Amenities />
      {/* <Deals /> */}
      <ExperienceShowcase />
      <Testimonials />
      <TerritoryGuides />
      <div style={{ marginTop: '60px' }}>
        <FAQ />
      </div>
      <CTA />
      <Footer />
    </>
  );
}
