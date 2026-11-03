import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | 'agb' | null>(null);

  return (
    <footer className="bg-gradient-to-r from-[#2E68AA] via-[#245892] to-[#1C4573] text-slate-100 py-6 border-t-2 border-[#D4A346] shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-200">
        
        {/* Linke Seite: Copyright */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center border border-[#D4A346] shadow-xs shrink-0">
            <img 
              src="/assets/aistudio/HomyVia_Logo_e6a7e470.png" 
              alt="HomyVia" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-extrabold text-white text-sm">HomyVia</span>
          <span className="text-white/40">·</span>
          <span>Copyright © 2026. Alle Rechte vorbehalten.</span>
        </div>

        {/* Rechte Seite: Rechtliches (Impressum, Datenschutz, AGB) */}
        <div className="flex items-center gap-5 text-xs">
          <button
            onClick={() => setLegalModal('impressum')}
            className="hover:text-[#F3CA74] transition-colors underline cursor-pointer"
          >
            Impressum
          </button>
          <button
            onClick={() => setLegalModal('datenschutz')}
            className="hover:text-[#F3CA74] transition-colors underline cursor-pointer"
          >
            Datenschutzerklärung
          </button>
          <button
            onClick={() => setLegalModal('agb')}
            className="hover:text-[#F3CA74] transition-colors underline cursor-pointer"
          >
            AGB
          </button>
        </div>

      </div>

      {/* Rechtliche Modal-Dialoge */}
      {legalModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLegalModal(null)}
        >
          <div 
            className="bg-white text-slate-900 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === 'impressum' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <h3 className="text-xl font-extrabold text-[#0B2046]">Impressum</h3>
                <p>
                  <strong>HomyVia</strong><br />
                  Sauerbruchstr. 76<br />
                  51375 Leverkusen<br />
                  Deutschland
                </p>
                <p>
                  <strong>Kontakt:</strong><br />
                  Telefon: +49 1520 230 2222<br />
                  E-Mail: info@homyvia.de<br />
                  Website: www.homyvia.de
                </p>
                <p>
                  <strong>Gegenstand des Unternehmens:</strong><br />
                  Durchführung von Umzügen und Möbeltransporten, Küchen- und Möbelmontagen, Entrümpelungen und Entsorgungen, Trockenbau- und Renovierungsarbeiten.
                </p>
                <p>
                  <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
                  HomyVia, Sauerbruchstr. 76, 51375 Leverkusen
                </p>
                <p className="text-slate-500 text-xs">
                  Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/consumers/odr. Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            )}

            {legalModal === 'datenschutz' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <h3 className="text-xl font-extrabold text-[#0B2046]">Datenschutzerklärung</h3>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten personenbezogene Daten stets im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und den geltenden nationalen Datenschutzbestimmungen.
                </p>
                <p>
                  <strong>1. Erhebung und Speicherung personenbezogener Daten:</strong><br />
                  Wenn Sie mit uns per Kontaktformular, Telefon, WhatsApp oder E-Mail in Kontakt treten, werden Ihre Angaben (Name, Kontaktdaten, Projektdetails) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  <strong>2. Weitergabe von Daten:</strong><br />
                  Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den zur Vertragserfüllung erforderlichen Zwecken findet nicht statt.
                </p>
                <p>
                  <strong>3. Ihre Rechte:</strong><br />
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </div>
            )}

            {legalModal === 'agb' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <h3 className="text-xl font-extrabold text-[#0B2046]">Allgemeine Geschäftsbedingungen (AGB)</h3>
                <p>
                  <strong>1. Geltungsbereich:</strong><br />
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über Umzugs-, Montage-, Entsorgungs- und Trockenbauleistungen zwischen HomyVia und dem Auftraggeber.
                </p>
                <p>
                  <strong>2. Angebote und Kostenvoranschläge:</strong><br />
                  Unsere Angebote sind freibleibend, sofern sie nicht ausdrücklich als verbindlich bezeichnet werden.
                </p>
                <p>
                  <strong>3. Haftung & Versicherung:</strong><br />
                  HomyVia haftet nach den gesetzlichen Bestimmungen. Für Umzugsgüter und Montagetätigkeiten besteht eine vollumfängliche Betriebs- und Transportversicherung.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-200 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-[#0B2046] text-white rounded-lg text-xs font-bold hover:bg-[#D4A346] hover:text-[#0B2046] transition-colors"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
