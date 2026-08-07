import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const whatsappNum = "919431911929";

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.8rem',
        right: '1.5rem',
        zIndex: 850,
      }}
    >
      {/* Single Clean Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNum}?text=Hi%20La%20Gardenia%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20event!`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp (+91 9431911929)"
        aria-label="Chat with us on WhatsApp"
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37,211,102,0.4)',
          border: '2px solid #ffffff',
          transition: 'transform 0.25s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
