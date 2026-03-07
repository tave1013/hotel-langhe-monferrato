import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import VideoBanner from '@/components/VideoBanner';
import Testimonials from '@/components/Testimonials';
import Deals from '@/components/Deals';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Hotel Langhe &amp; Monferrato — Hotel di Lusso nel Cuore del Piemonte</h1>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Rooms />
      <Amenities />
      <VideoBanner />
      <Testimonials />
      <Deals />
      <CTA />
      <Footer />
    </>
  );
}
