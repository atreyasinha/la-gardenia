import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

const heroSlides = [
  {
    image: '/images/night-ambience-facade.jpg',
    subtitle: 'La Gardenia Banquet Hall & Lawn',
    title: 'Banquet Hall & Event Lawn in Chas, Bokaro',
  },
  {
    image: '/images/wedding-mandap-stage.jpg',
    subtitle: 'Weddings & Receptions',
    title: 'Indoor Hall & Stage Arrangements',
  },
  {
    image: '/images/outdoor-lawn-mandap.jpg',
    subtitle: 'Open-Air Lawn Space',
    title: 'Outdoor Celebrations for Up to 800 Guests',
  },
  {
    image: '/images/banquet-dining-hall.jpg',
    subtitle: 'Dining Area',
    title: 'Air-Conditioned Dining Hall & Catering Space',
  }
];

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '90px', paddingBottom: '3rem', overflow: 'hidden' }}>
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
          {/* Light Ambient Overlay Gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(250,247,242,0.65) 0%, rgba(250,247,242,0.85) 65%, rgba(250,247,242,1) 100%), radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(250,247,242,0.85) 100%)',
            }}
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '2rem 1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Subtitle */}
        <span className="section-subtitle" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.1rem)', margin: '0 0 0.4rem 0', color: 'var(--gold-main)' }}>
          {heroSlides[currentSlide].subtitle}
        </span>

        {/* Dynamic Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.1rem, 5.5vw, 4rem)',
            fontFamily: 'var(--font-heading)',
            maxWidth: '880px',
            textAlign: 'center',
            lineHeight: 1.18,
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            fontWeight: 700,
          }}
        >
          {heroSlides[currentSlide].title}
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', maxWidth: '640px', textAlign: 'center', marginBottom: '2rem', fontWeight: 400, lineHeight: 1.65 }}>
          Banquet hall and open-air event lawn for marriages, birthday parties, anniversaries, and corporate events in Chas, Bokaro Steel City.
        </p>

        {/* Single Uncluttered Primary Action Button */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <button onClick={onOpenBooking} className="btn btn-gold" style={{ padding: '0.9rem 2.4rem', fontSize: '1rem' }}>
            <Calendar size={18} /> Inquire Booking
          </button>
        </div>

        {/* Minimal Slider Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginTop: '1rem' }}>
          <button onClick={handlePrev} style={{ background: '#ffffff', border: '1px solid var(--gold-border)', color: 'var(--gold-main)', padding: '0.45rem', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }} aria-label="Previous slide">
            <ChevronLeft size={18} />
          </button>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                style={{
                  width: i === currentSlide ? '22px' : '8px',
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

          <button onClick={handleNext} style={{ background: '#ffffff', border: '1px solid var(--gold-border)', color: 'var(--gold-main)', padding: '0.45rem', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }} aria-label="Next slide">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
