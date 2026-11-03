import React from 'react';
import { COMPANY_INFO } from '../data/homyviaData.ts';

export const SocialSection: React.FC = () => {
  const channels = [
    {
      name: 'Instagram',
      url: COMPANY_INFO.social.instagram,
      ariaLabel: 'HomyVia auf Instagram',
      colorClass: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:shadow-rose-500/25',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: COMPANY_INFO.social.tiktok,
      ariaLabel: 'HomyVia auf TikTok',
      colorClass: 'bg-black hover:shadow-cyan-500/20',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: COMPANY_INFO.social.facebook,
      ariaLabel: 'HomyVia auf Facebook',
      colorClass: 'bg-[#1877F2] hover:shadow-blue-500/25',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-14 bg-[#F9F7F2] border-b border-slate-200 text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2046] tracking-tight mb-2">
          Folgen Sie HomyVia
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-md mx-auto">
          Aktuelle Projekte, Praxiseinblicke und Vorher-Nachher Videos direkt auf unseren Kanälen.
        </p>

        {/* Nur die Symbole nebeneinander */}
        <div className="flex items-center justify-center gap-5">
          {channels.map((chan) => (
            <a
              key={chan.name}
              href={chan.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={chan.ariaLabel}
              className={`w-14 h-14 rounded-2xl ${chan.colorClass} flex items-center justify-center shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105`}
              title={chan.name}
            >
              {chan.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
