import React, { useState } from 'react';
import { Calculator, Sparkles, Film, Clock, Users, DollarSign, Send, ArrowRight } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

const PROJECT_TYPES = [
  { id: 'bioskop', label: 'Film Layar Lebar Bioskop', defaultDays: 24, crewBase: 80, camera: 'Arri Alexa Mini LF / RED Monstro 8K' },
  { id: 'ott-series', label: 'Web / OTT Series (Netflix/Prime)', defaultDays: 35, crewBase: 65, camera: 'Sony FX9 / RED Komodo-X' },
  { id: 'tv-series', label: 'Serial Drama Televisi (Striping)', defaultDays: 45, crewBase: 50, camera: 'Multi-Cam Cine Broadcast' },
  { id: 'ftv', label: 'FTV & TV Movie', defaultDays: 7, crewBase: 40, camera: 'Sony FX6 Cinema Line Package' },
  { id: 'iklan', label: 'Iklan TVC & Komersial Nasional', defaultDays: 3, crewBase: 60, camera: 'Arri Alexa 35 / Phantom Flex 4K High-Speed' },
];

const SCALE_TIERS = [
  { id: 'standard', label: 'Efisiensi Tinggi / Standar', multiplier: 1.0 },
  { id: 'premium', label: 'Premium / Multi-Lokasi', multiplier: 1.4 },
  { id: 'blockbuster', label: 'Blockbuster / Epic Stunt & VFX', multiplier: 2.0 },
];

export default function BudgetSimulator() {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [shootingDays, setShootingDays] = useState(selectedType.defaultDays);
  const [scaleTier, setScaleTier] = useState(SCALE_TIERS[0]);
  const [locationType, setLocationType] = useState('Jabodetabek & Studio');

  const estimatedCrew = Math.round(selectedType.crewBase * scaleTier.multiplier);
  const totalCallSheets = shootingDays;
  const estimatedRushesHours = (shootingDays * 1.8).toFixed(1);

  const handleTypeSelect = (type) => {
    playTactileClick();
    setSelectedType(type);
    setShootingDays(type.defaultDays);
  };

  const generateWhatsAppMessage = () => {
    const text = `Halo Pak Jerry Stanly Djohar (Line Producer), saya ingin mendiskusikan simulasi produksi:
• Format: ${selectedType.label}
• Estimasi Hari Syuting: ${shootingDays} Hari
• Skala: ${scaleTier.label}
• Lokasi: ${locationType}
• Estimasi Kru: ~${estimatedCrew} Personel
Mohon saran jadwal master dan efisiensi anggarannya. Terima kasih!`;
    return `https://wa.me/6281383604064?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden bg-[#09090d]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">
            <Calculator size={14} />
            <span>Interactive Production Command Room</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            SIMULASI ANGGARAN & <br />
            <span className="text-gold-gradient">JADWAL PRODUKSI</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Hitung perkiraan kebutuhan operasional, armada kru, paket kamera cinema, dan struktur alokasi below-the-line berdasarkan parameter proyek Anda.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 gold-card p-6 sm:p-8 rounded-3xl space-y-6">
            
            {/* Step 1: Format Project */}
            <div>
              <label className="block text-xs font-mono text-gold-primary uppercase tracking-wider mb-3">
                1. Pilih Format Proyek Sinematik:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeSelect(type)}
                    className={`p-3 rounded-xl text-left text-xs font-mono transition-all border ${
                      selectedType.id === type.id
                        ? 'bg-gold-primary/20 border-gold-primary text-white font-bold'
                        : 'bg-black/40 border-white/5 text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target Shooting Days Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono text-gold-primary uppercase tracking-wider">
                  2. Estimasi Hari Syuting (Shooting Days):
                </label>
                <span className="font-mono text-sm font-bold text-gold-light px-3 py-1 rounded bg-black/60 border border-gold-primary/30">
                  {shootingDays} Hari
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                value={shootingDays}
                onChange={(e) => setShootingDays(Number(e.target.value))}
                className="w-full accent-gold-primary cursor-pointer h-2 bg-white/10 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                <span>1 Hari (TVC / Short)</span>
                <span>24 Hari (Standar Bioskop)</span>
                <span>60 Hari (Mega Series)</span>
              </div>
            </div>

            {/* Step 3: Skala Produksi */}
            <div>
              <label className="block text-xs font-mono text-gold-primary uppercase tracking-wider mb-3">
                3. Tingkat Skala & Kompleksitas Aksi:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {SCALE_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => { playTactileClick(); setScaleTier(tier); }}
                    className={`p-3 rounded-xl text-center text-xs font-mono transition-all border ${
                      scaleTier.id === tier.id
                        ? 'bg-gold-primary text-black font-bold border-gold-primary'
                        : 'bg-black/40 border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Lokasi Produksi */}
            <div>
              <label className="block text-xs font-mono text-gold-primary uppercase tracking-wider mb-3">
                4. Geografi & Karakteristik Lokasi:
              </label>
              <select
                value={locationType}
                onChange={(e) => setLocationType(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-gold-primary"
              >
                <option value="Jabodetabek & Studio">Jabodetabek & Indoor Soundstage (Logistik Efisien)</option>
                <option value="Multi-Kota Jawa (Bandung/Jogja/Surabaya)">Multi-Kota Jawa (Perjalanan Darat & Unit Armada)</option>
                <option value="Luar Pulau / Remote Area (Bali/Sumatra/Indonesia Timur)">Luar Pulau / Remote Area (Mobilisasi Pesawat & Kargo)</option>
                <option value="Internasional (Multi-Country)">Internasional (Visa Kerja Kru & Carnet Bea Cukai)</option>
              </select>
            </div>

          </div>

          {/* Right Column: Calculated Projection Dashboard */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="gold-card p-6 sm:p-8 rounded-3xl space-y-6 bg-[#0e0e14] border-gold-primary/40 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-gold-primary/20">
                <div>
                  <span className="text-[10px] font-mono uppercase text-gold-400 tracking-wider">Cakrawangsa Metric Engine</span>
                  <h3 className="font-serif text-lg font-bold text-white">Ringkasan Blueprint Produksi</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold-primary/20 flex items-center justify-center text-gold-light">
                  <Sparkles size={16} />
                </div>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-black/60 border border-white/5">
                  <span className="text-gray-400 text-[10px] uppercase">Armada Kru & Cast</span>
                  <p className="font-serif text-xl font-bold text-gold-light mt-0.5">~{estimatedCrew} Orang</p>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/5">
                  <span className="text-gray-400 text-[10px] uppercase">Total Call Sheets</span>
                  <p className="font-serif text-xl font-bold text-white mt-0.5">{totalCallSheets} Hari</p>
                </div>
              </div>

              {/* Recommended Gear Package */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 font-mono text-xs space-y-1">
                <span className="text-gray-400 uppercase text-[10px]">Rekomendasi Paket Kamera Cinema:</span>
                <p className="text-gold-300 font-semibold">{selectedType.camera}</p>
                <p className="text-[11px] text-gray-400">Termasuk Prime Cine Lenses, Wireless Video Teradek, Matte Box & Wireless Focus.</p>
              </div>

              {/* Recommended BTL Budget Allocation */}
              <div className="space-y-2 font-mono text-xs">
                <span className="text-gray-400 uppercase text-[10px]">Struktur Alokasi Anggaran Produksi Ideal:</span>
                
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between text-[11px] text-gray-300">
                      <span>Honorarium Kru & Talent</span>
                      <span className="text-gold-light">35%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-primary rounded-full w-[35%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-gray-300">
                      <span>Peralatan Kamera, Lighting, Grip</span>
                      <span className="text-gold-light">25%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-primary rounded-full w-[25%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-gray-300">
                      <span>Logistik, Akomodasi & Konsumsi</span>
                      <span className="text-gold-light">20%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-primary rounded-full w-[20%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-gray-300">
                      <span>Perizinan, Lokasi & Legal</span>
                      <span className="text-gold-light">10%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-primary rounded-full w-[10%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-gray-300">
                      <span>Cadangan Kontingensi Darurat</span>
                      <span className="text-emerald-400">10%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full w-[10%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Jerry's Note */}
              <div className="p-3.5 rounded-xl bg-gold-primary/10 border border-gold-primary/30 text-xs font-mono text-gray-300">
                <span className="text-gold-primary font-bold uppercase tracking-wider block mb-1">Catatan Strategis Jerry Stanly:</span>
                <p className="text-[11px] leading-relaxed">
                  "Kunci utama keberhasilan pada format ini adalah penguncian jadwal cast utama di tahap awal (DOOD) serta penetapan buffer cuaca saat syuting eksterior."
                </p>
              </div>

              {/* Direct Inquiry via WhatsApp */}
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTactileClick}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-primary via-gold-300 to-gold-primary text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
              >
                <span>Konsultasikan Estimasi Ini via WhatsApp</span>
                <ArrowRight size={14} />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
