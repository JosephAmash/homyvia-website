import React from 'react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full bg-[#FAF8F5] p-0 sm:py-3 sm:px-4 lg:px-6 overflow-hidden flex items-center justify-center">
      
      {/* Deckt die gesamte Startseite harmonisch und ruhig ab */}
      <div className="relative w-full max-w-[1440px] mx-auto shadow-xl rounded-none sm:rounded-2xl lg:rounded-3xl overflow-hidden border-0 sm:border-2 border-[#D4A346]/80 bg-[#0A1A35]">
        
        {/* Das ruhige HomyVia Motiv */}
        <img
          src="/assets/aistudio/Screenshot_2026-11-02_182623_ec5c1d4c.png"
          alt="HomyVia - Gemeinsam mehr bewegen. Umzüge, Montage, Entsorgung, Trockenbau"
          className="w-full h-auto block select-none pointer-events-none"
        />

        {/* =========================================================================
            KLICKBARE LEISTUNGS-BEREICHE (Scrollt sanft zu den 4 Kernleistungen)
            ========================================================================= */}
        
        {/* 1. Hotspot: UMZÜGE */}
        <a
          href="#service-umzuege"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('service-umzuege');
          }}
          title="Zu unseren Umzugsleistungen springen"
          aria-label="Leistungsbereich Umzüge anzeigen"
          className="absolute rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#D4A346]/20 hover:shadow-[0_0_20px_rgba(212,163,70,0.35)] active:scale-95 group"
          style={{
            left: '6%',
            top: '66.5%',
            width: '34.5%',
            height: '15%',
          }}
        >
          <span className="sr-only">Umzüge - Sicher, Pünktlich, Zuverlässig</span>
        </a>

        {/* 2. Hotspot: MONTAGE */}
        <a
          href="#service-montage"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('service-montage');
          }}
          title="Zu unserer Möbel- & Küchenmontage springen"
          aria-label="Leistungsbereich Montage anzeigen"
          className="absolute rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#D4A346]/20 hover:shadow-[0_0_20px_rgba(212,163,70,0.35)] active:scale-95 group"
          style={{
            left: '57%',
            top: '66.5%',
            width: '34.5%',
            height: '15%',
          }}
        >
          <span className="sr-only">Montage - Möbel, Küchen, Fachgerecht</span>
        </a>

        {/* 3. Hotspot: ENTSORGUNG */}
        <a
          href="#service-entsorgung"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('service-entsorgung');
          }}
          title="Zu unseren Entsorgungs- & Entrümpelungsleistungen springen"
          aria-label="Leistungsbereich Entsorgung anzeigen"
          className="absolute rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#D4A346]/20 hover:shadow-[0_0_20px_rgba(212,163,70,0.35)] active:scale-95 group"
          style={{
            left: '11%',
            top: '81.5%',
            width: '36.5%',
            height: '15%',
          }}
        >
          <span className="sr-only">Entsorgung - Sauber, Umweltfreundlich, Fair</span>
        </a>

        {/* 4. Hotspot: TROCKENBAU */}
        <a
          href="#service-trockenbau"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('service-trockenbau');
          }}
          title="Zu unseren Trockenbau- & Innenausbauleistungen springen"
          aria-label="Leistungsbereich Trockenbau anzeigen"
          className="absolute rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-gradient-to-r hover:from-white/10 hover:to-[#D4A346]/20 hover:shadow-[0_0_20px_rgba(212,163,70,0.35)] active:scale-95 group"
          style={{
            left: '56.5%',
            top: '81.5%',
            width: '37%',
            height: '15%',
          }}
        >
          <span className="sr-only">Trockenbau - Innenausbau, Modern, Individuell</span>
        </a>

      </div>

    </section>
  );
};
