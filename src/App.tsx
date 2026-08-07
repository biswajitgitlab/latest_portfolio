import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Stats } from './components/Stats';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CalendlyModal } from './components/CalendlyModal';

export default function App() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c16] text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Fixed Sticky Header */}
      <Header
        onOpenCalendly={() => setCalendlyOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenCalendly={() => setCalendlyOpen(true)} />
        <ValueProp />
        <Skills />
        <Projects onOpenCalendly={() => setCalendlyOpen(true)} />
        <Stats />
        <Blog />
        <Contact onOpenCalendly={() => setCalendlyOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CalendlyModal
        isOpen={calendlyOpen}
        onClose={() => setCalendlyOpen(false)}
      />
    </div>
  );
}
