import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, MapPin, Send } from 'lucide-react';

export default function VisitModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [campus, setCampus] = useState('Main Campus (NH-9, Lal Kuan)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Campus Tour Request: ${name} (${date})`);
    const body = encodeURIComponent(
      `CAMPUS TOUR VISIT REQUEST\n\n` +
      `Name: ${name}\n` +
      `Contact Phone: ${phone}\n` +
      `Campus Choice: ${campus}\n` +
      `Preferred Date: ${date}\n` +
      `Preferred Time: ${time}\n`
    );
    window.location.href = `mailto:rkps.gzb@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 border-4 border-[#0b2a63] animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#0b2a63] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
            <Calendar className="w-6 h-6 text-[#f0b429]" />
          </div>
          <h3 className="font-bebas text-3xl sm:text-4xl text-[#0b2a63] tracking-wider uppercase leading-none">
            SCHEDULE A CAMPUS TOUR
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Experience our classrooms, smart labs, and athletic arenas in person.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="font-bebas text-2xl">Visit Requested!</h4>
            <p className="text-xs text-emerald-700 mt-2">
              Our campus relations officer will contact you to confirm your tour appointment.
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
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Parent / Guardian Name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Contact Phone Number *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Select Campus *</label>
              <select
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none bg-white"
              >
                <option>Main Campus (NH-9, Lal Kuan)</option>
                <option>City Wing (Sector-11, Pratap Vihar)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Time *</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0b2a63] outline-none bg-white"
                >
                  <option>09:30 AM</option>
                  <option>10:30 AM</option>
                  <option>11:30 AM</option>
                  <option>01:00 PM</option>
                  <option>02:30 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#0b2a63] hover:bg-[#071f4c] text-white font-bebas text-lg tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-[#f0b429]" />
              <span>Confirm Visit Request</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
