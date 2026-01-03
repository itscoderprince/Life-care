
import React from 'react';

interface CTASectionProps {
  onOpenBooking: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="group relative rounded-[3rem] bg-primary-900 px-6 py-16 sm:px-16 md:pt-28 md:pb-28 shadow-2xl shadow-primary-900/30 text-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] group-hover:bg-primary-500/30 transition-colors duration-1000"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="material-symbols-outlined text-primary-400 text-sm">verified_user</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Trusted by 50,000+ Families</span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8 leading-[1.1]">
              Prioritize Your <br className="hidden sm:block" />
              <span className="text-primary-400">Health Journey</span> Today
            </h2>

            <p className="mx-auto max-w-2xl text-lg md:text-xl text-blue-100/80 mb-12 font-light leading-relaxed">
              World-class care is just a few clicks away. Schedule a consultation with our experts and receive personalized medical attention.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={onOpenBooking}
                className="group/btn w-full sm:w-auto rounded-full bg-white px-10 py-5 text-base font-bold text-primary-900 shadow-xl transition-all hover:scale-105 hover:bg-primary-50 active:scale-95 flex items-center justify-center gap-2"
              >
                Book Your Appointment
                <span className="material-symbols-outlined text-primary-600 transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </button>
              <button className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-10 py-5 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40">
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
