import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Venues', href: '#venues' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Menu', href: '#menu' },
    { name: 'Location', href: '#location' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '36px',
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(250, 247, 242, 0.96)'
          : 'linear-gradient(to bottom, rgba(250,247,242,0.98), rgba(250,247,242,0))',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(184, 134, 11, 0.2)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 8px 25px rgba(74,61,51,0.05)' : 'none',
        padding: isScrolled ? '0.6rem 0' : '1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: "'Neonderthaw', cursive",
              fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '0.01em',
              color: 'var(--gold-main)',
              lineHeight: 1,
            }}
          >
            La Gardenia
          </span>
          <span style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600, marginTop: '2px' }}>
            Chas, Bokaro Steel City
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '1.8rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.01em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--gold-main)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Single Primary Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button onClick={onOpenBooking} className="btn btn-gold" style={{ padding: '0.6rem 1.3rem', fontSize: '0.85rem' }}>
            <Calendar size={15} /> Book Venue
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(184,134,11,0.08)',
              border: '1px solid var(--gold-border)',
              borderRadius: '8px',
              color: 'var(--gold-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.45rem',
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(250, 247, 242, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--gold-border)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: '0 20px 40px rgba(74,61,51,0.12)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '0.4rem 0',
                borderBottom: '1px solid rgba(184,134,11,0.12)',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
