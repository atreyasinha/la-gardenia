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

// ⚡ Bolt: Code-split the contact modal since it's heavy and not initially visible.
// ⚡ Bolt: This significantly reduces the main JS bundle size.
const ContactModal = lazy(() => import('./components/ContactModal.jsx'));

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  // ⚡ Bolt: Track if modal has ever been opened to defer initial load
  // without breaking close animations by unmounting instantly.
  const [hasModalBeenOpened, setHasModalBeenOpened] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
    setHasModalBeenOpened(true);
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
      {/* ⚡ Bolt: Mount the Suspense boundary only after the user's first click.
          This defers the heavy network request initially, but keeps the component
          mounted afterward so it can handle its own close animations. */}
      {hasModalBeenOpened && (
        <Suspense fallback={null}>
          <ContactModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />
        </Suspense>
      )}
    </div>
  );
}
