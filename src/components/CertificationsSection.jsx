import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, CheckCircle2, FileText, Sparkles, Building, BookmarkCheck, Globe } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { playTactileClick } from '../utils/audio';

export default function CertificationsSection({ onOpenDoc }) {
  const [activeTab, setActiveTab] = useState('sertifikasi'); // 'sertifikasi' | 'skkni' | 'database'

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#070709] border-t border-gold-primary/20">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">
            <ShieldCheck size={15} />
            <span>Kredensial, Lisensi & Standar Profesi Nasional</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            SERTIFIKASI & <br />
            <span className="text-gold-gradient">LEGITIMASI RESMI NEGARA</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Terverifikasi oleh <strong>Badan Nasional Sertifikasi Profesi (BNSP)</strong>, 
            berlisensi resmi <strong>Persatuan Karyawan Film & Televisi Indonesia (KFT)</strong>, serta berkontribusi aktif bersama <strong>Kementerian Kebudayaan RI</strong>.
          </p>

          {/* Tab Switcher */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => { playTactileClick(); setActiveTab('sertifikasi'); }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'sertifikasi'
                  ? 'bg-gold-primary text-black font-bold shadow-lg shadow-gold-primary/25 scale-105'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Lisensi & Piagam Penghargaan
            </button>
            <button
              onClick={() => { playTactileClick(); setActiveTab('skkni'); }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'skkni'
                  ? 'bg-gold-primary text-black font-bold shadow-lg shadow-gold-primary/25 scale-105'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              7 Unit Kompetensi BNSP
            </button>
            <button
              onClick={() => { playTactileClick(); setActiveTab('database'); }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'database'
                  ? 'bg-gold-primary text-black font-bold shadow-lg shadow-gold-primary/25 scale-105'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Verifikasi Database (KFT • IMDb • FilmIndonesia)
            </button>
          </div>
        </div>

        {/* Tab 1: 3 Sertifikasi & Lisensi Utama */}
        {activeTab === 'sertifikasi' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* 1. Kementerian Kebudayaan RI */}
            <div className="gold-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-gold-primary/60 transition-all duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px] uppercase tracking-wider font-semibold">
                    Kementerian Kebudayaan RI
                  </span>
                  <Award size={18} className="text-gold-primary" />
                </div>

                <div 
                  onClick={() => { playTactileClick(); onOpenDoc('kemenkebudayaan'); }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-black group-hover:border-gold-primary/50 transition-colors"
                >
                  <img
                    src="/sertifikat-kemenkebudayaan.jpg"
                    alt="Piagam Penghargaan Kementerian Kebudayaan RI"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-mono text-gold-light flex items-center gap-1.5">
                      <FileText size={13} /> Klik untuk Perbesar Piagam
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-light transition-colors mb-1">
                    Piagam Penghargaan Perumusan Panduan Perfilman Inklusif
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Diberikan oleh <strong>Direktorat Film, Musik, dan Seni, Ditjen Kebudayaan</strong> atas partisipasi aktif Jerry Djohar dalam kegiatan nasional perumusan buku panduan perfilman inklusif (Juni 2025).
                  </p>
                </div>
              </div>

              <div className="p-4 bg-black/40 border-t border-white/5 font-mono text-[11px] text-gray-400 flex items-center justify-between">
                <span>Penandatangan: Syaifullah, Ph.D.</span>
                <span className="text-gold-primary">Resmi RI</span>
              </div>
            </div>

            {/* 2. BNSP - Manajer Produksi */}
            <div className="gold-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-gold-primary/60 transition-all duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300 font-mono text-[11px] uppercase tracking-wider font-semibold">
                    BNSP • Standar Negara
                  </span>
                  <ShieldCheck size={18} className="text-gold-primary" />
                </div>

                <div 
                  onClick={() => { playTactileClick(); onOpenDoc('bnsp'); }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-black group-hover:border-gold-primary/50 transition-colors"
                >
                  <img
                    src="/sertifikat-bnsp-depan.jpg"
                    alt="Sertifikat Kompetensi BNSP - Manajer Produksi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-mono text-gold-light flex items-center gap-1.5">
                      <FileText size={13} /> Klik untuk Perbesar Sertifikat BNSP
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-light transition-colors mb-1">
                    Sertifikat Kompetensi: Manajer Produksi (Production Manager)
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Diterbitkan oleh <strong>Badan Nasional Sertifikasi Profesi (BNSP)</strong> melalui LSP Kreator Film dan Televisi Indonesia. Membuktikan kompetensi formal tata kelola produksi film profesional.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-black/40 border-t border-white/5 font-mono text-[11px] text-gray-400 flex items-center justify-between">
                <span>No. Reg: PRO.1358.00057.2021</span>
                <span className="text-gold-primary">Ketua: Embi C Noer</span>
              </div>
            </div>

            {/* 3. KFT Indonesia Lisensi */}
            <div className="gold-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-gold-primary/60 transition-all duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/30 text-red-300 font-mono text-[11px] uppercase tracking-wider font-semibold">
                    Lisensi Profesi KFT
                  </span>
                  <BookmarkCheck size={18} className="text-gold-primary" />
                </div>

                <div 
                  onClick={() => { playTactileClick(); onOpenDoc('kft'); }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-black group-hover:border-gold-primary/50 transition-colors"
                >
                  <img
                    src="/kta-kft-lisensi.jpg"
                    alt="Lisensi Profesi KFT Jerry Stanly Djohar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-mono text-gold-light flex items-center gap-1.5">
                      <FileText size={13} /> Klik untuk Perbesar Lisensi KFT
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-light transition-colors mb-1">
                    Lisensi Profesi & KTA: Line Produser
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Diterbitkan oleh <strong>Persatuan Karyawan Film dan Televisi Indonesia (KFT)</strong>. Lisensi sah bagi praktisi industri sinema untuk memimpin produksi teater, sinetron, dan TVC di Indonesia.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-black/40 border-t border-white/5 font-mono text-[11px] text-gray-400 flex items-center justify-between">
                <span>No. Lisensi: {PROFILE.kftLicense}</span>
                <span className="text-gold-primary">Aktif s/d 2029</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: 7 Standar Unit Kompetensi BNSP */}
        {activeTab === 'skkni' && (
          <div className="gold-card p-6 sm:p-10 rounded-3xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gold-primary/20">
              <div>
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">
                  Standar Kompetensi Kerja Nasional Indonesia (SKKNI Perfilman)
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  7 Unit Kompetensi Manajer Produksi Tersertifikasi
                </h3>
              </div>

              <button
                onClick={() => { playTactileClick(); onOpenDoc('skkni-sheet'); }}
                className="px-4 py-2 rounded-xl bg-gold-primary/10 border border-gold-primary/40 hover:bg-gold-primary/20 text-gold-light text-xs font-mono flex items-center gap-2 self-start transition-all"
              >
                <FileText size={14} />
                <span>Lihat Lembar Asli Unit BNSP</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROFILE.bnspCompetencyUnits.map((unit, idx) => (
                <div
                  key={unit.code}
                  className="p-4 rounded-xl bg-black/50 border border-white/5 hover:border-gold-primary/40 transition-colors flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-primary font-mono text-xs font-bold shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gold-400 font-semibold px-2 py-0.5 rounded bg-white/5">
                      Kode: {unit.code}
                    </span>
                    <h4 className="text-xs sm:text-sm font-serif font-bold text-white">
                      {unit.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 italic font-mono">
                      {unit.enTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-gold-primary/5 border border-gold-primary/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-300">
              <span>Manajer Sertifikasi Penguji: <strong>Petrus Karangan</strong></span>
              <span className="text-gold-light">Lembaga Sertifikasi Profesi Kreator Film dan Televisi Indonesia</span>
            </div>
          </div>
        )}

        {/* Tab 3: Database Eksternal (KFT • IMDb • FilmIndonesia) */}
        {activeTab === 'database' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROFILE.verifiedDatabases.map((db, idx) => (
              <div
                key={db.name}
                className="gold-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-gold-primary transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-[10px] font-mono uppercase tracking-wider font-semibold">
                      {db.badge}
                    </span>
                    <Globe size={16} className="text-gold-primary" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-light transition-colors">
                      {db.name}
                    </h3>
                    <p className="text-xs font-mono text-gold-400 mt-0.5">
                      {db.fullName}
                    </p>
                  </div>

                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {db.description}
                  </p>

                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 font-mono text-xs text-gold-300 font-semibold">
                    {db.identifier}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5">
                  <a
                    href={db.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playTactileClick}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-gold-primary hover:text-black text-gray-200 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all font-semibold"
                  >
                    <span>Buka Arsip Resmi</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
