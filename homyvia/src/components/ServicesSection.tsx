import React, { useState, useEffect } from 'react';
import { Truck, Wrench, Trash2, Home, Check, ArrowRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/homyviaData.ts';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  // Store active image index for each service
  const [activeImageMap, setActiveImageMap] = useState<Record<string, number>>({
    umzuege: 0,
    montage: 0,
    entsorgung: 0,
    trockenbau: 0,
  });

  // Auto-advance photos smoothly every 4 seconds without user having to click
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageMap((prev) => {
        const next: Record<string, number> = { ...prev };
        SERVICES.forEach((s) => {
          if (s.images && s.images.length > 1) {
            const cur = prev[s.id] || 0;
            next[s.id] = (cur + 1) % s.images.length;
          }
        });
        return next;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleSelectImage = (serviceId: string, index: number) => {
    setActiveImageMap((prev) => ({ ...prev, [serviceId]: index }));
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'umzuege':
        return <Truck className="w-5 h-5 text-white" />;
      case 'montage':
        return <Wrench className="w-5 h-5 text-[#07152E]" />;
      case 'entsorgung':
        return <Trash2 className="w-5 h-5 text-white" />;
      case 'trockenbau':
        return <Home className="w-5 h-5 text-[#07152E]" />;
      default:
        return <Truck className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="leistungen" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-[#0B2046] uppercase tracking-wider mb-3">
            <span className="text-[#B58428]">Köln, Leverkusen & NRW</span>
            <span>·</span>
            <span>Unsere 4 Kernkompetenzen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2046] tracking-tight">
            Leistungen nach Maß – aus einer Hand
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Ob Einzelaufgabe oder schlüsselfertiges Großprojekt: Wir bieten Ihnen professionelle Ausführung, modernste Ausrüstung und absolute Termintreue in Köln, Leverkusen & Umgebung, ganz NRW und deutschlandweit.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service: ServiceItem) => {
            const isGold = service.id === 'montage' || service.id === 'trockenbau';
            const activeIdx = activeImageMap[service.id] || 0;
            const currentImg = service.images && service.images[activeIdx] ? service.images[activeIdx] : service.image;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group flex flex-col bg-[#F9F7F2] rounded-3xl border border-slate-200 hover:border-[#D4A346] hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Main Large Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
                  <img
                    src={currentImg}
                    alt={`${service.title} - ${service.subtitle}`}
                    className="w-full h-full object-cover object-center transition-all duration-300"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152E]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Service Number & Icon Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                        isGold ? 'bg-[#D4A346]' : 'bg-[#0B2046]'
                      }`}
                    >
                      {getIcon(service.id)}
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-xs font-black text-slate-900 tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  {/* Subtitle Badge Bottom Left */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <div className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-sm">
                        {service.title}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#E8BC67] drop-shadow-sm">
                        {service.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Multiple Authentic Image Thumbnails Bar */}
                {service.images && service.images.length > 1 && (
                  <div className="px-5 py-3 bg-gradient-to-r from-[#1E4782] via-[#24579B] to-[#1E4782] flex items-center gap-2.5 overflow-x-auto border-b border-[#D4A346]/40">
                    {service.images.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSelectImage(service.id, i)}
                        className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                          activeIdx === i ? 'border-[#F3CA74] scale-105 shadow-md' : 'border-slate-600 opacity-60 hover:opacity-100'
                        }`}
                        title={`Foto ${i + 1} ansehen`}
                      >
                        <img src={img} alt={`Vorschau ${i + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-[#0B2046]/10 text-[#0B2046] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#D4A346]" />
                          </div>
                          <span className="font-semibold text-slate-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clean Action Button */}
                  <div className="pt-6 border-t border-slate-100">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#0B2046] hover:bg-[#D4A346] hover:text-[#07152E] shadow-sm transition-all cursor-pointer"
                    >
                      <span>Jetzt {service.title.toLowerCase()} anfragen</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
