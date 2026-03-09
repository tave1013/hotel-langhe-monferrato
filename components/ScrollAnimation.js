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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una volta animato, non serve più osservare
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Inizia animazione leggermente prima
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
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
