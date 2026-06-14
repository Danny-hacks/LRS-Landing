import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header          from './components/Header';
import Footer          from './components/Footer';
import WhatsAppButton  from './components/WhatsAppButton';
import StickyCTA       from './components/StickyCTA';
import HomePage        from './pages/HomePage';
import AboutPage       from './pages/AboutPage';
import PermanentResidencyPage  from './pages/services/PermanentResidencyPage';
import ExpressEntryPage        from './pages/services/ExpressEntryPage';
import WorkPermitsPage         from './pages/services/WorkPermitsPage';
import StudyPermitsPage        from './pages/services/StudyPermitsPage';
import FamilySponsorshipPage   from './pages/services/FamilySponsorshipPage';
import PreLandingPage          from './pages/settlement/PreLandingPage';
import HousingPage             from './pages/settlement/HousingPage';
import SinBankingPage          from './pages/settlement/SinBankingPage';
import JobSearchPage           from './pages/settlement/JobSearchPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/"                              element={<HomePage />} />
          <Route path="/about"                         element={<AboutPage />} />
          <Route path="/services/permanent-residency"  element={<PermanentResidencyPage />} />
          <Route path="/services/express-entry"        element={<ExpressEntryPage />} />
          <Route path="/services/work-permits"         element={<WorkPermitsPage />} />
          <Route path="/services/study-permits"        element={<StudyPermitsPage />} />
          <Route path="/services/family-sponsorship"   element={<FamilySponsorshipPage />} />
          <Route path="/settlement/pre-landing"        element={<PreLandingPage />} />
          <Route path="/settlement/housing"            element={<HousingPage />} />
          <Route path="/settlement/sin-health-banking" element={<SinBankingPage />} />
          <Route path="/settlement/job-search-resume"  element={<JobSearchPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
