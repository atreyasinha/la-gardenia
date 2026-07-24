import React from 'react';
import { MapPin, Navigation, Phone, Clock, Car, ExternalLink } from 'lucide-react';

export default function LocationSection({ onOpenBooking }) {
  const mapLink = "https://maps.app.goo.gl/u86eBzCjV1tTE1ta7";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7148596644265!2d86.1806018!3d23.6192276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f427a4dd1ecb65%3A0x27d94b3b0dbd071!2sLa%20gardenia%20(%20Banquet%20hall%2C%20Marriage%20hall%2C%20Events%20)!5e0!3m2!1sen!2sin!4v1721700000000!5m2!1sen!2sin";
  const primaryPhone = "+91 9431911929";
  const secondaryPhone = "+91 7488611030";

  return (
    <section id="location" className="section-padding" style={{ background: 'var(--bg-deep)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Easy Accessibility</span>
          <h2 className="section-title">Visit La Gardenia in Chas, Bokaro</h2>
          <p className="section-description">
            Conveniently situated in Chas, Bokaro Steel City with wide entry gateways, smooth highway access, and convenient street parking.
          </p>
          <div className="gold-divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'stretch' }}>
          
          {/* Address Card */}
          <div className="glass-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff', border: '1px solid var(--gold-border)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.7rem', background: 'rgba(184,134,11,0.1)', borderRadius: '50%', border: '1px solid var(--gold-border)' }}>
                  <MapPin size={24} color="var(--gold-main)" />
                </div>
                <div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem' }}>La Gardenia Banquet Hall</h3>
                  <span style={{ color: 'var(--gold-main)', fontSize: '0.85rem', fontWeight: 600 }}>Chas, Bokaro Steel City, Jharkhand</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="var(--gold-main)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>Venue Address:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                      La Gardenia (Banquet Hall, Marriage Hall & Events), Chas, Bokaro Steel City, Jharkhand 827013.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Car size={18} color="var(--gold-main)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>Parking Facility:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                      Convenient street parking available directly along the venue road.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Clock size={18} color="var(--gold-main)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>Visiting Hours:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                      Open Daily for Site Visits: 10:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Phone size={18} color="var(--gold-main)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>Contact Phone / WhatsApp:</strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.2rem' }}>
                      <a href={`tel:${primaryPhone}`} style={{ color: 'var(--gold-main)', textDecoration: 'none', fontWeight: 700, fontSize: '1.05rem' }}>
                        {primaryPhone} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(Primary)</span>
                      </a>
                      <a href={`tel:${secondaryPhone}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                        {secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Navigation size={18} /> Open Turn-by-Turn Google Maps <ExternalLink size={14} />
              </a>
            </div>

          </div>

          {/* Interactive Google Map iframe using exact place query */}
          <div className="glass-card" style={{ padding: '0', overflow: 'hidden', minHeight: '420px', position: 'relative', background: '#ffffff', border: '1px solid var(--gold-border)' }}>
            <iframe
              title="La Gardenia Google Map Location Chas Bokaro"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', width: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.2rem',
                left: '1.2rem',
                right: '1.2rem',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '1rem 1.2rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--gold-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 10px 25px rgba(74,61,51,0.1)',
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Verified Google Place</span>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>La Gardenia • Chas, Bokaro</h4>
              </div>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
              >
                View on Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
