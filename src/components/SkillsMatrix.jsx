import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Sliders, Shield, DollarSign, Calendar, Users, Truck, FileText, Wrench, AlertTriangle, Compass, Award, ChevronDown, ChevronUp, ArrowDown } from 'lucide-react';
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
  const skillRefs = useRef({});

  const categories = ['ALL', 'Core', 'Finance', 'Operations', 'Leadership', 'Logistics'];

  const filteredSkills = filterCategory === 'ALL'
    ? PROFILE.skills
    : PROFILE.skills.filter(s => s.category === filterCategory);

  const currentIndex = filteredSkills.findIndex(s => s.name === selectedSkill.name);

  // Scroll to a specific skill
  const scrollToSkill = (skill, behavior = 'smooth') => {
    setSelectedSkill(skill);
    const el = skillRefs.current[skill.name];
    if (el) {
      el.scrollIntoView({ behavior, block: 'center' });
    }
  };

  const handlePrev = () => {
    playTactileClick();
    const prevIdx = currentIndex > 0 ? currentIndex - 1 : filteredSkills.length - 1;
    scrollToSkill(filteredSkills[prevIdx]);
  };

  const handleNext = () => {
    playTactileClick();
    const nextIdx = currentIndex < filteredSkills.length - 1 ? currentIndex + 1 : 0;
    scrollToSkill(filteredSkills[nextIdx]);
  };

  const scrollToExecutiveLeadership = () => {
    playTactileClick();
    const execSkill = PROFILE.skills.find(s => s.name === "Executive Team Leadership");
    if (execSkill) {
      setFilterCategory('ALL');
      setTimeout(() => {
        scrollToSkill(execSkill);
      }, 50);
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#070709] border-t border-b border-gold-primary/15">
      
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-600/5 rounded-full blur-[150px] pointer-events-none" />

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
            Standar eksekutif produksi perfilman modern. Menguasai spektrum finansial, teknis kamera & pencahayaan, logistik ratusan kru, hingga kepemimpinan <strong>Executive Team Leadership</strong>.
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* Left Column: Interactive Skill List (1 to 10) */}
          <div className="lg:col-span-7 space-y-3">
            {filteredSkills.map((skill, idx) => {
              const Icon = skillIcons[skill.name] || CheckCircle;
              const isSelected = selectedSkill.name === skill.name;
              const isLeadership = skill.name === "Executive Team Leadership";

              return (
                <div
                  key={skill.name}
                  ref={(el) => (skillRefs.current[skill.name] = el)}
                  id={`skill-item-${idx}`}
                  onClick={() => {
                    playTactileClick();
                    setSelectedSkill(skill);
                  }}
                  className={`p-4 rounded-xl cursor-pointer transition-all border scroll-mt-32 ${
                    isSelected
                      ? 'bg-gold-primary/20 border-gold-primary shadow-[0_0_25px_rgba(212,175,55,0.3)] ring-1 ring-gold-primary/50'
                      : isLeadership
                      ? 'bg-[#14141c] border-gold-primary/30 hover:border-gold-primary'
                      : 'bg-[#0f0f14]/80 border-white/5 hover:border-gold-primary/40 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-gold-primary text-black' 
                          : isLeadership
                          ? 'bg-gold-primary/10 text-gold-light'
                          : 'bg-white/5 text-gold-300'
                      }`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-gray-500">
                            #{String(idx + 1).padStart(2, '0')}
                          </span>
                          <h4 className="font-serif text-sm sm:text-base font-bold text-white">
                            {skill.name}
                          </h4>
                          {isLeadership && (
                            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-gold-primary/20 text-gold-light uppercase tracking-wider font-semibold">
                              Top Pillar
                            </span>
                          )}
                        </div>
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

          {/* Right Column: Deep Operational Detail Card (Sticky Top-28) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="gold-card p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-2xl border-gold-primary/50 bg-[#0e0e14]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/15 rounded-full blur-2xl pointer-events-none" />

              {/* Navigation Header between skills */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gold-primary/20">
                <span className="px-2.5 py-1 rounded bg-gold-primary/20 text-gold-light font-mono text-xs font-semibold uppercase tracking-wider">
                  Deep Operational Insight
                </span>
                
                {/* Previous & Next Skill Quick Controls */}
                <div className="flex items-center gap-1.5 font-mono text-xs">
                  <button
                    onClick={handlePrev}
                    className="p-1 rounded bg-white/5 hover:bg-gold-primary hover:text-black text-gray-300 transition-colors"
                    title="Skill Sebelumnya"
                  >
                    <ChevronUp size={16} />
                  </button>
                  <span className="text-[11px] text-gray-400 px-1">
                    {currentIndex !== -1 ? currentIndex + 1 : 1} / {filteredSkills.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-1 rounded bg-white/5 hover:bg-gold-primary hover:text-black text-gray-300 transition-colors"
                    title="Skill Selanjutnya"
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>

              {/* Skill Title & Score */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {selectedSkill.name}
                </h3>
                <span className="text-xs font-mono text-gold-300 shrink-0 mt-1">
                  Rating: <strong>{selectedSkill.level}/100</strong>
                </span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                {selectedSkill.desc}
              </p>

              {/* Dynamic Implementation Highlights for the selected skill */}
              <div className="space-y-4 pt-4 border-t border-gold-primary/20 text-xs">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-gold-primary uppercase tracking-wider font-bold">
                    Standar Eksekusi Jerry Stanly Djohar:
                  </p>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">
                    3 Protokol Inti
                  </span>
                </div>

                <div className="space-y-2.5 text-gray-300 font-mono">
                  {(selectedSkill.standards || [
                    "Pencegahan deviasi anggaran dengan real-time cost tracking harian.",
                    "SOP keselamatan kerja & asuransi komprehensif bagi seluruh kru dan aktor.",
                    "Sinergi harmonis dengan sutradara untuk menjaga integritas estetika karya."
                  ]).map((std, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="p-3 rounded-lg bg-black/50 border border-white/5 flex items-start gap-2.5 transition-colors hover:border-gold-primary/30"
                    >
                      <span className="text-gold-primary font-bold shrink-0">✓</span>
                      <span className="leading-relaxed">{std}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Jump to Executive Team Leadership if not currently on it */}
              {selectedSkill.name !== "Executive Team Leadership" && (
                <div className="mt-5 pt-3 border-t border-white/5">
                  <button
                    onClick={scrollToExecutiveLeadership}
                    className="w-full py-2 px-3 rounded-xl bg-gold-primary/10 hover:bg-gold-primary/20 border border-gold-primary/30 text-gold-light text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Scroll ke Executive Team Leadership (Skill 10)</span>
                    <ArrowDown size={14} className="animate-bounce" />
                  </button>
                </div>
              )}

              {/* Action Callout */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
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
