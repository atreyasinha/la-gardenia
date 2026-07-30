import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Venues from './components/Venues.jsx';
import Gallery from './components/Gallery.jsx';
import EventTypes from './components/EventTypes.jsx';
import CateringMenu from './components/CateringMenu.jsx';
import LocationSection from './components/LocationSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import ContactModal from './components/ContactModal.jsx';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // ⚡ Bolt: Memoize handlers to prevent re-renders in children that receive them as props
  const handleOpenBooking = useCallback(() => setIsBookingModalOpen(true), []);
  const handleCloseBooking = useCallback(() => setIsBookingModalOpen(false), []);

  // ⚡ Bolt: Memoize the heavy static content tree.
  // This prevents the entire page (Gallery, Hero, Venues, etc.) from re-rendering
  // simply because the root-level booking modal state toggles open/closed.
  const mainContent = useMemo(() => (
    <main style={{ flexGrow: 1 }}>
      <Hero onOpenBooking={handleOpenBooking} />
      <About />
      <Venues />
      <Gallery />
      <EventTypes />
      <CateringMenu />
      <LocationSection onOpenBooking={handleOpenBooking} />
      <Testimonials />
    </main>
  ), [handleOpenBooking]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-deep)' }}>
      {/* Sticky Glass Navbar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      {mainContent}

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Sticky Single Floating WhatsApp Action */}
      <FloatingActions />

      {/* Reservation & Booking Modal */}
      <ContactModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />
    </div>
  );
}
