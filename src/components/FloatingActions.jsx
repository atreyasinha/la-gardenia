import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function FloatingActions() {
  const mapLink = "https://maps.app.goo.gl/u86eBzCjV1tTE1ta7";
  const whatsappNum = "919431911929";

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '1.8rem',
        zIndex: 800,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
      }}
    >
      {/* Google Maps floating btn */}
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        title="Open Google Maps Location"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
          border: '1.5px solid var(--gold-border)',
          transition: 'transform 0.25s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MapPin size={24} />
      </a>

      {/* WhatsApp floating btn */}
      <a
        href={`https://wa.me/${whatsappNum}?text=Hi%20La%20Gardenia%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20event!`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp (+91 9431911929)"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
          border: '1.5px solid rgba(255,255,255,0.8)',
          transition: 'transform 0.25s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={26} />
      </a>

      {/* Direct Call btn */}
      <a
        href={`tel:+${whatsappNum}`}
        title="Call Booking Desk (+91 9431911929)"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'var(--gold-gradient)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(184,134,11,0.4)',
          border: '1.5px solid #fff',
          transition: 'transform 0.25s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
