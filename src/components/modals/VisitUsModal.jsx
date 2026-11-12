import React, { useState } from 'react';
import { X, MapPin, Calendar, Clock, Phone, CheckCircle2, Building2, Compass, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VisitUsModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    grade: 'Grade I to V (Primary)',
    visitDate: '',
    timeSlot: 'Morning (09:30 AM – 11:30 AM)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Teal Pathways Style) */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-teal-800 to-teal-950 text-white rounded-t-3xl relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5 text-teal-300" />
            <span>Campus Walkthrough &amp; Interaction</span>
          </div>

          <h3 className="text-2xl font-black heading-serif leading-tight">
            Schedule Your Campus Visit
          </h3>
          <p className="text-xs sm:text-sm text-teal-100 mt-1 font-normal">
            Experience our 12-acre lush green campus, interact with academic coordinators, and inspect our cutting-edge laboratories.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-6">
          
          {/* Campus Location Card */}
          <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-slate-900">Radha Krishna Public School</p>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Pratap Vihar, Sector 12, Ghaziabad, U.P. — 201009
              </p>
              <a 
                href="https://maps.google.com/?q=Radha+Krishna+Public+School+Pratap+Vihar+Ghaziabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-teal-800 font-bold hover:underline mt-1.5"
              >
                <Navigation className="w-3 h-3" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-emerald-950">Campus Visit Scheduled!</h4>
              <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                Our admissions counselor will contact you at <span className="font-bold">{formData.phone}</span> to confirm your walkthrough pass.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Mr. Rajesh Sharma"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Grade of Interest</label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 bg-white"
                  >
                    <option>Pre-Nursery, Nursery, KG (Early Years)</option>
                    <option>Grade I to V (Primary)</option>
                    <option>Grade VI to VIII (Middle)</option>
                    <option>Grade IX & X (Secondary)</option>
                    <option>Grade XI & XII (Senior Secondary)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Visit Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time Slot</label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 bg-white"
                >
                  <option>Morning Slot (09:30 AM – 11:30 AM)</option>
                  <option>Afternoon Slot (01:30 PM – 03:30 PM)</option>
                  <option>Saturday Special Walkthrough (10:00 AM – 01:00 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm Walkthrough Appointment</span>
              </button>
            </form>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between rounded-b-3xl">
          <span className="text-xs text-slate-500 font-medium">
            Visitor Parking &amp; Security Desk: Gate 1
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}

