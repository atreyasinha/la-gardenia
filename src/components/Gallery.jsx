import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: '/Screenshot_2026-07-22_at_7.53.24_PM.png_202607222001.jpeg',
    category: 'exterior',
    title: 'La Gardenia Illuminated Facade',
    caption: 'Warm gold illuminated cursive signage with wooden paneling and yellow drapes entrance'
  },
  {
    id: 2,
    src: '/Screenshot_2026-07-22_at_7.53.46_PM.png_202607222001.jpeg',
    category: 'weddings',
    title: 'Royal Mandap & Floral Stage',
    caption: 'Lush crimson & ivory floral arrangement with crystal chandelier and white leather couch'
  },
  {
    id: 3,
    src: '/Screenshot_2026-07-22_at_7.54.36_PM.png_202607222001.jpeg',
    category: 'dining',
    title: 'Grand Banquet Dining Hall',
    caption: 'Lavish food spread with gold-and-crimson draped tables, silver chafing dishes and ceiling cove lights'
  },
  {
    id: 4,
    src: '/Screenshot_2026-07-22_at_7.54.53_PM.png_202607222002.jpeg',
    category: 'birthdays',
    title: 'Birthday Balloon & Sequin Studio',
    caption: 'Purple & rose gold balloon arches with illuminated Happy Birthday neon and butterfly backdrops'
  },
  {
    id: 5,
    src: '/Screenshot_2026-07-22_at_7.55.19_PM.png_202607222002.jpeg',
    category: 'birthdays',
    title: '1st Birthday Fairy Theme Lawn Stage',
    caption: 'Grass turf steps, white picket fence, large 3D letters ONE, fairy cutouts and balloon arches'
  },
  {
    id: 6,
    src: '/Screenshot_2026-07-22_at_7.56.21_PM.png_202607222002.jpeg',
    category: 'exterior',
    title: 'Night Ambience & Glass Facade',
    caption: 'Stunning evening view of La Gardenia with blue ambient interior lights and pink flower garlands'
  },
  {
    id: 7,
    src: '/Screenshot_2026-07-22_at_7.56.36_PM.png_202607222003.jpeg',
    category: 'weddings',
    title: 'Customized Initials Stage Setup',
    caption: 'Gold diamond monogram frame, pink & white floral wall, and executive white tufted sofa seating'
  },
  {
    id: 8,
    src: '/Screenshot_2026-07-22_at_7.58.17_PM.png_202607222003.jpeg',
    category: 'weddings',
    title: 'Outdoor Lawn Mandap & Red Carpet',
    caption: 'Circular floral arch with hanging Edison bulbs, artificial turf, chandeliers, and red carpet aisle'
  },
  {
    id: 9,
    src: '/Screenshot_2026-07-22_at_7.58.35_PM.png_202607222003.jpeg',
    category: 'birthdays',
    title: 'Gold & Peach Celebration Backdrop',
    caption: 'Shimmering sequin backdrop with metallic gold balloons and floral vase stand'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="section-padding" style={{ background: 'var(--bg-deep)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Real Photographs</span>
          <h2 className="section-title">The La Gardenia Gallery</h2>
          <p className="section-description">
            Explore actual photos of our illuminated facade, royal wedding mandaps, theme birthday stages, and banquet dining.
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
            >
              <img
                src={item.src}
                alt={item.title}
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
                <h4 style={{ color: '#ffffff', fontSize: '1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600 }}>
                  {item.title}
                  <Maximize2 size={18} color="#d4af37" />
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="lightbox-backdrop" onClick={closeLightbox}>
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
              >
                <X size={24} />
              </button>

              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
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
