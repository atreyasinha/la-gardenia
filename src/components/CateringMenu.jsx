import React, { useState } from 'react';
import { Utensils, Coffee, Pizza, CheckCircle2 } from 'lucide-react';

const menuCategories = [
  {
    id: 'starters',
    title: 'Starters & Live Counters',
    icon: <Pizza size={18} />,
    items: [
      { name: 'Paneer Tikka', desc: 'Grilled cottage cheese with spices' },
      { name: 'Delhi Chaat Counter', desc: 'Dahi Bhalla, Raj Kachori & Pani Puri' },
      { name: 'Hara Bhara Kebab', desc: 'Spinach and green pea patties' },
      { name: 'Crispy Spring Rolls', desc: 'Vegetable spring rolls' },
      { name: 'Fish Fry', desc: 'Crispy battered fish fillets' },
      { name: 'Pasta Counter', desc: 'Red sauce and white sauce pasta prepared live' }
    ]
  },
  {
    id: 'maincourse',
    title: 'Main Course',
    icon: <Utensils size={18} />,
    items: [
      { name: 'Dal Makhani', desc: 'Slow cooked black lentils with butter & cream' },
      { name: 'Paneer Butter Masala', desc: 'Cottage cheese in tomato gravy' },
      { name: 'Chicken Dum Biryani', desc: 'Basmati rice cooked with chicken and spices' },
      { name: 'Mutton Curry', desc: 'Tender mutton cooked in traditional gravy' },
      { name: 'Assorted Tandoori Roti & Naan', desc: 'Fresh tandoori breads' },
      { name: 'Mix Vegetable Handi', desc: 'Seasonal vegetables cooked with spices' }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts & Sweets',
    icon: <Coffee size={18} />,
    items: [
      { name: 'Gulab Jamun', desc: 'Warm cottage cheese sweet dumplings' },
      { name: 'Live Jalebi & Rabri', desc: 'Hot jalebis served with rabri' },
      { name: 'Ice Cream Counter', desc: 'Assorted ice cream flavors' },
      { name: 'Moong Dal Halwa', desc: 'Traditional halwa prepared with desi ghee' },
      { name: 'Fresh Fruits', desc: 'Seasonal sliced fresh fruits' }
    ]
  }
];

export default function CateringMenu({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('starters');

  const currentCategory = menuCategories.find(cat => cat.id === activeTab);

  return (
    <section id="menu" className="section-padding" style={{ background: 'var(--bg-elevated)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Food Options</span>
          <h2 className="section-title">Catering & Menu Options</h2>
          <p className="section-description">
            Vegetarian and non-vegetarian menus served for marriage functions, birthday parties, and corporate events.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Menu Showcase */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Menu Image Banner */}
          <div className="glass-card" style={{ padding: '0', overflow: 'hidden', height: '100%', minHeight: '380px', background: '#ffffff', border: '1px solid var(--gold-border)' }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <img
                src="/images/banquet-dining-hall.jpg"
                alt="La Gardenia Banquet Dining Setup"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,21,16,0.8) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                <span className="badge-gold" style={{ marginBottom: '0.5rem', background: 'rgba(255,255,255,0.92)' }}>
                  Dining Setup
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.5rem' }}>Banquet Catering & Food Counters</h3>
              </div>
            </div>
          </div>

          {/* Menu Tabs & Items */}
          <div>
            {/* Category Tabs */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`btn ${activeTab === cat.id ? 'btn-gold' : 'btn-outline'}`}
                  style={{ padding: '0.65rem 1.2rem', fontSize: '0.88rem' }}
                >
                  {cat.icon} {cat.title}
                </button>
              ))}
            </div>

            {/* Items List */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2rem' }}>
              {currentCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--gold-border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem 1.1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    boxShadow: '0 4px 15px rgba(74,61,51,0.03)',
                  }}
                >
                  <div style={{ color: 'var(--gold-main)', marginTop: '2px' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>{item.name}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.1rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn btn-gold">
                Inquire Full Menu Options
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
