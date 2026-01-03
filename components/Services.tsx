
import React from 'react';

const services = [
  { name: 'Cardiology', icon: 'cardiology', color: 'text-primary-600', desc: 'Advanced cardiac care including diagnostics, interventional cardiology, and rehabilitation.' },
  { name: 'Orthopedics', icon: 'orthopedics', color: 'text-emerald-600', desc: 'Expert care for bones, joints, and spine. Minimally invasive surgeries and sports medicine.' },
  { name: 'Neurology', icon: 'neurology', color: 'text-indigo-600', desc: 'Diagnosis and treatment of disorders of the nervous system, brain, and spinal cord.' },
  { name: 'Oncology', icon: 'oncology', color: 'text-rose-500', desc: 'Comprehensive cancer care center providing medical, surgical, and radiation oncology.' },
  { name: 'Pediatrics', icon: 'child_care', color: 'text-sky-500', desc: 'Specialized healthcare for infants, children, and adolescents in a child-friendly environment.' },
  { name: 'Ophthalmology', icon: 'visibility', color: 'text-teal-600', desc: 'Complete eye care services ranging from routine exams to complex surgeries.' },
];

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Centers of Excellence</h2>
          <p className="mt-4 text-slate-500">Comprehensive care across specialized departments, utilizing the latest in medical technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={service.name} className={`group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-soft transition-all duration-300 hover-lift animate-fade-in ${idx % 3 === 1 ? 'animate-delay-100' : idx % 3 === 2 ? 'animate-delay-200' : ''}`}>
              <div className={`w-14 h-14 rounded-2xl bg-white ${service.color} shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
              <a className={`inline-flex items-center text-sm font-semibold ${service.color} group-hover:gap-2 transition-all`} href="#">
                Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a className="inline-block rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition-colors" href="#">View All Specialties</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
