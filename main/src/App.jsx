import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CorePillars from './components/CorePillars';
import WhyChooseRkps from './components/WhyChooseRkps';
import LearningStages from './components/LearningStages';
import BeyondClassroom from './components/BeyondClassroom';
import PreparedForFuture from './components/PreparedForFuture';
import LifeAtRkps from './components/LifeAtRkps';
import ComeAndSeeCta from './components/ComeAndSeeCta';
import Footer from './components/Footer';

import WhatsNewDrawer from './components/WhatsNewDrawer';
import AdmissionModal from './components/modals/AdmissionModal';
import VisitModal from './components/modals/VisitModal';

export default function App() {
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [visitOpen, setVisitOpen] = useState(false);
  const [whatsNewOpen, setWhatsNewOpen] = useState(false);

  const scrollToStages = () => {
    const el = document.getElementById('stages');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#2b2b2b] flex flex-col font-sans antialiased selection:bg-[#9b2335] selection:text-white">
      
      {/* 0. Left-Docked "WHAT'S NEW?" Drawer */}
      <WhatsNewDrawer
        isOpen={whatsNewOpen}
        onClose={() => setWhatsNewOpen(false)}
        onOpenAdmission={() => setAdmissionOpen(true)}
      />

      {/* 1. Global Header with Portals, Search & Menu Drawer */}
      <Header
        onOpenAdmission={() => setAdmissionOpen(true)}
        onOpenVisit={() => setVisitOpen(true)}
        onToggleWhatsNew={() => setWhatsNewOpen(!whatsNewOpen)}
      />

      {/* 2. Full-Bleed Cinematic Hero Carousel */}
      <main className="flex-1">
        <Hero
          onOpenAdmission={() => setAdmissionOpen(true)}
          onScrollToStages={scrollToStages}
        />

        {/* 3. Panel 1: "THE RKPS WAY IS ABOUT..." (3 Red-Pinned Columns) */}
        <CorePillars />

        {/* 4. Panel 2: "WHY FAMILIES CHOOSE RKPS" (5-Tab Dossier with Circular Icons) */}
        <WhyChooseRkps />

        {/* 5. Panel 3: "LEARNING AT EVERY STAGE" (4 Division Tabs + Large Photo) */}
        <LearningStages onOpenAdmission={() => setAdmissionOpen(true)} />

        {/* 6. Panel 4: "CULTIVATING EXCEPTIONAL THINKERS" (3 Tabs + Action Card) */}
        <BeyondClassroom onOpenAdmission={() => setAdmissionOpen(true)} />

        {/* 7. Panel 5: "PREPARED FOR THE FUTURE" (Alumni Portrait Cards + Parent Voices) */}
        <PreparedForFuture />

        {/* 8. Panel 6: Marquee & "LIFE AT RKPS" 3-Column Photo Mosaic */}
        <LifeAtRkps />

        {/* 9. Panel 7: "COME AND SEE THE RKPS WAY" + Admission Enquiry Form */}
        <ComeAndSeeCta
          onOpenAdmission={() => setAdmissionOpen(true)}
          onOpenVisit={() => setVisitOpen(true)}
        />
      </main>

      {/* 10. Institutional 3-Column Footer */}
      <Footer
        onOpenAdmission={() => setAdmissionOpen(true)}
        onOpenVisit={() => setVisitOpen(true)}
      />

      {/* Global Interactive Modals */}
      <AdmissionModal
        isOpen={admissionOpen}
        onClose={() => setAdmissionOpen(false)}
      />

      <VisitModal
        isOpen={visitOpen}
        onClose={() => setVisitOpen(false)}
      />

    </div>
  );
}
