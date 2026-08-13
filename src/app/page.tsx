'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative select-none">
      {/* Background visual styling */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Very subtle dynamic lighting/glow grids */}
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-indigo-500/5 to-transparent blur-3xl" />
      </div>

      {/* Header element */}
      <Header />

      {/* Main Container */}
      <main className="flex-grow z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer element */}
      <Footer />
    </div>
  );
}
