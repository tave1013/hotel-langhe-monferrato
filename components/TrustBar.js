'use client';

export default function TrustBar() {
  const items = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Posizione Privilegiata',
      desc: 'Nel cuore di Langhe e Monferrato, a circa 15 km da Alba, Asti e Canelli, nel verde di Costigliole d\'Asti.',
    },
    {
      icon: 'fa-utensils',
      title: 'Cucina del Territorio',
      desc: 'Possibilità di mangiare direttamente in loco, con proposte del territorio ideali anche per eventi e occasioni speciali.',
    },
    {
      icon: 'fa-swimming-pool',
      title: 'Piscina',
      desc: 'Piscina all\'aperto immersa nella natura, perfetta per rilassarsi e vivere un momento di pace durante il soggiorno.',
    },
    {
      icon: 'fa-briefcase',
      title: 'Sale Meeting',
      desc: 'Spazi attrezzati per eventi, riunioni e occasioni speciali direttamente in struttura. Contattaci per organizzare ogni dettaglio.',
    },
  ];

  return (
    <section style={{ background: '#fff', borderBottom: '1px solid rgba(201,168,112,0.12)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center py-10 px-6"
              style={{
                borderRight: i < 3 ? '1px solid rgba(201,168,112,0.12)' : 'none',
                borderBottom: '1px solid rgba(201,168,112,0.06)',
              }}
            >
              <div style={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <i className={`fa ${item.icon}`} style={{ fontSize: '1.8rem', color: '#C9A870' }}></i>
              </div>
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#2C2520',
                  marginBottom: '0.6rem',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '0.82rem',
                  color: '#6B5E52',
                  lineHeight: 1.65,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
