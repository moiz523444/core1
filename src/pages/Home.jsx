import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/layout/Hero';
import Testimonials from '../components/layout/Testimonials';
import About from '../components/layout/About';
import Services from '../components/layout/Services';
import Process from '../components/layout/Process';
import Portfolio from '../components/layout/Portfolio';
import PricingCalculator from '../components/ui/PricingCalculator';
import FAQ from '../components/layout/FAQ';
import Contact from '../components/layout/Contact';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Home() {
  return (
    <>
      <SEO 
        title="Software Development Agency" 
        description="Blazincode is a premium software development agency specializing in scalable web applications, mobile apps, and enterprise solutions." 
        keywords="software agency, web development, app development, scalable software" 
      />
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><Process /></ScrollReveal>
      <ScrollReveal><Portfolio /></ScrollReveal>
      <ScrollReveal><PricingCalculator /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
    </>
  );
}
