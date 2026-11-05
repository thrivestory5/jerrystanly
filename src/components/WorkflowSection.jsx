import React, { useState } from 'react';
import { Layers, CheckCircle2, Clock, ChevronRight, Sliders, Shield, Film, FileSpreadsheet } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { playTactileClick } from '../utils/audio';

export default function WorkflowSection() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = PROFILE.workflowSteps[activeStepIdx];

  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-[#070709] border-t border-gold-primary/15">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-gold-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">
            <Layers size={14} />
            <span>Methodology & Standard Operating Procedure</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            THE LINE PRODUCER <br />
            <span className="text-gold-gradient">PRODUCTION PLAYBOOK</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Metodologi kerja 5 fase yang teruji dalam puluhan film bioskop dan ratusan episode televisi. Menjamin nol deviasi jadwal dan efisiensi alokasi modal.
          </p>
        </div>

        {/* 5-Step Horizontal Timeline Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {PROFILE.workflowSteps.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            return (
              <button
                key={step.step}
                onClick={() => {
                  playTactileClick();
                  setActiveStepIdx(idx);
                }}
                className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  isActive
                    ? 'bg-gold-primary/15 border-gold-primary shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                    : 'bg-[#0f0f15] border-white/5 hover:border-gold-primary/40 hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-gold-primary text-black' : 'bg-white/5 text-gold-400'
                  }`}>
                    FASE {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">
                    {step.phase}
                  </span>
                </div>
                <h4 className="font-serif text-sm font-bold text-white line-clamp-2">
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Deep Stage Focus Card */}
        <div className="gold-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Big Stage Explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-gold-primary/20 text-gold-light font-mono text-xs font-bold uppercase tracking-widest">
                  Fase {activeStep.step} / 05 — {activeStep.phase}
                </span>
                <span className="text-gray-500 font-mono text-xs">• ISO Cinema Standards</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {activeStep.title}
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                {activeStep.desc}
              </p>

              {/* Key Deliverables at this stage */}
              <div className="pt-4 border-t border-gold-primary/20 space-y-2">
                <p className="font-mono text-xs text-gold-primary uppercase tracking-wider font-semibold">
                  Dokumen & Output Utama Jerry Stanly:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5">
                    <CheckCircle2 size={13} className="text-gold-primary shrink-0" />
                    <span>Laporan Audit Varians Biaya</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5">
                    <CheckCircle2 size={13} className="text-gold-primary shrink-0" />
                    <span>Daily Call Sheet & Contingency Plan</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5">
                    <CheckCircle2 size={13} className="text-gold-primary shrink-0" />
                    <span>Surat Izin Lokasi & Aparat Resmi</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5">
                    <CheckCircle2 size={13} className="text-gold-primary shrink-0" />
                    <span>Berita Acara Wrap & Serah Terima</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Slate & Status Dashboard */}
            <div className="lg:col-span-5 bg-[#0a0a0f] p-6 rounded-2xl border border-gold-primary/30 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                <span className="text-gold-primary flex items-center gap-2">
                  <Film size={14} />
                  LINE PRODUCTION MONITOR
                </span>
                <span className="text-emerald-400">OPTIMIZED</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Efisiensi Anggaran (Cost Control)</span>
                  <span className="text-gold-light font-bold">100% On-Target</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Penyimpangan Jadwal (Schedule Drift)</span>
                  <span className="text-emerald-400 font-bold">0 Hari (Zero Drift)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Mitigasi Risiko Darurat (HSE)</span>
                  <span className="text-white font-bold">Protokol Siaga 24/7</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Afiliasi Studio</span>
                  <span className="text-gold-300 font-bold">PT. Cakrawangsa Cinema</span>
                </div>
              </div>

              {/* Step Navigation buttons */}
              <div className="pt-4 flex items-center justify-between gap-3">
                <button
                  disabled={activeStepIdx === 0}
                  onClick={() => {
                    playTactileClick();
                    setActiveStepIdx(Math.max(0, activeStepIdx - 1));
                  }}
                  className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 text-xs font-mono uppercase"
                >
                  &larr; Fase Sebelumnya
                </button>
                <button
                  disabled={activeStepIdx === PROFILE.workflowSteps.length - 1}
                  onClick={() => {
                    playTactileClick();
                    setActiveStepIdx(Math.min(PROFILE.workflowSteps.length - 1, activeStepIdx + 1));
                  }}
                  className="px-4 py-2 rounded-lg bg-gold-primary text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold-light text-xs font-mono uppercase font-bold"
                >
                  Fase Berikutnya &rarr;
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
