import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import Testimonials from '@/components/Testimonials';
import Deals from '@/components/Deals';
import TerritoryGuides from '@/components/TerritoryGuides';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Rooms />
      <Amenities />
      <Deals />
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
