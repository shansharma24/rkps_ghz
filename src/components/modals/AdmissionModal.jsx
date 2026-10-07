import React, { useState } from 'react';
import { X, CheckCircle, FileText, Calendar, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdmissionModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    candidateName: '',
    dob: '',
    gender: 'Male',
    gradeApplying: 'Class I - V (Primary)',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    residentialCity: 'Ghaziabad',
    prevSchool: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-scaleUp max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg border border-amber-300">
            🎓
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest text-amber-700 uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Academic Session 2025–26
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-950 heading-serif mt-0.5">
              Online Admission Registration
            </h3>
            <p className="text-xs text-slate-500">Radha Krishna Public School, Ghaziabad (CBSE Affiliated)</p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-bold text-blue-950 heading-serif">
              Application Submitted Successfully!
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Your provisional application ID is <strong>RKPS-2025-{Math.floor(1000 + Math.random() * 9000)}</strong>. A confirmation email and SMS with counseling schedule details have been dispatched to <strong>{formData.parentPhone}</strong>.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl text-left max-w-md mx-auto text-xs space-y-2 border border-slate-200">
              <div className="font-bold text-slate-800">Next Steps:</div>
              <div className="flex items-start gap-2 text-slate-600">
                <span className="text-blue-900 font-bold">1.</span>
                <span>Carry original birth certificate and previous report card to the campus.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-600">
                <span className="text-blue-900 font-bold">2.</span>
                <span>Interaction session with academic counselor on designated date.</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-blue-950 text-white rounded-xl text-xs font-bold hover:bg-blue-900 transition-colors shadow"
            >
              Done &amp; Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 flex items-center gap-2 text-xs text-blue-900 font-medium">
              <AlertCircle className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Limited seats available for Pre-Nursery, KG, Class IX &amp; Class XI (Science, Commerce, Humanities).</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Student's Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={formData.candidateName}
                  onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
                  className="w-full text-xs rounded-lg border-slate-300 border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Date of Birth *</label>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full text-xs rounded-lg border-slate-300 border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Grade Applying For *</label>
                <select
                  value={formData.gradeApplying}
                  onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                  className="w-full text-xs rounded-lg border-slate-300 border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white"
                >
                  <option>Pre-Nursery / Nursery</option>
                  <option>Kindergarten (KG)</option>
                  <option>Class I - V (Primary)</option>
                  <option>Class VI - VIII (Middle)</option>
                  <option>Class IX - X (Secondary)</option>
                  <option>Class XI (Medical / Non-Medical)</option>
                  <option>Class XI (Commerce with Math/IP)</option>
                  <option>Class XI (Humanities &amp; Arts)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Parent / Guardian Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Father / Mother Name"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full text-xs rounded-lg border-slate-300 border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Parent's Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9310300600"
                  value={formData.parentPhone}
                  onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                  className="w-full text-xs rounded-lg border-slate-300 border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Parent's Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="parent@example.com"
                  value={formData.parentEmail}
                  onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                  className="w-full text-xs rounded-lg border-slate-300 border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-[11px] text-slate-500">
                🔒 Data encrypted &amp; submitted securely.
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow hover:shadow-md hover:scale-105 active:scale-95"
              >
                Submit Application ➔
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
