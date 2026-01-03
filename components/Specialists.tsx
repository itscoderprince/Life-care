
import React from 'react';

const doctors = [
  { name: 'Dr. Robert Chen', spec: 'Cardiology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400', desc: 'Harvard Medical School alumni with 15+ years of experience.' },
  { name: 'Dr. Sarah Johnson', spec: 'Neurology', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.' },
  { name: 'Dr. Amit Patel', spec: 'Orthopedics', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400', desc: 'Pioneer in robotic joint replacement surgery.' },
  { name: 'Dr. Emily Davis', spec: 'Pediatrics', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400', desc: 'Dedicated to advanced pediatric care and neonatology.' },
];

const Specialists: React.FC = () => {
  return (
    <div className="bg-slate-900 py-24 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-slate-900"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Meet The Team</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">World-Class Specialists</h2>
            <p className="mt-4 text-slate-400">Our team comprises internationally trained doctors dedicated to providing the highest standard of care.</p>
          </div>
          <div>
            <button className="flex items-center gap-2 text-white hover:text-primary-400 font-semibold transition-colors">
              View All Doctors <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc, idx) => (
            <div key={doc.name} className={`group relative rounded-2xl overflow-hidden bg-slate-800/50 border border-white/5 transition-all hover:border-white/10 hover-lift animate-fade-in ${['', 'animate-delay-100', 'animate-delay-200', 'animate-delay-300'][idx]}`}>
              <div className="aspect-[4/5] w-full overflow-hidden bg-slate-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${doc.image}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-1">{doc.spec}</p>
                <h3 className="text-xl font-bold text-white mb-2">{doc.name}</h3>
                <p className="text-sm text-slate-300 line-clamp-2 mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">{doc.desc}</p>
                <button className="text-sm font-semibold text-white underline underline-offset-4 decoration-primary-500 hover:text-primary-400">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialists;
