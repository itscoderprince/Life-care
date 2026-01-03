
import React from 'react';

interface AboutPageProps {
    onBack: () => void;
    onBookAppointment: () => void;
}

const values = [
    { name: 'Compassion', icon: 'favorite', description: 'We treat every patient with empathy and understanding' },
    { name: 'Excellence', icon: 'stars', description: 'We strive for the highest standards in everything we do' },
    { name: 'Integrity', icon: 'shield', description: 'We uphold honesty and ethical practices at all times' },
    { name: 'Innovation', icon: 'lightbulb', description: 'We embrace new technologies and methods for better care' },
    { name: 'Teamwork', icon: 'groups', description: 'We collaborate across disciplines for optimal outcomes' },
];

const leaders = [
    { name: 'Dr. Rajesh Kumar', title: 'Medical Director', credentials: 'MD, FRCS', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300' },
    { name: 'Ms. Priya Mehta', title: 'Chief Executive Officer', credentials: 'MBA, Healthcare Management', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300' },
    { name: 'Dr. Anita Singh', title: 'Chief of Medicine', credentials: 'MD, DM', image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=300' },
    { name: 'Dr. Vikram Patel', title: 'Chief of Surgery', credentials: 'MS, MCh', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300' },
];

const AboutPage: React.FC<AboutPageProps> = ({ onBack, onBookAppointment }) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 pt-16 pb-24 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <button onClick={onBack} className="group flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors mb-6">
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Home
                    </button>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 animate-fade-in">About Lifecare</h1>
                        <p className="text-xl text-blue-100 leading-relaxed animate-fade-in animate-delay-100">Dedicated to providing world-class healthcare with compassion, innovation, and excellence since 2000.</p>
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
                            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-bold rounded-full mb-4">OUR STORY</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">25+ Years of Healthcare Excellence</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>Founded in 2000, Lifecare began with a vision to make world-class healthcare accessible to all. What started as a small 50-bed facility has grown into one of India's leading multi-specialty hospitals.</p>
                                <p>Over the past two decades, we've consistently invested in cutting-edge medical technology, recruited top medical talent, and expanded our services to cover virtually every medical specialty.</p>
                                <p>Today, we serve over 100,000 patients annually, with a 98% patient satisfaction rate and recognition from leading healthcare accreditation bodies worldwide.</p>
                            </div>
                        </div>
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl animate-fade-in animate-delay-100">
                            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800')" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-primary-50 rounded-2xl p-8 md:p-10 animate-fade-in">
                            <span className="material-symbols-outlined text-5xl text-primary-600 mb-4">flag</span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">To provide accessible, affordable, and high-quality healthcare services while treating every patient with dignity, compassion, and respect.</p>
                        </div>
                        <div className="bg-blue-50 rounded-2xl p-8 md:p-10 animate-fade-in animate-delay-100">
                            <span className="material-symbols-outlined text-5xl text-blue-600 mb-4">visibility</span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">To be the leading healthcare institution in India, recognized for medical excellence, innovation in patient care, and commitment to community health.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide everything we do at Lifecare</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {values.map((value, idx) => (
                            <div key={value.name} className={`bg-white rounded-2xl p-6 text-center hover:shadow-md transition-all hover-lift animate-fade-in ${`animate-delay-${idx * 100}`}`}>
                                <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-4">
                                    <span className="material-symbols-outlined text-2xl">{value.icon}</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{value.name}</h4>
                                <p className="text-xs text-slate-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Leadership Team */}
            <div className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Meet the visionaries leading Lifecare towards excellence</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leaders.map((leader, idx) => (
                            <div key={leader.name} className={`text-center animate-fade-in ${idx % 2 === 1 ? 'animate-delay-100' : ''}`}>
                                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-200">
                                    <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${leader.image}')` }}></div>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">{leader.name}</h4>
                                <p className="text-sm text-primary-600 font-medium mb-1">{leader.title}</p>
                                <p className="text-xs text-slate-500">{leader.credentials}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Achievements */}
            <div className="py-20 bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Recognized for excellence in healthcare delivery</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'verified', title: 'JCI Accredited', desc: 'International quality standards' },
                            { icon: 'workspace_premium', title: 'NABH Certified', desc: 'National accreditation board' },
                            { icon: 'award_star', title: 'ISO 9001:2015', desc: 'Quality management system' },
                            { icon: 'emoji_events', title: 'Best Hospital 2023', desc: 'Healthcare Excellence Awards' },
                        ].map((achievement, idx) => (
                            <div key={achievement.title} className={`bg-slate-800 rounded-xl p-6 text-center animate-scale-in ${`animate-delay-${idx * 100}`}`}>
                                <span className="material-symbols-outlined text-4xl text-primary-400 mb-3">{achievement.icon}</span>
                                <h4 className="font-bold mb-1">{achievement.title}</h4>
                                <p className="text-xs text-slate-400">{achievement.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-20">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Join Us in Our Mission</h2>
                    <p className="text-slate-600 mb-8 text-lg">Whether you're seeking care or looking to be part of our team, we'd love to hear from you.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={onBookAppointment} className="px-8 py-4 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-colors shadow-lg">
                            Book Appointment
                        </button>
                        <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:bg-slate-50 transition-colors">
                            Explore Careers
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
