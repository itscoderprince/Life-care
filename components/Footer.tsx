
import React from 'react';

interface FooterProps {
  onGoHome: () => void;
  onOpenBooking: () => void;
}

const Footer: React.FC<FooterProps> = ({ onGoHome, onOpenBooking }) => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <button onClick={onGoHome} className="flex items-center gap-2 text-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
                <span className="material-symbols-outlined text-2xl">local_hospital</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Lifecare<span className="text-primary-600">.</span></span>
            </button>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Pioneering medical excellence with compassion and advanced technology. Your health, our priority.
            </p>
            <div className="flex gap-4">
              {['public', 'alternate_email', 'share', 'contact_support'].map((icon) => (
                <a key={icon} className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-100 text-slate-400 hover:text-primary-600 hover:border-primary-100 hover:bg-primary-50 transition-all" href="#">
                  <span className="material-symbols-outlined text-[18px]">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><button onClick={onGoHome} className="hover:text-primary-600 transition-colors">About Us</button></li>
              <li><button onClick={onGoHome} className="hover:text-primary-600 transition-colors">Find a Doctor</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-primary-600 transition-colors">Book Appointment</button></li>
              <li><button className="hover:text-primary-600 transition-colors">Patient Portal</button></li>
              <li><button className="hover:text-primary-600 transition-colors">Latest News</button></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">Departments</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Emergency'].map(item => (
                <li key={item}><button onClick={onGoHome} className="hover:text-primary-600 transition-colors">{item}</button></li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">Contact Us</h3>
            <ul className="space-y-5 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-600 text-lg shrink-0">location_on</span>
                <span>123 Health Avenue, Medical Park,<br/>Mumbai, India 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-600 text-lg shrink-0">call</span>
                <span className="font-semibold text-slate-700">+91 (22) 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-600 text-lg shrink-0">mail</span>
                <a href="mailto:contact@lifecare.com" className="hover:text-primary-600 transition-colors">contact@lifecare.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-xs font-medium text-slate-400">© 2024 Lifecare Medical Institutions. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <button onClick={onGoHome} className="hover:text-slate-900 transition-colors">Privacy Policy</button>
            <button onClick={onGoHome} className="hover:text-slate-900 transition-colors">Terms of Service</button>
            <button className="hover:text-slate-900 transition-colors">Cookie Settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
