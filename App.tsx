
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Specialists from './components/Specialists';
import Testimonials from './components/Testimonials';
import HealthInsights from './components/HealthInsights';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SOSButton from './components/SOSButton';
import BookingPage from './components/BookingPage';
import DoctorsPage from './components/DoctorsPage';
import SpecialtiesPage from './components/SpecialtiesPage';
import FacilitiesPage from './components/FacilitiesPage';
import AboutPage from './components/AboutPage';
import InternationalPatientsPage from './components/InternationalPatientsPage';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState<'home' | 'booking' | 'doctors' | 'specialties' | 'facilities' | 'about' | 'international'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToBooking = () => {
    setView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDoctors = () => {
    setView('doctors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSpecialties = () => {
    setView('specialties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToFacilities = () => {
    setView('facilities');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToInternational = () => {
    setView('international');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white transition-all duration-500">
      <Navbar
        isScrolled={isScrolled}
        onOpenBooking={navigateToBooking}
        onGoHome={navigateToHome}
        onNavigateToDoctors={navigateToDoctors}
        onNavigateToSpecialties={navigateToSpecialties}
        onNavigateToFacilities={navigateToFacilities}
        onNavigateToAbout={navigateToAbout}
        onNavigateToInternational={navigateToInternational}
      />

      <main className="flex-grow">
        {view === 'home' && (
          <div className="animate-fade-in">
            <Hero onOpenBooking={navigateToBooking} />
            <Stats />
            <Services />
            <Specialists />
            <Testimonials />
            <HealthInsights />
            <CTASection onOpenBooking={navigateToBooking} />
          </div>
        )}
        {view === 'booking' && <BookingPage onBack={navigateToHome} />}
        {view === 'doctors' && <DoctorsPage onBack={navigateToHome} onBookAppointment={navigateToBooking} />}
        {view === 'specialties' && <SpecialtiesPage onBack={navigateToHome} onBookAppointment={navigateToBooking} />}
        {view === 'facilities' && <FacilitiesPage onBack={navigateToHome} />}
        {view === 'about' && <AboutPage onBack={navigateToHome} onBookAppointment={navigateToBooking} />}
        {view === 'international' && <InternationalPatientsPage onBack={navigateToHome} onBookAppointment={navigateToBooking} />}
      </main>

      <Footer onGoHome={navigateToHome} onOpenBooking={navigateToBooking} />
      <SOSButton />
    </div>
  );
};

export default App;
