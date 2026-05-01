'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

export default function BookingForm({ onSubmit }) {
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

  const totalRoomsSelected = () => {
    return roomFieldConfigs.reduce((total, room) => total + (formData[room.key] || 0), 0);
  };

  const buildWhatsAppMessage = ({ checkInFormatted, checkOutFormatted, nights }) => {
    const safeName    = sanitizeInput(formData.name);
    const safeEmail   = sanitizeInput(formData.email);
    const safePhone   = sanitizeInput(formData.phone);
    const safeMessage = sanitizeInput(formData.message);

    const lines = [
      'Buongiorno Hotel Langhe & Monferrato, vorrei richiedere disponibilita.',
      '',
      '*Dati richiesta*',
      `*Nome:* ${safeName}`,
      `*Cellulare:* ${safePhone}`,
      `*Email:* ${safeEmail}`,
      `*Camere Singole:* ${formData.single}`,
      `*Camere Matrimoniali:* ${formData.matrimonial}`,
      `*Camere Doppie (letti separati):* ${formData.twin}`,
      `*Camere Triple:* ${formData.triple}`,
      `*Camere Quadruple:* ${formData.quadruple}`,
      `*Suite:* ${formData.suite}`,
      `*Check-in:* ${checkInFormatted}`,
      `*Check-out:* ${checkOutFormatted}`,
      `*Notti:* ${nights}`,
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
    if (!formData.dateRange?.from || !formData.dateRange?.to) newErrors.push('Seleziona le date di check-in e check-out');

    if (newErrors.length > 0) {
      setErrors(newErrors);
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

      setFormData({ name: '', email: '', phone: '', single: 0, matrimonial: 0, twin: 0, triple: 0, quadruple: 0, suite: 0, dateRange: undefined, message: '', website: '' });
      setErrors([]);

    } catch (error) {
      console.error('Errore apertura WhatsApp:', error);
      setErrors([
        "Si è verificato un errore durante l'apertura di WhatsApp. Riprova.",
        `Dettaglio: ${error?.message || 'Errore sconosciuto'}`
      ]);
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

  return (
    <div className="max-w-4xl mx-auto">
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
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Nome</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Paolo Rossi" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif' }} />
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="paolo.rossi@email.it" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif' }} />
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Cellulare</label>
              <input type="tel" value={formData.phone} onChange={(e) => { const value = e.target.value; if (/^[\d+\-\s]*$/.test(value)) setFormData({ ...formData, phone: value }); }} placeholder="+39 333 1234567" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif' }} />
            </div>
          </div>

          {/* TIPOLOGIE CAMERE */}
          <div>
            <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Tipologie camere</label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {roomFieldConfigs.map((room) => (
                <div key={room.key}>
                  <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>
                    {room.label} {room.helper ? <span style={{ textTransform: 'none', letterSpacing: 'normal', fontWeight: 600 }}>{room.helper}</span> : null}
                  </label>
                  <div className="bg-[#f5f5f5] rounded-none p-4 flex items-center justify-between">
                    <span className="text-gray-800" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.95rem' }}>{formData[room.key]} {formData[room.key] === 1 ? 'camera' : 'camere'}</span>
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

          {/* DATE SU RIGA SINGOLA */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Date soggiorno (arrivo e partenza)</label>
              {calculateNights() > 0 && (
                <span className="text-xs font-semibold px-2 py-1" style={{ fontFamily: 'Lato, sans-serif', background: '#C9A870', color: 'white' }}>
                  {calculateNights()} {calculateNights() === 1 ? 'notte' : 'notti'}
                </span>
              )}
            </div>
            <div className="relative" ref={calendarRef}>
              <button type="button" onClick={() => setShowCalendar(!showCalendar)} className="w-full bg-[#f5f5f5] rounded-none p-4 text-left focus:outline-none hover:bg-[#eeeeee] transition-colors flex items-center justify-between min-h-[74px]" style={{ fontFamily: 'Lato, sans-serif' }}>
                <span className="text-gray-800" style={{ fontSize: '0.95rem' }}>{formatDateRange()}</span>
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
            <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Messaggio (opzionale)</label>
            <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Indica le camere: una singola, doppia...?" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors resize-none" style={{ fontFamily: 'Lato, sans-serif' }} />
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