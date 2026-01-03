
import React from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <div className="relative overflow-hidden bg-slate-50 pt-6 pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-24">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in mx-auto md:mx-0">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-slate-600">Accepting New Patients</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl lg:text-7xl mb-6">
              Healthcare, <br />
              <span className="text-primary-600">Reimagined.</span>
            </h1>

            <p className="text-base sm:text-lg leading-8 text-slate-600 mb-10 max-w-lg font-light mx-auto md:mx-0">
              Experience world-class medical excellence with a personal touch. We combine advanced technology with compassionate care to help you live your healthiest life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-primary-600/20 transition-all hover:bg-primary-700 hover:shadow-primary-600/30 active:scale-95"
              >
                Find a Doctor
              </button>
              <button className="flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
                Our Specialties
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-slate-200/60 justify-center md:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/100/100?sig=${i}')` }}></div>
                ))}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-bold text-slate-600">+2k</div>
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <div className="flex text-yellow-500 text-sm justify-center sm:justify-start">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined text-[16px] fill-current">star</span>)}
                </div>
                <span className="text-xs font-medium text-slate-500 mt-0.5">Rated 4.9/5 by our patients</span>
              </div>
            </div>
          </div>

          <div className="relative md:h-full flex items-center justify-center mt-12 md:mt-0">
            <div className="relative w-full aspect-[4/5] md:aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 rotate-2 transition-transform hover:rotate-0 duration-700 ease-out bg-gradient-to-br from-primary-600 to-blue-500">
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-soft flex items-center gap-4 animate-bounce hidden sm:flex" style={{ animationDuration: '4s' }}>
                <div className="bg-blue-50 p-3 rounded-xl text-primary-600">
                  <span className="material-symbols-outlined">cardiology</span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Heart Care</p>
                  <p className="text-sm font-bold text-slate-900">#1 in Region</p>
                </div>
              </div>

              <div className="absolute top-12 -right-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-soft flex flex-col gap-2 border border-white/50 hidden lg:flex">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">verified</span>
                  <span className="text-xs font-bold text-slate-900">JCI Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
