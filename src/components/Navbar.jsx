import React, { useState, useEffect } from 'react';
import { Film, Volume2, VolumeX, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { toggleAmbientSound, playTactileClick } from '../utils/audio';

export default function Navbar({ onOpenOriginalCard }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [timecode, setTimecode] = useState("01:00:00:00");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cinema Timecode Generator
  useEffect(() => {
    let frames = 0;
    const interval = setInterval(() => {
      frames = (frames + 1) % (24 * 60 * 60);
      const f = (frames % 24).toString().padStart(2, '0');
      const totalSec = Math.floor(frames / 24);
      const s = (totalSec % 60).toString().padStart(2, '0');
      const m = (Math.floor(totalSec / 60) % 60).toString().padStart(2, '0');
      const h = (Math.floor(totalSec / 3600) + 1).toString().padStart(2, '0');
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 1000 / 24);
    return () => clearInterval(interval);
  }, []);

  const handleAudioToggle = () => {
    playTactileClick();
    const state = toggleAmbientSound();
    setIsAudioActive(state);
  };

  const navLinks = [
    { label: "Profil", href: "#about" },
    { label: "Sertifikasi", href: "#certifications" },
    { label: "Keahlian", href: "#skills" },
    { label: "Filmografi", href: "#filmography" },
    { label: "Wilayah", href: "#coverage" },
    { label: "Pipeline", href: "#workflow" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070709]/85 backdrop-blur-md border-b border-gold-primary/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#" 
          onClick={playTactileClick}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full border border-gold-primary/40 bg-gold-primary/10 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-gold-primary">
            <span className="font-serif font-black text-gold-primary text-lg tracking-wider">W</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm sm:text-base tracking-[0.2em] text-white group-hover:text-gold-light transition-colors">
                JERRY STANLY DJOHAR
              </span>
            </div>
            <p className="text-[10px] tracking-[0.25em] text-gold-400 font-mono uppercase">
              Line Producer • Cakrawangsa
            </p>
          </div>
        </a>

        {/* Center: Live Timecode & REC status */}
        <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-[11px] font-mono">
          <span className="flex items-center gap-1.5 text-red-500 font-bold">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
            REC
          </span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-400">24 FPS RAW</span>
          <span className="text-gray-500">|</span>
          <span className="text-gold-300 tracking-wider font-semibold">{timecode}</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.15em] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={playTactileClick}
              className="text-gray-400 hover:text-gold-light transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-gold-primary after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Ambient Sound Toggle */}
          <button
            onClick={handleAudioToggle}
            title={isAudioActive ? "Matikan Suara Ambience Bioskop" : "Nyalakan Suara Ambience Bioskop"}
            className={`p-2 rounded-full border transition-all ${
              isAudioActive
                ? 'border-gold-primary bg-gold-primary/20 text-gold-light shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                : 'border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/30'
            }`}
          >
            {isAudioActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Original Credential Doc Lightbox Trigger */}
          <button
            onClick={() => {
              playTactileClick();
              onOpenOriginalCard();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-300 hover:bg-gold-primary/20 hover:border-gold-primary transition-all font-mono"
          >
            <FileText size={14} />
            <span>Sertifikat & Dokumen</span>
          </button>

          {/* Contact Direct CTA */}
          <a
            href="#contact"
            onClick={playTactileClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-gold-primary via-gold-300 to-gold-primary text-black font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Booking Syuting</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playTactileClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 text-gray-300 hover:text-gold-primary"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0e]/95 backdrop-blur-xl border-b border-gold-primary/20 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4 text-sm font-mono uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  playTactileClick();
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-gold-light py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(false);
                onOpenOriginalCard();
              }}
              className="flex items-center gap-2 text-gold-300 py-2 border-b border-white/5 text-left"
            >
              <FileText size={16} />
              <span>Lihat Dokumen Asli Cakrawangsa</span>
            </button>
            <a
              href="#contact"
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(false);
              }}
              className="mt-2 text-center py-3 rounded-lg bg-gold-primary text-black font-bold uppercase tracking-wider text-xs"
            >
              Hubungi Line Producer
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
