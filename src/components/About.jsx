import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: 'Air-Conditioned Indoor Hall', desc: 'Climate-controlled hall with ambient cove lighting and comfortable seating for up to 500 guests.' },
    { title: 'Open-Air Event Lawn', desc: 'Spacious green lawn suitable for wedding mandaps, outdoor seating, and large gatherings up to 800 guests.' },
    { title: 'Stage & Theme Decor', desc: 'Stage decoration options for marriage mandaps, birthday parties, and anniversary celebrations.' },
    { title: 'Banquet Dining Space', desc: 'Dedicated dining hall equipped with stainless steel chafing dishes and draped dining tables.' },
    { title: 'Dressing Suite', desc: 'Air-conditioned suite room for event hosts, brides, grooms, and family members.' },
    { title: 'Street Parking & Backup Power', desc: 'Street parking available along venue road and full generator power backup during events.' }
  ];

  return (
    <section id="about" aria-label="About La Gardenia Venue" className="section-padding" style={{ position: 'relative', background: 'var(--bg-deep)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column - Image Stack */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--gold-border)', boxShadow: '0 15px 35px rgba(74,61,51,0.08)' }}>
              <img
                src="/images/entrance-facade.jpg"
                alt="La Gardenia Banquet Hall Front Entrance Gate in Chas Bokaro"
                loading="lazy"
                width="600"
                height="420"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,21,16,0.8) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#f3e5ab', fontWeight: 600 }}>Venue Entrance</span>
                <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>La Gardenia Entrance Facade</p>
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
                boxShadow: '0 15px 35px rgba(74,61,51,0.15)',
                display: 'none',
              }}
              className="about-inset-img"
            >
              <img
                src="/images/monogram-initials-stage.jpg"
                alt="Marriage Stage Decoration at La Gardenia Chas Bokaro"
                loading="lazy"
                width="320"
                height="220"
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <span className="section-subtitle">About Our Venue</span>
            <h2 className="section-title">Marriage & Event Venue in Chas, Bokaro Steel City</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.8rem', fontSize: '1.02rem', lineHeight: '1.65' }}>
              <strong style={{ color: 'var(--gold-dark)' }}>La Gardenia Banquet Hall & Event Lawn</strong> provides an air-conditioned indoor hall and a spacious outdoor open-air lawn for gatherings up to 800 guests. Conveniently situated in Chas, Bokaro Steel City, Jharkhand, we host wedding receptions, ring ceremonies, birthday parties, and corporate events.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
              {highlights.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--gold-main)', flexShrink: 0, marginTop: '3px' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--text-primary)', fontSize: '0.98rem', marginBottom: '0.2rem', fontWeight: 600 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: '1.4' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
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
