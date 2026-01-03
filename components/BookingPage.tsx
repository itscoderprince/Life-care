
import React, { useState } from 'react';

interface BookingPageProps {
  onBack: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>('5');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-9 bg-primary-600/10 rounded-lg text-primary-600">
                <span className="material-symbols-outlined">local_hospital</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                MediCare <span className="text-primary-600">Premium</span>
              </h1>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors" href="#">Doctors</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors" href="#">Services</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors" href="#">International Patients</a>
            </nav>
            {/* Actions */}
            <div className="flex items-center gap-3">
              <button onClick={onBack} className="hidden sm:flex text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Header Section */}
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Book Your Visit</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">Expert care is just a few clicks away. Select your specialist and schedule your consultation securely.</p>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-10 relative">
          {/* LEFT COLUMN: Booking Workflow */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            {/* Progress Stepper */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex flex-col gap-2 p-3 md:p-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-primary-600 shadow-sm animate-scale-in">
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">Step 1</span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-600 text-xl">stethoscope</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">Specialist</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-3 md:p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 opacity-60 animate-scale-in animate-delay-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step 2</span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-xl">calendar_month</span>
                  <span className="font-bold text-slate-500 dark:text-slate-400 text-sm">Date & Time</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-3 md:p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 opacity-60 animate-scale-in animate-delay-200">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step 3</span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-xl">person</span>
                  <span className="font-bold text-slate-500 dark:text-slate-400 text-sm">Details</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-3 md:p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 opacity-60 animate-scale-in animate-delay-300">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step 4</span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-xl">check_circle</span>
                  <span className="font-bold text-slate-500 dark:text-slate-400 text-sm">Confirm</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: Choose Specialist */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden animate-fade-in">
              <div className="p-4 md:p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Choose Your Specialist</h3>
                <button className="text-xs md:text-sm text-primary-600 font-medium hover:underline">View all doctors</button>
              </div>
              <div className="p-4 md:p-6 grid gap-4">
                {/* Doctor Card 1 (Selected) */}
                <label className={`relative flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl border-2 ${selectedDoctor === 1 ? 'border-primary-600 bg-blue-50/30 dark:bg-blue-900/10' : 'border-slate-200 dark:border-slate-700'} cursor-pointer transition-all hover-lift`}>
                  <input checked={selectedDoctor === 1} onChange={() => setSelectedDoctor(1)} className="peer sr-only" name="doctor" type="radio" />
                  <div className="relative size-14 md:size-16 rounded-full overflow-hidden bg-slate-200 shrink-0">
                    <img alt="Dr. Anjali Sharma portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-base md:text-lg text-slate-900 dark:text-white">Dr. Anjali Sharma</p>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Senior Cardiologist • 12 Years Exp.</p>
                      </div>
                      {selectedDoctor === 1 && (
                        <div className="size-5 md:size-6 rounded-full bg-primary-600 text-white flex items-center justify-center">
                          <span className="material-symbols-outlined text-[14px] md:text-[16px]">check</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 md:mt-3 flex flex-wrap items-center gap-2 md:gap-3">
                      <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                        <span className="size-1.5 rounded-full bg-emerald-500"></span> Available Today
                      </span>
                      <span className="text-[10px] md:text-xs text-slate-400">Next Slot: 2:00 PM</span>
                    </div>
                  </div>
                </label>

                {/* Doctor Card 2 */}
                <label className={`relative flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl border ${selectedDoctor === 2 ? 'border-primary-600 bg-blue-50/30 dark:bg-blue-900/10' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'} bg-white dark:bg-slate-800 cursor-pointer transition-all hover-lift`}>
                  <input checked={selectedDoctor === 2} onChange={() => setSelectedDoctor(2)} className="peer sr-only" name="doctor" type="radio" />
                  <div className="relative size-14 md:size-16 rounded-full overflow-hidden bg-slate-200 shrink-0">
                    <img alt="Dr. Rajesh Gupta portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-base md:text-lg text-slate-900 dark:text-white">Dr. Rajesh Gupta</p>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Neurologist • 8 Years Exp.</p>
                      </div>
                      {selectedDoctor === 2 && (
                        <div className="size-5 md:size-6 rounded-full bg-primary-600 text-white flex items-center justify-center">
                          <span className="material-symbols-outlined text-[14px] md:text-[16px]">check</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 md:mt-3 flex flex-wrap items-center gap-2 md:gap-3">
                      <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-medium text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-full">
                        <span className="size-1.5 rounded-full bg-amber-500"></span> Tomorrow
                      </span>
                      <span className="text-[10px] md:text-xs text-slate-400">Starts: 10:00 AM</span>
                    </div>
                  </div>
                </label>

                {/* Doctor Card 3 */}
                <label className={`relative flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl border ${selectedDoctor === 3 ? 'border-primary-600 bg-blue-50/30 dark:bg-blue-900/10' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'} bg-white dark:bg-slate-800 cursor-pointer transition-all hover-lift`}>
                  <input checked={selectedDoctor === 3} onChange={() => setSelectedDoctor(3)} className="peer sr-only" name="doctor" type="radio" />
                  <div className="relative size-14 md:size-16 rounded-full overflow-hidden bg-slate-200 shrink-0">
                    <img alt="Dr. Sarah Jenkins portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-base md:text-lg text-slate-900 dark:text-white">Dr. Sarah Jenkins</p>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">General Medicine • 15 Years Exp.</p>
                      </div>
                      {selectedDoctor === 3 && (
                        <div className="size-5 md:size-6 rounded-full bg-primary-600 text-white flex items-center justify-center">
                          <span className="material-symbols-outlined text-[14px] md:text-[16px]">check</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 md:mt-3 flex flex-wrap items-center gap-2 md:gap-3">
                      <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-medium text-slate-600 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                        <span className="size-1.5 rounded-full bg-slate-500"></span> Aug 14
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            </section>

            {/* SECTION 2: Date & Time */}
            <div className="grid lg:grid-cols-2 gap-4 md:gap-6 animate-fade-in animate-delay-100">
              {/* Calendar */}
              <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Select Date</h3>
                  <div className="flex gap-1 md:gap-2">
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500">
                      <span className="material-symbols-outlined text-[18px] md:text-[20px]">chevron_left</span>
                    </button>
                    <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200 self-center">August 2023</span>
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500">
                      <span className="material-symbols-outlined text-[18px] md:text-[20px]">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 mb-2 text-center">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <span key={i} className="text-xs font-bold text-slate-400 py-2">{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs md:text-sm">
                  <span></span><span></span><span></span>
                  {[1, 2, 3, 4].map(d => (
                    <button key={d} className="size-7 md:size-9 rounded-full text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center">{d}</button>
                  ))}
                  <button onClick={() => setSelectedDate('5')} className={`size-7 md:size-9 rounded-full ${selectedDate === '5' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'} font-bold flex items-center justify-center`}>5</button>
                  {[6, 7, 8, 9, 10, 11, 12].map(d => (
                    <button key={d} onClick={() => setSelectedDate(d.toString())} className={`size-7 md:size-9 rounded-full ${selectedDate === d.toString() ? 'bg-primary-600 text-white shadow-md' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'} flex items-center justify-center`}>{d}</button>
                  ))}
                </div>
              </section>

              {/* Time Slots */}
              <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 md:p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Available Slots</h3>
                  <span className="text-[10px] md:text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-500 px-2 py-1 rounded">IST (UTC+5:30)</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                  <button className="px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 text-xs md:text-sm cursor-not-allowed bg-slate-50 dark:bg-slate-800/50">09:00 AM</button>
                  {['09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'].map(time => (
                    <button key={time} onClick={() => setSelectedTime(time)} className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg ${selectedTime === time ? 'bg-primary-600 text-white shadow-sm' : 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary-600 hover:text-primary-600'} text-xs md:text-sm font-medium transition-colors`}>{time}</button>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-center">
                  <p className="text-xs text-slate-500">Duration: 30 minutes</p>
                </div>
              </section>
            </div>

            {/* SECTION 3: Patient Details */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 md:p-6 animate-fade-in animate-delay-200">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Patient Details</h3>
              <div className="grid gap-4 md:gap-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Name */}
                  <div className="group relative">
                    <label className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="name">Full Name</label>
                    <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:border-primary-600 focus:ring-primary-600 text-sm p-2.5 md:p-3 shadow-sm transition-all" id="name" placeholder="e.g. Rahul Sharma" type="text" />
                  </div>
                  {/* Email */}
                  <div className="group relative">
                    <label className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">Email Address</label>
                    <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:border-primary-600 focus:ring-primary-600 text-sm p-2.5 md:p-3 shadow-sm transition-all" id="email" placeholder="rahul@example.com" type="email" />
                  </div>
                </div>
                {/* Phone */}
                <div className="group relative">
                  <label className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="phone">Phone Number</label>
                  <div className="flex rounded-lg shadow-sm">
                    <span className="inline-flex items-center px-2 md:px-3 rounded-l-lg border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-500 text-xs md:text-sm">
                      <span className="material-symbols-outlined text-[16px] md:text-[18px] mr-1">flag</span> +91
                    </span>
                    <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="flex-1 min-w-0 block w-full rounded-none rounded-r-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:border-primary-600 focus:ring-primary-600 text-sm p-2.5 md:p-3" id="phone" placeholder="98765 43210" type="tel" />
                  </div>
                </div>
                {/* Reason */}
                <div className="group relative">
                  <label className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="reason">Reason for Visit (Optional)</label>
                  <textarea value={formData.reason} onChange={(e) => setFormData({ ...formData, reason: e.target.value })} className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:border-primary-600 focus:ring-primary-600 text-sm p-2.5 md:p-3 shadow-sm resize-none" id="reason" placeholder="Briefly describe your symptoms..." rows={3}></textarea>
                </div>
              </div>
            </section>

            {/* Navigation Buttons Mobile */}
            <div className="lg:hidden flex gap-3 md:gap-4 pt-4 pb-8">
              <button className="flex-1 py-3 px-4 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Back</button>
              <button className="flex-1 py-3 px-4 rounded-xl bg-primary-600 text-white font-bold shadow-md shadow-blue-200 dark:shadow-none hover:bg-primary-700 transition-colors">Confirm Booking</button>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Summary Sidebar */}
          <aside className="lg:w-[360px] xl:w-[380px] flex-shrink-0">
            <div className="sticky top-24 space-y-4 md:space-y-6">
              {/* Booking Card */}
              <div className="glass-panel rounded-2xl shadow-xl overflow-hidden relative animate-fade-in animate-delay-300">
                <div className="h-2 bg-gradient-to-r from-primary-600 to-blue-400"></div>
                <div className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Booking Summary</h3>
                  {/* Timeline */}
                  <div className="relative pl-5 md:pl-6 border-l-2 border-slate-100 dark:border-slate-700 space-y-6 md:space-y-8">
                    <div className="relative">
                      <div className="absolute -left-[27px] md:-left-[31px] bg-white dark:bg-slate-800 p-1 rounded-full border border-slate-200 dark:border-slate-600">
                        <div className="size-2 md:size-2.5 rounded-full bg-primary-600"></div>
                      </div>
                      <p className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">Doctor</p>
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="size-7 md:size-8 rounded-full bg-slate-200 overflow-hidden">
                          <img alt="Dr. Anjali" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=100" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white text-xs md:text-sm">Dr. Anjali Sharma</p>
                          <p className="text-[10px] md:text-xs text-slate-500">Cardiology</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[27px] md:-left-[31px] bg-white dark:bg-slate-800 p-1 rounded-full border border-slate-200 dark:border-slate-600">
                        <div className="size-2 md:size-2.5 rounded-full bg-primary-600"></div>
                      </div>
                      <p className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">Date & Time</p>
                      <p className="font-bold text-slate-900 dark:text-white text-xs md:text-sm">Aug 05, 2023</p>
                      <p className="text-[10px] md:text-xs text-slate-500">{selectedTime} (IST)</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[27px] md:-left-[31px] bg-white dark:bg-slate-800 p-1 rounded-full border border-slate-200 dark:border-slate-600">
                        <div className="size-2 md:size-2.5 rounded-full bg-slate-300"></div>
                      </div>
                      <p className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">Location</p>
                      <p className="font-bold text-slate-900 dark:text-white text-xs md:text-sm">MediCare Center, Delhi</p>
                      <p className="text-[10px] md:text-xs text-slate-500">Building A, Floor 3</p>
                    </div>
                  </div>
                  {/* Cost Breakdown */}
                  <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs md:text-sm text-slate-500">Consultation Fee</span>
                      <span className="text-xs md:text-sm font-medium text-slate-900 dark:text-white">₹1,500</span>
                    </div>
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                      <span className="text-xs md:text-sm text-slate-500">Service Charge</span>
                      <span className="text-xs md:text-sm font-medium text-slate-900 dark:text-white">₹100</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-dashed border-slate-200 dark:border-slate-700">
                      <span className="font-bold text-slate-900 dark:text-white">Total Pay</span>
                      <span className="font-bold text-lg md:text-xl text-primary-600">₹1,600</span>
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="mt-4 md:mt-6 flex flex-col gap-3">
                    <button className="w-full py-3 md:py-3.5 px-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
                      Confirm Appointment <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                    <p className="text-xs text-center text-slate-400 mt-1">
                      <span className="material-symbols-outlined text-[14px] align-text-bottom mr-1">lock</span> Secure 256-bit SSL encrypted
                    </p>
                  </div>
                </div>
              </div>
              {/* Help Card */}
              <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 md:p-5 border border-blue-100 dark:border-blue-800 flex items-center gap-3 md:gap-4 animate-fade-in animate-delay-400">
                <div className="size-9 md:size-10 rounded-full bg-white dark:bg-blue-800 flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-xl md:text-2xl">support_agent</span>
                </div>
                <div>
                  <p className="font-bold text-xs md:text-sm text-slate-900 dark:text-white">Need help booking?</p>
                  <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400">Call our support team 24/7</p>
                  <a className="text-[10px] md:text-xs font-bold text-primary-600 hover:underline mt-0.5 block" href="#">+91 1800-123-4567</a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
