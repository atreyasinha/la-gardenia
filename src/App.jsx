import React, { useState } from 'react';
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

// ⚡ Bolt: Lazy load the ContactModal to reduce the initial bundle size.
// It is relatively large and not needed until the user explicitly requests to book a venue.
const ContactModal = React.lazy(() => import('./components/ContactModal.jsx'));

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  // ⚡ Bolt: State latch to defer loading the modal's bundle until first opened.
  // This allows the modal to stay mounted and preserve any built-in exit animations
  // after it has been loaded once.
  const [hasOpenedBookingModal, setHasOpenedBookingModal] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
    if (!hasOpenedBookingModal) {
      setHasOpenedBookingModal(true);
    }
  };
  const handleCloseBooking = () => setIsBookingModalOpen(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-deep)' }}>
      {/* Sticky Glass Navbar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
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

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Sticky Single Floating WhatsApp Action */}
      <FloatingActions />

      {/* Reservation & Booking Modal */}
      {/* ⚡ Bolt: Render the lazy-loaded modal only after the latch is set. */}
      {hasOpenedBookingModal && (
        <React.Suspense fallback={null}>
          <ContactModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />
        </React.Suspense>
      )}
    </div>
  );
}
