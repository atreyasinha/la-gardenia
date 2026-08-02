import React from 'react';
import { Phone, Mail, Clock, Navigation } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const mapLink = "https://maps.app.goo.gl/u86eBzCjV1tTE1ta7";

  return (
    <footer style={{ background: '#f4efe6', borderTop: '1px solid var(--gold-border)', paddingTop: '4rem', paddingBottom: '2rem', color: 'var(--text-secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.2rem' }}>
              <span
                style={{
                  fontFamily: "'Neonderthaw', cursive",
                  fontSize: '2.5rem',
                  fontWeight: 600,
                  color: 'var(--gold-main)',
                  lineHeight: 1,
                }}
              >
                La Gardenia
              </span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginTop: '2px' }}>
                Chas, Bokaro Steel City
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              Banquet hall and open-air event lawn in Chas, Bokaro Steel City for marriages, birthday parties, anniversaries, and corporate events.
            </p>
            <button onClick={onOpenBooking} className="btn btn-gold" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }} aria-label="Inquire venue booking">
              Inquire Booking
            </button>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.15rem', marginBottom: '1.2rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Quick Navigation</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>About La Gardenia</a>
              <a href="#venues" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Banquet & Lawn Spaces</a>
              <a href="#gallery" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Photo Gallery</a>
              <a href="#events" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Weddings & Birthdays</a>
              <a href="#menu" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Catering Menu</a>
              <a href="#reviews" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Google Reviews</a>
            </div>
          </div>

          {/* Sister Restaurant */}
          <div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.15rem', marginBottom: '1.2rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Our Sister Restaurant</h3>
            <div style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.2)', padding: '1.2rem', borderRadius: '12px' }}>
              <h4 style={{ margin: '0 0 0.4rem 0', color: 'var(--gold-dark)', fontSize: '1.15rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>ChatKara</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Authentic Indian chaat, tandoori & gravies. Located right next door!
              </p>
              <a
                href="https://chatkara.lagardenia.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'var(--gold-main)',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.background = 'var(--gold-dark)'}
                onMouseLeave={(e) => e.target.style.background = 'var(--gold-main)'}
              >
                View Menu & Order
              </a>
            </div>
          </div>

          {/* Location & Directions */}
          <div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.15rem', marginBottom: '1.2rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Venue & Directions</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              La Gardenia (Banquet Hall & Marriage Lawn), Main Road, Chas, Bokaro Steel City, Jharkhand 827013.
            </p>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--gold-dark)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 700,
              }}
            >
              <Navigation size={16} /> Open Google Maps Navigation
            </a>
          </div>

          {/* Contact Details */}
          <div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.15rem', marginBottom: '1.2rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Phone size={16} color="var(--gold-main)" style={{ marginTop: '3px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                  <a href="tel:+919431911929" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>+91 9431911929 <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(Primary)</span></a>
                  <a href="tel:+917488611030" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>+91 7488611030</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="var(--gold-main)" />
                <a href="mailto:booking@lagardenia.in" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>booking@lagardenia.in</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={16} color="var(--gold-main)" />
                <span>Visiting Hours: 10 AM - 9 PM Daily</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(184,134,11,0.18)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
          <span>&copy; {new Date().getFullYear()} La Gardenia (Chas, Bokaro). All rights reserved.</span>
          <span style={{ color: 'var(--text-muted)' }}>
            Website built by <strong style={{ color: 'var(--gold-dark)' }}>Shriumasha Enterprises Private Limited</strong>
          </span>
        </div>

      </div>
    </footer>
  );
}
