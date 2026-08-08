import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CostCalculator({ onOpenBooking }) {
  const [eventType, setEventType] = useState('wedding');
  const [spaceType, setSpaceType] = useState('combined');
  const [guestCount, setGuestCount] = useState(350);
  const [cateringType, setCateringType] = useState('royal');
  const [decorTheme, setDecorTheme] = useState('royal');

  const cateringRates = {
    classic: 750,
    royal: 1100,
    fusion: 1450,
  };

  const venueFees = {
    indoor: 75000,
    lawn: 90000,
    combined: 140000,
  };

  const decorFees = {
    standard: 45000,
    royal: 85000,
    bespoke: 125000,
  };

  const totalCatering = guestCount * cateringRates[cateringType];
  const totalVenue = venueFees[spaceType];
  const totalDecor = decorFees[decorTheme];
  const grandTotal = totalCatering + totalVenue + totalDecor;

  return (
    <section id="estimator" className="section-padding" style={{ background: 'var(--bg-deep)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Instant Transparency</span>
          <h2 className="section-title">Event Package & Budget Estimator</h2>
          <p className="section-description">
            Customize your guest count, venue preferences, catering spread, and decor themes to get an instant estimate.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="glass-card" style={{ padding: '2.5rem', maxWidth: '1050px', margin: '0 auto', background: '#ffffff', border: '1px solid var(--gold-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              
              {/* 1. Event Type */}
              <div>
                <label style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.6rem' }}>
                  1. Choose Event Type
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  {[
                    { id: 'wedding', label: 'Wedding & Reception' },
                    { id: 'birthday', label: 'Birthday / Milestone' },
                    { id: 'ring', label: 'Engagement / Ring' },
                    { id: 'corporate', label: 'Corporate Gala' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={eventType === item.id}
                      onClick={() => setEventType(item.id)}
                      style={{
                        padding: '0.7rem 0.8rem',
                        borderRadius: '8px',
                        background: eventType === item.id ? 'var(--gold-gradient)' : '#faf7f2',
                        color: eventType === item.id ? '#ffffff' : 'var(--text-primary)',
                        border: eventType === item.id ? '1px solid var(--gold-main)' : '1px solid var(--gold-border)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Venue Space */}
              <div>
                <label style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.6rem' }}>
                  2. Venue Space Preference
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem' }}>
                  {[
                    { id: 'indoor', label: 'Indoor Hall' },
                    { id: 'lawn', label: 'Outdoor Lawn' },
                    { id: 'combined', label: 'Hall + Lawn' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={spaceType === item.id}
                      onClick={() => setSpaceType(item.id)}
                      style={{
                        padding: '0.7rem 0.5rem',
                        borderRadius: '8px',
                        background: spaceType === item.id ? 'var(--gold-gradient)' : '#faf7f2',
                        color: spaceType === item.id ? '#ffffff' : 'var(--text-primary)',
                        border: spaceType === item.id ? '1px solid var(--gold-main)' : '1px solid var(--gold-border)',
                        fontWeight: 600,
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Guest Count Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    3. Estimated Guests
                  </label>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{guestCount} Guests</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: 'var(--gold-main)',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', fontWeight: 500 }}>
                  <span>100 Guests</span>
                  <span>500 Guests</span>
                  <span>1000+ Guests</span>
                </div>
              </div>

              {/* 4. Catering & Decor Option */}
              <div>
                <label style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.6rem' }}>
                  4. Culinary & Catering Level
                </label>
                <select
                  value={cateringType}
                  onChange={(e) => setCateringType(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: '#faf7f2',
                    border: '1px solid var(--gold-border)',
                    color: 'var(--text-primary)',
                    borderRadius: '8px',
                    outline: 'none',
                    fontWeight: 600,
                  }}
                >
                  <option value="classic">Classic Pure Veg Feast (₹750/plate)</option>
                  <option value="royal">Grand Royal Spread (Veg & Non-Veg) (₹1,100/plate)</option>
                  <option value="fusion">International Fusion + Live Chaat Stations (₹1,450/plate)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.6rem' }}>
                  5. Stage & Floral Decor Style
                </label>
                <select
                  value={decorTheme}
                  onChange={(e) => setDecorTheme(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: '#faf7f2',
                    border: '1px solid var(--gold-border)',
                    color: 'var(--text-primary)',
                    borderRadius: '8px',
                    outline: 'none',
                    fontWeight: 600,
                  }}
                >
                  <option value="standard">Standard Elegant Drapes & Backdrop</option>
                  <option value="royal">Royal Floral Mandap + Initials Monogram Frame</option>
                  <option value="bespoke">Bespoke 3D Fairy / Sequin Studio + Lawn Archway</option>
                </select>
              </div>

            </div>

            {/* Output Summary Column */}
            <div
              style={{
                background: 'var(--bg-elevated)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--gold-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem', color: 'var(--gold-main)' }}>
                  <Calculator size={22} />
                  <h3 style={{ fontSize: '1.4rem' }}>Estimated Cost Summary</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px dashed var(--gold-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <span>Catering ({guestCount} Guests)</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>₹{totalCatering.toLocaleString('en-IN')}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <span>Venue Space Rental</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>₹{totalVenue.toLocaleString('en-IN')}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <span>Theme Stage & Floral Decor</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>₹{totalDecor.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div style={{ paddingTop: '1.5rem', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-main)', fontWeight: 700 }}>
                    Estimated Package Value
                  </span>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--gold-main)', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                    ₹{grandTotal.toLocaleString('en-IN')}*
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    *Taxes extra. Includes air-conditioned hall, lawn, valet parking, and basic power backup.
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenBooking}
                  className="btn btn-gold"
                  style={{ width: '100%', padding: '1rem', fontSize: '1rem', justifyContent: 'center' }}
                >
                  <Sparkles size={18} /> Lock In Package Deal
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
