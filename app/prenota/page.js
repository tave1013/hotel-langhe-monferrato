'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';

function PrenotaPage() {
  const handleBookingSubmit = async (formData) => {
    // Here you can add your logic to send the form data to your backend
    console.log('Booking form submitted:', formData);
    
    // Example: send to an API endpoint
    // await fetch('/api/booking', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ height: '42vh', minHeight: 300 }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1800&q=85&fit=crop"
            alt="Prenota Hotel Langhe"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.65)' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>Miglior Prezzo Garantito</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2' }}>Prenota il Tuo Soggiorno</h1>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section style={{ background: '#FAF7F2', padding: '80px 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <BookingForm onSubmit={handleBookingSubmit} />
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Prenota Hotel Langhe | Miglior Prezzo Garantito Online',
  description: 'Prenota direttamente sul sito ufficiale e risparmia. Camere da €120/notte, cancellazione gratuita, colazione inclusa. Miglior prezzo garantito.',
  openGraph: {
    title: 'Prenota Ora | Hotel Langhe & Monferrato',
    description: 'Prenota al miglior prezzo garantito. Cancellazione gratuita e colazione inclusa.',
    url: 'https://hotel-langhe-monferrato.vercel.app/prenota',
    images: [{ url: '/foto/hotel-langhe-monferrato.jpg', width: 1200, height: 630 }],
  },
};

export default PrenotaPage;
