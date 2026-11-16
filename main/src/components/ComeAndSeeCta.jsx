import React, { useState } from 'react';
import logoImg from '@assets/logo.jpg';
import { Send, CheckCircle2, Calendar, Phone } from 'lucide-react';

export default function ComeAndSeeCta({ onOpenAdmission, onOpenVisit }) {
  const [formData, setFormData] = useState({
    n: '',
    c: 'Class I',
    f: '',
    m: '',
    p: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mailto fallback as specified in plan.html
    const subject = encodeURIComponent(`Admission Enquiry: ${formData.n} (${formData.c})`);
    const body = encodeURIComponent(
      `Admission Enquiry Details:\n` +
      `Student Name: ${formData.n}\n` +
      `Class Applied For: ${formData.c}\n` +
      `Father Name: ${formData.f}\n` +
      `Mother Name: ${formData.m}\n` +
      `Contact Phone: ${formData.p}\n`
    );
    window.location.href = `mailto:rkps.gzb@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden watermark-shield" id="enquiry">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Center Shield Crest */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full border-2 border-[#0b2a63] p-1 bg-white shadow-md flex items-center justify-center">
            <img src={logoImg} alt="Crest" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>

        {/* Dual-Tone Headline (Exact match of Screenshot Page 16) */}
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wider uppercase leading-none">
          <span className="text-[#0b2a63]">COME AND SEE </span>
          <span className="text-[#9b2335]">THE RKPS WAY</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Meet our team, walk the campus and ask us about admissions. Where quality learning, extraordinary care, 
          and lifelong possibilities unite to define each student's journey toward excellence.
        </p>

        {/* Dual Action Pills (Exact match of Screenshot Page 16) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenVisit}
            className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#0b2a63] hover:bg-[#071f4c] text-white font-bebas text-lg sm:text-xl tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95"
          >
            VISIT US
          </button>

          <button
            onClick={onOpenAdmission}
            className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#9b2335] hover:bg-[#7a1f2b] text-white font-bebas text-lg sm:text-xl tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95"
          >
            APPLY NOW
          </button>
        </div>

        {/* Quick Admission Enquiry Form (From plan.html) */}
        <div className="mt-14 max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 text-left shadow-lg">
          <div className="text-center mb-6">
            <h3 className="font-bebas text-2xl sm:text-3xl text-[#0b2a63] tracking-wide uppercase">
              QUICK ADMISSION ENQUIRY (2026–27)
            </h3>
            <p className="text-xs text-slate-500">
              Submit your inquiry and our admissions counseling cell will contact you within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 text-center bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h4 className="font-bebas text-2xl">Enquiry Initiated!</h4>
              <p className="text-xs mt-1">Thank you for connecting with Radha Krishna Public School. We look forward to welcoming you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student's Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.n}
                    onChange={(e) => setFormData({ ...formData, n: e.target.value })}
                    placeholder="Enter student name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Class Applying For *</label>
                  <select
                    value={formData.c}
                    onChange={(e) => setFormData({ ...formData, c: e.target.value })}
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Father's Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.f}
                    onChange={(e) => setFormData({ ...formData, f: e.target.value })}
                    placeholder="Father's name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mother's Name</label>
                  <input
                    type="text"
                    value={formData.m}
                    onChange={(e) => setFormData({ ...formData, m: e.target.value })}
                    placeholder="Mother's name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Contact Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.p}
                  onChange={(e) => setFormData({ ...formData, p: e.target.value })}
                  placeholder="10-digit mobile number"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#9b2335] hover:bg-[#7a1f2b] text-white font-bebas text-lg tracking-wider uppercase transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Admission Enquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
