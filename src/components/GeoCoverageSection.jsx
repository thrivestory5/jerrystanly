import React, { useState } from 'react';
import { MapPin, Globe, Compass, Film, ShieldCheck, CheckCircle2, Navigation, ArrowRight } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

const REGIONAL_COVERAGE = [
  {
    id: 'jakarta',
    region: 'Jabodetabek & Jakarta (HQ)',
    coordinates: '-6.2238° S, 106.8315° E',
    hubType: 'Pusat Komando & Basecamp',
    highlightTitle: 'Urban Lifestyle, Studio Soundstage & Tol',
    examples: 'Take Me to Hell (2025), Inikah Rasanya The Movie, KM 97, TV Series & TVC',
    capabilities: [
      'Jaringan rental house kamera cinema (Arri Alexa Mini LF, RED V-Raptor, Sony Cine).',
      'Izin resmi Polda Metro Jaya, Dinas Perhubungan, dan Pemprov DKI Jakarta.',
      'Akses studio soundstage indoor, green screen, dan set perkantoran/perumahan elit.'
    ]
  },
  {
    id: 'bali',
    region: 'Bali & Kepulauan Nusa Tenggara',
    coordinates: '-8.4095° S, 115.1889° E',
    hubType: 'Resort & Pariwisata Internasional',
    highlightTitle: 'Eksotisme Wisata, Pantai & Tradisi',
    examples: 'Suami-Suami Takut Istri The Movie, FTV Special, Komersial Brand',
    capabilities: [
      'Koordinasi izin desa adat (Pecalang), Dinas Pariwisata Bali, dan aparat kepolisian.',
      'Mobilisasi ratusan kru dan cast dari Jakarta dengan akomodasi efisien.',
      'Penguasaan medan pantai, tebing laut, villa mewah, hingga pura tradisional.'
    ]
  },
  {
    id: 'jawa',
    region: 'Jawa Barat & Jawa Tengah (Bandung, Jogja)',
    coordinates: '-7.7956° S, 110.3695° E',
    hubType: 'Heritage, Alam & Legenda Urban',
    highlightTitle: 'Situs Budaya, Pegunungan & Jalur Tol',
    examples: 'KM 97 (Tol Cipularang), The Promise, FTV Romcom',
    capabilities: [
      'Izin syuting jalur tol malam hari dengan koordinasi Jasa Marga & PJR.',
      'Penataan set cagar budaya, keraton, dan nuansa pedesaan autentik Jawa.',
      'Manajemen armada truk logistik dan genset di medan pegunungan.'
    ]
  },
  {
    id: 'timur',
    region: 'Indonesia Timur (Papua & NTT)',
    coordinates: '-4.2699° S, 138.0804° E',
    hubType: 'Remote Expeditions & Alam Liar',
    highlightTitle: 'Ekspedisi Pedalaman & Kultur Nusantara',
    examples: 'Lima Bintang Timur (Papua / NTT)',
    capabilities: [
      'Logistik kargo udara dan penerbangan perintis menjangkau pedalaman terpencil.',
      'Pendekatan sosio-kultural dengan tokoh adat dan masyarakat lokal.',
      'Prosedur K3 ekstra ketat, tim medis standby, dan mitigasi cuaca tropis ekstrem.'
    ]
  },
  {
    id: 'kalimantan',
    region: 'Kalimantan & Sumatra',
    coordinates: '-3.3167° S, 114.5900° E',
    hubType: 'Historical Epic & Sungai Barito',
    highlightTitle: 'Film Kolosal Sejarah & Perairan',
    examples: 'Pangeran Antasari (Biopic Perjuangan Pahlawan)',
    capabilities: [
      'Pengadaan ratusan prajurit/ekstra, kostum era kolonial, dan senjata props aman.',
      'Koordinasi armada perahu dan keselamatan kerja syuting adegan sungai.',
      'Pembangunan set perkampungan tempo dulu dengan tim tata artistik handal.'
    ]
  },
  {
    id: 'internasional',
    region: 'Internasional (Eropa / Belanda & Malaysia)',
    coordinates: '52.3676° N, 4.9041° E (Amsterdam)',
    hubType: 'Cross-Border Co-Production',
    highlightTitle: 'Syuting Multi-Negara & Regulasi Luar Negeri',
    examples: 'Unlimited Love (Belanda/Eropa), Vampire KL (Malaysia)',
    capabilities: [
      'Pengurusan ATA Carnet bea cukai bebas pajak peralatan kamera cinema ke luar negeri.',
      'Visa kerja kru, perizinan syuting kota-kota Eropa (Amsterdam, Den Haag).',
      'Kolaborasi efektif dengan kru dan fixer lokal internasional.'
    ]
  }
];

export default function GeoCoverageSection() {
  const [selectedRegion, setSelectedRegion] = useState(REGIONAL_COVERAGE[0]);

  return (
    <section id="coverage" className="py-24 relative overflow-hidden bg-[#070709] border-t border-gold-primary/15">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">
            <Globe size={14} />
            <span>Geographic & Regional Production Footprint</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            CAKUPAN WILAYAH & <br />
            <span className="text-gold-gradient">MOBILISASI PRODUKSI</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Dari soundstage metropolitan Jakarta, pantai eksotis Bali, hutan pedalaman Papua, hingga produksi lintas benua di Eropa. 
            Penguasaan regulasi perizinan dan logistik teruji di berbagai medan.
          </p>

          {/* Quick Stats Pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
              📍 HQ Hub: Jakarta Selatan (-6.2238, 106.8315)
            </span>
            <span className="px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-light">
              ✓ Izin Kepolisian & Aparat Seluruh Indonesia
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
              ✈ ATA Carnet Co-Production Luar Negeri
            </span>
          </div>
        </div>

        {/* 2-Column Interactive Map & Region Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Region Navigation Tabs */}
          <div className="lg:col-span-6 space-y-3">
            {REGIONAL_COVERAGE.map((item) => {
              const isSelected = selectedRegion.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    playTactileClick();
                    setSelectedRegion(item);
                  }}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-gold-primary/20 border-gold-primary shadow-[0_0_20px_rgba(212,175,55,0.25)] ring-1 ring-gold-primary/40'
                      : 'bg-[#0f0f15] border-white/5 hover:border-gold-primary/40 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-gold-primary text-black' : 'bg-white/5 text-gold-300'
                      }`}>
                        <MapPin size={17} />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm sm:text-base font-bold text-white">
                          {item.region}
                        </h4>
                        <p className="text-[10px] font-mono text-gold-400 mt-0.5">
                          {item.highlightTitle}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-mono text-gray-400 px-2 py-0.5 rounded bg-black/40 border border-white/5 block">
                        {item.hubType}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Geographic Operational Blueprint */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="gold-card p-6 sm:p-8 rounded-2xl relative overflow-hidden bg-[#0e0e14] border-gold-primary/50 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-gold-primary/20">
                <div className="flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-widest">
                  <Compass size={16} className="text-gold-primary" />
                  <span>Regional Logistical Blueprint</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  {selectedRegion.coordinates}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-gold-300 uppercase tracking-wider block mb-1">
                  Wilayah Eksekusi:
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {selectedRegion.region}
                </h3>
                <p className="text-xs font-mono text-gray-400 mt-1">
                  Karakter: <span className="text-white font-medium">{selectedRegion.highlightTitle}</span>
                </p>
              </div>

              {/* Verified Examples in this Region */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1 font-mono text-xs">
                <span className="text-gray-400 uppercase text-[10px] tracking-wider">Contoh Karya di Wilayah Ini:</span>
                <p className="text-gold-light font-medium">{selectedRegion.examples}</p>
              </div>

              {/* Key Capabilities in this Region */}
              <div className="space-y-3 text-xs font-mono">
                <span className="text-gray-400 uppercase text-[10px] tracking-wider block">Standar Operasional Wilayah:</span>
                {selectedRegion.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-gold-primary shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-relaxed">{cap}</span>
                  </div>
                ))}
              </div>

              {/* Consultation Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-gray-400">
                  Merencanakan syuting di wilayah ini?
                </span>
                <a
                  href="#contact"
                  onClick={playTactileClick}
                  className="text-xs font-mono text-gold-primary hover:text-gold-light underline uppercase tracking-wider flex items-center gap-1 font-semibold"
                >
                  <span>Konsultasi Lokasi</span>
                  <ArrowRight size={13} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
