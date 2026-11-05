import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Printer, CheckCircle2, Film, Sparkles, Building2 } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { playTactileClick } from '../utils/audio';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    format: 'Film Layar Lebar',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    playTactileClick();

    // Prepare WhatsApp message URL
    const text = `Halo Pak Jerry Stanly Djohar (Line Producer),
Nama: ${formData.name}
Rumah Produksi/Instansi: ${formData.company || '-'}
Format Proyek: ${formData.format}
Email: ${formData.email}
No Telp/WA: ${formData.phone}
Pesan/Kebutuhan:
${formData.message}`;

    const waUrl = `https://wa.me/6281383604064?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  const handlePrintOneSheet = () => {
    playTactileClick();
    window.print();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070709] border-t border-gold-primary/20">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">
            <Film size={14} />
            <span>Production Inquiries & Booking Terminal</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            KOLABORASI & <br />
            <span className="text-gold-gradient">KONSULTASI PRODUKSI</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Terbuka untuk diskusi proyek Film Layar Lebar, Serial OTT/Televisi, FTV, dan Iklan Komersial. Siap memimpin eksekusi produksi Anda dari nol hingga tayang.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Corporate Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="gold-card p-6 sm:p-8 rounded-3xl space-y-6">
              
              <div className="flex items-center gap-4 pb-6 border-b border-gold-primary/20">
                <div className="w-14 h-14 rounded-2xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-gold-primary">W</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    PT. Cakrawangsa Cinema Production
                  </h3>
                  <p className="text-xs font-mono text-gold-400 uppercase tracking-widest">
                    Line Producer Hub
                  </p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 text-xs font-mono">
                <a
                  href="https://wa.me/6281383604064"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playTactileClick}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-gold-primary/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block">WhatsApp Konsultasi Cepat</span>
                    <span className="text-white font-semibold group-hover:text-gold-light">+62 813-8360-4064</span>
                  </div>
                </a>

                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  onClick={playTactileClick}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-gold-primary/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold-primary/10 text-gold-primary flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block">Official Production Email</span>
                    <span className="text-white font-semibold group-hover:text-gold-light">{PROFILE.contact.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-white/5 text-gray-400 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block">Studio Basecamp</span>
                    <span className="text-gray-300">Jakarta, Indonesia • Siap Syuting Seluruh Indonesia</span>
                  </div>
                </div>
              </div>

              {/* Notice */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-400 font-light leading-relaxed">
                {PROFILE.contact.collaborationNotice}
              </div>

              {/* Print One-Sheet Button */}
              <button
                onClick={handlePrintOneSheet}
                className="w-full py-3 px-4 rounded-xl border border-white/10 hover:border-gold-primary/50 bg-white/5 text-gray-300 hover:text-white text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Printer size={15} />
                <span>Cetak / Simpan One-Sheet Ringkasan (PDF)</span>
              </button>

            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="gold-card p-6 sm:p-8 rounded-3xl bg-[#0e0e14]">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gold-primary/20">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Formulir Pengajuan Proyek</h3>
                  <p className="text-xs font-mono text-gray-400">Diskusi NDA, Breakdown Naskah, & Estimasi Jadwal</p>
                </div>
                <Sparkles size={20} className="text-gold-primary" />
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white">Pesan Diteruskan</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto font-light">
                    Terima kasih. Pengajuan produksi Anda telah dialihkan ke WhatsApp resmi Jerry Stanly Djohar untuk ditindaklanjuti.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 rounded-full bg-white/10 text-white font-mono text-xs uppercase"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 uppercase tracking-wider mb-1.5">
                        Nama Lengkap Produser / Sutradara *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 uppercase tracking-wider mb-1.5">
                        Nama Perusahaan / Rumah Produksi
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Contoh: Nusantara Pictures"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 uppercase tracking-wider mb-1.5">
                        Format Proyek *
                      </label>
                      <select
                        value={formData.format}
                        onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-primary transition-colors"
                      >
                        <option value="Film Layar Lebar Bioskop">Film Layar Lebar Bioskop</option>
                        <option value="OTT Web Series (Netflix/Prime/Vidio)">OTT Web Series (Netflix/Prime/Vidio)</option>
                        <option value="Serial Drama Televisi (Sinetron/Striping)">Serial Drama Televisi (Sinetron/Striping)</option>
                        <option value="FTV / TV Movie">FTV / TV Movie</option>
                        <option value="Iklan TVC / Kampanye Brand Nasional">Iklan TVC / Kampanye Brand Nasional</option>
                        <option value="Konsultasi Audit & Line Production Lainnya">Konsultasi Audit & Line Production Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-400 uppercase tracking-wider mb-1.5">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812..."
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 uppercase tracking-wider mb-1.5">
                      Email Korespondensi *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="produser@studio.com"
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 uppercase tracking-wider mb-1.5">
                      Ringkasan Kebutuhan & Ekspektasi Jadwal Syuting *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan secara singkat sinopsis naskah, rencana tanggal syuting, lokasi, dan bantuan line production yang dibutuhkan..."
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-primary transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-primary via-gold-300 to-gold-primary text-black font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send size={15} />
                    <span>Kirim Pengajuan Proyek ke Jerry Stanly Djohar</span>
                  </button>

                  <p className="text-[10px] text-gray-500 text-center">
                    Kerahasiaan naskah dan hak cipta ide cerita dijamin sepenuhnya (NDA Protection).
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
