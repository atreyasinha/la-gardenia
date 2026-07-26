import React, { useState } from 'react';
import { X, Phone, User, CheckCircle2, Sparkles, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    eventType: 'wedding',
    guests: '300',
    venueSpace: 'combined',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const sendWhatsApp = () => {
    const text = `Hi La Gardenia (Chas, Bokaro), I would like to inquire about booking an event!%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Event Date:* ${formData.eventDate}%0A*Event Type:* ${formData.eventType}%0A*Guest Count:* ${formData.guests}%0A*Venue Space:* ${formData.venueSpace}%0A*Notes:* ${formData.notes}`;
    window.open(`https://wa.me/919431911929?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(26, 21, 16, 0.75)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: '2.2rem',
          position: 'relative',
          background: '#ffffff',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: '1px solid var(--gold-border)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: '#faf7f2',
            border: '1px solid var(--gold-border)',
            color: 'var(--text-primary)',
            padding: '0.4rem',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--gold-gradient)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.8rem' }}>
                <Sparkles size={24} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>Reserve Your Event Date</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                La Gardenia Banquet Hall & Outdoor Lawn • Chas, Bokaro
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* Name */}
              <div>
                <label htmlFor="name" style={{ fontSize: '0.8rem', color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.3rem', fontWeight: 700 }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.6rem',
                      background: '#faf7f2',
                      border: '1px solid var(--gold-border)',
                      color: 'var(--text-primary)',
                      borderRadius: '8px',
                      outline: 'none',
                      fontWeight: 500,
                    }}
                  />
                  <User size={18} color="var(--gold-main)" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" style={{ fontSize: '0.8rem', color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.3rem', fontWeight: 700 }}>
                  Mobile / WhatsApp Number *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 9431911929"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.6rem',
                      background: '#faf7f2',
                      border: '1px solid var(--gold-border)',
                      color: 'var(--text-primary)',
                      borderRadius: '8px',
                      outline: 'none',
                      fontWeight: 500,
                    }}
                  />
                  <Phone size={18} color="var(--gold-main)" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                </div>
              </div>

              {/* Event Date & Guests (Max 800) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label htmlFor="eventDate" style={{ fontSize: '0.8rem', color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.3rem', fontWeight: 700 }}>
                    Event Date *
                  </label>
                  <input
                    id="eventDate"
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.8rem',
                      background: '#faf7f2',
                      border: '1px solid var(--gold-border)',
                      color: 'var(--text-primary)',
                      borderRadius: '8px',
                      outline: 'none',
                      fontWeight: 500,
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="guests" style={{ fontSize: '0.8rem', color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.3rem', fontWeight: 700 }}>
                    Expected Guests
                  </label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.6rem',
                      background: '#faf7f2',
                      border: '1px solid var(--gold-border)',
                      color: 'var(--text-primary)',
                      borderRadius: '8px',
                      outline: 'none',
                      fontWeight: 500,
                    }}
                  >
                    <option value="150">100 - 250 Guests</option>
                    <option value="350">250 - 500 Guests</option>
                    <option value="650">500 - 800 Guests</option>
                  </select>
                </div>
              </div>

              {/* Venue Space & Notes */}
              <div>
                <label htmlFor="venueSpace" style={{ fontSize: '0.8rem', color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.3rem', fontWeight: 700 }}>
                  Venue Space Preference
                </label>
                <select
                  id="venueSpace"
                  value={formData.venueSpace}
                  onChange={(e) => setFormData({ ...formData, venueSpace: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.8rem',
                    background: '#faf7f2',
                    border: '1px solid var(--gold-border)',
                    color: 'var(--text-primary)',
                    borderRadius: '8px',
                    outline: 'none',
                    fontWeight: 500,
                  }}
                >
                  <option value="indoor">Grand Indoor AC Hall</option>
                  <option value="lawn">Outdoor Open Event Lawn</option>
                  <option value="combined">Combined Hall + Lawn Arena</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" style={{ fontSize: '0.8rem', color: 'var(--gold-main)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.3rem', fontWeight: 700 }}>
                  Special Requests / Notes
                </label>
                <textarea
                  id="notes"
                  rows="3"
                  placeholder="Tell us about your decor preferences or guest requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: '#faf7f2',
                    border: '1px solid var(--gold-border)',
                    color: 'var(--text-primary)',
                    borderRadius: '8px',
                    outline: 'none',
                    resize: 'none',
                    fontWeight: 500,
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.8rem' }}>
                <button type="submit" className="btn btn-gold" style={{ flex: 1, padding: '0.85rem', justifyContent: 'center' }}>
                  <Send size={18} /> Submit Booking Request
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--gold-gradient)', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Inquiry Received!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.8rem' }}>
              Thank you, <strong style={{ color: 'var(--gold-main)' }}>{formData.name}</strong>. Our event manager in Chas, Bokaro will contact you shortly at <strong style={{ color: 'var(--gold-main)' }}>{formData.phone}</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <button onClick={sendWhatsApp} className="btn btn-gold" style={{ padding: '0.85rem', justifyContent: 'center' }}>
                Connect Instantly On WhatsApp
              </button>
              <button onClick={handleReset} className="btn btn-outline" style={{ padding: '0.85rem', justifyContent: 'center' }}>
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
