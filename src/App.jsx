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

// ⚡ Bolt: Lazy load the large ContactModal component to reduce initial bundle size and improve TTI.
const ContactModal = lazy(() => import('./components/ContactModal.jsx'));

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  // ⚡ Bolt: State latch to defer the network request until the modal is opened the first time.
  const [hasOpenedModal, setHasOpenedModal] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
    setHasOpenedModal(true);
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
      {/* ⚡ Bolt: We keep it mounted once opened to preserve exit animations. */}
      {hasOpenedModal && (
        <Suspense fallback={null}>
          <ContactModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />
        </Suspense>
      )}
    </div>
  );
}
