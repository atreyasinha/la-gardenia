import React, { useState, useEffect } from 'react';
import { Calendar, Users, ChevronRight, ChevronLeft } from 'lucide-react';

const heroSlides = [
  {
    image: '/images/night-ambience-facade.jpg',
    subtitle: 'La Gardenia Banquet Hall & Lawn',
    title: 'Banquet Hall & Event Lawn in Chas, Bokaro',
    tag: 'Chas, Bokaro Steel City'
  },
  {
    image: '/images/wedding-mandap-stage.jpg',
    subtitle: 'Weddings & Receptions',
    title: 'Indoor Hall & Stage Arrangements',
    tag: 'Stage & Seating Setup'
  },
  {
    image: '/images/outdoor-lawn-mandap.jpg',
    subtitle: 'Open-Air Lawn Space',
    title: 'Outdoor Celebrations for Up to 800 Guests',
    tag: 'Spacious Event Lawn'
  },
  {
    image: '/images/banquet-dining-hall.jpg',
    subtitle: 'Dining Area',
    title: 'Air-Conditioned Dining Hall & Catering Space',
    tag: 'Banquet Dining Hall'
  }
];

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [eventType, setEventType] = useState('wedding');
  const [guestCount, setGuestCount] = useState('300');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', paddingBottom: '3rem', overflow: 'hidden' }}>
      {/* Background Image Slider */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        >
          {/* Light Overlay Gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(250,247,242,0.65) 0%, rgba(250,247,242,0.85) 60%, rgba(250,247,242,1) 100%), radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(250,247,242,0.85) 100%)',
            }}
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '2rem 1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Subtitle */}
        <span className="section-subtitle" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.1rem)', margin: '0 0 0.3rem 0', color: 'var(--gold-main)' }}>
          {heroSlides[currentSlide].subtitle}
        </span>

        {/* Dynamic Headline */}
        <h1
          style={{
            fontSize: 'clamp(1.9rem, 5.5vw, 3.8rem)',
            fontFamily: 'var(--font-heading)',
            maxWidth: '900px',
            textAlign: 'center',
            lineHeight: 1.18,
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            fontWeight: 700,
          }}
        >
          {heroSlides[currentSlide].title}
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.92rem, 2vw, 1.12rem)', maxWidth: '680px', textAlign: 'center', marginBottom: '2rem', fontWeight: 400, lineHeight: 1.6 }}>
          Banquet hall and open-air event lawn for marriages, birthday parties, anniversaries, and corporate events in Chas, Bokaro Steel City.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '500px', marginBottom: '2.5rem' }}>
          <button onClick={onOpenBooking} className="btn btn-gold" style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem', flex: '1 1 200px' }}>
            <Calendar size={18} /> Inquire Booking
          </button>

          <a href="#gallery" className="btn btn-outline" style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem', flex: '1 1 200px' }}>
            View Photos <ChevronRight size={16} />
          </a>
        </div>

        {/* Quick Inquiry Bar */}
        <div
          className="glass-card"
          style={{
            maxWidth: '900px',
            width: '100%',
            padding: '1.25rem 1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            alignItems: 'center',
            background: '#ffffff',
            border: '1px solid var(--gold-border)',
            boxShadow: '0 15px 35px rgba(74,61,51,0.08)',
          }}
        >
          {/* Event Type Select */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', textAlign: 'left' }}>
            <label style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gold-main)', fontWeight: 700 }}>
              Event Type
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              style={{
                background: '#faf7f2',
                border: '1px solid var(--gold-border)',
                color: 'var(--text-primary)',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                outline: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 600,
              }}
            >
              <option value="wedding">Marriage & Reception</option>
              <option value="birthday">Birthday Function</option>
              <option value="anniversary">Engagement / Anniversary</option>
              <option value="corporate">Corporate Event</option>
            </select>
          </div>

          {/* Guest Count Select */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', textAlign: 'left' }}>
            <label style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gold-main)', fontWeight: 700 }}>
              Expected Guests
            </label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              style={{
                background: '#faf7f2',
                border: '1px solid var(--gold-border)',
                color: 'var(--text-primary)',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                outline: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 600,
              }}
            >
              <option value="100">100 - 250 Guests</option>
              <option value="300">250 - 500 Guests</option>
              <option value="600">500 - 800 Guests</option>
            </select>
          </div>

          {/* Button */}
          <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%' }}>
            <button
              onClick={onOpenBooking}
              className="btn btn-gold"
              style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '8px', justifyContent: 'center', fontSize: '0.88rem' }}
            >
              Check Availability
            </button>
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginTop: '1.8rem' }}>
          <button onClick={handlePrev} style={{ background: '#ffffff', border: '1px solid var(--gold-border)', color: 'var(--gold-main)', padding: '0.45rem', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 3px 8px rgba(0,0,0,0.05)' }} aria-label="Previous slide">
            <ChevronLeft size={18} />
          </button>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                style={{
                  width: i === currentSlide ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === currentSlide ? 'var(--gold-main)' : 'rgba(184,134,11,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button onClick={handleNext} style={{ background: '#ffffff', border: '1px solid var(--gold-border)', color: 'var(--gold-main)', padding: '0.45rem', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 3px 8px rgba(0,0,0,0.05)' }} aria-label="Next slide">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
