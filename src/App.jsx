import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';
import PageTransition from './components/layout/PageTransition';
import Home from './pages/Home';
import Admin from './pages/Admin';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import ProjectDetails from './pages/ProjectDetails';
import ServiceDetails from './pages/ServiceDetails';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/services/:id" element={<PageTransition><ServiceDetails /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/portfolio/:id" element={<PageTransition><ProjectDetails /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

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
            <AnimatedRoutes />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
