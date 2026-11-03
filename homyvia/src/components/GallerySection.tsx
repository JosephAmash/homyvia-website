import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, ArrowLeft, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/homyviaData.ts';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'Alle Projekte' },
    { id: 'umzug', label: 'Umzüge & Transport' },
    { id: 'montage', label: 'Möbel- & Küchenmontage' },
    { id: 'entsorgung', label: 'Entsorgung & Entrümpelung' },
    { id: 'trockenbau', label: 'Trockenbau & Innenausbau' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Check scroll position to update arrow states
  const checkScrollState = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollState();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollState, { passive: true });
      window.addEventListener('resize', checkScrollState);
      return () => {
        slider.removeEventListener('scroll', checkScrollState);
        window.removeEventListener('resize', checkScrollState);
      };
    }
  }, [filteredItems]);

  // Reset scroll to beginning when category changes
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setActiveLightboxIndex(null);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.75;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const activeItem: GalleryItem | null = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="galerie" className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-[#0B2046] uppercase tracking-wider mb-3">
            <span>Projektgalerie</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2046] tracking-tight">
            Einblicke in unsere Arbeit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Echte Eindrücke unserer täglichen Einsätze in Leverkusen, NRW und ganz Deutschland. Nutzen Sie die Pfeile zum Blättern nach links und rechts oder wischen Sie durch die Galerie.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#2E68AA] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Top Navigation Bar with Controls */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <span>{filteredItems.length} Projekte</span>
            <span className="text-slate-300">·</span>
            <span className="hidden sm:inline">Horizontal durch die Projekte blättern</span>
          </div>

          {/* Navigations-Pfeile Rechts & Links blättern */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
                canScrollLeft
                  ? 'bg-white text-[#0B2046] border-slate-300 hover:bg-[#2E68AA] hover:text-white hover:border-[#2E68AA] shadow-xs active:scale-95'
                  : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-50'
              }`}
              aria-label="Nach links blättern"
              title="Nach links blättern"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
                canScrollRight
                  ? 'bg-white text-[#0B2046] border-slate-300 hover:bg-[#2E68AA] hover:text-white hover:border-[#2E68AA] shadow-xs active:scale-95'
                  : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-50'
              }`}
              aria-label="Nach rechts blättern"
              title="Nach rechts blättern"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div className="relative group/slider">
          
          {/* Linker Rand-Pfeil (Groß auf Desktop) */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 text-[#0B2046] hover:bg-[#2E68AA] hover:text-white border-2 border-slate-200 hover:border-[#2E68AA] shadow-xl items-center justify-center transition-all transform hover:scale-110 cursor-pointer"
              aria-label="Nach links blättern"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Rechter Rand-Pfeil (Groß auf Desktop) */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 text-[#0B2046] hover:bg-[#2E68AA] hover:text-white border-2 border-slate-200 hover:border-[#2E68AA] shadow-xl items-center justify-center transition-all transform hover:scale-110 cursor-pointer"
              aria-label="Nach rechts blättern"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Die horizontale Bilderreihe mit sanftem Scroll & Snap */}
          <div
            ref={sliderRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 select-none -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'thin' }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative w-[290px] sm:w-[380px] md:w-[440px] shrink-0 snap-start bg-[#F8FAFC] rounded-2xl border border-slate-200/90 hover:border-[#D4A346] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Horizontales 16:10 Format für ideale Breitbilddarstellung */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Sanfter Gradient-Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Kategorie-Pill */}
                  <div className="absolute top-3 left-3 bg-[#0B2046]/90 text-[#F3CA74] px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wide backdrop-blur-xs border border-white/10 shadow-xs">
                    {item.categoryLabel}
                  </div>

                  {/* Vergrößern-Icon bei Hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 backdrop-blur-xs text-[#0B2046] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75 duration-200 shadow-md">
                    <Maximize2 className="w-4 h-4 text-[#0B2046]" />
                  </div>

                  {/* Titel & Kurzbeschreibung im Bild */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base font-extrabold tracking-tight drop-shadow-sm text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Untere Info-Leiste */}
                <div className="p-3 bg-white flex items-center justify-between text-xs text-slate-600 border-t border-slate-100">
                  <span className="font-semibold text-slate-700 truncate">{item.title}</span>
                  <span className="text-[#2E68AA] font-bold shrink-0 flex items-center gap-1 group-hover:text-[#D4A346] transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Großansicht</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hinweisleiste zum Blättern */}
        <div className="mt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Wischen oder Pfeiltasten klicken zum Blättern</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>

        {/* Leerer Zustand */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            Keine Projekte in dieser Kategorie gefunden.
          </div>
        )}

      </div>

      {/* Lightbox Modal mit Vor-/Zurück-Blättern */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Schließen-Button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Vorheriges Bild Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Nächstes Bild Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Inhalts-Container */}
          <div 
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center bg-[#07152E] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bild-Bereich */}
            <div className="max-h-[75vh] w-full flex items-center justify-center bg-black/60 overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Info-Footer */}
            <div className="w-full p-4 sm:p-6 bg-[#07152E] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div>
                <div className="text-xs font-bold text-[#E8BC67] uppercase tracking-wider">
                  {activeItem.categoryLabel}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {activeItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {activeItem.description}
                </p>
              </div>

              <div className="text-xs text-slate-400 font-mono shrink-0">
                {(activeLightboxIndex ?? 0) + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
