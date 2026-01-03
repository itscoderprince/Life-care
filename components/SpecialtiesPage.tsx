
import React from 'react';

interface SpecialtiesPageProps {
    onBack: () => void;
    onBookAppointment: () => void;
}

const specialties = [
    { name: 'Cardiology', icon: 'cardiology', color: 'primary', description: 'Comprehensive heart care including diagnostics, interventional cardiology, and cardiac surgery', services: ['ECG & Echocardiography', 'Angioplasty & Stenting', 'Cardiac Rehabilitation', 'Heart Failure Management'], doctors: 12 },
    { name: 'Neurology', icon: 'neurology', color: 'indigo', description: 'Expert diagnosis and treatment of brain, spinal cord, and nervous system disorders', services: ['Stroke Care', 'Epilepsy Management', 'Parkinson\'s Disease', 'Neuroimaging'], doctors: 8 },
    { name: 'Orthopedics', icon: 'orthopedics', color: 'emerald', description: 'Advanced care for bones, joints, spine, and musculoskeletal system', services: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Arthroscopy'], doctors: 15 },
    { name: 'Oncology', icon: 'oncology', color: 'rose', description: 'Comprehensive cancer care with medical, surgical, and radiation therapy', services: ['Chemotherapy', 'Radiation Therapy', 'Surgical Oncology', 'Palliative Care'], doctors: 10 },
    { name: 'Pediatrics', icon: 'child_care', color: 'sky', description: 'Specialized healthcare for infants, children, and adolescents', services: ['Newborn Care', 'Vaccinations', 'Growth Monitoring', 'Pediatric Emergency'], doctors: 14 },
    { name: 'Obstetrics & Gynecology', icon: 'pregnant_woman', color: 'pink', description: 'Complete women\'s health, pregnancy, and maternity care', services: ['Prenatal Care', 'High-Risk Pregnancy', 'Gynecological Surgery', 'Infertility Treatment'], doctors: 11 },
    { name: 'Gastroenterology', icon: 'gastroenterology', color: 'amber', description: 'Treatment of digestive system and liver disorders', services: ['Endoscopy', 'Liver Disease Management', 'IBD Treatment', 'Nutrition Counseling'], doctors: 7 },
    { name: 'Ophthalmology', icon: 'visibility', color: 'teal', description: 'Complete eye care from routine exams to complex surgeries', services: ['Cataract Surgery', 'LASIK', 'Retinal Surgery', 'Glaucoma Treatment'], doctors: 9 },
    { name: 'ENT', icon: 'hearing', color: 'violet', description: 'Ear, nose, and throat care including hearing and voice disorders', services: ['Sinus Surgery', 'Hearing Aids', 'Tonsillectomy', 'Voice Therapy'], doctors: 6 },
    { name: 'Urology', icon: 'urology', color: 'cyan', description: 'Treatment of urinary tract and male reproductive system disorders', services: ['Kidney Stone Treatment', 'Prostate Care', 'Urological Surgery', 'Incontinence Management'], doctors: 8 },
    { name: 'Dermatology', icon: 'dermatology', color: 'orange', description: 'Comprehensive skin, hair, and nail care', services: ['Acne Treatment', 'Skin Cancer Screening', 'Cosmetic Procedures', 'Hair Restoration'], doctors: 5 },
    { name: 'Psychiatry', icon: 'psychology', color: 'purple', description: 'Mental health care and psychological support', services: ['Therapy & Counseling', 'Medication Management', 'Addiction Treatment', 'Crisis Intervention'], doctors: 7 },
];

const colorClasses: Record<string, string> = {
    primary: 'text-primary-600 bg-primary-50',
    indigo: 'text-indigo-600 bg-indigo-50',
    emerald: 'text-emerald-600 bg-emerald-50',
    rose: 'text-rose-600 bg-rose-50',
    sky: 'text-sky-600 bg-sky-50',
    pink: 'text-pink-600 bg-pink-50',
    amber: 'text-amber-600 bg-amber-50',
    teal: 'text-teal-600 bg-teal-50',
    violet: 'text-violet-600 bg-violet-50',
    cyan: 'text-cyan-600 bg-cyan-50',
    orange: 'text-orange-600 bg-orange-50',
    purple: 'text-purple-600 bg-purple-50',
};

const SpecialtiesPage: React.FC<SpecialtiesPageProps> = ({ onBack, onBookAppointment }) => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 pt-16 pb-20 text-white">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <button onClick={onBack} className="group flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors mb-6">
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Home
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in">Our Medical Specialties</h1>
                    <p className="text-lg text-blue-100 max-w-2xl animate-fade-in animate-delay-100">Comprehensive care across specialized departments using the latest medical technology and expertise.</p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                {/* Specialties Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specialties.map((specialty, idx) => (
                        <div key={specialty.name} className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all hover-lift animate-fade-in ${idx % 3 === 1 ? 'animate-delay-100' : idx % 3 === 2 ? 'animate-delay-200' : ''}`}>
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl ${colorClasses[specialty.color]} flex items-center justify-center mb-4`}>
                                <span className="material-symbols-outlined text-3xl">{specialty.icon}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{specialty.name}</h3>
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">{specialty.description}</p>

                            {/* Services */}
                            <div className="mb-4">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Services</p>
                                <ul className="space-y-1">
                                    {specialty.services.map(service => (
                                        <li key={service} className="flex items-start gap-2 text-sm text-slate-600">
                                            <span className="material-symbols-outlined text-primary-600 text-sm mt-0.5">check_circle</span>
                                            <span>{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Doctors Count */}
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <span className="text-xs text-slate-500">{specialty.doctors} expert doctors</span>
                                <button onClick={onBookAppointment} className="text-xs font-bold text-primary-600 hover:text-primary-700 hover:underline">Book Appointment →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecialtiesPage;
