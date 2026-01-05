
import React, { useState, useEffect, useCallback } from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

const slides = [
  {
    title: "Healthcare,",
    highlight: "Reimagined.",
    description: "Experience world-class medical excellence with a personal touch. We combine advanced technology with compassionate care.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1600",
    cta: "Find a Doctor",
    ctaSecondary: "Our Specialties",
    tagline: "Accepting New Patients"
  },
  {
    title: "Expert",
    highlight: "Specialists.",
    description: "Connect with the region's leading medical professionals across 25+ specialized departments and centers of excellence.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
    cta: "Meet Our Doctors",
    ctaSecondary: "View Specialties",
    tagline: "150+ Top Specialists"
  },
  {
    title: "Compassionate",
    highlight: "Patient Care.",
    description: "Your health journey is our priority. We provide a supportive environment focused on your comfort and rapid recovery.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
    cta: "Patient Stories",
    ctaSecondary: "Book a Visit",
    tagline: "Patient-Centered Approach"
  },
  {
    title: "World-Class",
    highlight: "Infrastructure.",
    description: "Equipped with the latest robotic surgery systems, diagnostic tools, and premium private recovery suites.",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1600",
    cta: "Tour Facilities",
    ctaSecondary: "Our Services",
    tagline: "State-of-the-art Technology"
  }
];

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden bg-slate-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
            }`}
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content */}
          <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl">
              {/* Tagline */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 transition-all duration-700 delay-300 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-100">{slide.tagline}</span>
              </div>

              {/* Title */}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 transition-all duration-700 delay-500 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                {slide.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">
                  {slide.highlight}
                </span>
              </h1>

              {/* Description */}
              <p className={`text-base sm:text-lg lg:text-xl leading-relaxed text-blue-50/80 mb-10 max-w-lg font-light transition-all duration-700 delay-700 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                {slide.description}
              </p>

              {/* CTAs */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-1000 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                <button
                  onClick={() => {
                    if (slide.cta.toLowerCase().includes('doctor') || slide.cta.toLowerCase().includes('visit')) {
                      onOpenBooking();
                    }
                  }}
                  className="flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-xl transition-all hover:bg-primary-50 hover:scale-105 active:scale-95 group"
                >
                  {slide.cta}
                  <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button
                  onClick={() => {
                    if (slide.ctaSecondary.toLowerCase().includes('visit') || slide.ctaSecondary.toLowerCase().includes('doctor')) {
                      onOpenBooking();
                    }
                  }}
                  className="flex items-center justify-center rounded-full bg-white/10 border border-white/30 backdrop-blur-md px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/20 hover:border-white/50"
                >
                  {slide.ctaSecondary}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center gap-6">
        {/* Slide Numbers */}
        <div className="flex items-center gap-4 text-white font-medium text-sm tracking-widest">
          <span className="text-primary-400">0{currentSlide + 1}</span>
          <div className="w-12 h-[1px] bg-white/20 relative">
            <div
              className="absolute left-0 top-0 h-full bg-primary-400 transition-all duration-[7000ms] ease-linear"
              style={{ width: `${isTransitioning ? '0%' : '100%'}` }}
              key={currentSlide}
            />
          </div>
          <span className="opacity-40">0{slides.length}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-white/20 hover:border-white/40 active:scale-90"
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-white/20 hover:border-white/40 active:scale-90"
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Progress Circles (Left Side) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`group relative flex items-center justify-center transition-all duration-300 ${i === currentSlide ? 'h-8' : 'h-4 hover:h-6'
              }`}
          >
            <div className={`w-[2px] rounded-full transition-all duration-500 ${i === currentSlide ? 'h-full bg-primary-400' : 'h-full bg-white/20'
              }`} />
            <span className={`absolute left-6 text-[10px] font-bold text-white uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${i === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
              }`}>
              {slides[i].tagline}
            </span>
          </button>
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 z-20 hidden xl:block animate-bounce-subtle">
        <div className="p-1 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="px-6 py-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-400">
              <span className="material-symbols-outlined">health_metrics</span>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">99%</p>
              <p className="text-[10px] text-blue-100/60 uppercase font-bold tracking-wider">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
