import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, MessageSquare, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    // Fire celebratory confetti on form submission
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* 1. Page Header */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Admissions &amp; General Enquiries</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black heading-serif tracking-tight text-white leading-tight">
            Contact &amp; Connect With Us
          </h1>

          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 mb-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium">
            We look forward to welcoming you to Radha Krishna Public School. Reach out to our admissions team, schedule a campus visit, or connect with our academic secretariat.
          </p>
        </div>
      </section>

      {/* 2. Contact Cards & Form Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Info & Timings */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1E48] heading-serif flex items-center gap-2">
                <span>Campus Location</span>
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-100">
                    <MapPin className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Campus Address</h3>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      Radha Krishna Public School, Pratap Vihar, Sector 12, Ghaziabad, Uttar Pradesh — 201009
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Telephone &amp; Helpline</h3>
                    <p className="text-slate-600 mt-0.5">
                      <a href="tel:+911202841234" className="hover:text-blue-900 font-medium">+91 (0120) 284-1234</a> / <a href="tel:+919876543210" className="hover:text-blue-900 font-medium">+91 98765 43210</a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Admissions Cell: Ext. 102</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email Correspondence</h3>
                    <p className="text-slate-600 mt-0.5">
                      <a href="mailto:admissions@rkpsghaziabad.edu.in" className="hover:text-blue-900 font-medium">admissions@rkpsghaziabad.edu.in</a>
                    </p>
                    <p className="text-xs text-slate-500">General: info@rkpsghaziabad.edu.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-100">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Visiting &amp; Office Hours</h3>
                    <p className="text-slate-600 mt-0.5 font-medium">
                      Monday to Saturday: 8:00 AM – 3:30 PM
                    </p>
                    <p className="text-xs text-slate-500">School closed on Sundays and Gazetted Holidays</p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp / Direct Call Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Directly</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Admission & General Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Online Submission</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1E48] heading-serif mt-1">
                Admissions &amp; General Enquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Please complete the form below. Our admissions counselor will contact you within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950 heading-serif">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you, <span className="font-bold">{formData.parentName}</span>. Our admissions coordinator has received your enquiry and will connect with you on <span className="font-bold">{formData.phone}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ parentName: '', studentName: '', grade: '', phone: '', email: '', message: '' });
                  }}
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Student Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aarav Kumar"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Grade Applying For
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                  >
                    <option value="">Select Grade / Class</option>
                    <option value="Pre-Nursery">Pre-Nursery / Nursery</option>
                    <option value="Kindergarten">Kindergarten (KG)</option>
                    <option value="Grade 1-5">Grade 1 to 5 (Primary)</option>
                    <option value="Grade 6-8">Grade 6 to 8 (Middle)</option>
                    <option value="Grade 9-10">Grade 9 to 10 (Secondary)</option>
                    <option value="Grade 11-12">Grade 11 to 12 (Senior Secondary)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Questions or Specific Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements or specific queries regarding curriculum, transport, or facilities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-blue-950 hover:bg-blue-900 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-102 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* 3. Google Maps Campus Embed */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-md overflow-hidden">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#0B1E48] heading-serif">
                Campus Location on Google Maps
              </h3>
              <p className="text-xs text-slate-500">
                Easy approach via Delhi-Meerut Expressway and Pratap Vihar Main Road.
              </p>
            </div>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              title="Radha Krishna Public School Ghaziabad Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.534293845942!2d77.4243685!3d28.6706782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf19b99999999%3A0x6a12b6f123456789!2sPratap%20Vihar%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
