
import React from 'react';

const services = [
  {
    name: 'Cardiology',
    icon: 'cardiology',
    color: 'text-primary-600',
    desc: 'Advanced cardiac care including diagnostics, interventional cardiology, and rehabilitation.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Orthopedics',
    icon: 'orthopedics',
    color: 'text-emerald-600',
    desc: 'Expert care for bones, joints, and spine. Minimally invasive surgeries and sports medicine.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Neurology',
    icon: 'neurology',
    color: 'text-indigo-600',
    desc: 'Diagnosis and treatment of disorders of the nervous system, brain, and spinal cord.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Oncology',
    icon: 'oncology',
    color: 'text-rose-500',
    desc: 'Comprehensive cancer care center providing medical, surgical, and radiation oncology.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Pediatrics',
    icon: 'child_care',
    color: 'text-sky-500',
    desc: 'Specialized healthcare for infants, children, and adolescents in a child-friendly environment.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Ophthalmology',
    icon: 'visibility',
    color: 'text-teal-600',
    desc: 'Complete eye care services ranging from routine exams to complex surgeries.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=600'
  },
];

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto animate-fade-in">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Centers of Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.name}
              className={`group relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-soft transition-all duration-500 hover:border-slate-200 hover:shadow-xl hover:-translate-y-2 animate-slide-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className={`w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm ${service.color.replace('text-', 'text-white')} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-2xl text-white">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">{service.desc}</p>
                <a className="inline-flex items-center text-sm font-semibold text-white group-hover:gap-2 transition-all" href="#">
                  Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a className="inline-block rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 hover:shadow-md transition-all hover:-translate-y-1" href="#">View All Specialties</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
