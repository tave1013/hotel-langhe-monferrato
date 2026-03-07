'use client';

export default function TrustBar() {
  const items = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Posizione Privilegiata',
      desc: 'Nel cuore delle Langhe, a soli 5 minuti da Alba e dai vigneti patrimonio UNESCO',
    },
    {
      icon: 'fa-spa',
      title: 'Spa & Wellness',
      desc: 'Piscina panoramica, sauna, bagno turco e trattamenti ispirati alle erbe delle colline',
    },
    {
      icon: 'fa-utensils',
      title: 'Cucina del Territorio',
      desc: 'Il nostro ristorante gourmet celebra i sapori autentici di Langa e Monferrato',
    },
    {
      icon: 'fa-concierge-bell',
      title: 'Servizio Su Misura',
      desc: 'Concierge dedicato, transfer privato, degustazioni esclusive e esperienze personalizzate',
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
