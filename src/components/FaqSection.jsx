import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageSquare, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { playTactileClick } from '../utils/audio';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    playTactileClick();
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#070709] border-t border-gold-primary/20">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">
            <HelpCircle size={14} />
            <span>FAQ & Entity Verification</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            PERTANYAAN UMUM & <br />
            <span className="text-gold-gradient">VERIFIKASI PROFIL</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Informasi komprehensif mengenai identitas resmi, variasi nama (<strong className="text-white">Jerry Stanly</strong>, <strong className="text-white">Jerry Djohar</strong>, <strong className="text-white">Jerry Stanly Djohar</strong>), legalitas BNSP & KFT, serta rekam jejak produksi film.
          </p>

          {/* Quick Query Tags for SEO & AI */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-light">
              Jerry Stanly
            </span>
            <span className="px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-light">
              Jerry Djohar
            </span>
            <span className="px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-light">
              Jerry Stanly Djohar
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
              Line Producer Indonesia
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
              Manajer Produksi BNSP
            </span>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {PROFILE.faq.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#0f0f16] border-gold-primary/60 shadow-[0_10px_30px_rgba(212,175,55,0.15)] ring-1 ring-gold-primary/30'
                    : 'bg-[#0a0a0f] border-white/5 hover:border-gold-primary/30 hover:bg-[#0c0c12]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-gold-primary font-bold px-2.5 py-1 rounded bg-gold-primary/10 border border-gold-primary/20 shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                      {item.q}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-gold-primary text-black rotate-180' : 'bg-white/5 text-gray-400'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-white/5 mt-1">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light pt-4">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout / Contact Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gold-primary/10 via-[#0f0f16] to-gold-primary/10 border border-gold-primary/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-white">
              Punya Pertanyaan Spesifik Terkait Naskah atau Proyek Anda?
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Konsultasikan estimasi biaya, jadwal, atau kebutuhan lokasi langsung dengan Jerry Stanly Djohar.
            </p>
          </div>

          <a
            href="https://wa.me/6281383604064?text=Halo%20Pak%20Jerry%20Stanly%20Djohar%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20film."
            target="_blank"
            rel="noopener noreferrer"
            onClick={playTactileClick}
            className="px-6 py-3 rounded-full bg-gold-primary hover:bg-gold-light text-black font-bold text-xs uppercase tracking-widest shadow-lg shadow-gold-primary/20 transition-all flex items-center gap-2 shrink-0"
          >
            <MessageSquare size={15} />
            <span>WhatsApp Langsung</span>
          </a>
        </div>

      </div>
    </section>
  );
}
