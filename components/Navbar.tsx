
import React from 'react';

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
  const navItems = [
    { name: 'Home', onClick: onGoHome },
    { name: 'Doctors', onClick: onNavigateToDoctors },
    { name: 'Specialties', onClick: onNavigateToSpecialties },
    { name: 'Facilities', onClick: onNavigateToFacilities },
    { name: 'About', onClick: onNavigateToAbout },
  ];

  return (
    <>
      <div className="bg-primary-900 text-white py-2 text-[10px] md:text-xs font-medium tracking-wide">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span><span className="opacity-70">Emergency:</span> +91 22 1234 5678</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="hidden sm:inline"><span className="opacity-70">Email:</span> care@lifecare.com</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onNavigateToInternational} className="hover:text-primary-100 transition-colors">International Patients</button>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled ? 'glass-nav border-slate-100 h-16' : 'bg-slate-50 border-transparent h-20'}`}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <button onClick={onGoHome} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white shadow-glow">
              <span className="material-symbols-outlined text-[20px]">local_hospital</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Lifecare<span className="text-primary-600">.</span></span>
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button key={item.name} onClick={item.onClick} className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center rounded-full bg-primary-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform hover:scale-105 hover:bg-slate-800 active:scale-95"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
