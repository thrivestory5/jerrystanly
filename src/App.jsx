import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsMatrix from './components/SkillsMatrix';
import FilmographySection from './components/FilmographySection';
import WorkflowSection from './components/WorkflowSection';
import BudgetSimulator from './components/BudgetSimulator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OriginalCardModal from './components/OriginalCardModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isOriginalCardOpen, setIsOriginalCardOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070709] text-gray-200 selection:bg-gold-primary selection:text-black">
      {/* Film Grain Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-40 film-grain" />

      {/* Custom Awwwards-tier Cursor */}
      <CustomCursor />

      {/* Header Navigation */}
      <Navbar onOpenOriginalCard={() => setIsOriginalCardOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenOriginalCard={() => setIsOriginalCardOpen(true)} />
        <AboutSection />
        <SkillsMatrix />
        <FilmographySection />
        <WorkflowSection />
        <BudgetSimulator />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenOriginalCard={() => setIsOriginalCardOpen(true)} />

      {/* Lightbox for Original Official Credential */}
      <OriginalCardModal
        isOpen={isOriginalCardOpen}
        onClose={() => setIsOriginalCardOpen(false)}
      />
      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
