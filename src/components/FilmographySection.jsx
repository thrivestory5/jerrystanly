import React, { useState } from 'react';
import { Film, Tv, Clapperboard, Megaphone, Search, LayoutGrid, List, Sparkles, ExternalLink, X, Info } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { playTactileClick } from '../utils/audio';

const categoryTabs = [
  { key: 'all', label: 'Semua Karya', count: 34, icon: Sparkles },
  { key: 'layar-lebar', label: 'Film Layar Lebar', count: 12, icon: Film },
  { key: 'tv-series', label: 'TV Series', count: 10, icon: Tv },
  { key: 'ftv', label: 'FTV & TV Movie', count: 8, icon: Clapperboard },
  { key: 'iklan', label: 'Produksi Iklan', count: 4, icon: Megaphone }
];

export default function FilmographySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [selectedFilm, setSelectedFilm] = useState(null);

  const filteredFilms = PROFILE.filmography.filter((film) => {
    const matchesCategory = activeCategory === 'all' || film.categoryKey === activeCategory;
    const matchesSearch =
      film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      film.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      film.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      film.scope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (key) => {
    switch (key) {
      case 'layar-lebar': return Film;
      case 'tv-series': return Tv;
      case 'ftv': return Clapperboard;
      case 'iklan': return Megaphone;
      default: return Film;
    }
  };

  return (
    <section id="filmography" className="py-24 relative overflow-hidden bg-[#09090d]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">
            <Film size={14} />
            <span>Master Filmography & Portfolio</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            FILMOGRAFI <span className="text-gold-gradient">TERKURASI</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Arsip lengkap 35+ karya produksi sinematik, serial drama primetime, FTV rating puncak, dan iklan komersial nasional yang dipimpin oleh Jerry Stanly Djohar (dikenal juga sebagai Jerry Djohar / Jerry Stanly).
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div className="space-y-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    playTactileClick();
                    setActiveCategory(tab.key);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all border ${
                    isActive
                      ? 'bg-gold-primary border-gold-primary text-black font-bold shadow-lg shadow-gold-primary/25 scale-105'
                      : 'bg-[#121218] border-white/10 text-gray-400 hover:text-white hover:border-gold-primary/40'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-gold-300'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & View Mode Switcher */}
          <div className="max-w-2xl mx-auto flex items-center gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari judul (contoh: The Promise, Azab, Dancow, Horor, Komedi)..."
                className="w-full bg-[#121218] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-primary transition-colors font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* View Mode Buttons */}
            <div className="hidden sm:flex items-center bg-[#121218] border border-white/10 rounded-full p-1">
              <button
                onClick={() => { playTactileClick(); setViewMode('grid'); }}
                title="Tampilan Grid"
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'grid' ? 'bg-gold-primary text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                <LayoutGrid size={15} />
              </button>
              <button
                onClick={() => { playTactileClick(); setViewMode('list'); }}
                title="Tampilan List"
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'list' ? 'bg-gold-primary text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List size={15} />
              </button>
            </div>
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6 px-2">
          <span>Menampilkan <strong className="text-gold-light">{filteredFilms.length}</strong> karya produksi</span>
          <span className="text-[11px] text-gray-500">Klik karya untuk melihat detail teknis</span>
        </div>

        {/* Film Catalog - Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredFilms.map((film) => {
              const Icon = getCategoryIcon(film.categoryKey);
              return (
                <div
                  key={film.id}
                  onClick={() => {
                    playTactileClick();
                    setSelectedFilm(film);
                  }}
                  className="gold-card p-5 rounded-2xl cursor-pointer group flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent group-hover:via-gold-primary transition-all" />

                  <div>
                    {/* Header: Category Badge & Icon */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gold-300 uppercase tracking-wider">
                        <Icon size={11} className="text-gold-primary" />
                        {film.category}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500">
                        {film.role}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-light transition-colors line-clamp-1">
                        {film.title}
                      </h3>
                      {film.year && (
                        <span className="text-[11px] font-mono text-gray-500 shrink-0">
                          {film.year}
                        </span>
                      )}
                    </div>

                    {/* Genre / Highlight */}
                    <p className="text-xs text-gold-400/90 font-medium line-clamp-1 mb-2">
                      {film.highlight}
                    </p>

                    {/* External DB Indicator Badge if exists */}
                    {film.externalRef && (
                      <div className="mb-2">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-gold-primary/10 border border-gold-primary/25 text-gold-light">
                          <Sparkles size={10} />
                          {film.externalRef}
                        </span>
                      </div>
                    )}

                    {/* Production Scope Teaser */}
                    <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed">
                      {film.scope}
                    </p>
                  </div>

                  {/* Card Footer: Format & Action */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-gray-400 truncate max-w-[170px]">
                      {film.format}
                    </span>
                    <span className="text-gold-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Detail <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {filteredFilms.map((film, idx) => {
              const Icon = getCategoryIcon(film.categoryKey);
              return (
                <div
                  key={film.id}
                  onClick={() => {
                    playTactileClick();
                    setSelectedFilm(film);
                  }}
                  className="gold-card p-4 rounded-xl cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gold-primary/60 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-gray-500 w-8">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center text-gold-primary shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-white group-hover:text-gold-light transition-colors">
                        {film.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                        <span className="text-gold-400">{film.category}</span>
                        <span>•</span>
                        <span>{film.highlight}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 text-xs font-mono text-gray-400">
                    <span className="hidden lg:inline-block max-w-xs truncate text-gray-400">
                      {film.scope}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gold-300">
                      {film.role}
                    </span>
                    <span className="text-gold-primary flex items-center gap-1 text-[11px]">
                      Detail &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {filteredFilms.length === 0 && (
          <div className="text-center py-16 gold-card rounded-2xl max-w-md mx-auto p-8 space-y-4">
            <Info size={32} className="mx-auto text-gold-primary/60" />
            <h4 className="font-serif text-lg text-white font-bold">Karya Tidak Ditemukan</h4>
            <p className="text-xs text-gray-400 font-mono">
              Tidak ada judul yang cocok dengan kata kunci "{searchQuery}". Silakan coba kata kunci lain.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="px-4 py-2 rounded-full bg-gold-primary text-black font-mono text-xs font-semibold uppercase"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>

      {/* Film Detail Lightbox Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div 
            className="gold-card max-w-lg w-full rounded-2xl p-6 sm:p-8 relative shadow-2xl border-gold-primary/50 bg-[#0e0e14]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedFilm(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Clapperboard Header */}
            <div className="flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-widest mb-3">
              <Clapperboard size={16} className="text-gold-primary" />
              <span>Production Slate Record</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mb-1">
              {selectedFilm.title}
            </h3>

            <p className="text-xs font-mono text-gold-300 uppercase tracking-wider mb-6">
              {selectedFilm.category} • {selectedFilm.format}
            </p>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                <span className="text-gray-400 uppercase tracking-wider text-[10px]">Peran Produksi</span>
                <p className="text-sm font-serif font-bold text-white">{selectedFilm.role}</p>
                <p className="text-[11px] text-gray-400">Pengendali utama operasional, anggaran, jadwal, dan koordinasi kru.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                <span className="text-gray-400 uppercase tracking-wider text-[10px]">Highlight & Genre</span>
                <p className="text-white font-medium">{selectedFilm.highlight}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                <span className="text-gray-400 uppercase tracking-wider text-[10px]">Cakupan & Kompleksitas Lapangan</span>
                <p className="text-gold-light leading-relaxed">{selectedFilm.scope}</p>
              </div>

              {selectedFilm.externalRef && (
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between text-blue-300">
                  <span className="text-[11px]">Verifikasi Basis Data:</span>
                  <span className="font-bold font-mono text-[11px] flex items-center gap-1.5">
                    {selectedFilm.externalRef} <ExternalLink size={12} />
                  </span>
                </div>
              )}

              <div className="p-3.5 rounded-xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-between text-gold-300">
                <span>Afiliasi Produksi:</span>
                <span className="font-bold">PT. Cakrawangsa Cinema Production</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end">
              <button
                onClick={() => setSelectedFilm(null)}
                className="px-5 py-2.5 rounded-full bg-gold-primary text-black font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-all"
              >
                Tutup Dokumen
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
