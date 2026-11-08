import React from 'react';
import { Film, ArrowUp, ShieldCheck } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

export default function Footer({ onOpenOriginalCard }) {
  const scrollToTop = () => {
    playTactileClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-gold-primary/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Film Strip Border Graphic */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[radial-gradient(#d4af37_2px,transparent_2px)] [background-size:16px_16px] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Brand & Line Producer info */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full border border-gold-primary/40 bg-gold-primary/10 flex items-center justify-center shrink-0">
              <span className="font-serif font-black text-xl text-gold-primary tracking-wider">W</span>
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-white">
                JERRY STANLY DJOHAR
              </span>
              <p className="text-xs font-mono tracking-[0.25em] text-gold-400 uppercase mt-0.5">
                Executive Line Producer • Indonesian Cinema
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono uppercase tracking-wider text-gray-400">
            <a href="#about" onClick={playTactileClick} className="hover:text-gold-light transition-colors">Profil</a>
            <a href="#certifications" onClick={playTactileClick} className="hover:text-gold-light transition-colors">Sertifikasi</a>
            <a href="#skills" onClick={playTactileClick} className="hover:text-gold-light transition-colors">Keahlian</a>
            <a href="#filmography" onClick={playTactileClick} className="hover:text-gold-light transition-colors">Filmografi</a>
            <a href="#coverage" onClick={playTactileClick} className="hover:text-gold-light transition-colors">Wilayah</a>
            <a href="#workflow" onClick={playTactileClick} className="hover:text-gold-light transition-colors">Pipeline</a>
            <a href="#simulator" onClick={playTactileClick} className="hover:text-gold-light transition-colors">Kalkulator</a>
            <button 
              onClick={() => { playTactileClick(); onOpenOriginalCard(); }} 
              className="text-gold-primary hover:text-gold-light transition-colors"
            >
              Berkas Lisensi
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-light hover:bg-gold-primary hover:text-black transition-all"
            title="Kembali ke Atas"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Corporate Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400 text-center sm:text-left">
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-primary"></div>
            <span className="text-gray-300 font-bold uppercase tracking-wider">
              PT. CAKRAWANGSA CINEMA PRODUCTION
            </span>
          </div>

          <div className="text-[11px] text-gold-400 uppercase tracking-widest">
            MEMBER OF CAKRAWANGSA CINEMA PRODUCTION
          </div>

          <div className="text-[11px] text-gray-400">
            &copy; 2026 Jerry Stanly Djohar. All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
