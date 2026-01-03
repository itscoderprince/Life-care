
import React from 'react';

interface FacilitiesPageProps {
    onBack: () => void;
}

const facilities = [
    { name: 'Emergency & Trauma Center', icon: 'emergency', description: '24/7 emergency care with Level-1 trauma center equipped to handle critical cases', features: ['24/7 Availability', 'Ambulance Service', 'Trauma Team', 'Critical Care Units'], color: 'red' },
    { name: 'Intensive Care Units', icon: 'local_hospital', description: 'State-of-the-art ICUs with advanced monitoring and life support systems', features: ['Medical ICU', 'Surgical ICU', 'Cardiac ICU', 'Neonatal ICU'], color: 'blue' },
    { name: 'Operation Theatres', icon: 'surgical', description: 'Modular operation theatres with latest surgical equipment and robotic systems', features: ['16 Modular OTs', 'Robotic Surgery', 'Hybrid OT', 'Laminar Flow'], color: 'green' },
    { name: 'Diagnostic Imaging', icon: 'radiology', description: 'Advanced diagnostic imaging services for accurate diagnosis', features: ['3T MRI Scanner', '128-Slice CT Scan', 'Digital X-Ray', 'PET-CT Scan'], color: 'purple' },
    { name: 'Laboratory Services', icon: 'labs', description: 'NABL accredited laboratory with automated analyzers', features: ['Clinical Pathology', 'Microbiology', 'Biochemistry', 'Molecular Diagnostics'], color: 'cyan' },
    { name: 'Blood Bank', icon: 'bloodtype', description: 'Licensed blood bank with 24/7 blood component services', features: ['Blood Storage', 'Component Separation', 'Apheresis', 'Donor Screening'], color: 'rose' },
    { name: 'Pharmacy', icon: 'medication', description: 'In-house pharmacy stocked with authentic medications', features: ['24/7 Service', 'Generic Medicines', 'Home Delivery', 'Insurance Billing'], color: 'amber' },
    { name: 'Rehabilitation Center', icon: 'accessibility_new', description: 'Comprehensive rehabilitation services for faster recovery', features: ['Physiotherapy', 'Occupational Therapy', 'Speech Therapy', 'Pain Management'], color: 'teal' },
    { name: 'Cardiac Cathlab', icon: 'ecg_heart', description: 'Advanced cardiac catheterization laboratory for interventional procedures', features: ['Angiography', 'Angioplasty', 'Pacemaker Implantation', 'EP Studies'], color: 'indigo' },
    { name: 'Dialysis Unit', icon: 'water_drop', description: 'Modern dialysis unit with experienced nephrologists', features: ['Hemodialysis', 'Peritoneal Dialysis', '20 Dialysis Stations', 'Emergency Dialysis'], color: 'sky' },
    { name: 'Endoscopy Suite', icon: 'monitor_heart', description: 'Advanced endoscopy services for diagnostic and therapeutic procedures', features: ['Upper GI Endoscopy', 'Colonoscopy', 'ERCP', 'Bronchoscopy'], color: 'orange' },
    { name: 'Ambulance Services', icon: 'ambulance', description: 'Fleet of advanced life support ambulances with trained paramedics', features: ['ALS Ambulances', 'BLS Ambulances', 'Neonatal Ambulance', 'Air Ambulance'], color: 'lime' },
];

const colorClasses: Record<string, string> = {
    red: 'text-red-600 bg-red-50',
    blue: 'text-blue-600 bg-blue-50',
    green: 'text-green-600 bg-green-50',
    purple: 'text-purple-600 bg-purple-50',
    cyan: 'text-cyan-600 bg-cyan-50',
    rose: 'text-rose-600 bg-rose-50',
    amber: 'text-amber-600 bg-amber-50',
    teal: 'text-teal-600 bg-teal-50',
    indigo: 'text-indigo-600 bg-indigo-50',
    sky: 'text-sky-600 bg-sky-50',
    orange: 'text-orange-600 bg-orange-50',
    lime: 'text-lime-600 bg-lime-50',
};

const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-slate-900 pt-16 pb-20 text-white">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-slate-900"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <button onClick={onBack} className="group flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors mb-6">
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Home
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in">World-Class Medical Facilities</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mb-8 animate-fade-in animate-delay-100">State-of-the-art infrastructure and cutting-edge medical technology for superior patient care.</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
                        {[
                            { value: '500+', label: 'Beds' },
                            { value: '16', label: 'Operation Theatres' },
                            { value: '50+', label: 'ICU Beds' },
                            { value: '24/7', label: 'Emergency Care' },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                {/* Accreditations */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 animate-fade-in">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">Accreditations & Certifications</h3>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {['JCI Accredited', 'NABH Certified', 'ISO 9001:2015', 'NABL Approved Lab'].map(cert => (
                            <div key={cert} className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary-600">verified</span>
                                <span className="text-sm font-medium text-slate-700">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Facilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility, idx) => (
                        <div key={facility.name} className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all hover-lift animate-fade-in ${idx % 3 === 1 ? 'animate-delay-100' : idx % 3 === 2 ? 'animate-delay-200' : ''}`}>
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl ${colorClasses[facility.color]} flex items-center justify-center mb-4`}>
                                <span className="material-symbols-outlined text-2xl">{facility.icon}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{facility.name}</h3>
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">{facility.description}</p>

                            {/* Features */}
                            <ul className="space-y-1.5">
                                {facility.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                                        <span className="material-symbols-outlined text-primary-600 text-sm">check_circle</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Virtual Tour CTA */}
                <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience Our Facilities</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Take a virtual tour of our world-class medical infrastructure and see what sets us apart.</p>
                    <button className="px-8 py-3 bg-white text-primary-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
                        Take Virtual Tour
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FacilitiesPage;
