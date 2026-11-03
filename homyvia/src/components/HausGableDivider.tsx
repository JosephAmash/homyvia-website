import React from 'react';

interface HausGableDividerProps {
  color?: 'gold' | 'navy' | 'light';
  flipped?: boolean;
}

export const HausGableDivider: React.FC<HausGableDividerProps> = ({ color = 'gold', flipped = false }) => {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center my-0 pointer-events-none select-none ${flipped ? 'rotate-180' : ''}`}>
      <div className="relative w-full max-w-7xl flex items-center justify-center py-2 px-4">
        
        {/* Left gold decorative line */}
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#D4A346]/40 to-[#D4A346]" />

        {/* Center Roof / Gable Crest Symbol */}
        <div className="mx-4 flex items-center gap-2 px-4 py-1 rounded-full bg-[#224F88] border border-[#D4A346] shadow-[0_0_15px_rgba(212,163,70,0.3)]">
          <svg className="w-5 h-5 text-[#F3CA74]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-[11px] font-black uppercase tracking-widest text-[#F3CA74]">
            HomyVia
          </span>
        </div>

        {/* Right gold decorative line */}
        <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-[#D4A346]/40 to-[#D4A346]" />

      </div>
    </div>
  );
};
