
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '25+', label: 'Years of Experience', icon: 'history' },
    { value: '150+', label: 'Expert Doctors', icon: 'stethoscope' },
    { value: '50k+', label: 'Successful Surgeries', icon: 'favorite' },
    { value: '24/7', label: 'Emergency Support', icon: 'emergency' },
  ];

  return (
    <div className="bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 mb-4 group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
              </div>
              <p className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 group-hover:text-primary-600 transition-colors">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
