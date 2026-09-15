import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home';
import Admin from './pages/Admin';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import ProjectDetails from './pages/ProjectDetails';
import ServiceDetails from './pages/ServiceDetails';

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        {/* Admin route without layout */}
        <Route path="/admin" element={<Admin />} />

        {/* All other routes with layout */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:id" element={<ProjectDetails />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
