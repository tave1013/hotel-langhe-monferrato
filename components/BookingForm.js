'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

export default function BookingForm({ onSubmit }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0,
    dateRange: undefined,
    message: ''
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const validatePhone = (phone) => {
    const digits = phone.replace(/[^\d]/g, '');
    return digits.length >= 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = [];

    if (!formData.name.trim()) {
      newErrors.push('Il nome è obbligatorio');
    }
    if (!formData.email.trim()) {
      newErrors.push('L\'email è obbligatoria');
    }
    if (!formData.phone.trim()) {
      newErrors.push('Il cellulare è obbligatorio');
    } else if (!validatePhone(formData.phone)) {
      newErrors.push('Il cellulare deve contenere almeno 10 cifre');
    }
    if (formData.adults < 1) {
      newErrors.push('Almeno 1 adulto è obbligatorio');
    }
    if (!formData.dateRange?.from || !formData.dateRange?.to) {
      newErrors.push('Seleziona le date di check-in e check-out');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }

      // Prepara i parametri per la pagina di ringraziamento
      const params = new URLSearchParams({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        adults: formData.adults.toString(),
        children: formData.children.toString(),
        checkIn: formData.dateRange?.from ? format(formData.dateRange.from, 'dd/MM/yyyy', { locale: it }) : '',
        checkOut: formData.dateRange?.to ? format(formData.dateRange.to, 'dd/MM/yyyy', { locale: it }) : '',
        message: formData.message.trim()
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        adults: 1,
        children: 0,
        dateRange: undefined,
        message: ''
      });

      router.push(`/grazie?${params.toString()}`);
    } catch (error) {
      setErrors(['Si è verificato un errore. Riprova.']);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCounter = (field, increment) => {
    setFormData(prev => {
      const newValue = prev[field] + increment;
      
      if (field === 'adults') {
        if (newValue < 1 || newValue > 50) return prev;
      } else {
        if (newValue < 0 || newValue > 10) return prev;
      }
      
      return { ...prev, [field]: newValue };
    });
  };

  const formatDateRange = () => {
    if (!formData.dateRange?.from) return 'Seleziona le date';
    if (!formData.dateRange?.to) {
      return format(formData.dateRange.from, 'dd/MM/yyyy', { locale: it });
    }
    return `${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: it })} - ${format(formData.dateRange.to, 'dd/MM/yyyy', { locale: it })}`;
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
          <div className="flex items-start gap-3 flex-1">
            <div className="w-6 h-6 rounded-full bg-[#C9A870] flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <p className="text-gray-600 text-sm text-left" style={{ fontFamily: 'Lato, sans-serif' }}>Miglior prezzo garantito prenotando direttamente</p>
          </div>
          <div className="flex items-start gap-3 flex-1">
            <div className="w-6 h-6 rounded-full bg-[#C9A870] flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <p className="text-gray-600 text-sm text-left" style={{ fontFamily: 'Lato, sans-serif' }}>Cancellazione gratuita fino a 48h prima del check-in</p>
          </div>
          <div className="flex items-start gap-3 flex-1">
            <div className="w-6 h-6 rounded-full bg-[#C9A870] flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <p className="text-gray-600 text-sm text-left" style={{ fontFamily: 'Lato, sans-serif' }}>Assistenza dedicata per qualsiasi necessità</p>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>Nome</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Paolo Rossi" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif' }} />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="paolo.rossi@email.it" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif' }} />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>Cellulare</label>
              <input type="tel" value={formData.phone} onChange={(e) => { const value = e.target.value; if (/^[\d+\-\s]*$/.test(value)) { setFormData({ ...formData, phone: value }); }}} placeholder="+39 333 1234567" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>Adulti</label>
              <div className="bg-[#f5f5f5] rounded-none p-4 flex items-center justify-between">
                <span className="text-gray-800" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.95rem' }}>{formData.adults === 1 ? '1 adulto' : `${formData.adults} adulti`}</span>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => updateCounter('adults', -1)} disabled={formData.adults <= 1} className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData.adults <= 1 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`} style={{ fontFamily: 'Lato, sans-serif', fontSize: '1.2rem', fontWeight: 600 }}>−</button>
                  <button type="button" onClick={() => updateCounter('adults', 1)} disabled={formData.adults >= 50} className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData.adults >= 50 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`} style={{ fontFamily: 'Lato, sans-serif', fontSize: '1.2rem', fontWeight: 600 }}>+</button>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>Bambini</label>
              <div className="bg-[#f5f5f5] rounded-none p-4 flex items-center justify-between">
                <span className="text-gray-800" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.95rem' }}>{formData.children === 0 ? '0 bambini' : formData.children === 1 ? '1 bambino' : `${formData.children} bambini`}</span>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => updateCounter('children', -1)} disabled={formData.children <= 0} className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData.children <= 0 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`} style={{ fontFamily: 'Lato, sans-serif', fontSize: '1.2rem', fontWeight: 600 }}>−</button>
                  <button type="button" onClick={() => updateCounter('children', 1)} disabled={formData.children >= 10} className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData.children >= 10 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`} style={{ fontFamily: 'Lato, sans-serif', fontSize: '1.2rem', fontWeight: 600 }}>+</button>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>Date di soggiorno</label>
              <div className="relative">
                <button type="button" onClick={() => setShowCalendar(!showCalendar)} className="w-full bg-[#f5f5f5] rounded-none p-4 text-left focus:outline-none hover:bg-[#eeeeee] transition-colors flex items-center justify-between min-h-[74px]" style={{ fontFamily: 'Lato, sans-serif' }}>
                  <span className="text-gray-800" style={{ fontSize: '0.95rem' }}>{formatDateRange()}</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </button>
                {showCalendar && (
                  <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-none shadow-lg p-4 left-0 md:left-auto md:right-0">
                    <DayPicker mode="range" selected={formData.dateRange} onSelect={(range) => { setFormData({ ...formData, dateRange: range }); if (range?.from && range?.to) { setShowCalendar(false); }}} disabled={{ before: new Date() }} locale={it} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>Messaggio (opzionale)</label>
            <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Indica le camere: una singola, doppia...?" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors resize-none" style={{ fontFamily: 'Lato, sans-serif' }} />
          </div>

          <button type="submit" disabled={isLoading} className={`w-full py-4 rounded-none text-white font-semibold transition-all ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#C9A870] hover:bg-[#A8854A]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
            {isLoading ? 'Invio in corso...' : 'Invia Richiesta'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
