
import React from 'react';

interface CTASectionProps {
  onOpenBooking: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="relative py-12 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="group relative rounded-[3rem] bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 px-6 py-10 sm:px-16 md:pt-14 md:pb-14 shadow-2xl shadow-primary-900/30 text-center overflow-hidden animate-fade-in">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] group-hover:bg-primary-500/30 transition-colors duration-1000"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 animate-bounce-subtle">
              <span className="material-symbols-outlined text-primary-400 text-sm">verified_user</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Trusted by 50,000+ Families</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4 leading-[1.1]">
              Prioritize Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Health Journey Today</span>
            </h2>

            <p className="mx-auto max-w-2xl text-base md:text-lg text-blue-100/80 mb-6 font-light leading-relaxed">
              World-class care is just a few clicks away. Schedule a consultation with our experts and receive personalized medical attention.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="group/btn w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary-900 shadow-xl shadow-black/20 transition-all hover:scale-105 hover:bg-primary-50 active:scale-95 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-primary-600">calendar_month</span>
                Book Your Appointment
                <span className="material-symbols-outlined text-primary-600 transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </button>
              <button className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-white/80">support_agent</span>
                Talk to Support
              </button>
            </div>
          </div>

          {/* Decorative Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
