'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ScrollAnimation - Componente per animazioni eleganti allo scroll
 * Tipo di animazioni disponibili:
 * - fade-in: semplice dissolvenza
 * - slide-up: slide dal basso (default, più comune)
 * - slide-left: slide da sinistra
 * - slide-right: slide da destra
 * - scale: leggero zoom in
 */

export default function ScrollAnimation({ 
  children, 
  type = 'slide-up', 
  delay = 0,
  duration = 'normal',
  threshold = 0.1 
}) {
  const ref = useRef(null);
  // Parte già come animate: contenuto sempre visibile
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reset per applicare l'animazione di entrata
    setIsVisible(false);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      // Già nel viewport: anima subito con piccolo delay
      const t = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold]);

  const animationClass = `scroll-${type}`;
  const delayClass = delay > 0 ? `delay-${delay}` : '';
  const durationClass = duration !== 'normal' ? `duration-${duration}` : '';
  const animateClass = isVisible ? 'animate' : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${animateClass} ${delayClass} ${durationClass}`}
    >
      {children}
    </div>
  );
}
