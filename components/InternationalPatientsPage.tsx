
import React from 'react';

interface InternationalPatientsPageProps {
    onBack: () => void;
    onBookAppointment: () => void;
}

const services = [
    { icon: 'travel_explore', title: 'Medical Visa Assistance', description: 'Complete support for medical visa processing and invitation letters' },
    { icon: 'flight_land', title: 'Airport Transfers', description: 'Complimentary pickup and drop services from/to airport' },
    { icon: 'hotel', title: 'Accommodation', description: 'Partner hotels and in-house guest house facilities' },
    { icon: 'translate', title: 'Language Interpreters', description: 'Interpreters for Arabic, Russian, French, and more' },
    { icon: 'restaurant', title: 'International Cuisine', description: 'Multi-cuisine dining options to suit your preferences' },
    { icon: 'phone_in_talk', title: '24/7 Assistance', description: 'Dedicated international patient coordinator' },
    { icon: 'local_atm', title: 'Currency Exchange', description: 'Currency exchange assistance and banking support' },
    { icon: 'mobile_friendly', title: 'SIM Cards & Internet', description: 'Local SIM cards and WiFi connectivity' },
];

const treatments = [
    { name: 'Cardiac Surgery', description: 'Advanced heart procedures including bypass and valve replacement' },
    { name: 'Joint Replacement', description: 'Knee and hip replacement with minimally invasive techniques' },
    { name: 'Cancer Treatment', description: 'Comprehensive oncology care with latest therapies' },
    { name: 'Organ Transplant', description: 'Kidney, liver, and heart transplant programs' },
    { name: 'Cosmetic Surgery', description: 'Aesthetic procedures with experienced surgeons' },
    { name: 'Spine Surgery', description: 'Advanced spinal procedures and treatments' },
];

const testimonials = [
    { name: 'Ahmed Al-Rashid', country: 'UAE', text: '"Excellent care and wonderful staff. The international desk made everything seamless. Highly recommend for cardiac procedures."', rating: 5 },
    { name: 'Elena Ivanova', country: 'Russia', text: '"From visa to treatment to follow-up, everything was perfect. The Russian interpreter was very helpful. Thank you Lifecare!"', rating: 5 },
    { name: 'John Williams', country: 'UK', text: '"Best decision to choose Lifecare for my joint replacement. The quality of care matches any hospital in Europe."', rating: 5 },
];

const InternationalPatientsPage: React.FC<InternationalPatientsPageProps> = ({ onBack, onBookAppointment }) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-primary-600 to-indigo-600 pt-16 pb-24 text-white">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <button onClick={onBack} className="group flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors mb-6">
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Home
                    </button>
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur text-white text-sm font-bold rounded-full mb-4">INTERNATIONAL PATIENTS</span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 animate-fade-in">World-Class Care,<br />Global Reach</h1>
                        <p className="text-xl text-blue-50 leading-relaxed mb-8 animate-fade-in animate-delay-100">We welcome patients from around the world with comprehensive support services and personalized care coordination.</p>
                        <button onClick={onBookAppointment} className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-xl">
                            Request Consultation
                        </button>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Lifecare?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">We combine world-class medical expertise with exceptional patient support</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'medical_services', title: 'Expert Doctors', desc: 'Board-certified specialists with international training' },
                            { icon: 'savings', title: 'Cost-Effective', desc: '40-60% cost savings compared to US/UK' },
                            { icon: 'language', title: 'English-Speaking', desc: 'Fluent English-speaking medical staff' },
                            { icon: 'verified', title: 'JCI Accredited', desc: 'International quality standards certified' },
                        ].map((item, idx) => (
                            <div key={item.title} className={`bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all hover-lift animate-fade-in ${`animate-delay-${idx * 100}`}`}>
                                <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-4">
                                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Support Services</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">We take care of everything so you can focus on your health</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, idx) => (
                            <div key={service.title} className={`bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all animate-fade-in ${idx % 4 === 1 ? 'animate-delay-100' : idx % 4 === 2 ? 'animate-delay-200' : idx % 4 === 3 ? 'animate-delay-300' : ''}`}>
                                <span className="material-symbols-outlined text-primary-600 text-3xl mb-3">{service.icon}</span>
                                <h4 className="font-bold text-slate-900 mb-2">{service.title}</h4>
                                <p className="text-sm text-slate-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Popular Treatments */}
            <div className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Popular Treatments</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Most sought-after medical procedures by our international patients</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {treatments.map((treatment, idx) => (
                            <div key={treatment.name} className={`bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-600 hover:shadow-md transition-all animate-fade-in ${idx % 3 === 1 ? 'animate-delay-100' : idx % 3 === 2 ? 'animate-delay-200' : ''}`}>
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary-600">check_circle</span>
                                    {treatment.name}
                                </h4>
                                <p className="text-sm text-slate-600">{treatment.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process */}
            <div className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your Journey With Us</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Simple, transparent process from inquiry to recovery</p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { step: '1', title: 'Medical Inquiry', desc: 'Submit medical records and queries' },
                            { step: '2', title: 'Medical Opinion', desc: 'Receive expert opinion and cost estimate' },
                            { step: '3', title: 'Visa & Travel', desc: 'Visa letter and travel arrangements' },
                            { step: '4', title: 'Treatment', desc: 'Receive world-class medical care' },
                            { step: '5', title: 'Follow-Up', desc: 'Post-treatment support and monitoring' },
                        ].map((item, idx) => (
                            <div key={item.step} className={`relative text-center animate-slide-up`} style={{ animationDelay: `${idx * 100}ms` }}>
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-2 shadow-lg">{item.step}</div>
                                    {idx < 4 && <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-200"></div>}
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                <p className="text-xs text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-20 bg-primary-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our International Patients Say</h2>
                        <p className="text-blue-100 max-w-2xl mx-auto">Experiences from patients around the world</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <div key={testimonial.name} className={`bg-white/10 backdrop-blur rounded-xl p-6 animate-fade-in ${idx === 1 ? 'animate-delay-100' : idx === 2 ? 'animate-delay-200' : ''}`}>
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>
                                    ))}
                                </div>
                                <p className="text-blue-50 mb-6 italic leading-relaxed">{testimonial.text}</p>
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-sm text-blue-200">{testimonial.country}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="py-20">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
                        <span className="material-symbols-outlined text-5xl mb-4">support_agent</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact International Desk</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Our dedicated team is available 24/7 to assist you with any queries</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <div className="flex items-center gap-2 justify-center">
                                <span className="material-symbols-outlined">call</span>
                                <span className="font-semibold">+91 22 1234 5678</span>
                            </div>
                            <div className="flex items-center gap-2 justify-center">
                                <span className="material-symbols-outlined">email</span>
                                <span className="font-semibold">international@lifecare.com</span>
                            </div>
                            <div className="flex items-center gap-2 justify-center">
                                <span className="material-symbols-outlined">chat</span>
                                <span className="font-semibold">WhatsApp Support</span>
                            </div>
                        </div>
                        <button onClick={onBookAppointment} className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-xl">
                            Request Medical Opinion
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternationalPatientsPage;
