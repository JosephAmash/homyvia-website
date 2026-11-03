import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface ValuesSectionProps {
  onOpenContact: () => void;
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="ueber-uns" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAFBFD] via-[#F4F7FB] to-[#FAFBFD] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hauptkarte "Über uns" - Perfekt harmonisiert in Höhe, Struktur und Maßen */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg shadow-slate-100 p-6 sm:p-8 lg:p-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Linke Spalte: Aussagekräftige Beschreibung & Orientierung */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF3FC] border border-[#BFD5EE] text-xs font-bold text-[#20528B] uppercase tracking-wider mb-3.5 w-fit">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4A346]" />
                  <span>Über HomyVia · Unser Auftrag</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2046] tracking-tight leading-tight">
                  Gemeinsam mehr bewegen – Ihr starker Partner für jedes Projekt
                </h2>

                <p className="mt-3 text-sm font-semibold text-[#2E68AA]">
                  Vier Gewerke, ein eingespieltes Team – alles aus einer verlässlichen Hand.
                </p>

                <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  <strong className="text-slate-900">HomyVia</strong> vereint die vier wichtigsten Aufgaben rund um Ihr Zuhause und Ihre Gewerbefläche: 
                  den sicheren <strong className="text-slate-800">Möbelumzug</strong>, die präzise <strong className="text-slate-800">Küchen- und Möbelmontage</strong>, die gründliche <strong className="text-slate-800">besenreine Entsorgung</strong> und den hochwertigen <strong className="text-slate-800">Trockenbau</strong>.
                </p>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Von unserem Standort in <strong className="text-slate-900">Leverkusen</strong> aus sind wir in ganz Köln, NRW und bundesweit für Sie da. Sie sparen sich die zeitaufwändige Abstimmung mit mehreren Firmen: Bei uns läuft jedes Projekt ruhig, termintreu und zu fairen Konditionen ab.
                </p>
              </div>

              {/* 4 strukturierte Qualitätskarten - Keine Festpreise, sondern faire Preise */}
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5 mt-6 pt-4 border-t border-slate-100">
                
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#2E68AA]/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-[#2E68AA] font-black text-lg sm:text-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A346]" />
                    <span>100%</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-1">Versichert & geschützt</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Volle Absicherung</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#2E68AA]/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-[#0B2046] font-black text-lg sm:text-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A346]" />
                    <span>4-in-1</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-1">Komplettlösung</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Ein Ansprechpartner</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#2E68AA]/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-[#0B2046] font-bold text-base sm:text-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A346]" />
                    <span>Faire Preise</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-1">Transparent kalkuliert</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Keine versteckten Kosten</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#2E68AA]/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-[#D4A346] font-black text-lg sm:text-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#2E68AA]" />
                    <span>Schnell</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-1">Direkte Rückmeldung</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Telefonisch erreichbar</div>
                </div>

              </div>

              {/* Call-to-Action Button */}
              <div className="mt-6">
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-[#0B2046] bg-gradient-to-r from-[#F3CA74] to-[#D4A346] hover:from-[#FFE194] hover:to-[#D4A346] transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Projekt jetzt unverbindlich anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Rechte Spalte: Kombiniertes Bild aller vier Aufgabenbereiche (Harmonisierte Höhe) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4A346]/40 shadow-xl bg-slate-100 group h-full flex flex-col justify-between">
                <img 
                  src="/assets/homyvia_mission_combined.jpg" 
                  alt="HomyVia Gesamtauftrag: Umzug, Montage, Entsorgung und Trockenbau in perfekter Harmonie"
                  className="w-full h-full min-h-[380px] sm:min-h-[460px] object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
                  loading="lazy"
                />

                {/* Subtile Eck-Badges zur klaren Orientierung für jedes Viertel */}
                <div className="absolute top-3 left-3 bg-[#0B2046]/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                  1. Umzüge & Transport
                </div>
                <div className="absolute top-3 right-3 bg-[#0B2046]/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                  2. Fachgerechte Montage
                </div>
                <div className="absolute bottom-14 left-3 bg-[#0B2046]/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 shadow-xs hidden sm:block">
                  3. Besenreine Entsorgung
                </div>
                <div className="absolute bottom-14 right-3 bg-[#0B2046]/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 shadow-xs hidden sm:block">
                  4. Moderner Trockenbau
                </div>

                {/* Ruhiges, edles Banner unten auf dem kombinierten Bild */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B2046]/95 via-[#0B2046]/80 to-transparent text-white p-3.5 sm:p-4">
                  <div className="flex items-center gap-2 text-[#F3CA74] text-xs font-extrabold uppercase tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-[#F3CA74]" />
                    <span>Alle 4 Gewerke nahtlos vereint</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-200 mt-0.5">
                    Umzug · Montage · Entsorgung · Trockenbau – Zuverlässig koordiniert von HomyVia.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
