import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

const heroSlides = [
  {
    image: '/images/night-ambience-facade.jpg',
    alt: 'La Gardenia Banquet Hall Night Facade View in Chas Bokaro',
    subtitle: 'Banquet Hall & Event Lawn • Chas, Bokaro',
    title: 'La Gardenia Banquet Hall & Event Lawn in Chas, Bokaro',
  },
  {
    image: '/images/wedding-mandap-stage.jpg',
    alt: 'Royal Wedding Mandap & Stage Arrangement at La Gardenia Chas',
    subtitle: 'Marriage & Reception Venue • Bokaro',
    title: 'Indoor Banquet Hall & Stage Decoration in Chas',
  },
  {
    image: '/images/outdoor-lawn-mandap.jpg',
    alt: 'Open Air Event Lawn and Mandap Setup at La Gardenia Bokaro',
    subtitle: 'Open-Air Lawn Space for 800 Guests',
    title: 'Outdoor Wedding & Celebration Lawn in Bokaro Steel City',
  },
  {
    image: '/images/banquet-dining-hall.jpg',
    alt: 'Banquet Dining Hall and Food Setup at La Gardenia Chas',
    subtitle: 'Banquet Dining Hall & Catering Space',
    title: 'Air-Conditioned Dining Space & Catering Setup',
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
    <section id="hero" aria-label="Hero Introduction" style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '90px', paddingBottom: '3rem', overflow: 'hidden' }}>
      {/* Background Image Slider with Real <img> Tags for Lightning-Fast LCP */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            zIndex: 1,
          }}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            fetchpriority={index === 0 ? 'high' : 'low'}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            width="1200"
            height="800"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
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
        <span className="section-subtitle" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.1rem)', margin: '0 0 0.4rem 0', color: 'var(--gold-dark)' }}>
          {heroSlides[currentSlide].subtitle}
        </span>

        {/* Single Primary H1 Heading for Core SEO Target Keyword */}
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

        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', maxWidth: '680px', textAlign: 'center', marginBottom: '2rem', fontWeight: 400, lineHeight: 1.65 }}>
          Banquet hall and open-air event lawn for marriages, birthday parties, anniversaries, and corporate events in Chas, Bokaro Steel City, Jharkhand.
        </p>

        {/* Single Primary Action Button */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <button onClick={onOpenBooking} className="btn btn-gold" style={{ padding: '0.9rem 2.4rem', fontSize: '1rem', minHeight: '48px', minWidth: '200px' }} aria-label="Inquire venue booking">
            <Calendar size={18} /> Inquire Booking
          </button>
        </div>

        {/* Minimal Slider Controls with 44px Touch Targets */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginTop: '1rem' }}>
          <button
            onClick={handlePrev}
            style={{
              background: '#ffffff',
              border: '1px solid var(--gold-border)',
              color: 'var(--gold-dark)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                style={{
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <span
                  style={{
                    width: i === currentSlide ? '22px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: i === currentSlide ? 'var(--gold-dark)' : 'rgba(110,80,5,0.3)',
                    transition: 'all 0.3s ease',
                    display: 'block',
                  }}
                />
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            style={{
              background: '#ffffff',
              border: '1px solid var(--gold-border)',
              color: 'var(--gold-dark)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
