import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

// ⚡ Bolt: Implemented code splitting using React.lazy() to reduce the initial bundle size
// and improve main thread availability during initial load. Components below the fold
// are loaded dynamically when needed.
const About = lazy(() => import('./components/About.jsx'));
const Venues = lazy(() => import('./components/Venues.jsx'));
const Gallery = lazy(() => import('./components/Gallery.jsx'));
const EventTypes = lazy(() => import('./components/EventTypes.jsx'));
const CateringMenu = lazy(() => import('./components/CateringMenu.jsx'));
const LocationSection = lazy(() => import('./components/LocationSection.jsx'));
const Testimonials = lazy(() => import('./components/Testimonials.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const FloatingActions = lazy(() => import('./components/FloatingActions.jsx'));
const ContactModal = lazy(() => import('./components/ContactModal.jsx'));

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingModalOpen(true);
  const handleCloseBooking = () => setIsBookingModalOpen(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-deep)' }}>
      {/* Sticky Glass Navbar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero onOpenBooking={handleOpenBooking} />

        {/* ⚡ Bolt: Added Suspense boundary to prevent blocking the UI while lazy-loaded chunks are fetched */}
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyItems: 'center', color: 'var(--gold-main)' }}>Loading...</div>}>
          <About />
          <Venues />
          <Gallery />
          <EventTypes />
          <CateringMenu />
          <LocationSection onOpenBooking={handleOpenBooking} />
          <Testimonials />
        </Suspense>
      </main>

      {/* Footer and Modals with separate Suspense boundary */}
      <Suspense fallback={null}>
        {/* Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Sticky Single Floating WhatsApp Action */}
        <FloatingActions />

        {/* Reservation & Booking Modal */}
        <ContactModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />
      </Suspense>
    </div>
  );
}
