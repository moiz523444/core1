import React from 'react';
import Hero from '../components/layout/Hero';
import Testimonials from '../components/layout/Testimonials';
import About from '../components/layout/About';
import Services from '../components/layout/Services';
import Process from '../components/layout/Process';
import Portfolio from '../components/layout/Portfolio';
import PricingCalculator from '../components/ui/PricingCalculator';
import FAQ from '../components/layout/FAQ';
import Contact from '../components/layout/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <PricingCalculator />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
