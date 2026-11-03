import React, { useState, useEffect } from 'react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/homyviaData.ts';

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialService = 'Umzüge', 
  initialMessage = '' 
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState(initialMessage);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setMessage((prev) => (prev ? `${prev}\n\n${initialMessage}` : initialMessage));
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Bitte geben Sie Ihren Namen an.');
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setErrorMessage('Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse an.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="kontakt" className="py-16 sm:py-20 bg-[#F9F7F2] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D4A346]/15 rounded-full text-xs font-bold text-[#B58428] uppercase tracking-wider mb-3">
            <span>Kontakt & Anfrage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2046] tracking-tight">
            Kostenloses Angebot anfordern
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Füllen Sie das Online-Formular aus oder kontaktieren Sie uns direkt.
          </p>
        </div>

        {/* 1:1 Gegenüberstellung: Links das Online-Formular, Rechts HomyVia Kontaktdaten */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Linke Spalte: Online-Anfrageformular (7 Spalten) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            
            {submitted ? (
              <div className="py-12 my-auto text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0B2046]">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md">
                  Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.
                </p>
                <div className="mt-5">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0B2046] text-white hover:bg-[#D4A346] hover:text-[#07152E] transition-colors cursor-pointer"
                  >
                    Neue Anfrage senden
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-3.5">
                
                <div>
                  <h3 className="text-lg font-bold text-[#0B2046]">
                    Online-Anfrageformular
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Geben Sie kurz Ihre Kontaktdaten und Wünsche ein.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Telefon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Name / Ansprechpartner *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ihr Name"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:border-[#D4A346] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ihre Telefonnummer"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:border-[#D4A346] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* E-Mail & Leistung */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      E-Mail Adresse
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ihre.mail@beispiel.de"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:border-[#D4A346] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Gewünschte Leistung *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:border-[#D4A346] outline-none transition-all cursor-pointer"
                    >
                      <option value="Umzüge">UMZÜGE (Privat & Gewerbe)</option>
                      <option value="Montage">MONTAGE (Möbel & Küchen)</option>
                      <option value="Entsorgung">ENTSORGUNG (Entrümpelung & Räumung)</option>
                      <option value="Trockenbau">TROCKENBAU (Wände, Decken & Ausbau)</option>
                      <option value="Kombination / Gesamtprojekt">Kombination mehrerer Leistungen</option>
                    </select>
                  </div>
                </div>

                {/* Wunschtermin & Ort */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Wunschtermin / Zeitraum
                    </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="z.B. flexibel, nächster Monat"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:border-[#D4A346] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Ort (Stadt / PLZ)
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="z.B. Leverkusen, Köln..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:border-[#D4A346] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Nachricht / Details */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nachricht / Details
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Kurze Projektbeschreibung..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:border-[#D4A346] outline-none transition-all resize-none"
                  />
                </div>

                {/* Absenden-Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm text-[#07152E] bg-gradient-to-r from-[#F3CA74] via-[#D4A346] to-[#B58428] hover:from-[#FFE194] hover:to-[#D4A346] transition-all shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Wird gesendet...' : 'Kostenloses Angebot anfordern'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Rechte Spalte: HomyVia Kontaktdaten auf der rechten Seite (5 Spalten) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* 1. HomyVia */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-white p-0.5 flex items-center justify-center border-2 border-[#D4A346] shadow-xs shrink-0">
                  <img 
                    src="/assets/aistudio/HomyVia_Logo_e6a7e470.png" 
                    alt="HomyVia" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#0B2046] leading-none">
                    Homy<span className="text-[#D4A346]">Via</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mt-1">
                    Gemeinsam mehr bewegen
                  </div>
                </div>
              </div>

              {/* 2. Adresse */}
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#D4A346] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Adresse</div>
                  <div className="font-bold text-slate-900 text-sm">
                    Sauerbruchstr. 76, 51375 Leverkusen
                  </div>
                  <div className="text-slate-500 text-[11px] mt-0.5">Raum Köln, Leverkusen, Umgebung & NRW</div>
                </div>
              </div>

              {/* 3. Kontakt (Telefonnummer, E-Mail-Adresse, Webseite) */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                
                {/* Telefonnummer */}
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.phoneCallUrl}
                    className="w-8 h-8 rounded-lg bg-[#2E68AA] text-[#F3CA74] hover:bg-[#D4A346] hover:text-[#0B2046] flex items-center justify-center shrink-0 transition-colors shadow-xs"
                    title="Jetzt anrufen"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Telefonnummer</div>
                    <a href={COMPANY_INFO.phoneCallUrl} className="font-bold text-slate-900 hover:text-[#2E68AA] text-sm truncate block">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* E-Mail-Adresse */}
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.emailUrl}
                    className="w-8 h-8 rounded-lg bg-slate-100 text-[#2E68AA] hover:bg-[#D4A346] hover:text-white flex items-center justify-center shrink-0 transition-colors"
                    title="E-Mail schreiben"
                  >
                    <Mail className="w-4 h-4 text-[#D4A346]" />
                  </a>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-bold text-slate-400">E-Mail-Adresse</div>
                    <a href={COMPANY_INFO.emailUrl} className="font-bold text-slate-900 hover:text-[#2E68AA] text-sm truncate block">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Webseite */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-[#D4A346]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Webseite</div>
                    <span className="font-bold text-slate-900 text-sm truncate block">
                      {COMPANY_INFO.website}
                    </span>
                  </div>
                </div>

              </div>

              {/* 4. Öffnungszeiten */}
              <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#D4A346]" />
                </div>
                <div className="text-xs text-slate-700">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Öffnungszeiten</div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    Mo – Fr: 08:00 – 18:00 Uhr
                  </div>
                  <div className="font-semibold text-slate-800">
                    Samstag: 08:00 – 12:00 Uhr
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            SOCIAL MEDIA BEREICH DIREKT DARUNTER (Ruhig, anpassbar und stilvoll)
            ========================================================================= */}
        <div className="mt-8 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#0B2046]">Folgen Sie HomyVia auf Social Media</h4>
            <p className="text-xs text-slate-500 mt-0.5">Aktuelle Einblicke, Projekte und Aktionen aus erster Hand</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href={COMPANY_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-[#EBF3FC] border border-slate-200 hover:border-[#2E68AA] text-slate-800 transition-all text-xs font-bold shadow-xs hover:scale-105"
            >
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <span>Instagram</span>
            </a>

            {/* TikTok */}
            <a
              href={COMPANY_INFO.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-[#EBF3FC] border border-slate-200 hover:border-[#2E68AA] text-slate-800 transition-all text-xs font-bold shadow-xs hover:scale-105"
            >
              <div className="w-6 h-6 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
              <span>TikTok</span>
            </a>

            {/* Facebook */}
            <a
              href={COMPANY_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-[#EBF3FC] border border-slate-200 hover:border-[#2E68AA] text-slate-800 transition-all text-xs font-bold shadow-xs hover:scale-105"
            >
              <div className="w-6 h-6 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span>Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
