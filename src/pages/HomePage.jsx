import React, { useState } from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import StatsCounter from '../components/StatsCounter';
import LeadershipMessage from '../components/LeadershipMessage';
import Facilities from '../components/Facilities';
import CtaBanner from '../components/CtaBanner';
import ParentsSpeak from '../components/ParentsSpeak';
import AdmissionPosterModal from '../components/modals/AdmissionPosterModal';

export default function HomePage({ onOpenAdmission, onOpenVirtualTour, scrollToEnquiry }) {
  const [posterOpen, setPosterOpen] = useState(true);

  return (
    <main className="flex-1">
      {/* Home Load Admission Poster Popup */}
      <AdmissionPosterModal
        isOpen={posterOpen}
        onClose={() => setPosterOpen(false)}
      />
      {/* 1. Hero Carousel */}
      <Hero 
        onOpenAdmission={onOpenAdmission} 
        onOpenVirtualTour={onOpenVirtualTour} 
      />

      {/* 2. About Us Section */}
      <AboutUs onOpenLegacyModal={onOpenAdmission} />

      {/* 3. Metrics Counter */}
      <StatsCounter />

      {/* 4. Leadership Message (Director & Principal Carousel) */}
      <LeadershipMessage />

      {/* 5. Campus & Facilities Gallery */}
      <Facilities />

      {/* 6. Call To Action Banner */}
      <CtaBanner
        onOpenAdmission={onOpenAdmission}
        onOpenEnquiry={scrollToEnquiry}
      />

      {/* 7. Parents Speak Testimonials */}
      <ParentsSpeak />
    </main>
  );
}
