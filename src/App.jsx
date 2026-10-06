import React, { useState, useRef } from 'react';
import TopUtilityHeader from './components/TopUtilityHeader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facilities';
import WallOfFame from './components/WallOfFame';

import ParentsSpeak from './components/ParentsSpeak';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import FloatingQuickActions from './components/FloatingQuickActions';

// Modals
import AdmissionModal from './components/modals/AdmissionModal';
import ErpLoginModal from './components/modals/ErpLoginModal';
import PmLetterModal from './components/modals/PmLetterModal';
import VirtualTourModal from './components/modals/VirtualTourModal';

export default function App() {
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [erpOpen, setErpOpen] = useState(false);
  const [pmLetterOpen, setPmLetterOpen] = useState(false);
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);

  const scrollToEnquiry = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else setAdmissionOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col">
      {/* 1. Top Utility Header */}
      <TopUtilityHeader
        onOpenAdmission={() => setAdmissionOpen(true)}
        onOpenErp={() => setErpOpen(true)}
        onOpenPmLetter={() => setPmLetterOpen(true)}
      />

      {/* 2. Main Navigation Bar with School Crest & User Uploaded Logo */}
      <Navbar
        onOpenEnquiry={scrollToEnquiry}
        onOpenAdmission={() => setAdmissionOpen(true)}
      />

      {/* 3. Hero Banner Section */}
      <Hero
        onOpenAdmission={() => setAdmissionOpen(true)}
        onOpenVirtualTour={() => setVirtualTourOpen(true)}
      />

      {/* 4. About Us Section (Strictly matching reference layout & geometric accents) */}
      <AboutUs onOpenLegacyModal={() => setAdmissionOpen(true)} />

      {/* 5. Campus & Facilities Bento Grid */}
      <Facilities />

      {/* 6. Wall of Fame / Scholastic Champions */}
      <WallOfFame />

    

      {/* 8. Call To Action Banner */}
      <CtaBanner
        onOpenAdmission={() => setAdmissionOpen(true)}
        onOpenEnquiry={scrollToEnquiry}
      />

        {/* 9. Parents Speak / Community Testimonials (Themed with Speech Bubbles) */}
      <ParentsSpeak />

      {/* 10. Institutional Midnight Navy Footer */}
      <Footer
        onOpenAdmission={() => setAdmissionOpen(true)}
        onOpenErp={() => setErpOpen(true)}
      />

      {/* 11. Persistent Floating Quick Actions (Call, WhatsApp, AI Assistant) */}
      <FloatingQuickActions />

      {/* Interactive Modals */}
      <AdmissionModal
        isOpen={admissionOpen}
        onClose={() => setAdmissionOpen(false)}
      />

      <ErpLoginModal
        isOpen={erpOpen}
        onClose={() => setErpOpen(false)}
      />

      <PmLetterModal
        isOpen={pmLetterOpen}
        onClose={() => setPmLetterOpen(false)}
      />

      <VirtualTourModal
        isOpen={virtualTourOpen}
        onClose={() => setVirtualTourOpen(false)}
      />
    </div>
  );
}
