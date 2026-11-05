import React from 'react';
import { X, Download, ExternalLink, ShieldCheck, ZoomIn } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

export default function OriginalCardModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fade-in"
      onClick={onClose}
    >
      <div
        className="gold-card max-w-4xl w-full rounded-2xl overflow-hidden bg-[#0c0c10] border-gold-primary/50 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-[#08080b] border-b border-gold-primary/20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono">
            <ShieldCheck size={16} className="text-gold-primary" />
            <span className="text-white font-bold tracking-wider uppercase">
              Dokumen Resmi Kredensial Produksi
            </span>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="hidden sm:inline text-gold-400">PT. Cakrawangsa Cinema Production</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/jerry-original.png"
              download="Jerry-Stanly-Djohar-Line-Producer-Credential.png"
              onClick={playTactileClick}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 hover:bg-gold-primary/20 text-gray-300 hover:text-gold-light text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Unduh Gambar Asli"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Unduh Kartu</span>
            </a>
            <button
              onClick={() => {
                playTactileClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="p-4 sm:p-6 bg-black flex items-center justify-center max-h-[75vh] overflow-auto">
          <img
            src="/jerry-original.png"
            alt="Kartu Profil Resmi Jerry Stanly Djohar - Line Producer Cakrawangsa Cinema"
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg border border-gold-primary/30 shadow-2xl"
          />
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#08080b] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Autentikasi Terverifikasi: Jerry Stanly Djohar — Line Producer</span>
          </div>
          <div className="text-gold-primary text-center sm:text-right">
            Member of Cakrawangsa Cinema Production
          </div>
        </div>

      </div>
    </div>
  );
}
