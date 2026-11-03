import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { COMPANY_INFO } from '../data/homyviaData.ts';

interface HeaderProps {
  onOpenContact: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#2E68AA] via-[#3B7BBE] to-[#2E68AA] border-b-2 border-[#D4A346] shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand Zone: HomyVia Logo & "Gemeinsam mehr bewegen" */}
        <a href="#home" className="flex items-center gap-3 group shrink-0" aria-label="HomyVia Startseite">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden flex items-center justify-center p-0.5 border-2 border-[#D4A346] bg-white shadow-sm">
            <img 
              src="/assets/aistudio/HomyVia_Logo_e6a7e470.png" 
              alt="HomyVia Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline tracking-tight font-black text-xl sm:text-2xl leading-none">
              <span className="text-white">Homy</span>
              <span className="text-[#F3CA74] ml-0.5">Via</span>
            </div>
            <span className="text-[10px] tracking-wider uppercase font-bold text-[#E8BC67] mt-0.5">
              Gemeinsam mehr bewegen
            </span>
          </div>
        </a>

        {/* Navigation Links: Home, Leistungen, Über uns, Werte, Galerie, Kontakt */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold text-slate-100">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="hover:text-[#F3CA74] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D4A346] after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Zone: Nur kleine Symbole nebeneinander */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          
          {/* WhatsApp Symbol */}
          <a 
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Nachricht senden"
            className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          {/* Anrufen Symbol */}
          <a 
            href={COMPANY_INFO.phoneCallUrl}
            title={`Jetzt anrufen: ${COMPANY_INFO.phoneDisplay}`}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-[#D4A346] text-[#F3CA74] hover:text-[#0F2648] border border-[#D4A346] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
            aria-label="Telefonisch anrufen"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* E-Mail Symbol / Angebot anfordern */}
          <button 
            onClick={() => onOpenContact()}
            title="E-Mail schreiben / Angebot anfordern"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#D4A346] text-[#1E4782] hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer hover:scale-105"
            aria-label="Angebot anfordern / E-Mail schreiben"
          >
            <Mail className="w-4 h-4 text-[#D4A346]" />
          </button>

        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-100 hover:text-[#F3CA74] rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#F3CA74]" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2E68AA] border-t border-[#D4A346]/40 px-6 py-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 text-base font-bold text-slate-100">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/10 hover:text-[#F3CA74] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex items-center justify-center gap-4 pt-4 border-t border-white/10">
            <a 
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            <a 
              href={COMPANY_INFO.phoneCallUrl}
              className="w-10 h-10 rounded-full bg-white/15 border border-[#D4A346] text-[#F3CA74] flex items-center justify-center shadow-sm"
              title="Anrufen"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-10 h-10 rounded-full bg-slate-100 text-[#1E4782] hover:bg-[#D4A346] flex items-center justify-center shadow-sm"
              title="Angebot anfordern / E-Mail schreiben"
            >
              <Mail className="w-5 h-5 text-[#D4A346]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
