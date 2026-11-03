/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ValuesSection } from './components/ValuesSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { HausGableDivider } from './components/HausGableDivider.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Umzüge');

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactElem = document.getElementById('kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F2] text-slate-900 selection:bg-[#D4A346]/20 selection:text-[#06142A]">
      
      {/* Header mit kompakten Symbolen (WhatsApp, Anrufen, Angebot) */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Home / Hero Section (In der architektonischen Hausform mit echten Team- & Einsatzfotos) */}
        <Hero />

        {/* Hausform Gable Divider */}
        <HausGableDivider />

        {/* 4 Kernleistungen mit mehreren Fotos pro Leistung */}
        <ServicesSection onSelectService={handleOpenContact} />

        {/* Hausform Gable Divider */}
        <HausGableDivider />

        {/* Über HomyVia */}
        <ValuesSection onOpenContact={handleOpenContact} />

        {/* Projektgalerie mit Großansicht (Lightbox) */}
        <GallerySection />

        {/* Häufig gestellte Fragen (FAQ) */}
        <FaqSection />

        {/* Kontaktbereich (Freundliche Augenfarben, saubere Symbole & Online-Formular) */}
        <ContactSection initialService={selectedService} />

      </main>

      {/* Footer mit Impressum, Datenschutz & Copyright */}
      <Footer />

    </div>
  );
}
