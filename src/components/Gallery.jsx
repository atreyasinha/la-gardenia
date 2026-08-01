import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: '/images/entrance-facade.jpg',
    alt: 'La Gardenia Banquet Hall Front Entrance View in Chas Bokaro',
    category: 'exterior',
    title: 'La Gardenia Front Entrance',
    caption: 'Illuminated cursive signage with wooden entrance facade'
  },
  {
    id: 2,
    src: '/images/wedding-mandap-stage.jpg',
    alt: 'Royal Wedding Mandap Floral Stage Decoration at La Gardenia Chas',
    category: 'weddings',
    title: 'Royal Mandap & Floral Stage',
    caption: 'Floral arrangement with chandelier and leather couch seating'
  },
  {
    id: 3,
    src: '/images/banquet-dining-hall.jpg',
    alt: 'Banquet Dining Hall and Food Setup at La Gardenia Bokaro',
    category: 'dining',
    title: 'Banquet Dining Hall',
    caption: 'Food spread with draped dining tables and chafing dishes'
  },
  {
    id: 4,
    src: '/images/birthday-sequin-backdrop.jpg',
    alt: 'Birthday Function Balloon Decoration at La Gardenia Chas Bokaro',
    category: 'birthdays',
    title: 'Birthday Balloon Studio',
    caption: 'Balloon arches with illuminated Happy Birthday neon backdrop'
  },
  {
    id: 5,
    src: '/images/birthday-fairy-lawn-stage.jpg',
    alt: '1st Birthday Party Lawn Stage Setup at La Gardenia Bokaro',
    category: 'birthdays',
    title: '1st Birthday Lawn Stage',
    caption: 'Grass turf steps, white picket fence, 3D block letters ONE'
  },
  {
    id: 6,
    src: '/images/night-ambience-facade.jpg',
    alt: 'La Gardenia Evening Illuminated View in Chas Bokaro Steel City',
    category: 'exterior',
    title: 'Night Ambience Entrance View',
    caption: 'Evening view of La Gardenia main entrance facade'
  },
  {
    id: 7,
    src: '/images/monogram-initials-stage.jpg',
    alt: 'Engagement Monogram Stage Decoration at La Gardenia Chas',
    category: 'weddings',
    title: 'Initials Stage Setup',
    caption: 'Gold diamond monogram frame with white sofa seating'
  },
  {
    id: 8,
    src: '/images/outdoor-lawn-mandap.jpg',
    alt: 'Outdoor Marriage Lawn Mandap and Red Carpet at La Gardenia Bokaro',
    category: 'weddings',
    title: 'Outdoor Lawn Mandap',
    caption: 'Circular floral arch with Edison lights and red carpet aisle'
  },
  {
    id: 9,
    src: '/images/gold-peach-backdrop.jpg',
    alt: 'Event Sequin Backdrop Decoration at La Gardenia Chas Bokaro',
    category: 'birthdays',
    title: 'Celebration Backdrop',
    caption: 'Sequin backdrop with metallic gold balloons'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevLightbox();
      } else if (e.key === 'ArrowRight') {
        nextLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, prevLightbox, nextLightbox]);

  return (
    <section id="gallery" aria-label="Photo Gallery" className="section-padding" style={{ background: 'var(--bg-deep)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Real Photographs</span>
          <h2 className="section-title">La Gardenia Photo Gallery</h2>
          <p className="section-description">
            Photos of our venue entrance facade, marriage mandaps, birthday stages, open-air lawn, and banquet dining hall in Chas, Bokaro.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'weddings', label: 'Weddings & Stages' },
            { id: 'birthdays', label: 'Birthdays & Themes' },
            { id: 'dining', label: 'Banquet Dining' },
            { id: 'exterior', label: 'Facade & Exterior' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`btn ${filter === cat.id ? 'btn-gold' : 'btn-outline'}`}
              style={{ padding: '0.6rem 1.3rem', fontSize: '0.88rem' }}
              aria-label={`Filter photos by ${cat.label}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.8rem' }}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="glass-card"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                height: '280px',
                background: '#ffffff',
                border: '1px solid var(--gold-border)',
              }}
              tabIndex={0}
              role="button"
              aria-label={`Open lightbox for ${item.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(index); }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width="400"
                height="280"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26,21,16,0.9) 0%, rgba(26,21,16,0.2) 65%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.2rem',
                }}
              >
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#f3e5ab', fontWeight: 600 }}>
                  {item.category === 'dining' ? 'Banquet Dining' : item.category}
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600 }}>
                  {item.title}
                  <Maximize2 size={18} color="#d4af37" />
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="lightbox-backdrop" onClick={closeLightbox} aria-label="Close Lightbox">
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '0',
                  background: 'rgba(255,255,255,0.2)',
                  border: '1px solid var(--gold-border)',
                  color: '#fff',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                className="lightbox-img"
              />

              <div style={{ marginTop: '1.2rem', textAlign: 'center', maxWidth: '800px' }}>
                <h3 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '0.3rem' }}>
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p style={{ color: '#e2d7c5', fontSize: '0.95rem' }}>
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>

              <button
                onClick={prevLightbox}
                style={{
                  position: 'absolute',
                  left: '-50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(26,21,16,0.85)',
                  border: '1px solid var(--gold-border)',
                  color: '#fff',
                  padding: '0.8rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextLightbox}
                style={{
                  position: 'absolute',
                  right: '-50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(26,21,16,0.85)',
                  border: '1px solid var(--gold-border)',
                  color: '#fff',
                  padding: '0.8rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                aria-label="Next photo"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
