import React, { useState } from 'react';
import { Users, Maximize, CheckCircle2 } from 'lucide-react';

const venuesList = [
  {
    id: 'indoor-hall',
    title: 'Indoor Air-Conditioned Banquet Hall',
    subtitle: 'Climate-Controlled Indoor Space',
    capacity: '500 Guests Capacity',
    area: '6,500 Sq. Ft.',
    image: '/images/monogram-initials-stage.jpg',
    alt: 'Air Conditioned Marriage Banquet Hall Interior at La Gardenia Chas Bokaro',
    features: [
      'Centralized Air Conditioning',
      'Designer Ceiling Cove Lighting',
      'Executive Leather Sofas & Seating',
      'Integrated Stage with Backdrop Wall',
      'High-Definition Sound System Setup'
    ]
  },
  {
    id: 'outdoor-lawn',
    title: 'Open-Air Marriage Event Lawn',
    subtitle: 'Spacious Outdoor Event Lawn',
    capacity: '800 Guests Capacity',
    area: '10,000 Sq. Ft.',
    image: '/images/outdoor-lawn-mandap.jpg',
    alt: 'Open Air Marriage Lawn Mandap with Red Carpet at La Gardenia Bokaro',
    features: [
      'High-Density Artificial Turf Grass',
      'Circular Floral Mandap & Stage Area',
      'Red Carpet Royal Walkway',
      'Fairy Light Decorative Backdrop',
      'Outdoor Studio Lighting Rigs'
    ]
  },
  {
    id: 'dining-hall',
    title: 'Banquet Dining Hall',
    subtitle: 'Dedicated Space for Meals & Catering',
    capacity: '400 Dining Capacity',
    area: '4,500 Sq. Ft.',
    image: '/images/banquet-dining-hall.jpg',
    alt: 'Banquet Dining Hall Setup at La Gardenia Chas Bokaro',
    features: [
      'Draped Dining Tables & Chairs',
      'Stainless Steel Chafing Dishes',
      'Live Food & Chaat Counters',
      'Air-Conditioned Dining Hall',
      'Dedicated Catering Service Station'
    ]
  },
  {
    id: 'theme-studio',
    title: 'Birthday & Event Stage Area',
    subtitle: 'Stage & Party Backdrop Setup',
    capacity: '300 Guests Capacity',
    area: '3,500 Sq. Ft.',
    image: '/images/birthday-fairy-lawn-stage.jpg',
    alt: 'Birthday Party Stage Backdrop and Lawn Setup at La Gardenia Chas',
    features: [
      'Illuminated Neon Signage',
      'Shimmer Sequin Photo Backdrop',
      'Theme Balloon Archways',
      '3D Block Lettering',
      'Interactive Kids Play Area'
    ]
  }
];

export default function Venues() {
  const [activeVenue, setActiveVenue] = useState(venuesList[0]);

  return (
    <section id="venues" aria-label="Banquet Spaces" className="section-padding" style={{ background: 'var(--bg-elevated)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Venue Options</span>
          <h2 className="section-title">Indoor Hall & Outdoor Event Lawns in Chas</h2>
          <p className="section-description">
            Indoor air-conditioned banquet hall and outdoor open-air lawn options for marriage ceremonies, receptions, birthday functions, and corporate events in Chas, Bokaro.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {venuesList.map((venue) => (
            <button
              key={venue.id}
              onClick={() => setActiveVenue(venue)}
              className={`btn ${activeVenue.id === venue.id ? 'btn-gold' : 'btn-outline'}`}
              style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem' }}
              aria-label={`View details for ${venue.title}`}
            >
              {venue.title}
            </button>
          ))}
        </div>

        {/* Selected Space Details Card */}
        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', background: '#ffffff', border: '1px solid var(--gold-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {/* Image Side */}
            <div style={{ position: 'relative', minHeight: '360px' }}>
              <img
                src={activeVenue.image}
                alt={activeVenue.alt}
                loading="lazy"
                width="600"
                height="360"
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
            <div style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-subtitle" style={{ fontSize: '1.4rem', textAlign: 'left', margin: 0, color: 'var(--gold-main)' }}>
                {activeVenue.subtitle}
              </span>
              <h3 style={{ fontSize: '1.9rem', color: 'var(--text-primary)', marginBottom: '1.2rem' }}>
                {activeVenue.title}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                {activeVenue.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={18} color="var(--gold-main)" />
                    <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
