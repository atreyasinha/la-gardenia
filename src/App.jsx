import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

// ⚡ Bolt: Lazy load components below the fold to drastically reduce initial JS bundle size
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
        {/* Load Hero immediately for fast LCP */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Lazy load the rest of the page components */}
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center', color: 'var(--gold-main)' }}>Loading...</div>}>
          <About />
          <Venues />
          <Gallery />
          <EventTypes />
          <CateringMenu />
          <LocationSection onOpenBooking={handleOpenBooking} />
          <Testimonials />
        </Suspense>
      </main>

      {/* Footer & Modals */}
      <Suspense fallback={null}>
        <Footer onOpenBooking={handleOpenBooking} />
        <FloatingActions />
        <ContactModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />
      </Suspense>
    </div>
  );
}
