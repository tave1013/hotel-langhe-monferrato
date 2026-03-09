'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Ospite';
  const email = searchParams.get('email') || '';
  const phone = searchParams.get('phone') || '';
  const adults = searchParams.get('adults') || '1';
  const children = searchParams.get('children') || '0';
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const message = searchParams.get('message') || '';

  // Calcola il numero di notti
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const [dayIn, monthIn, yearIn] = checkIn.split('/');
    const [dayOut, monthOut, yearOut] = checkOut.split('/');
    const dateIn = new Date(yearIn, monthIn - 1, dayIn);
    const dateOut = new Date(yearOut, monthOut - 1, dayOut);
    const diffTime = Math.abs(dateOut - dateIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const nights = calculateNights();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto"
    >
      {/* Header con icona successo */}
      <div className="text-center mb-10">
        <div 
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
          style={{ background: '#C9A870' }}
        >
          <svg 
            className="w-10 h-10 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        
        <h1 
          className="text-4xl md:text-5xl mb-6"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, color: '#2C2520' }}
        >
          Richiesta Prenotazione Effettuata con Successo
        </h1>
        
        <div 
          className="w-20 h-0.5 mx-auto mb-6"
          style={{ background: '#C9A870' }}
        ></div>
        
        <p 
          className="text-lg leading-relaxed mb-6"
          style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
        >
          Hai effettuato la richiesta con successo! Ti risponderemo entro 24 ore.
          <br />
          Qui sotto trovi il riepilogo della tua richiesta.
        </p>
        
        <p 
          className="text-base leading-relaxed px-6 py-4 rounded-lg inline-block"
          style={{ 
            fontFamily: 'Lato, sans-serif', 
            color: '#2C2520',
            background: 'rgba(201, 168, 112, 0.1)',
            border: '1px solid rgba(201, 168, 112, 0.3)'
          }}
        >
          📧 Riceverai anche un'email di conferma della prenotazione all'indirizzo <strong>{email}</strong>
        </p>
      </div>

      {/* Riepilogo dati */}
      <div 
        className="bg-white rounded-none p-8 mb-8 border"
        style={{ borderColor: '#C9A870', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      >
        <h2 
          className="text-2xl mb-6 pb-4 border-b"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontWeight: 500, 
            color: '#2C2520',
            borderColor: 'rgba(201, 168, 112, 0.3)'
          }}
        >
          Riepilogo Richiesta
        </h2>
        
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <span 
              className="font-bold min-w-[180px]"
              style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}
            >
              Nome:
            </span>
            <span 
              style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
            >
              {name}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <span 
              className="font-bold min-w-[180px]"
              style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}
            >
              Email:
            </span>
            <span 
              style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
            >
              {email}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <span 
              className="font-bold min-w-[180px]"
              style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}
            >
              Cellulare:
            </span>
            <span 
              style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
            >
              {phone}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <span 
              className="font-bold min-w-[180px]"
              style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}
            >
              Adulti:
            </span>
            <span 
              style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
            >
              {adults} {adults === '1' ? 'adulto' : 'adulti'}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <span 
              className="font-bold min-w-[180px]"
              style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}
            >
              Bambini:
            </span>
            <span 
              style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
            >
              {children} {children === '1' ? 'bambino' : 'bambini'}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <span 
              className="font-bold min-w-[180px]"
              style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}
            >
              Check-in:
            </span>
            <span 
              style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
            >
              {checkIn}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <span 
              className="font-bold min-w-[180px]"
              style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}
            >
              Check-out:
            </span>
            <span 
              style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
            >
              {checkOut}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <span 
              className="font-bold min-w-[180px]"
              style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}
            >
              Notti:
            </span>
            <span 
              style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
            >
              {nights} {nights === 1 ? 'notte' : 'notti'}
            </span>
          </div>
          
          {message && (
            <div className="flex flex-col md:flex-row md:items-start gap-2 pt-2 border-t" style={{ borderColor: 'rgba(201, 168, 112, 0.2)' }}>
              <span 
                className="font-bold min-w-[180px]"
                style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}
              >
                Messaggio:
              </span>
              <span 
                style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
              >
                {message}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Pulsante torna alla home */}
      <div className="text-center">
        <Link 
          href="/"
          className="inline-block px-10 py-4 rounded-none text-white font-semibold transition-all bg-[#C9A870] hover:bg-[#A8854A]"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          Torna alla Home
        </Link>
      </div>
    </motion.div>
  );
}

export default function GraziePage() {
  return (
    <>
      <Navbar />

      {/* Content */}
      <section 
        style={{ 
          background: '#FAF7F2', 
          padding: '120px 0 100px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <Suspense fallback={
            <div className="text-center">
              <div 
                className="inline-block w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
                style={{ borderColor: '#C9A870', borderTopColor: 'transparent' }}
              />
            </div>
          }>
            <ThankYouContent />
          </Suspense>
        </div>
      </section>

      <Footer />
    </>
  );
}
