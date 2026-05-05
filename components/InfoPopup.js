'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InfoPopup({ title, description, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Info Icon */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-[#C9A870] flex items-center justify-center text-[#C9A870] hover:bg-[#C9A870] hover:text-white transition-all duration-200 cursor-pointer ml-2"
        aria-label={`Informazioni su ${title}`}
        title={`Informazioni su ${title}`}
      >
        <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.75rem', fontWeight: 'bold' }}>i</span>
      </button>

      {/* Modal Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#2C2520] to-[#3d3530] text-white p-6 flex items-center justify-between">
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 400 }} className="pr-4">
                  {title}
                </h3>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-[#2C2520] transition-colors"
                  aria-label="Chiudi"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <div style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {children}
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#C9A870] text-white py-3 font-semibold hover:bg-[#b8985f] transition-colors"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  Chiudi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
