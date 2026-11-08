import React from 'react';
import { Film, Clapperboard, Award, ShieldCheck, ArrowDown, ChevronRight, FileCheck, ExternalLink, BookmarkCheck } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { playTactileClick } from '../utils/audio';

export default function Hero({ onOpenOriginalCard }) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 bg-cinema-radial pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-gold-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle Grid / Anamorphic lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Badges: BNSP, KFT, Kemenkebudayaan */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-xs font-mono">
            <ShieldCheck size={14} className="text-blue-400" />
            <span>BNSP Certified Manajer Produksi</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/40 bg-red-500/10 text-red-300 text-xs font-mono">
            <BookmarkCheck size={14} className="text-red-400" />
            <span>Lisensi KFT No. {PROFILE.kftLicense}</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-mono">
            <Award size={14} className="text-amber-400" />
            <span>Kementerian Kebudayaan RI Contributor</span>
          </div>
        </div>

        {/* Main 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Golden Ambient Glow Aura behind image */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-gold-primary/40 via-gold-600/20 to-transparent blur-xl opacity-60 group-hover:opacity-90 transition duration-700" />
              
              {/* Outer Luxury Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-primary/40 bg-[#0e0e13] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                {/* Cinema Slate Header on Image */}
                <div className="bg-black/80 border-b border-gold-primary/20 px-4 py-2.5 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2 text-gold-300">
                    <Clapperboard size={13} className="text-gold-primary" />
                    <span>SLATE: 01</span>
                    <span className="text-gray-500">|</span>
                    <span>ROLL: MASTER</span>
                  </div>
                  <div className="text-gray-400">
                    LINE PRODUCER
                  </div>
                </div>

                {/* Portrait Image with Cinematic Color Filter */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-t from-black via-transparent to-transparent">
                  <img
                    src="/jerry-portrait.png"
                    alt="Jerry Stanly Djohar - Line Producer"
                    className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Fade at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-[#0e0e13]/20 to-transparent" />
                  
                  {/* Floating Seal / Company Watermark */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-gold-primary/30 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-gold-400">Verified Line Producer</p>
                      <p className="text-xs font-serif font-bold text-white tracking-wide">Jerry Stanly Djohar</p>
                    </div>
                    <img 
                      src="/cakrawangsa-logo.png" 
                      alt="Cakrawangsa Emblem" 
                      className="h-8 object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                    />
                  </div>
                </div>

                {/* Bottom Status bar */}
                <div className="p-3 bg-[#0a0a0e] border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    KFT & BNSP VERIFIED
                  </span>
                  <span>ID: {PROFILE.kftLicense}</span>
                </div>
              </div>

              {/* Floating Mini Credential Tag */}
              <button
                onClick={() => {
                  playTactileClick();
                  onOpenOriginalCard();
                }}
                className="absolute -bottom-4 -right-2 sm:right-2 z-20 px-4 py-2 rounded-xl bg-gold-primary text-black font-semibold text-xs tracking-wider uppercase shadow-[0_10px_25px_rgba(212,175,55,0.4)] flex items-center gap-2 hover:bg-gold-light transition-all transform hover:scale-105"
              >
                <FileCheck size={14} />
                <span>Lihat Sertifikat & Lisensi</span>
              </button>
            </div>
          </div>

          {/* Right Column: Title & Mission */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
            
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono tracking-[0.3em] text-gold-400 uppercase">
                The Mastermind Behind The Camera
              </p>
              
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                JERRY <br />
                <span className="text-gold-gradient">STANLY DJOHAR</span>
              </h1>
              
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] text-gold-300 font-semibold uppercase">
                  LINE PRODUCER
                </span>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span className="text-xs sm:text-sm text-gray-400 font-mono tracking-wider">
                  MANAJER PRODUKSI TERSERTIFIKASI BNSP
                </span>
              </div>
            </div>

            {/* Tagline & Core Statement */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Mengorkestrasi visi artistik sutradara dan produser eksekutif ke dalam eksekusi operasional yang presisi: 
              <strong className="text-gold-light font-medium"> efisiensi anggaran ketat, jadwal syuting disiplin, keselamatan kerja K3, </strong> 
              dan pencapaian mutu sinematik standar industri perfilman Indonesia.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#filmography"
                onClick={playTactileClick}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-primary via-gold-300 to-gold-primary text-black font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-0.5"
              >
                Jelajahi 35+ Filmografi
              </a>

              <a
                href="#certifications"
                onClick={playTactileClick}
                className="px-6 py-3.5 rounded-full border border-gold-primary/30 bg-gold-primary/5 hover:bg-gold-primary/15 text-gold-200 font-semibold text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-2"
              >
                <span>Lihat Sertifikasi BNSP & KFT</span>
                <ChevronRight size={14} className="text-gold-primary" />
              </a>
            </div>

            {/* External Database Quick Links (IMDb, KFT, FilmIndonesia) */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono">
              <span className="text-gray-500 uppercase tracking-wider text-[10px]">Basis Data Resmi:</span>
              <a
                href="https://www.imdb.com/name/nm13531405/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTactileClick}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-gold-primary/20 text-gray-300 hover:text-gold-light border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <span>IMDb (nm13531405)</span>
                <ExternalLink size={11} />
              </a>
              <a
                href="https://www.kftindonesia.org/jerry-stanley-djohar/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTactileClick}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-gold-primary/20 text-gray-300 hover:text-gold-light border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <span>KFT Film Database</span>
                <ExternalLink size={11} />
              </a>
              <a
                href="https://www.filmindonesia.or.id/nama/nmp543cc52e79c5e"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTactileClick}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-gold-primary/20 text-gray-300 hover:text-gold-light border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <span>FilmIndonesia.or.id</span>
                <ExternalLink size={11} />
              </a>
            </div>

            {/* Quick Responsibilities Pillars */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-gold-primary font-mono text-xs uppercase tracking-wider">BNSP Certified</p>
                <p className="text-xs text-gray-400 mt-0.5">Production Manager SKKNI</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-gold-primary font-mono text-xs uppercase tracking-wider">KFT Lisensi</p>
                <p className="text-xs text-gray-400 mt-0.5">Line Producer No. 2735</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                <p className="text-gold-primary font-mono text-xs uppercase tracking-wider">Kemendikbud / Kemenkebudayaan</p>
                <p className="text-xs text-gray-400 mt-0.5">Perumusan Buku Inklusif</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-gold-primary/20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PROFILE.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl gold-card text-center group hover:border-gold-primary/50 transition-all"
            >
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-light group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] font-mono text-gray-400 mt-0.5">
                {stat.prefix}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-[10px] font-mono tracking-widest uppercase">
        <span>Scroll</span>
        <ArrowDown size={12} className="animate-bounce text-gold-primary" />
      </div>
    </section>
  );
}
