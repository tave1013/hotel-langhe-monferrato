'use client';

export default function Amenities() {
  const amenities = [
    { icon: 'fa-wifi', label: 'Wi-Fi', desc: 'Connessione Wi-Fi disponibile in tutto l\'hotel: in camera, nelle aree comuni e negli spazi esterni. Per restare sempre connessi durante il soggiorno.' },
    { icon: 'fa-parking', label: 'Parcheggio', desc: 'Ampio parcheggio esterno gratuito direttamente davanti alla struttura, comodo e accessibile per tutti gli ospiti.' },
    { icon: 'fa-utensils', label: 'Ristorante & Bar', desc: 'Possibilità di mangiare direttamente all\'interno della struttura. Colazione e bar a disposizione degli ospiti per iniziare al meglio la giornata e per un momento di relax in qualsiasi ora.' },
    { icon: 'fa-gift', label: 'Pacchetti Esclusivi', desc: 'Organizziamo esperienze su misura per il tuo soggiorno, con sconti dedicati pensati appositamente per i nostri ospiti.' },
    { icon: 'fa-briefcase', label: 'Sale Meeting', desc: 'Spazi attrezzati per ospitare i tuoi eventi, riunioni e occasioni speciali direttamente in struttura. Contattaci per organizzare ogni dettaglio.' },
    { icon: 'fa-swimming-pool', label: 'Piscina', desc: 'Piscina all\'aperto immersa nella natura, per rilassarsi e godersi un momento di pace durante il soggiorno.' },
  ];

  return (
    <section style={{ background: '#fff', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-3">I Nostri Servizi</p>
          <div className="gold-divider mb-5"></div>
          <h2 className="section-title mb-4">Tutto il Comfort di cui Hai Bisogno</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {amenities.map((a) => (
            <div
              key={a.label}
              className="flex items-start gap-4"
            >
              <div style={{ flexShrink: 0, width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={`fa ${a.icon}`} style={{ fontSize: '1.8rem', color: '#C9A870' }}></i>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 500, color: '#2C2520', marginBottom: '0.5rem' }}>
                  {a.label}
                </h3>
                <p style={{ fontFamily: 'Lato', fontSize: '0.88rem', color: '#6B5E52', lineHeight: 1.7 }}>
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
