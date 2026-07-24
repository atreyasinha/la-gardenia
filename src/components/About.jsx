import React from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

export default function About({ onOpenBooking }) {
  const highlights = [
    { title: 'Air-Conditioned Indoor Hall', desc: 'Climate-controlled hall with ambient cove lighting and comfortable seating.' },
    { title: 'Open-Air Event Lawn', desc: 'Spacious green lawn suitable for stage mandaps, outdoor seating, and large gatherings.' },
    { title: 'Stage & Theme Decor', desc: 'Stage decoration options for wedding mandaps, birthdays, and anniversaries.' },
    { title: 'Banquet Dining Space', desc: 'Dedicated dining hall equipped with chafing dishes and dining tables.' },
    { title: 'Dressing Suite', desc: 'Air-conditioned room for hosts, brides, and family members.' },
    { title: 'Street Parking & Backup Power', desc: 'Street parking along venue road and full generator backup during events.' }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', background: 'var(--bg-deep)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column - Image Stack */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--gold-border)', boxShadow: '0 15px 35px rgba(74,61,51,0.1)' }}>
              <img
                src="/images/entrance-facade.jpg"
                alt="La Gardenia Front Entrance"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,21,16,0.8) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#f3e5ab', fontWeight: 600 }}>Venue Entrance</span>
                <h4 style={{ color: '#fff', fontSize: '1.3rem' }}>La Gardenia Front Gateway</h4>
              </div>
            </div>

            {/* Floating Inset Image */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-20px',
                width: '55%',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '3px solid #ffffff',
                boxShadow: '0 15px 35px rgba(74,61,51,0.18)',
                display: 'none',
              }}
              className="about-inset-img"
            >
              <img
                src="/images/monogram-initials-stage.jpg"
                alt="La Gardenia Stage Decor"
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <span className="section-subtitle">About Venue</span>
            <h2 className="section-title">Banquet Hall & Event Lawn in Chas, Bokaro</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.8rem', fontSize: '1.02rem', lineHeight: '1.65' }}>
              <strong style={{ color: 'var(--gold-main)' }}>La Gardenia</strong> offers an air-conditioned indoor banquet hall and a spacious open-air lawn for events up to 800 guests. Located in Chas, Bokaro Steel City, we host marriage functions, birthday parties, ring ceremonies, and corporate events.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
              {highlights.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--gold-main)', flexShrink: 0, marginTop: '3px' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', fontSize: '0.98rem', marginBottom: '0.2rem', fontWeight: 600 }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: '1.4' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn btn-gold">
                Inquire For Booking
              </button>
              <a href="https://maps.app.goo.gl/u86eBzCjV1tTE1ta7" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <MapPin size={18} color="var(--gold-main)" /> View Location Map
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .about-inset-img { display: block !important; }
        }
      `}</style>
    </section>
  );
}
