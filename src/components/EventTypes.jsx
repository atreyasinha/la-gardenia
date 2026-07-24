import React from 'react';
import { Heart, Cake, Gift, Briefcase, Sparkles } from 'lucide-react';

const eventsList = [
  {
    icon: <Heart size={24} color="var(--gold-main)" />,
    title: 'Weddings & Receptions',
    image: '/images/wedding-mandap-stage.jpg',
    desc: 'Stage decoration, mandap arrangements, and seating for marriage functions and receptions.'
  },
  {
    icon: <Cake size={24} color="var(--gold-main)" />,
    title: 'Birthday Parties',
    image: '/images/birthday-fairy-lawn-stage.jpg',
    desc: 'Theme stage backdrops, balloon arches, and play areas for kids and milestone birthday parties.'
  },
  {
    icon: <Sparkles size={24} color="var(--gold-main)" />,
    title: 'Engagements & Ring Ceremonies',
    image: '/images/monogram-initials-stage.jpg',
    desc: 'Stage setups, floral backdrops, and intimate hall arrangements for ring ceremonies.'
  },
  {
    icon: <Gift size={24} color="var(--gold-main)" />,
    title: 'Anniversaries & Family Functions',
    image: '/images/gold-peach-backdrop.jpg',
    desc: 'Decorated seating areas, stage backdrops, and dining setups for family get-togethers.'
  },
  {
    icon: <Briefcase size={24} color="var(--gold-main)" />,
    title: 'Corporate Events & Launches',
    image: '/images/banquet-dining-hall.jpg',
    desc: 'Climate-controlled hall with audio-visual equipment support for corporate meetings and launches.'
  }
];

export default function EventTypes({ onOpenBooking }) {
  return (
    <section id="events" className="section-padding" style={{ background: 'var(--bg-elevated)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Services</span>
          <h2 className="section-title">Events We Host</h2>
          <p className="section-description">
            Customizable hall and lawn arrangements for various family and corporate occasions.
          </p>
          <div className="gold-divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.8rem' }}>
          {eventsList.map((evt, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#ffffff', border: '1px solid var(--gold-border)' }}>
              <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={evt.image}
                  alt={evt.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,21,16,0.8) 0%, transparent 60%)' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.8rem',
                    right: '0.8rem',
                    background: '#ffffff',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    border: '1px solid var(--gold-border)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                  }}
                >
                  {evt.icon}
                </div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{evt.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.55', marginBottom: '1.2rem' }}>
                    {evt.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem', justifyContent: 'center' }}
                >
                  Inquire Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
