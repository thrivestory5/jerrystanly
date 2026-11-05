import React, { useState } from 'react';
import { CheckCircle, Sliders, Shield, DollarSign, Calendar, Users, Truck, FileText, Wrench, AlertTriangle, Compass, Award } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { playTactileClick } from '../utils/audio';

const skillIcons = {
  "Manajemen Produksi Film": Compass,
  "Budgeting & Cost Control": DollarSign,
  "Scheduling Produksi (Movie Magic / Excel)": Calendar,
  "Koordinasi Kru & Talent Management": Users,
  "Logistik & Mobilisasi Skala Besar": Truck,
  "Perizinan Lokasi & Government Relations": FileText,
  "Vendor & Rental House Management": Wrench,
  "Risk Management & Crisis Contingency": AlertTriangle,
  "Production Planning & Pre-to-Post Pipeline": Sliders,
  "Executive Team Leadership": Award
};

export default function SkillsMatrix() {
  const [selectedSkill, setSelectedSkill] = useState(PROFILE.skills[0]);
  const [filterCategory, setFilterCategory] = useState('ALL');

  const categories = ['ALL', 'Core', 'Finance', 'Operations', 'Leadership', 'Logistics'];

  const filteredSkills = filterCategory === 'ALL'
    ? PROFILE.skills
    : PROFILE.skills.filter(s => s.category === filterCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070709] border-t border-b border-gold-primary/15">
      
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">
            <CheckCircle size={14} />
            <span>10 Pilar Kompetensi Utama</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            KEAHLIAN <span className="text-gold-gradient">LINE PRODUCER</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Standar eksekutif produksi perfilman modern. Menguasai spektrum finansial, teknis kamera & pencahayaan, logistik ratusan kru, hingga negosiasi talenta A-list.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { playTactileClick(); setFilterCategory(cat); }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  filterCategory === cat
                    ? 'bg-gold-primary text-black font-bold shadow-md shadow-gold-primary/20'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Skill List */}
          <div className="lg:col-span-7 space-y-3">
            {filteredSkills.map((skill, idx) => {
              const Icon = skillIcons[skill.name] || CheckCircle;
              const isSelected = selectedSkill.name === skill.name;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    playTactileClick();
                    setSelectedSkill(skill);
                  }}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-gold-primary/15 border-gold-primary shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                      : 'bg-[#0f0f14]/80 border-white/5 hover:border-gold-primary/40 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-gold-primary text-black' : 'bg-white/5 text-gold-300'
                      }`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm sm:text-base font-bold text-white">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono text-gold-400 uppercase tracking-wider">
                          Kategori: {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar & Number */}
                    <div className="text-right shrink-0">
                      <span className="font-mono text-xs font-bold text-gold-light">
                        {skill.level}%
                      </span>
                      <div className="w-20 sm:w-28 h-1.5 rounded-full bg-white/10 mt-1 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-gold-primary to-gold-light rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Operational Detail Card for Selected Skill */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="gold-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded bg-gold-primary/20 text-gold-light font-mono text-xs font-semibold uppercase tracking-wider">
                  Deep Operational Insight
                </span>
                <span className="text-xs font-mono text-gray-400">
                  Rating Teruji: {selectedSkill.level}/100
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {selectedSkill.name}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                {selectedSkill.desc}
              </p>

              {/* Implementation Highlights */}
              <div className="space-y-4 pt-4 border-t border-gold-primary/20 text-xs">
                <p className="font-mono text-gold-primary uppercase tracking-wider font-bold">
                  Standar Eksekusi Jerry Stanly Djohar:
                </p>

                <div className="space-y-2.5 text-gray-300 font-mono">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2.5">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Pencegahan deviasi anggaran dengan real-time cost tracking harian.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2.5">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>SOP keselamatan kerja & asuransi komprehensif bagi seluruh kru dan aktor.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2.5">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Sinergi harmonis dengan sutradara untuk menjaga integritas estetika karya.</span>
                  </div>
                </div>
              </div>

              {/* Action Callout */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-gray-400">
                  Siap diterapkan untuk produksi Anda
                </span>
                <a
                  href="#contact"
                  onClick={playTactileClick}
                  className="text-xs font-mono text-gold-primary hover:text-gold-light underline uppercase tracking-wider"
                >
                  Konsultasikan Proyek &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
