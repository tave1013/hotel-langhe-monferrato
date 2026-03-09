'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name     = searchParams.get('name')     || 'Ospite';
  const email    = searchParams.get('email')    || '';
  const phone    = searchParams.get('phone')    || '';
  const adults   = searchParams.get('adults')   || '1';
  const children = searchParams.get('children') || '0';
  const checkIn  = searchParams.get('checkIn')  || '';
  const checkOut = searchParams.get('checkOut') || '';
  const message  = searchParams.get('message')  || '';
  const nights   = parseInt(searchParams.get('nights') || '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto"
    >
      {/* Icona successo */}
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
          style={{ background: '#C9A870' }}
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1
          className="text-4xl md:text-5xl mb-6"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, color: '#2C2520' }}
        >
          Richiesta Inviata con Successo
        </h1>

        <div className="w-20 h-0.5 mx-auto mb-6" style={{ background: '#C9A870' }}></div>

        <p
          className="text-lg leading-relaxed mb-6"
          style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
        >
          Abbiamo ricevuto la tua richiesta. Ti risponderemo entro 24 ore per confermare la disponibilità.
        </p>

        {email && (
          <p
            className="text-base leading-relaxed px-6 py-4 inline-block"
            style={{
              fontFamily: 'Lato, sans-serif',
              color: '#2C2520',
              background: 'rgba(201, 168, 112, 0.1)',
              border: '1px solid rgba(201, 168, 112, 0.3)'
            }}
          >
            📧 Riceverai una email di conferma all'indirizzo <strong>{email}</strong>
          </p>
        )}
      </div>

      {/* Riepilogo */}
      <div
        className="bg-white p-8 mb-8"
        style={{ border: '1px solid #C9A870', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
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
          {[
            { label: 'Nome',      value: name },
            { label: 'Email',     value: email },
            { label: 'Cellulare', value: phone },
            { label: 'Adulti',    value: `${adults} ${adults === '1' ? 'adulto' : 'adulti'}` },
            { label: 'Bambini',   value: `${children} ${children === '1' ? 'bambino' : 'bambini'}` },
            { label: 'Check-in',  value: checkIn },
            { label: 'Check-out', value: checkOut },
            { label: 'Notti',     value: `${nights} ${nights === 1 ? 'notte' : 'notti'}` },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col md:flex-row md:items-start gap-2">
              <span className="font-bold min-w-[180px]" style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}>
                {label}:
              </span>
              <span style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}>{value}</span>
            </div>
          ))}

          {message && (
            <div
              className="flex flex-col md:flex-row md:items-start gap-2 pt-4 border-t"
              style={{ borderColor: 'rgba(201, 168, 112, 0.2)' }}
            >
              <span className="font-bold min-w-[180px]" style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520' }}>
                Messaggio:
              </span>
              <span style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}>{message}</span>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-block px-10 py-4 text-white font-semibold transition-all bg-[#C9A870] hover:bg-[#A8854A]"
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

      <section style={{ background: '#FAF7F2', padding: '120px 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Suspense fallback={
            <div className="text-center">
              <div
                className="inline-block w-12 h-12 border-4 rounded-full animate-spin"
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