'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';

export default function PrenotaClient() {
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
            src="/foto/Camere.webp"
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
