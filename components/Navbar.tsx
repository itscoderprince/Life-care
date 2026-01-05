
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onOpenBooking: () => void;
  onGoHome: () => void;
  onNavigateToDoctors: () => void;
  onNavigateToSpecialties: () => void;
  onNavigateToFacilities: () => void;
  onNavigateToAbout: () => void;
  onNavigateToInternational: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isScrolled,
  onOpenBooking,
  onGoHome,
  onNavigateToDoctors,
  onNavigateToSpecialties,
  onNavigateToFacilities,
  onNavigateToAbout,
  onNavigateToInternational
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', onClick: onGoHome },
    { name: 'Doctors', onClick: onNavigateToDoctors },
    { name: 'Specialties', onClick: onNavigateToSpecialties },
    { name: 'Facilities', onClick: onNavigateToFacilities },
    { name: 'About', onClick: onNavigateToAbout },
  ];

  const handleNavClick = (onClick: () => void) => {
    onClick();
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled ? 'glass-nav border-slate-100 h-16' : 'bg-slate-50 border-transparent h-20'}`}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <button onClick={onGoHome} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white shadow-glow">
              <span className="material-symbols-outlined text-[20px]">local_hospital</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Lifecare<span className="text-primary-600">.</span></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button key={item.name} onClick={item.onClick} className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full" />
              </button>
            ))}
            <button onClick={onNavigateToInternational} className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors relative group">
              International
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center justify-center rounded-full bg-primary-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all hover:scale-105 hover:bg-slate-800 active:scale-95"
            >
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-slate-900">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fixed animation */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <span className="material-symbols-outlined text-[20px]">local_hospital</span>
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-900">Lifecare<span className="text-primary-600">.</span></span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <span className="material-symbols-outlined text-slate-900">close</span>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.onClick)}
                    className="w-full text-left px-4 py-3 rounded-lg text-slate-900 font-medium hover:bg-slate-100 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick(onNavigateToInternational)}
                  className="w-full text-left px-4 py-3 rounded-lg text-slate-900 font-medium hover:bg-slate-100 transition-colors"
                >
                  International Patients
                </button>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-slate-200 space-y-3">
              <button
                onClick={() => handleNavClick(onOpenBooking)}
                className="w-full rounded-full bg-primary-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 transition-colors"
              >
                Book Appointment
              </button>
              <div className="text-center text-xs text-slate-500">
                <p>Emergency: +91 22 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
