'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import InfoPopup from './InfoPopup';
import 'react-day-picker/dist/style.css';

export default function BookingForm({ onSubmit }) {
  const formTopRef = useRef(null);
  const calendarRef = useRef(null);
  const submittingRef = useRef(false);
  const lastSubmitTime = useRef(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    single: 0,
    matrimonial: 0,
    twin: 0,
    triple: 0,
    quadruple: 0,
    suite: 0,
    dateRange: undefined,
    colazione: '',
    lateCheckout: 'no',
    pets: 0,
    extras: [],
    message: '',
    website: '' // Honeypot field
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  const validatePhone = (phone) => {
    const digits = phone.replace(/[^\d]/g, '');
    return digits.length >= 10;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sanitizeInput = (input) => {
    return input.trim().replace(/[<>"']/g, '');
  };

  const roomFieldConfigs = [
    { key: 'single', label: 'Singola' },
    { key: 'matrimonial', label: 'Matrimoniale' },
    { key: 'twin', label: 'Doppia', helper: '(letti separati)' },
    { key: 'triple', label: 'Tripla' },
    { key: 'quadruple', label: 'Quadrupla' },
    { key: 'suite', label: 'Suite' },
  ];

  const extrasOptions = [
    { id: 'bollicine',  label: 'Bottiglia di bollicine con 2 calici', price: '20€' },
    { id: 'cantine',   label: 'Visita alle cantine con degustazione', price: 'da 25€ p.p.' },
    { id: 'tartufo',   label: 'Esperienza caccia al tartufo', price: 'da 87€ p.p.' },
    { id: 'ebike',     label: 'Tour e-bike per le Langhe', price: 'da 35€ p.p.' },
    { id: 'birre',     label: 'Tour + degustazione al birrificio del territorio', price: 'da 15€ p.p.' },
  ];

  const extrasInfo = {
    cantine: {
      title: 'Visita alle Cantine',
      description: (
        <>
          <p className="mb-3">
            Scopri le storiche cantine delle Langhe con una visita guidata esclusiva. Un'esperienza autentica tra le vigne e la tradizione vinicola piemontese.
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>Cosa è incluso:</h4>
          <p className="mb-3">
            Tour guidato di una cantina locale a vostra scelta, degustazione di vini, durata circa 1,5 ore.
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>Le cantine visitabili a scelta tra:</h4>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Cantine Sotterranee Bosca</li>
            <li>Cantina Ronzano</li>
            <li>Cantina Boeri</li>
          </ul>
          <p className="text-sm" style={{ color: '#9A8A7A' }}>
            Prezzo a persona: da 25€. Minimo 2 persone.
          </p>
          <p className="text-sm mt-2" style={{ color: '#9A8A7A' }}>
            Si prega di avvisare in anticipo così da poter organizzare al meglio e garantire la disponibilità dei posti.
          </p>
        </>
      )
    },
    tartufo: {
      title: 'Caccia al Tartufo',
      description: (
        <>
          <p className="mb-3">
            Un'avventura indimenticabile alla ricerca del "diamante nero" delle Langhe con cani trufolatori addestrati e un esperto tartufaio locale.
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>Cosa è incluso:</h4>
          <p className="mb-3">
            Uscita in bosco con tartufaio professionista, ricerca e raccolta tartufi (in stagione), lezione sulla ricerca, identificazione e usi in cucina. Durata circa 1,5 ore.
          </p>
          <div className="space-y-1 mb-3 text-sm" style={{ color: '#2C2520' }}>
            <p><span className="font-semibold">Orari disponibili:</span> 11:00, 14:30, 17:00</p>
            <p><span className="font-semibold">Disponibilità:</span> non disponibile il mercoledì e il giovedì.</p>
            <p><span className="font-semibold">Bambini fino a 17 anni:</span> ingresso gratuito.</p>
          </div>
          <p className="text-sm" style={{ color: '#9A8A7A' }}>
            Prezzo a persona: da 87€.
          </p>
          <p className="text-sm mt-2" style={{ color: '#9A8A7A' }}>
            Si prega di avvisare in anticipo così da poter organizzare al meglio e garantire la disponibilità dei posti.
          </p>
        </>
      )
    },
    ebike: {
      title: 'Tour E-Bike',
      description: (
        <>
          <p className="mb-3">
            Pedala attraverso i paesaggi mozzafiato delle Langhe con le nostre biciclette elettriche. Un modo ecologico e divertente per scoprire la regione, adatto a ogni età.
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>Cosa è incluso:</h4>
          <p className="mb-3">
            E-bike, itinerario guidato attraverso vigne e borghi, soste panoramiche, guida locale esperta. Il noleggio comprende casco, zainetto, lucchetto, kit riparazione forature e mantellina antipioggia. Seggiolino bimbo disponibile su richiesta.
          </p>
          <p className="mb-3 text-sm" style={{ color: '#2C2520' }}>
            <span className="font-semibold">Percorsi disponibili:</span> da 40 a 80 km a seconda della scelta.
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>Opzioni e prezzi:</h4>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Mezza giornata (8:00–12:30 oppure 15:00–19:30): 35€ a persona</li>
            <li>1 giorno (8:00–19:30): 45€ a persona</li>
            <li>2 giorni: 80€ a persona</li>
            <li>3 giorni: 110€ a persona</li>
          </ul>
          <p className="text-sm" style={{ color: '#9A8A7A' }}>
            Minimo 2 persone. Disponibilità: marzo–novembre.
          </p>
        </>
      )
    },
    birre: {
      title: 'Birrificio del Territorio',
      description: (
        <>
          <p className="mb-3">
            Visita una delle migliori birraie artigianali del territorio piemontese. Scopri il processo di produzione e assaggia birre esclusive create localmente.
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>Cosa è incluso:</h4>
          <p className="mb-3">
            Tour dei reparti di produzione, degustazione di 3 birre artigianali con abbinamento di 3 assaggi, spiegazione del processo di fermentazione. Durata circa 1,5 ore. Al termine è possibile acquistare direttamente i prodotti in azienda.
          </p>
          <p className="text-sm" style={{ color: '#9A8A7A' }}>
            Prezzo a persona: da 15€. Minimo 2 persone.
          </p>
          <p className="text-sm mt-2" style={{ color: '#9A8A7A' }}>
            Si prega di avvisare in anticipo così da poter organizzare al meglio e garantire la disponibilità dei posti.
          </p>
        </>
      )
    },
  };

  const toggleExtra = (id) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.includes(id)
        ? prev.extras.filter(e => e !== id)
        : [...prev.extras, id],
    }));
  };

  const totalRoomsSelected = () => {
    return roomFieldConfigs.reduce((total, room) => total + (formData[room.key] || 0), 0);
  };

  const scrollToFormTop = () => {
    if (!formTopRef.current) return;
    formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const buildWhatsAppMessage = ({ checkInFormatted, checkOutFormatted, nights }) => {
    const safeName    = sanitizeInput(formData.name);
    const safeEmail   = sanitizeInput(formData.email);
    const safePhone   = sanitizeInput(formData.phone);
    const safeMessage = sanitizeInput(formData.message);

    const selectedRoomLines = [
      { label: 'Camere Singole', value: formData.single },
      { label: 'Camere Matrimoniali', value: formData.matrimonial },
      { label: 'Camere Doppie (letti separati)', value: formData.twin },
      { label: 'Camere Triple', value: formData.triple },
      { label: 'Camere Quadruple', value: formData.quadruple },
      { label: 'Suite', value: formData.suite },
    ]
      .filter((room) => room.value > 0)
      .map((room) => `*${room.label}:* ${room.value}`);

    const extraLabels = formData.extras.length > 0
      ? formData.extras.map(id => extrasOptions.find(o => o.id === id)?.label).filter(Boolean).join(', ')
      : 'Nessun extra selezionato';

    const lines = [
      'Buongiorno, vorrei richiedere disponibilita per la seguentte data:',
      '',
      '*Prenotazione*',
      `*Nome:* ${safeName}`,
      `*Cellulare:* ${safePhone}`,
      `*Email:* ${safeEmail}`,
      ...selectedRoomLines,
      `*Check-in:* ${checkInFormatted}`,
      `*Check-out:* ${checkOutFormatted}`,
      `*Notti:* ${nights}`,
      `*Colazione:* ${formData.colazione === 'inclusa' ? 'Colazione inclusa' : 'Colazione esclusa'}`,
      `*Late checkout:* ${formData.lateCheckout === 'si' ? 'Sì (+15€)' : 'No, grazie'}`,
      `*Animali domestici:* ${formData.pets > 0 ? `${formData.pets} (${formData.pets === 1 ? '1 animale' : `${formData.pets} animali`} - supplemento 15€ a notte per animale)` : 'Nessuno'}`,
      `*Esperienze ed Extra:* ${extraLabels}`,
      `*Messaggio:* ${safeMessage || 'Nessuna nota aggiuntiva'}`,
    ];
    return lines.join('\n');
  };

  const calculateNights = () => {
    if (!formData.dateRange?.from || !formData.dateRange?.to) return 0;
    const diffTime = Math.abs(formData.dateRange.to - formData.dateRange.from);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDateRange = () => {
    if (!formData.dateRange?.from) return 'Arrivo: --/--/----   |   Partenza: --/--/----';
    if (!formData.dateRange?.to) {
      return `Arrivo: ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: it })}   |   Partenza: --/--/----`;
    }
    return `Arrivo: ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: it })}   |   Partenza: ${format(formData.dateRange.to, 'dd/MM/yyyy', { locale: it })}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submittingRef.current || isLoading) return;
    
    // Honeypot check
    if (formData.website) {
      console.warn('Bot detected');
      return;
    }

    // Rate limiting (3 seconds between submissions)
    const now = Date.now();
    if (now - lastSubmitTime.current < 3000) {
      setErrors(['Attendi qualche secondo prima di inviare nuovamente']);
      scrollToFormTop();
      return;
    }
    lastSubmitTime.current = now;

    submittingRef.current = true;

    const newErrors = [];

    if (!formData.name.trim())    newErrors.push('Il nome è obbligatorio');
    if (formData.name.trim().length < 2) newErrors.push('Il nome deve avere almeno 2 caratteri');
    if (!formData.email.trim())   newErrors.push("L'email è obbligatoria");
    else if (!validateEmail(formData.email)) newErrors.push('Inserisci un\'email valida');
    if (!formData.phone.trim())   newErrors.push('Il cellulare è obbligatorio');
    else if (!validatePhone(formData.phone)) newErrors.push('Il cellulare deve contenere almeno 10 cifre');
    if (totalRoomsSelected() < 1) newErrors.push('Seleziona almeno una tipologia di camera (quantità maggiore di 0)');
    if (!formData.colazione) newErrors.push('Seleziona un\'opzione per la colazione');
    if (!formData.dateRange?.from || !formData.dateRange?.to) newErrors.push('Seleziona le date di check-in e check-out');

    if (newErrors.length > 0) {
      setErrors(newErrors);
      scrollToFormTop();
      submittingRef.current = false;
      return;
    }

    setIsLoading(true);

    try {
      const nights = calculateNights();
      const checkInFormatted  = format(formData.dateRange.from, 'dd/MM/yyyy', { locale: it });
      const checkOutFormatted = format(formData.dateRange.to,   'dd/MM/yyyy', { locale: it });

      const whatsappMessage = buildWhatsAppMessage({ checkInFormatted, checkOutFormatted, nights });
      const whatsappUrl = `https://wa.me/393518011730?text=${encodeURIComponent(whatsappMessage)}`;

      window.location.href = whatsappUrl;

      if (onSubmit) await onSubmit(formData);

      setFormData({ name: '', email: '', phone: '', single: 0, matrimonial: 0, twin: 0, triple: 0, quadruple: 0, suite: 0, dateRange: undefined, colazione: '', lateCheckout: 'no', pets: 0, extras: [], message: '', website: '' });
      setErrors([]);

    } catch (error) {
      console.error('Errore apertura WhatsApp:', error);
      setErrors([
        "Si è verificato un errore durante l'apertura di WhatsApp. Riprova.",
        `Dettaglio: ${error?.message || 'Errore sconosciuto'}`
      ]);
      scrollToFormTop();
    } finally {
      setIsLoading(false);
      submittingRef.current = false;
    }
  };

  const updateCounter = (field, increment) => {
    setFormData(prev => {
      const newValue = prev[field] + increment;
      if (newValue < 0 || newValue > 10) return prev;
      return { ...prev, [field]: newValue };
    });
  };

  const updatePetsCounter = (increment) => {
    setFormData(prev => {
      const newValue = prev.pets + increment;
      if (newValue < 0 || newValue > 5) return prev;
      return { ...prev, pets: newValue };
    });
  };

  return (
    <div ref={formTopRef} className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, color: '#2C2520' }}>Richiedi Disponibilità</h2>
        <div className="w-16 h-0.5 bg-[#C9A870] mx-auto mb-6"></div>
        <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.95rem' }}>
          Compila il form con i tuoi dati e le date del tuo soggiorno. Ti risponderemo al più presto per confermare la disponibilità e fornirti tutte le informazioni necessarie.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start max-w-3xl mx-auto mb-10">
          {[
            'Miglior prezzo garantito prenotando direttamente',
            'Cancellazione gratuita fino a 48h prima del check-in',
            'Assistenza dedicata per qualsiasi necessità'
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 flex-1">
              <div className="w-6 h-6 rounded-full bg-[#C9A870] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <p className="text-gray-600 text-sm text-left" style={{ fontFamily: 'Lato, sans-serif' }}>{text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 bg-red-100 border border-red-300 rounded-lg p-4">
            {errors.map((error, idx) => (
              <p key={idx} className="text-red-700 text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>• {error}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-none p-6 md:p-10 shadow-lg" style={{ border: '1px solid rgba(201,168,112,0.2)' }}>
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NOME / EMAIL / CELLULARE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Nome</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Paolo Rossi" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="paolo.rossi@email.it" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Cellulare</label>
              <input type="tel" value={formData.phone} onChange={(e) => { const value = e.target.value; if (/^[\d+\-\s]*$/.test(value)) setFormData({ ...formData, phone: value }); }} placeholder="+39 333 1234567" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
            </div>
          </div>

          {/* TIPOLOGIE CAMERE */}
          <div>
            <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Tipologie camere</label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {roomFieldConfigs.map((room) => (
                <div key={room.key}>
                  <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>
                    {room.label} {room.helper ? <span style={{ textTransform: 'none', letterSpacing: 'normal', fontWeight: 600 }}>{room.helper}</span> : null}
                  </label>
                  <div className="bg-[#f5f5f5] rounded-none p-4 flex items-center justify-between">
                    <span className="text-gray-800" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}>{formData[room.key]} {formData[room.key] === 1 ? 'camera' : 'camere'}</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => updateCounter(room.key, -1)}
                        disabled={formData[room.key] <= 0}
                        className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData[room.key] <= 0 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`}
                        style={{ fontSize: '1.2rem', fontWeight: 600 }}
                      >
                        −
                      </button>
                      <button
                        type="button"
                        onClick={() => updateCounter(room.key, 1)}
                        disabled={formData[room.key] >= 10}
                        className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData[room.key] >= 10 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`}
                        style={{ fontSize: '1.2rem', fontWeight: 600 }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLAZIONE */}
          <div>
            <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Colazione</label>
            <div className="relative">
              <select
                value={formData.colazione}
                onChange={(e) => setFormData({ ...formData, colazione: e.target.value })}
                className="w-full bg-[#f5f5f5] px-4 py-4 appearance-none focus:outline-none focus:border-[#C9A870] transition-colors cursor-pointer"
                style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: formData.colazione ? '#2C2520' : '#9A8A7A', border: '1px solid #e5e7eb', borderRadius: 0 }}
              >
                <option value="" disabled>Seleziona un\'opzione...</option>
                <option value="inclusa">Colazione inclusa</option>
                <option value="esclusa">Colazione esclusa</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <svg className="w-4 h-4" style={{ color: '#C9A870' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          {/* LATE CHECKOUT + ANIMALI DOMESTICI */}
          <div className="space-y-5">
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Late checkout</label>
              <div className="relative">
                <select
                  value={formData.lateCheckout}
                  onChange={(e) => setFormData({ ...formData, lateCheckout: e.target.value })}
                  className="w-full bg-[#f5f5f5] px-4 py-4 appearance-none focus:outline-none focus:border-[#C9A870] transition-colors cursor-pointer"
                  style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: '#2C2520', border: '1px solid #e5e7eb', borderRadius: 0 }}
                >
                  <option value="no">No, grazie</option>
                  <option value="si">Sì (+15€ supplemento)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="w-4 h-4" style={{ color: '#C9A870' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>
                Hai animali domestici? <span style={{ textTransform: 'none', letterSpacing: 'normal', fontWeight: 600, fontSize: '0.82rem', color: '#7E6F61' }}>(+15€ a notte per animale)</span>
              </label>
              <div className="bg-[#f5f5f5] rounded-none p-4 flex items-center justify-between" style={{ border: '1px solid #e5e7eb' }}>
                <span className="text-gray-800" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}>{formData.pets} {formData.pets === 1 ? 'animale' : 'animali'}</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updatePetsCounter(-1)}
                    disabled={formData.pets <= 0}
                    className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData.pets <= 0 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`}
                    style={{ fontSize: '1.2rem', fontWeight: 600 }}
                  >
                    −
                  </button>
                  <button
                    type="button"
                    onClick={() => updatePetsCounter(1)}
                    disabled={formData.pets >= 5}
                    className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData.pets >= 5 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`}
                    style={{ fontSize: '1.2rem', fontWeight: 600 }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ESPERIENZE ED EXTRA */}
          <div>
            <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Esperienze ed extra <span style={{ textTransform: 'none', letterSpacing: 'normal', fontWeight: 600, fontSize: '0.82rem', color: '#7E6F61' }}>(opzionale)</span></label>
            <div className="bg-[#f5f5f5] px-4 py-3" style={{ border: '1px solid #e5e7eb' }}>
              <p className="text-sm mb-3" style={{ fontFamily: 'Lato, sans-serif', color: '#9A8A7A', fontStyle: 'italic', fontSize: '0.92rem' }}>Personalizza la tua esperienza nelle Langhe…</p>
              <div className="space-y-3">
                {extrasOptions.map((opt) => (
                  <div key={opt.id} className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleExtra(opt.id)}>
                    <div
                      className="flex-shrink-0 w-5 h-5 border-2 flex items-center justify-center transition-all"
                      style={{
                        borderColor: formData.extras.includes(opt.id) ? '#C9A870' : '#d1d5db',
                        backgroundColor: formData.extras.includes(opt.id) ? '#C9A870' : 'white',
                        borderRadius: 0,
                      }}
                    >
                      {formData.extras.includes(opt.id) && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      )}
                    </div>
                    <span className="flex-1" style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520', fontSize: '0.96rem' }}>{opt.label}</span>
                    <span className="font-semibold" style={{ fontFamily: 'Lato, sans-serif', color: '#C9A870', fontSize: '0.86rem' }}>{opt.price}</span>
                    {extrasInfo[opt.id] && (
                      <span
                        onClick={(e) => e.stopPropagation()}
                        className="flex-shrink-0 inline-flex"
                      >
                        <InfoPopup title={extrasInfo[opt.id].title}>
                          {extrasInfo[opt.id].description}
                        </InfoPopup>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DATE SU RIGA SINGOLA */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Date soggiorno (arrivo e partenza)</label>
              {calculateNights() > 0 && (
                <span className="text-xs font-semibold px-2 py-1" style={{ fontFamily: 'Lato, sans-serif', background: '#C9A870', color: 'white' }}>
                  {calculateNights()} {calculateNights() === 1 ? 'notte' : 'notti'}
                </span>
              )}
            </div>
            <div className="relative" ref={calendarRef}>
              <button type="button" onClick={() => setShowCalendar(!showCalendar)} className="w-full bg-[#f5f5f5] rounded-none p-4 text-left focus:outline-none hover:bg-[#eeeeee] transition-colors flex items-center justify-between min-h-[74px]" style={{ fontFamily: 'Lato, sans-serif' }}>
                <span className="text-gray-800" style={{ fontSize: '1rem' }}>{formatDateRange()}</span>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </button>
              {showCalendar && (
                <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-none shadow-lg p-4 left-0 md:left-auto md:right-0">
                  <DayPicker
                    mode="range"
                    selected={formData.dateRange}
                    onSelect={(range) => setFormData({ ...formData, dateRange: range })}
                    disabled={{ before: new Date() }}
                    locale={it}
                    styles={{
                      root: {
                        '--rdp-accent-color': '#C9A870',
                        '--rdp-accent-background-color': 'rgba(201, 168, 112, 0.2)',
                        '--rdp-range_middle-background-color': 'rgba(201, 168, 112, 0.24)',
                      },
                      chevron: { fill: '#C9A870' },
                    }}
                    modifiersStyles={{
                      selected: { backgroundColor: '#C9A870', color: '#fff' },
                      range_start: { backgroundColor: '#C9A870', color: '#fff' },
                      range_end: { backgroundColor: '#C9A870', color: '#fff' },
                      range_middle: { backgroundColor: 'rgba(201, 168, 112, 0.24)', color: '#2C2520' },
                      today: { color: '#A8854A', fontWeight: 700 },
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* MESSAGGIO */}
          <div>
            <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Messaggio <span style={{ textTransform: 'none', letterSpacing: 'normal', fontWeight: 600, fontSize: '0.82rem', color: '#7E6F61' }}>(opzionale)</span></label>
            <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Indica le camere: una singola, doppia...?" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors resize-none" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
          </div>

          {/* HONEYPOT - Hidden field for bots */}
          <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>

          {/* SUBMIT */}
          <button type="submit" disabled={isLoading} className={`w-full py-4 rounded-none text-white font-semibold transition-all ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#C9A870] hover:bg-[#A8854A]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
            {isLoading ? 'Apertura WhatsApp...' : 'Invia Richiesta su WhatsApp'}
          </button>

        </form>
      </motion.div>
    </div>
  );
}