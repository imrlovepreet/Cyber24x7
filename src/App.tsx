import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CoreServices from './pages/services/CoreServices';
import CybersecurityServices from './pages/services/CybersecurityServices';
import CloudServices from './pages/services/CloudServices';
import ValueAddedServices from './pages/services/ValueAddedServices';
import Contact from './pages/Contact';
import WhoWeAre from './pages/company/WhoWeAre';
import OurMission from './pages/company/OurMission';
import OurVision from './pages/company/OurVision';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/company/who-we-are" element={<WhoWeAre />} />
            <Route path="/company/mission" element={<OurMission />} />
            <Route path="/company/vision" element={<OurVision />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/core" element={<CoreServices />} />
            <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
            <Route path="/services/cloud" element={<CloudServices />} />
            <Route path="/services/value-added" element={<ValueAddedServices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;