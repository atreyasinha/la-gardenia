import React from 'react';
import { Star, ExternalLink, ShieldCheck, MessageSquare } from 'lucide-react';

const realGoogleReviews = [
  {
    name: 'Ravi Ranjan',
    source: 'Google Review',
    relativeTime: '2 years ago',
    rating: 5,
    text: 'Recently attended their New Year\'s Celebration 2024, which was a Bang. The vibe, the Decor, the event planning, the arrangement was top notch. Do visit their site for any celebration you want to host, they will provide full support.'
  },
  {
    name: 'INDRESH',
    source: 'Google Review (Local Guide)',
    relativeTime: '2 years ago',
    rating: 5,
    text: 'Best venue with great amenities and parking space . Well trained staff and a kind nature by the manager'
  },
  {
    name: 'PRANAV SARRAF',
    source: 'Google Review',
    relativeTime: '2 years ago',
    rating: 5,
    text: 'Perfect place to chill out. I really enjoyed the new year party 2024'
  },
  {
    name: 'shrey mayank',
    source: 'Google Review',
    relativeTime: '2 years ago',
    rating: 5,
    text: 'The best place to celebrate your marriage, Birthday, anniversary,events in Bokaro.....❤️'
  },
  {
    name: 'KRISHNA VIDEO',
    source: 'Google Review (Local Guide)',
    relativeTime: '11 months ago',
    rating: 4,
    text: 'Best place for small functions'
  },
  {
    name: 'Cinn Maker\'s',
    source: 'Google Review',
    relativeTime: '2 years ago',
    rating: 5,
    text: 'Great place and owners are very polite and hardworking and there food is too good'
  },
  {
    name: 'Chandan Karmkar',
    source: 'Google Review (Local Guide)',
    relativeTime: '2 years ago',
    rating: 5,
    text: 'Nice place for marriage'
  },
  {
    name: 'Surajkumar',
    source: 'Google Review (Local Guide)',
    relativeTime: '3 weeks ago',
    rating: 5,
    text: 'Great experience for dinner and events. Very polite hospitality.'
  }
];

export default function Testimonials() {
  const googleMapsUrl = "https://maps.app.goo.gl/u86eBzCjV1tTE1ta7";

  return (
    <section id="reviews" className="section-padding" style={{ background: 'var(--bg-elevated)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Real Customer Feedback</span>
          <h2 className="section-title">What Our Guests Say On Google Maps</h2>
          <p className="section-description">
            Rated <strong style={{ color: 'var(--gold-main)' }}>4.8 ★★★★★</strong> on Google Maps. Read authentic reviews left by families and guests who celebrated at La Gardenia Chas, Bokaro.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Live Google Reviews Header Banner */}
        <div
          className="glass-card"
          style={{
            maxWidth: '820px',
            margin: '0 auto 2.5rem auto',
            padding: '1.25rem 1.6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            background: '#ffffff',
            border: '1px solid var(--gold-border)',
            boxShadow: '0 8px 20px rgba(74,61,51,0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '1px solid #e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 3px 10px rgba(0,0,0,0.06)',
                fontWeight: 800,
                fontSize: '1.3rem',
                color: '#4285F4',
                flexShrink: 0,
              }}
            >
              G
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>4.8</span>
                <div style={{ display: 'flex', gap: '0.15rem', color: '#FBBC05' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>(120+ Verified Reviews)</span>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--gold-main)', fontWeight: 600, display: 'block', marginTop: '2px' }}>
                Official Google Business Listing • La Gardenia Chas, Bokaro
              </span>
            </div>
          </div>

          <div style={{ width: '100%', maxWidth: '240px' }}>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare size={15} /> Open All Google Reviews <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Clickable Reviews Cards Grid: 3-column responsive grid */}
        <div className="responsive-grid-3">
          {realGoogleReviews.map((rev, idx) => (
            <a
              key={idx}
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#ffffff',
                border: '1px solid var(--gold-border)',
                textDecoration: 'none',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold-main)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(184, 134, 11, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold-border)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'var(--shadow-lux)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', gap: '0.15rem', color: '#FBBC05' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FBBC05" color="#FBBC05" />
                    ))}
                    {rev.rating === 4 && <Star size={16} color="#d4d4d4" />}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--gold-main)', background: '#faf7f2', padding: '0.2rem 0.5rem', borderRadius: '12px', border: '1px solid var(--gold-border)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    Google <ExternalLink size={10} />
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  "{rev.text}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(184,134,11,0.12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--gold-gradient)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1rem' }}>
                    {rev.name[0]}
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', fontSize: '0.92rem', fontWeight: 600 }}>{rev.name}</h4>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{rev.relativeTime}</span>
                  </div>
                </div>

                <ShieldCheck size={18} color="var(--gold-main)" title="Verified Google Review" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
