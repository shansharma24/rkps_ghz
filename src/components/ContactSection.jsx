import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ formRef }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    grade: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  return (
    <section className="py-16 md:py-20 bg-slate-100" data-purpose="contact-section" id="contact" ref={formRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Column 1: Contact Details (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mt-1 mb-8 heading-serif">
                  We'd Love to Hear from You
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200/60 shadow-xs">
                      <MapPin className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Our Address</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Institutional Area, Sector 12, Indirapuram, Ghaziabad, Uttar Pradesh 201014
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200/60 shadow-xs">
                      <Phone className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Call Us</h4>
                      <p className="text-xs text-slate-600 mt-0.5">+91 120-2800000 / +91 9876543210</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200/60 shadow-xs">
                      <Mail className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Email Us</h4>
                      <p className="text-xs text-slate-600 mt-0.5">info@rkpschool.edu.in / admissions@rkpschool.edu.in</p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200/60 shadow-xs">
                      <Clock className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Office Hours</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Mon - Sat: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CBSE Affiliation Badge */}
              <div className="mt-8 p-3.5 bg-blue-50 rounded-xl border border-blue-100 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <div>
                  <div className="text-[11px] font-bold text-blue-950">CBSE Affiliation #2130572</div>
                  <div className="text-[10px] text-slate-500">Regular On-Campus Counseling Available</div>
                </div>
              </div>
            </div>

            {/* Column 2: Admission Enquiry Form (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 heading-serif">
                    Enquiry Received!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to Radha Krishna Public School. Our admissions coordinator will contact you at <strong>{formData.phone || 'your phone number'}</strong> within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ studentName: '', parentName: '', grade: '', phone: '', email: '', message: '' });
                    }}
                    className="px-5 py-2 bg-blue-900 text-white rounded-lg text-xs font-bold hover:bg-blue-800 transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Student Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="Enter student name"
                        className="w-full text-xs rounded-lg border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white border transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Parent Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="Enter parent name"
                        className="w-full text-xs rounded-lg border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white border transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Class Seeking Admission *
                      </label>
                      <select
                        required
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full text-xs rounded-lg border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white border transition-colors"
                      >
                        <option value="">Select Grade / Class</option>
                        <option value="Pre-Nursery">Pre-Nursery / Nursery</option>
                        <option value="Kindergarten">Kindergarten (KG)</option>
                        <option value="Class 1-5">Class I - V (Primary)</option>
                        <option value="Class 6-8">Class VI - VIII (Middle)</option>
                        <option value="Class 9-10">Class IX - X (Secondary)</option>
                        <option value="Class 11-12">Class XI - XII (Sr. Secondary)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full text-xs rounded-lg border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white border transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full text-xs rounded-lg border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white border transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Special Queries
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your child's interests or specific queries..."
                      className="w-full text-xs rounded-lg border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2 px-3 bg-white border transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow hover:shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Processing...' : 'Submit Enquiry ➔'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Column 3: Interactive Location Card / Map (3 cols) */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="h-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col bg-slate-50">
                {/* Map Top Bar */}
                <div className="p-3.5 bg-white border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Radha Krishna Public School</h4>
                    <a
                      href="https://maps.google.com/?q=Radha+Krishna+Public+School+Ghaziabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-blue-600 hover:underline"
                    >
                      View larger map
                    </a>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs">
                    📍
                  </span>
                </div>

                {/* Map Visual Container */}
                <div className="relative flex-1 min-h-[220px] bg-slate-200 flex items-center justify-center overflow-hidden group">
                  <img
                    alt="Campus Map Location"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjcR2LnMlPM71t2Mt3DRrbl2lLku_pluEVTlfjurw4JWpD-F8VB2-0rYjmQchsx6owsykzUJhzgpPT94G4fh_yHB2HSTC3CA8STYk6GWVeKLXwBL19WK1N3VU1vBn4Xiyj7QQ4u0JuR7zxu8gcbZ8UQ-CJvVROQTgg34D2kQ_sDFd9w-F5I_uNPi55kvFKoCn2ebAybZJeFbBWFNUl6bXVFDSFLYLK8Kr1IIdMM9mRf5IBKYR_5QZEYdYilbAcfmfn1JI"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />

                  {/* Map Pin Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs shadow-xl animate-bounce border-2 border-white">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="px-2 py-0.5 bg-white/95 rounded shadow text-[9px] font-bold text-slate-800 border mt-1 shadow-md whitespace-nowrap">
                      RKPS Ghaziabad
                    </span>
                  </div>
                </div>

                {/* Map Controls Strip */}
                <div className="p-2.5 bg-white border-t border-slate-200 text-right">
                  <span className="text-[10px] text-slate-400">
                    Sector 12, Indirapuram, Ghaziabad
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
