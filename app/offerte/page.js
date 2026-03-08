import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Offerte & Pacchetti | Hotel Langhe & Monferrato',
  description: 'Scopri le nostre offerte esclusive: fuga romantica con spa, weekend gastronomico, caccia al tartufo e molto altro. Prenota al miglior prezzo garantito.',
};

const offerte = [
  {
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop',
    badge: '-20%',
    categoria: 'Romantico',
    titolo: 'Fuga Romantica con Spa',
    descrizione: '2 notti in Suite Deluxe con accesso illimitato alla spa privata, cena gourmet per due con abbinamento vini e colazione in camera. Il regalo perfetto per chi ami.',
    prezzo: '580',
    prezzoPieno: '720',
    include: ['2 notti Suite Deluxe', 'Spa privata illimitata', 'Cena gourmet x2', 'Colazione in camera', 'Bottiglia di Barolo'],
    slug: 'fuga-romantica',
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop',
    badge: 'Colazione Inclusa',
    categoria: 'Gastronomia',
    titolo: 'Weekend Gastronomico',
    descrizione: 'Immergiti nella cucina piemontese: 2 notti con colazione, cena nel ristorante gourmet, tour privato in cantina con sommelier e degustazione di Barolo e Barbaresco.',
    prezzo: '420',
    prezzoPieno: '540',
    include: ['2 notti Camera Superior', 'Colazione buffet', 'Cena ristorante', 'Wine tour con sommelier', 'Degustazione 6 vini'],
    slug: 'weekend-gastronomico',
  },
  {
    img: 'https://images.unsplash.com/photo-1446825899151-5b6ba4a1f8a4?w=800&q=80&fit=crop',
    badge: 'Pacchetto Completo',
    categoria: 'Esperienza',
    titolo: 'Scopri le Langhe in 3 Notti',
    descrizione: 'Il pacchetto completo per scoprire il territorio: 3 notti, colazione ogni giorno, wine tour UNESCO, caccia al tartufo con trifolau e transfer incluso.',
    prezzo: '860',
    prezzoPieno: '1050',
    include: ['3 notti Camera Standard+', 'Colazioni incluse', 'Wine tour UNESCO', 'Caccia al tartufo', 'Transfer privato'],
    slug: 'scopri-le-langhe',
  },
  {
    img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80&fit=crop',
    badge: 'Famiglie',
    categoria: 'Family',
    titolo: 'Vacanza in Famiglia',
    descrizione: 'Tutto pensato per le famiglie: Camera Family spaziosa, kit benvenuto bambini, accesso alla piscina e un pomeriggio di attività in natura tra le colline.',
    prezzo: '340',
    prezzoPieno: '420',
    include: ['2 notti Camera Family', 'Colazione inclusa', 'Kit bambini', 'Piscina inclusa', 'Attività natura guidata'],
    slug: 'vacanza-famiglia',
  },
  {
    img: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80&fit=crop',
    badge: 'Business',
    categoria: 'Lavoro',
    titolo: 'Retreat Aziendale',
    descrizione: 'Team building o planning day nelle Langhe: sala meeting inclusa, coffee break gourmet, pranzo e attività di team building outdoor tra i vigneti UNESCO.',
    prezzo: '1200',
    prezzoPieno: '1600',
    include: ['Sala meeting full-day', 'Coffee break x2', 'Pranzo di lavoro', 'Team building outdoor', 'Degustazione finale'],
    slug: 'retreat-aziendale',
  },
  {
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80&fit=crop',
    badge: 'Suite Esclusiva',
    categoria: 'Lusso',
    titolo: 'Luna di Miele Esclusiva',
    descrizione: '3 notti in Suite Deluxe con decorazione romantica, champagne e fragole in camera, cena privata in terrazza con vista sui vigneti e massaggio di coppia.',
    prezzo: '1800',
    prezzoPieno: '2400',
    include: ['3 notti Suite Deluxe', 'Decorazione romantica', 'Champagne e fragole', 'Cena privata in terrazza', 'Massaggio coppia 90min'],
    slug: 'luna-di-miele',
  },
];

export default function OffertePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ height: '52vh', minHeight: 360 }}>
        <div className="absolute inset-0">
          <img src="/foto/langhe-monferrato.webp" alt="Offerte Hotel Langhe" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.5), rgba(10,8,6,0.75))' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>Solo sul Nostro Sito</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.15 }}>
            Offerte & Pacchetti Esclusivi
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#fff', fontStyle: 'italic', marginTop: '0.8rem' }}>
            Prenota direttamente qui: miglior prezzo garantito, cancellazione gratuita.
          </p>
        </div>
      </section>

      {/* OFFERTE GRID */}
      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerte.map((o) => (
              <div key={o.slug} style={{ background: '#fff', overflow: 'hidden', transition: 'transform 0.4s, box-shadow 0.4s' }} className="card-hover">
                {/* Image */}
                <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                  <img src={o.img} alt={o.titolo} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,13,11,0.55), transparent 55%)' }}></div>
                  <div style={{ position: 'absolute', top: 12, left: 12, background: '#C9A870', padding: '0.28rem 0.8rem', fontFamily: 'Lato', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>{o.badge}</div>
                  <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(10,8,6,0.7)', border: '1px solid rgba(201,168,112,0.35)', padding: '0.28rem 0.8rem', fontFamily: 'Lato', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A870' }}>{o.categoria}</div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.4rem 1.5rem' }}>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#2C2520', fontWeight: 500, marginBottom: '0.5rem' }}>{o.titolo}</h2>
                  <p style={{ fontFamily: 'Lato', fontSize: '0.79rem', color: '#6B5E52', lineHeight: 1.75, marginBottom: '1rem' }}>{o.descrizione}</p>

                  {/* Include list */}
                  <div style={{ marginBottom: '1.2rem', paddingBottom: '1.2rem', borderBottom: '1px solid rgba(201,168,112,0.12)' }}>
                    {o.include.map(i => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '0.2rem 0', fontFamily: 'Lato', fontSize: '0.72rem', color: '#4A3D33' }}>
                        <i className="fa fa-check" style={{ color: '#C9A870', fontSize: '0.55rem', flexShrink: 0 }}></i>{i}
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: 'Lato', fontSize: '0.6rem', color: '#9A8A7A', letterSpacing: '0.08em', textDecoration: 'line-through' }}>€{o.prezzoPieno}</div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#C9A870' }}>€{o.prezzo}</span>
                        <span style={{ fontFamily: 'Lato', fontSize: '0.62rem', color: '#9A8A7A' }}>totale</span>
                      </div>
                    </div>
                    <Link href="/prenota" className="btn-gold">Prenota</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ padding: '80px 0' }}>
        <div className="absolute inset-0">
          <img src="/foto/hotel-langhe-monferrato.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.78)' }} />
        </div>
        <div className="relative text-center px-6 max-w-2xl mx-auto">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>Pacchetto Su Misura</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h2 className="section-title-light" style={{ marginBottom: '1rem' }}>Non Trovi l&apos;Offerta Giusta?</h2>
          <p style={{ fontFamily: 'Lato', fontSize: '0.84rem', color: 'rgba(245,239,228,0.55)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Costruiamo insieme il pacchetto perfetto per le tue esigenze. Contattaci e troveremo la soluzione ideale.
          </p>
          <Link href="/contatti" className="btn-gold" style={{ padding: '1rem 2.5rem' }}>Contattaci</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
