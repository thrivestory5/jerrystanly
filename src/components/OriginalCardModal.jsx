import React, { useState, useEffect } from 'react';
import { X, Download, ShieldCheck, ChevronLeft, ChevronRight, Award, FileText } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

const DOCUMENTS = [
  {
    id: 'kemenkebudayaan',
    title: 'Piagam Penghargaan Kementerian Kebudayaan RI',
    sub: 'Direktorat Film, Musik, dan Seni — Panduan Perfilman Inklusif (2025)',
    src: '/sertifikat-kemenkebudayaan.jpg',
    filename: 'Piagam-Penghargaan-Kementerian-Kebudayaan-Jerry-Djohar.jpg'
  },
  {
    id: 'bnsp',
    title: 'Sertifikat Kompetensi BNSP (Halaman 1)',
    sub: 'Manajer Produksi (Production Manager) — No. 90003 2654 5 0000139 2021',
    src: '/sertifikat-bnsp-depan.jpg',
    filename: 'Sertifikat-Kompetensi-BNSP-Jerry-Stanly-Djohar.jpg'
  },
  {
    id: 'skkni-sheet',
    title: 'Daftar 7 Unit Kompetensi BNSP (Halaman 2)',
    sub: 'Standar SKKNI Perfilman RI — LSP Kreator Film dan Televisi Indonesia',
    src: '/sertifikat-bnsp-belakang.jpg',
    filename: 'Daftar-Unit-Kompetensi-BNSP-Jerry-Stanly-Djohar.jpg'
  },
  {
    id: 'kft',
    title: 'Lisensi Profesi KFT (Persatuan Karyawan Film & Televisi)',
    sub: 'Line Produser — Lisensi No. 2735/B/15/XV/2029',
    src: '/kta-kft-lisensi.jpg',
    filename: 'Lisensi-Profesi-KFT-Jerry-Stanly-Djohar.jpg'
  },
  {
    id: 'cakrawangsa',
    title: 'Kartu Profil Resmi Cakrawangsa Cinema Production',
    sub: 'Line Producer Profile & Verified Master Filmography',
    src: '/jerry-original.png',
    filename: 'Jerry-Stanly-Djohar-Line-Producer-Credential.png'
  }
];

export default function OriginalCardModal({ isOpen, onClose, initialDocId }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (initialDocId) {
      const foundIdx = DOCUMENTS.findIndex(d => d.id === initialDocId);
      if (foundIdx !== -1) {
        setSelectedIdx(foundIdx);
      }
    }
  }, [initialDocId, isOpen]);

  if (!isOpen) return null;

  const currentDoc = DOCUMENTS[selectedIdx];

  const handlePrev = (e) => {
    e.stopPropagation();
    playTactileClick();
    setSelectedIdx((prev) => (prev > 0 ? prev - 1 : DOCUMENTS.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    playTactileClick();
    setSelectedIdx((prev) => (prev < DOCUMENTS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="gold-card max-w-5xl w-full rounded-2xl overflow-hidden bg-[#0c0c10] border-gold-primary/50 shadow-2xl relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-[#08080b] border-b border-gold-primary/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold-primary/20 flex items-center justify-center text-gold-light shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-serif font-bold text-white tracking-wide">
                {currentDoc.title}
              </h3>
              <p className="text-[11px] font-mono text-gold-400">
                {currentDoc.sub}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentDoc.src}
              download={currentDoc.filename}
              onClick={playTactileClick}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 hover:bg-gold-primary/20 text-gray-300 hover:text-gold-light text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Unduh Dokumen Ini"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Unduh Berkas</span>
            </a>
            <button
              onClick={() => {
                playTactileClick();
                onClose();
              }}
              className="p-2 rounded-lg bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
              title="Tutup"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Document Navigation Tabs */}
        <div className="px-4 py-2 bg-black/60 border-b border-white/5 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
          {DOCUMENTS.map((doc, idx) => (
            <button
              key={doc.id}
              onClick={() => { playTactileClick(); setSelectedIdx(idx); }}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all ${
                selectedIdx === idx
                  ? 'bg-gold-primary text-black font-bold'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              0{idx + 1}. {doc.id === 'kemenkebudayaan' ? 'Kemenkebudayaan' : doc.id === 'bnsp' ? 'Sertifikat BNSP' : doc.id === 'skkni-sheet' ? '7 Unit BNSP' : doc.id === 'kft' ? 'Lisensi KFT' : 'Cakrawangsa Card'}
            </button>
          ))}
        </div>

        {/* Image Display & Arrow Controls */}
        <div className="relative flex-1 p-4 sm:p-6 bg-black flex items-center justify-center overflow-auto min-h-[300px]">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 border border-gold-primary/40 text-gold-light hover:bg-gold-primary hover:text-black transition-all shadow-xl"
            title="Dokumen Sebelumnya"
          >
            <ChevronLeft size={20} />
          </button>

          <img
            src={currentDoc.src}
            alt={currentDoc.title}
            className="max-h-[62vh] w-auto max-w-full object-contain rounded-lg border border-gold-primary/30 shadow-2xl transition-all"
          />

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 border border-gold-primary/40 text-gold-light hover:bg-gold-primary hover:text-black transition-all shadow-xl"
            title="Dokumen Berikutnya"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-[#08080b] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-gray-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Berkas {selectedIdx + 1} dari {DOCUMENTS.length}: Terverifikasi Asli</span>
          </div>
          <div className="text-gold-primary text-[11px]">
            Jerry Stanly Djohar — Line Producer & Manajer Produksi BNSP
          </div>
        </div>

      </div>
    </div>
  );
}
