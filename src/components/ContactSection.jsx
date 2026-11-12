import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
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
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200" data-purpose="contact-section" id="contact" ref={formRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Clean Typography, No Pill) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
            Admissions Secretariat &amp; Visit Hub
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 heading-serif tracking-tight">
            Connect With Our Admissions Team
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Schedule a personalized campus walkthrough, discuss scholarship opportunities, or request a complete prospectus for the 2026–27 academic session.
          </p>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Campus Channels & Live Status (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Office Status Pill */}
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <div>
                <h4 className="text-xs font-extrabold text-emerald-950 uppercase tracking-wide">
                  Admissions Desk Active Today
                </h4>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Monday – Saturday: 8:00 AM – 4:00 PM • Campus Walkthroughs Available
                </p>
              </div>
            </div>

            {/* Direct Channels Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">Campus Address</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Institutional Area, Sector 12, Indirapuram, Ghaziabad, Uttar Pradesh — 201014
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">Direct Helpline</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <a href="tel:9310300600" className="hover:text-blue-900 font-bold text-slate-800 text-sm">+91 9310300600</a>
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Admissions Cell: Ext. 102 / 105</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">Email Inquiry</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <a href="mailto:rkps.ghz@gmail.com" className="hover:text-blue-900 font-semibold text-slate-800">
                      rkps.ghz@gmail.com
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Google Map Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 h-52 group">
              <a
                href="https://maps.google.com/?q=Radha+Krishna+Public+School+Indirapuram+Ghaziabad"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 z-10 px-3.5 py-1.5 bg-white/95 hover:bg-white text-blue-950 text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <span>Navigate in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <iframe
                title="RKPS Campus Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.286361836154!2d77.368686!3d28.638421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf00799999999%3A0x1!2sIndirapuram%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: High-End Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 heading-serif">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for expressing interest in Radha Krishna Public School. Our admissions coordinator will reach out to you at <strong>{formData.phone || 'your provided phone number'}</strong> within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ studentName: '', parentName: '', grade: '', phone: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 bg-blue-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors shadow"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-xl font-bold text-slate-900 heading-serif">
                    Admissions Enquiry Form 2026–27
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below and our counselor will assist you with registration and syllabus details.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Student's Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full text-xs rounded-xl border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 py-3 px-3.5 bg-slate-50 border transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full text-xs rounded-xl border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 py-3 px-3.5 bg-slate-50 border transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Class Seeking Admission *
                    </label>
                    <select
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full text-xs rounded-xl border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 py-3 px-3.5 bg-slate-50 border transition-colors"
                    >
                      <option value="">Select Grade / Stage</option>
                      <option value="Pre-Nursery">Pre-Nursery / Nursery</option>
                      <option value="Kindergarten">Kindergarten (KG)</option>
                      <option value="Class 1-5">Class I – V (Primary)</option>
                      <option value="Class 6-8">Class VI – VIII (Middle)</option>
                      <option value="Class 9-10">Class IX – X (Secondary)</option>
                      <option value="Class 11-12">Class XI – XII (Sr. Secondary)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9310300600"
                      className="w-full text-xs rounded-xl border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 py-3 px-3.5 bg-slate-50 border transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.com"
                    className="w-full text-xs rounded-xl border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 py-3 px-3.5 bg-slate-50 border transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Message or Queries
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify previous school, child's extracurricular interests or fee questions..."
                    className="w-full text-xs rounded-xl border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 py-2.5 px-3.5 bg-slate-50 border transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmitting ? 'Transmitting Enquiry...' : 'Submit Admission Enquiry ➔'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
