import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import TopUtilityHeader from './components/TopUtilityHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingQuickActions from './components/FloatingQuickActions';

// Page Views
import HomePage from './pages/HomePage';
import VisionMissionPage from './pages/VisionMissionPage';
import SchoolLegacyPage from './pages/SchoolLegacyPage';
import PrincipalsDeskPage from './pages/PrincipalsDeskPage';
import DirectorsDeskPage from './pages/DirectorsDeskPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ContactPage from './pages/ContactPage';
import AdmissionsPage from './pages/AdmissionsPage';

// Modals
import AdmissionModal from './components/modals/AdmissionModal';
import ErpLoginModal from './components/modals/ErpLoginModal';
import VirtualTourModal from './components/modals/VirtualTourModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [erpOpen, setErpOpen] = useState(false);
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);

  const handleLoadingFinished = useCallback(() => {
    setLoading(false);
  }, []);

  const scrollToEnquiry = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else setAdmissionOpen(true);
  };

  return (
    <BrowserRouter>
      {/* Initial Light-Themed Animated Loading Screen */}
      {loading && <LoadingScreen onFinished={handleLoadingFinished} />}

      <ScrollToTop />
      <div className="relative min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col">

        {/* 1. Global Top Utility Header */}
        <TopUtilityHeader
          onOpenAdmission={() => setAdmissionOpen(true)}
          onOpenErp={() => setErpOpen(true)}
        />

        {/* 2. Global Navigation Bar with Multi-Page Routing */}
        <Navbar
          onOpenEnquiry={scrollToEnquiry}
          onOpenAdmission={() => setAdmissionOpen(true)}
        />

        {/* 3. Dynamic Page View Routes */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenAdmission={() => setAdmissionOpen(true)}
                  onOpenVirtualTour={() => setVirtualTourOpen(true)}
                  scrollToEnquiry={scrollToEnquiry}
                />
              }
            />
            <Route
              path="/vision-mission"
              element={<VisionMissionPage onOpenAdmission={() => setAdmissionOpen(true)} />}
            />
            <Route
              path="/school-legacy"
              element={<SchoolLegacyPage onOpenAdmission={() => setAdmissionOpen(true)} />}
            />
            <Route
              path="/principals-desk"
              element={<PrincipalsDeskPage onOpenAdmission={() => setAdmissionOpen(true)} />}
            />
            <Route
              path="/directors-desk"
              element={<DirectorsDeskPage onOpenAdmission={() => setAdmissionOpen(true)} />}
            />
            <Route
              path="/facilities"
              element={
                <FacilitiesPage
                  onOpenAdmission={() => setAdmissionOpen(true)}
                  onOpenVirtualTour={() => setVirtualTourOpen(true)}
                />
              }
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="/admissions"
              element={<AdmissionsPage onOpenAdmission={() => setAdmissionOpen(true)} />}
            />
            {/* Catch-all fallback to HomePage */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenAdmission={() => setAdmissionOpen(true)}
                  onOpenVirtualTour={() => setVirtualTourOpen(true)}
                  scrollToEnquiry={scrollToEnquiry}
                />
              }
            />
          </Routes>
        </div>

        {/* 4. Global Institutional Midnight Navy Footer */}
        <Footer
          onOpenAdmission={() => setAdmissionOpen(true)}
          onOpenErp={() => setErpOpen(true)}
        />

        {/* 5. Persistent Floating Quick Actions */}
        <FloatingQuickActions />

        {/* Global Interactive Modals */}
        <AdmissionModal
          isOpen={admissionOpen}
          onClose={() => setAdmissionOpen(false)}
        />

        <ErpLoginModal
          isOpen={erpOpen}
          onClose={() => setErpOpen(false)}
        />

        <VirtualTourModal
          isOpen={virtualTourOpen}
          onClose={() => setVirtualTourOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
