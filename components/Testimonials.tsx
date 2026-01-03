
import React from 'react';

const testimonials = [
  { name: 'Michael T.', role: 'Cardiac Patient', text: '"The level of professionalism and care I received was unmatched. From the front desk to the surgery room, everyone made me feel safe."', image: 'https://picsum.photos/100/100?sig=10' },
  { name: 'Priya K.', role: 'Maternity Care', text: '"Clean facilities, modern equipment, and doctors who truly listen. Lifecare has set a new standard for hospitals in Mumbai."', image: 'https://picsum.photos/100/100?sig=11' },
  { name: 'David R.', role: 'General Checkup', text: '"Efficient processes meant zero waiting time for my consultation. The digital reports delivery is very convenient."', image: 'https://picsum.photos/100/100?sig=12' },
  { name: 'Sarah L.', role: 'Neurology', text: '"Lifecare transformed my recovery process. The specialists here are not just experts, but truly empathetic humans."', image: 'https://picsum.photos/100/100?sig=13' },
  { name: 'John W.', role: 'Orthopedics', text: '"I can walk again without pain thanks to the team here. The rehabilitation center is world-class and very patient-focused."', image: 'https://picsum.photos/100/100?sig=14' },
];

const Testimonials: React.FC = () => {
  // Double the array for seamless infinite looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl tracking-tight">Voices of Excellence</h2>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Real stories from the patients we've had the privilege to serve.</p>
      </div>

      <div className="marquee-container relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 py-4 px-4">
          {duplicatedTestimonials.map((t, idx) => (
            <div 
              key={`${t.name}-${idx}`} 
              className="inline-block w-[300px] md:w-[400px] flex-shrink-0 whitespace-normal"
            >
              <div className="h-full flex flex-col gap-6 p-8 border-l-4 border-primary-600 bg-slate-50/50 rounded-r-3xl transition-all hover:bg-white hover:shadow-xl-soft border border-transparent hover:border-slate-100">
                <div className="flex text-yellow-500 gap-1">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined fill-current text-[14px]">star</span>)}
                </div>
                <blockquote className="text-base md:text-lg text-slate-700 italic leading-relaxed">
                  {t.text}
                </blockquote>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-white shadow-sm" style={{ backgroundImage: `url('${t.image}')` }}></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for the fade effect on sides */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Testimonials;
