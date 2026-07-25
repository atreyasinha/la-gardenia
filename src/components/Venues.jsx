import React, { useState } from 'react';
import { Users, Maximize, CheckCircle2, ArrowRight } from 'lucide-react';

const venuesList = [
  {
    id: 'indoor-hall',
    title: 'Indoor Air-Conditioned Hall',
    subtitle: 'Climate-Controlled Indoor Space',
    capacity: '500 Guests Capacity',
    area: '6,500 Sq. Ft.',
    image: '/images/monogram-initials-stage.jpg',
    features: [
      'Centralized Air Conditioning',
      'Ceiling Cove Lighting',
      'Leather Sofas & Chairs',
      'Stage with Backdrop Wall',
      'Sound System Setup'
    ]
  },
  {
    id: 'outdoor-lawn',
    title: 'Open-Air Lawn Space',
    subtitle: 'Spacious Outdoor Event Lawn',
    capacity: '800 Guests Capacity',
    area: '10,000 Sq. Ft.',
    image: '/images/outdoor-lawn-mandap.jpg',
    features: [
      'Artificial Turf Grass',
      'Circular Mandap & Stage Area',
      'Red Carpet Walkway',
      'Fairy Light Decorative Backdrop',
      'Outdoor Lighting Rigs'
    ]
  },
  {
    id: 'dining-hall',
    title: 'Banquet Dining Hall',
    subtitle: 'Dedicated Space for Meals & Catering',
    capacity: '400 Dining Capacity',
    area: '4,500 Sq. Ft.',
    image: '/images/banquet-dining-hall.jpg',
    features: [
      'Draped Dining Tables & Chairs',
      'Stainless Steel Chafing Dishes',
      'Live Food Counters',
      'Air-Conditioned Dining Hall',
      'Service Station'
    ]
  },
  {
    id: 'theme-studio',
    title: 'Celebration Stage Area',
    subtitle: 'Birthday & Event Stage Setup',
    capacity: '300 Guests Capacity',
    area: '3,500 Sq. Ft.',
    image: '/images/birthday-fairy-lawn-stage.jpg',
    features: [
      'Illuminated Neon Signage',
      'Shimmer Sequin Photo Backdrop',
      'Balloon Archways',
      '3D Block Letters',
      'Kids Play Area'
    ]
  }
];

export default function Venues({ onOpenBooking }) {
  const [activeVenue, setActiveVenue] = useState(venuesList[0]);

  return (
    <section id="venues" className="section-padding" style={{ background: 'var(--bg-elevated)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Venue Options</span>
          <h2 className="section-title">Our Event Spaces</h2>
          <p className="section-description">
            Indoor and outdoor options available for weddings, receptions, birthday functions, and corporate gatherings in Chas, Bokaro.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          {venuesList.map((venue) => (
            <button
              key={venue.id}
              onClick={() => setActiveVenue(venue)}
              className={`btn ${activeVenue.id === venue.id ? 'btn-gold' : 'btn-outline'}`}
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
            >
              {venue.title}
            </button>
          ))}
        </div>

        {/* Selected Space Card */}
        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', background: '#ffffff', border: '1px solid var(--gold-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {/* Image Side */}
            <div style={{ position: 'relative', minHeight: '380px' }}>
              <img loading="lazy"
                src={activeVenue.image}
                alt={activeVenue.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              
              {/* Badges */}
              <div style={{ position: 'absolute', top: '1.2rem', left: '1.2rem', display: 'flex', gap: '0.6rem' }}>
                <span className="badge-gold" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', border: '1px solid var(--gold-border)' }}>
                  <Users size={14} /> {activeVenue.capacity}
                </span>
                <span className="badge-gold" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', border: '1px solid var(--gold-border)' }}>
                  <Maximize size={14} /> {activeVenue.area}
                </span>
              </div>
            </div>

            {/* Details Side */}
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-subtitle" style={{ fontSize: '1.5rem', textAlign: 'left', margin: 0, color: 'var(--gold-main)' }}>
                {activeVenue.subtitle}
              </span>
              <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1.2rem' }}>
                {activeVenue.title}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.8rem', marginBottom: '2.2rem' }}>
                {activeVenue.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={18} color="var(--gold-main)" />
                    <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button onClick={onOpenBooking} className="btn btn-gold" style={{ padding: '0.85rem 1.8rem' }}>
                  Reserve This Space <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
