import React from 'react';
import Hero from '../components/layout/Hero';
import About from '../components/layout/About';
import Services from '../components/layout/Services';
import Portfolio from '../components/layout/Portfolio';
import PricingCalculator from '../components/ui/PricingCalculator';
import Contact from '../components/layout/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <PricingCalculator />
      <Contact />
    </>
  );
}
