import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Award, Briefcase, Sparkles, Building2, Quote } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { playTactileClick } from '../utils/audio';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('profil'); // 'profil' | 'tanggungjawab' | 'perusahaan'

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#09090d]">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">
            <Award size={14} />
            <span>Profil Profesional & Visi Produksi</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Kepemimpinan Operasional <br />
            <span className="text-gold-gradient">Di Balik Layar Perak</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Menghubungkan dimensi artistik sinematografi dan kedisiplinan fiskal investasi. Setiap frame adalah perpaduan visi kreatif dan tata kelola produksi yang teruji.
          </p>

          {/* Interactive Navigation Pills */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => { playTactileClick(); setActiveTab('profil'); }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'profil'
                  ? 'bg-gold-primary text-black font-bold shadow-lg shadow-gold-primary/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Profil Lengkap
            </button>
            <button
              onClick={() => { playTactileClick(); setActiveTab('tanggungjawab'); }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'tanggungjawab'
                  ? 'bg-gold-primary text-black font-bold shadow-lg shadow-gold-primary/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Tanggung Jawab Operasional
            </button>
            <button
              onClick={() => { playTactileClick(); setActiveTab('perusahaan'); }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'perusahaan'
                  ? 'bg-gold-primary text-black font-bold shadow-lg shadow-gold-primary/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Cakrawangsa Cinema
            </button>
          </div>
        </div>

        {/* Content by Active Tab */}
        {activeTab === 'profil' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Big Card: Official Statement */}
            <div className="lg:col-span-7 gold-card p-8 rounded-2xl relative">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold-primary/20">
                <div className="w-10 h-10 rounded-xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-primary">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                    PROFIL PROFESIONAL
                  </h3>
                  <p className="text-xs font-mono text-gold-400">
                    Line Producer • Jerry Stanly Djohar
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base font-light">
                <p>
                  <strong className="text-white font-medium">Jerry Stanly Djohar</strong> (dikenal juga sebagai <em>Jerry Djohar</em>) adalah seorang Line Producer dan Manajer Produksi tersertifikasi <strong>BNSP (Badan Nasional Sertifikasi Profesi)</strong> dengan Lisensi Resmi <strong>Persatuan Karyawan Film dan Televisi Indonesia (KFT No. {PROFILE.kftLicense})</strong> yang memiliki pengalaman panjang dalam industri perfilman, serial televisi, FTV, TV Movie, dan produksi iklan nasional.
                </p>
                <p>
                  Berpengalaman dalam mengelola proses produksi dari tahap pra-produksi, produksi (principal photography), hingga pasca-produksi dengan fokus pada efisiensi anggaran, manajemen sumber daya, koordinasi kru, dan pencapaian target produksi.
                </p>
                <p>
                  Dengan rekam jejak yang mencakup berbagai proyek layar lebar blockbuster, serial televisi, FTV, iklan nasional, hingga kontribusi dalam <strong>Perumusan Buku Panduan Perfilman Inklusif bersama Kementerian Kebudayaan Republik Indonesia</strong>, Jerry dikenal memiliki kemampuan kuat dalam pengelolaan produksi skala besar maupun menengah serta memastikan setiap proyek berjalan tepat waktu dan sesuai standar industri.
                </p>
              </div>

              {/* Quote Block */}
              <div className="mt-8 p-5 rounded-xl bg-black/60 border-l-2 border-gold-primary flex items-start gap-4">
                <Quote size={24} className="text-gold-primary shrink-0 opacity-70 mt-1" />
                <p className="italic text-sm text-gray-300 font-serif">
                  "{PROFILE.quote}"
                </p>
              </div>
            </div>

            {/* Right Card: Profil Singkat & Core Traits */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="gold-card p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-gold-primary mb-3 font-mono text-xs uppercase tracking-wider">
                  <Sparkles size={16} />
                  <span>PROFIL SINGKAT</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Jerry Stanly Djohar merupakan Line Producer berpengalaman yang telah terlibat dalam berbagai produksi film layar lebar, serial televisi, FTV, TV Movie, dan iklan nasional. Dengan pengalaman lintas platform dan kemampuan manajerial yang kuat, beliau memiliki kompetensi dalam mengelola seluruh aspek operasional produksi secara efektif dan profesional sehingga mampu menghasilkan karya berkualitas tinggi sesuai standar industri perfilman Indonesia.
                </p>
              </div>

              {/* Verified Production Matrix */}
              <div className="gold-card p-6 rounded-2xl space-y-3">
                <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider flex items-center justify-between">
                  <span>Integritas & Jaminan Kerja</span>
                  <ShieldCheck size={18} className="text-gold-primary" />
                </h4>
                
                <ul className="space-y-2.5 text-xs text-gray-300 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-gold-primary shrink-0" />
                    <span>Transparansi Finansial & Audit Budget Ketat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-gold-primary shrink-0" />
                    <span>Zero Tolerance Downtime & Schedule Drift</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-gold-primary shrink-0" />
                    <span>Relasi Erat Lembaga Perizinan & Vendor Terpercaya</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-gold-primary shrink-0" />
                    <span>Standar HSE Keselamatan Kerja di Lokasi Syuting</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Tanggung Jawab Operasional */}
        {activeTab === 'tanggungjawab' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFILE.responsibilities.map((resp, idx) => (
              <div
                key={idx}
                className="gold-card p-6 rounded-2xl group hover:border-gold-primary/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-gold-400 font-bold px-2.5 py-1 rounded bg-gold-primary/10 border border-gold-primary/20">
                      TUGAS 0{idx + 1}
                    </span>
                    <CheckCircle2 size={18} className="text-gold-primary/60 group-hover:text-gold-primary transition-colors" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-gold-light transition-colors mb-2">
                    {resp.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {resp.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-gray-500">
                  Operasional Lapangan & Studio
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Perusahaan / Cakrawangsa Cinema */}
        {activeTab === 'perusahaan' && (
          <div className="gold-card p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gold-primary/20">
              <img
                src="/cakrawangsa-logo.png"
                alt="PT Cakrawangsa Cinema Production"
                className="w-28 h-28 object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              />
              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">
                  Rumah Produksi & Ekosistem Perfilman
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  PT. CAKRAWANGSA CINEMA PRODUCTION
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  MEMBER OF CAKRAWANGSA CINEMA PRODUCTION GROUP
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>
                Sebagai bagian integral dari ekosistem <strong className="text-gold-light">PT. Cakrawangsa Cinema Production</strong>, Jerry Stanly Djohar menghadirkan kekuatan manajerial yang bersinergi dengan studio produksi film terkemuka di tanah air.
              </p>
              <p>
                Dukungan infrastruktur ini memungkinkan eksekusi produksi film bioskop, serial premium OTT, drama televisi nasional, dan kampanye iklan berskala komersial terlaksana dengan standar teknis tertinggi—mulai dari kamera resolusi 4K/8K, sound staging, tata artistik berkelas internasional, hingga jalur distribusi teater dan platform digital.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <Building2 size={14} className="text-gold-primary" />
                <span>Jakarta Production Hub</span>
              </div>
              <div className="text-gold-primary">
                Kemitraan Studio, Bioskop & Stasiun TV Nasional
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
