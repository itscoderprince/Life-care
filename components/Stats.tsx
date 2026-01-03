
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '25+', label: 'Years of Experience' },
    { value: '150+', label: 'Expert Doctors' },
    { value: '50k+', label: 'Successful Surgeries' },
    { value: '24/7', label: 'Emergency Support' },
  ];

  return (
    <div className="bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:divide-x lg:divide-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left lg:pl-8 first:pl-0 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <p className="text-4xl font-bold tracking-tight text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
