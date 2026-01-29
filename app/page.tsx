'use client';

import Hero from '@/pages/Hero';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Products from '@/pages/Products';
import Services from '@/pages/Services';
import Founder from '@/pages/Founder';
import Contact from '@/pages/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Products />
      <Services />
      <Founder />
      <Contact />
    </div>
  );
}
