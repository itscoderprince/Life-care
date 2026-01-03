
import React, { useState } from 'react';

interface DoctorsPageProps {
    onBack: () => void;
    onBookAppointment: () => void;
}

const doctors = [
    { id: 1, name: 'Dr. Robert Chen', specialty: 'Cardiology', experience: 15, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400', credentials: 'MD, FACC', languages: ['English', 'Mandarin'], available: true },
    { id: 2, name: 'Dr. Sarah Johnson', specialty: 'Neurology', experience: 12, image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400', credentials: 'MD, PhD', languages: ['English', 'Spanish'], available: true },
    { id: 3, name: 'Dr. Amit Patel', specialty: 'Orthopedics', experience: 18, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400', credentials: 'MS, MCh', languages: ['English', 'Hindi', 'Gujarati'], available: false },
    { id: 4, name: 'Dr. Emily Davis', specialty: 'Pediatrics', experience: 10, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400', credentials: 'MD, FAAP', languages: ['English', 'French'], available: true },
    { id: 5, name: 'Dr. Michael Brown', specialty: 'Oncology', experience: 20, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6028d?auto=format&fit=crop&q=80&w=400', credentials: 'MD, DM', languages: ['English'], available: true },
    { id: 6, name: 'Dr. Priya Sharma', specialty: 'Obstetrics & Gynecology', experience: 14, image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=300', credentials: 'MD, DNB', languages: ['English', 'Hindi'], available: true },
    { id: 7, name: 'Dr. James Wilson', specialty: 'Gastroenterology', experience: 16, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300', credentials: 'MD, MRCP', languages: ['English'], available: false },
    { id: 8, name: 'Dr. Lisa Anderson', specialty: 'Ophthalmology', experience: 11, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300', credentials: 'MS, DOMS', languages: ['English', 'German'], available: true },
];

const specialties = ['All Specialties', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Obstetrics & Gynecology', 'Gastroenterology', 'Ophthalmology'];

const DoctorsPage: React.FC<DoctorsPageProps> = ({ onBack, onBookAppointment }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const filteredDoctors = doctors.filter(doctor => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSpecialty = selectedSpecialty === 'All Specialties' || doctor.specialty === selectedSpecialty;
        const matchesAvailability = !showAvailableOnly || doctor.available;
        return matchesSearch && matchesSpecialty && matchesAvailability;
    });

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-primary-900 py-5 text-white">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-600 via-primary-900 to-primary-900"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <button onClick={onBack} className="group flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors mb-6">
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Home
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in">Find Your Doctor</h1>
                    <p className="text-lg text-blue-100 max-w-2xl animate-fade-in animate-delay-100">Connect with our team of experienced healthcare professionals dedicated to your well-being.</p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                {/* Search and Filter Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 animate-fade-in">
                    <div className="grid md:grid-cols form-1fr gap-6">
                        {/* Search */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Search by name or specialty</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search doctors..."
                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                />
                            </div>
                        </div>

                        {/* Specialty Filter */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Specialty</label>
                            <select
                                value={selectedSpecialty}
                                onChange={(e) => setSelectedSpecialty(e.target.value)}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                                {specialties.map(specialty => (
                                    <option key={specialty} value={specialty}>{specialty}</option>
                                ))}
                            </select>
                        </div>

                        {/* Availability Filter */}
                        <div className="flex items-end">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={showAvailableOnly}
                                    onChange={(e) => setShowAvailableOnly(e.target.checked)}
                                    className="w-5 h-5 text-primary-600 border-slate-300 rounded focus:ring-primary-500"
                                />
                                <span className="text-sm font-medium text-slate-700">Show available only</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-slate-600">Showing <span className="font-bold text-slate-900">{filteredDoctors.length}</span> {filteredDoctors.length === 1 ? 'doctor' : 'doctors'}</p>
                </div>

                {/* Doctors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDoctors.map((doctor, idx) => (
                        <div key={doctor.id} className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all hover-lift animate-fade-in ${idx % 3 === 1 ? 'animate-delay-100' : idx % 3 === 2 ? 'animate-delay-200' : ''}`}>
                            {/* Doctor Image */}
                            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200">
                                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${doctor.image}')` }}></div>
                            </div>

                            {/* Doctor Info */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
                                        <p className="text-sm text-slate-500">{doctor.credentials}</p>
                                    </div>
                                    {doctor.available && (
                                        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                            <span className="size-1.5 rounded-full bg-emerald-500"></span> Available
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="material-symbols-outlined text-primary-600 text-lg">stethoscope</span>
                                        <span>{doctor.specialty}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="material-symbols-outlined text-primary-600 text-lg">workspace_premium</span>
                                        <span>{doctor.experience}+ years experience</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="material-symbols-outlined text-primary-600 text-lg">language</span>
                                        <span>{doctor.languages.join(', ')}</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                                        View Profile
                                    </button>
                                    <button
                                        onClick={onBookAppointment}
                                        className="flex-1 px-4 py-2 rounded-lg bg-primary-600 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredDoctors.length === 0 && (
                    <div className="text-center py-16">
                        <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">person_search</span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No doctors found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorsPage;
