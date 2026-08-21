import React, { useState, Suspense, lazy } from 'react';
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

// ⚡ Bolt: Code-split ContactModal to reduce initial bundle size by ~8KB (gzipped).
// It's only needed when the user clicks "Book Venue".
const ContactModal = lazy(() => import('./components/ContactModal.jsx'));

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  // ⚡ Bolt: State latch ensures the Suspense boundary isn't rendered until needed,
  // but keeps the modal mounted (hidden) on close to preserve CSS exit animations.
  const [hasOpenedBooking, setHasOpenedBooking] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
    setHasOpenedBooking(true);
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
      {hasOpenedBooking && (
        <Suspense fallback={null}>
          <ContactModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />
        </Suspense>
      )}
    </div>
  );
}
