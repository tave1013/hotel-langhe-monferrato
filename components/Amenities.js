'use client';

export default function Amenities() {
  const amenities = [
    { icon: 'fa-wifi', label: 'High Speed Wifi', desc: 'Enjoy seamless, high-speed internet access throughout the hotel.' },
    { icon: 'fa-parking', label: 'Parking Space', desc: 'Ample and secure parking space provided for all hotel guests.' },
    { icon: 'fa-utensils', label: 'Restaurant & Bar', desc: 'Savor gourmet dishes and cocktails at our elegant restaurant and bar.' },
    { icon: 'fa-spa', label: 'Spa Center', desc: 'Indulge in a variety of relaxing and rejuvenating treatments at our spa.' },
    { icon: 'fa-dumbbell', label: 'Fitness Center', desc: 'Stay active with state-of-the-art fitness equipment in our modern gym.' },
    { icon: 'fa-swimming-pool', label: 'Swimming Pool', desc: 'Refresh and unwind in our pristine outdoor swimming pool.' },
  ];

  return (
    <section style={{ background: '#fff', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Modern and Comfortable</p>
          <div className="gold-divider mb-5"></div>
          <h2 className="section-title mb-4">Facilities and amenities</h2>
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
