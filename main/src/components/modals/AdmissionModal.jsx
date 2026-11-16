import React, { useState } from 'react';
import { X, CheckCircle2, Send, GraduationCap } from 'lucide-react';

export default function AdmissionModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    grade: 'Class I',
    parent: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Online Admission Form: ${form.name} (${form.grade})`);
    const body = encodeURIComponent(
      `ADMISSION APPLICATION 2026-27\n\n` +
      `Student Name: ${form.name}\n` +
      `Grade/Class: ${form.grade}\n` +
      `Parent/Guardian Name: ${form.parent}\n` +
      `Contact Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Message/Notes: ${form.notes}\n`
    );
    window.location.href = `mailto:rkps.gzb@gmail.com?subject=${subject}&body=${body}`;
    setDone(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 border-4 border-[#071f4c] animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#9b2335] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="font-bebas text-3xl sm:text-4xl text-[#0b2a63] tracking-wider uppercase leading-none">
            ADMISSION APPLICATION 2026–27
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Radha Krishna Public School • CBSE Affiliated #2132212
          </p>
        </div>

        {done ? (
          <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="font-bebas text-2xl">Application Form Initiated!</h4>
            <p className="text-xs text-emerald-700 mt-2">
              Our academic counselors will get in touch with you shortly to schedule the interaction and campus tour.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#0b2a63] text-white font-bebas text-sm uppercase tracking-wider"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student's Full Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Candidate name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Class Applying For *</label>
                <select
                  value={form.grade}
                  onChange={(e) => setForm({ ...form, grade: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none bg-white"
                >
                  <option>Playgroup / Nursery</option>
                  <option>LKG / UKG</option>
                  <option>Class I</option>
                  <option>Class II</option>
                  <option>Class III</option>
                  <option>Class IV</option>
                  <option>Class V</option>
                  <option>Class VI</option>
                  <option>Class VII</option>
                  <option>Class VIII</option>
                  <option>Class IX</option>
                  <option>Class X</option>
                  <option>Class XI (Science)</option>
                  <option>Class XI (Commerce)</option>
                  <option>Class XI (Humanities)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Parent's Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.parent}
                  onChange={(e) => setForm({ ...form, parent: e.target.value })}
                  placeholder="Parent / Guardian"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="10-digit mobile"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="parent@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Any Specific Queries or Notes</label>
              <textarea
                rows="2"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Transport requirement, previous school, etc."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#9b2335] hover:bg-[#7a1f2b] text-white font-bebas text-lg tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Admission Form</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
