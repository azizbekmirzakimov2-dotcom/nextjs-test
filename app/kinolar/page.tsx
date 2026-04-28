"use client";
import React, { useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { ADMIN_KINOLAR as initialData } from '../data/kinolar';

function Kinolar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [kinolar, setKinolar] = useState(initialData);
  // Inputlar uchun kengaytirilgan state
  const [newKino, setNewKino] = useState({ 
    nomi: "", 
    rasm: "", 
    yil: "2026", 
    imdb: "8.5", 
    tavsif: "" 
  });

  const selectedId = searchParams.get('movie');
  const selectedKino = kinolar.find(k => k.id.toString() === selectedId);

  const addKino = (e) => {
    e.preventDefault();
    if (!newKino.nomi || !newKino.rasm) return alert("Nom va Rasm majburiy!");

    const yangiObyekt = {
      id: Date.now(),
      nomi: newKino.nomi,
      rasm: newKino.rasm,
      yil: newKino.yil,
      imdb: newKino.imdb || "0.0",
      tavsif: newKino.tavsif || "Film haqida qisqacha ma'lumot..."
    };

    setKinolar([yangiObyekt, ...kinolar]); 
    setNewKino({ nomi: "", rasm: "", yil: "2026", imdb: "8.5", tavsif: "" }); 
  };

  const openModal = (id) => {
    const params = new URLSearchParams(searchParams);
    params.set('movie', id);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const closeModal = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('movie');
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="bg-[#0a0a0a] px-4 md:px-16 py-12 min-h-screen text-white font-sans">
      
      {/* ADMIN PANEL STILI */}
      <div className="mb-16 p-8 bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-white/10 max-w-3xl mx-auto shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-8 bg-green-500 rounded-full"></div>
          <h2 className="text-2xl font-bold tracking-tight">Kino Boshqaruv Paneli</h2>
        </div>
        
        <form onSubmit={addKino} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl outline-none focus:border-green-500 transition text-white placeholder:text-zinc-500"
            placeholder="Kino nomi..."
            value={newKino.nomi}
            onChange={(e) => setNewKino({...newKino, nomi: e.target.value})}
          />
          <input 
            className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl outline-none focus:border-green-500 transition text-white placeholder:text-zinc-500"
            placeholder="Rasm URL (https://...)"
            value={newKino.rasm}
            onChange={(e) => setNewKino({...newKino, rasm: e.target.value})}
          />
          <div className="flex gap-2">
            <input 
              type="number"
              className="w-1/2 bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl outline-none focus:border-green-500 transition text-white"
              placeholder="Yil"
              value={newKino.yil}
              onChange={(e) => setNewKino({...newKino, yil: e.target.value})}
            />
            <input 
              type="text"
              className="w-1/2 bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl outline-none focus:border-green-500 transition text-white"
              placeholder="IMDb (masalan: 8.9)"
              value={newKino.imdb}
              onChange={(e) => setNewKino({...newKino, imdb: e.target.value})}
            />
          </div>
          <textarea 
            className="md:col-span-2 bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl outline-none focus:border-green-500 transition text-white h-24 resize-none"
            placeholder="Kino haqida qisqacha tavsif..."
            value={newKino.tavsif}
            onChange={(e) => setNewKino({...newKino, tavsif: e.target.value})}
          />
          <button className="md:col-span-2 bg-green-600 hover:bg-green-500 text-white py-4 rounded-2xl font-black uppercase tracking-widest transition-all active:scale-[0.98] shadow-lg shadow-green-600/20">
            Bosh sahifaga joylash
          </button>
        </form>
      </div>

      {/* KINOLAR SETKASI */}
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter">Oskar <span className="text-green-500">2026</span></h2>
        <p className="text-zinc-500 text-sm hidden md:block">{kinolar.length} ta film topildi</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {kinolar.map((kino) => (
          <div 
            key={kino.id} 
            className="group relative flex flex-col cursor-pointer transition-all duration-500 hover:-translate-y-2"
            onClick={() => openModal(kino.id)}
          >
            {/* Rasm qismi */}
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-xl">
              <img src={kino.rasm} alt={kino.nomi} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              
              {/* Rasm ustidagi info */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                <span className="text-[10px] text-yellow-500 font-bold">★</span>
                <span className="text-[10px] font-bold text-white">{kino.imdb || "8.5"}</span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
            </div>

            {/* Matn qismi */}
            <div className="mt-4 space-y-1">
              <h3 className="font-bold text-sm leading-tight group-hover:text-green-500 transition line-clamp-1">{kino.nomi}</h3>
              <div className="flex items-center justify-between">
                 <span className="text-zinc-500 text-[11px] font-medium">{kino.yil}</span>
                 <span className="text-green-500 text-[10px] font-black uppercase tracking-tighter px-2 py-0.5 bg-green-500/10 rounded">Obuna</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedKino && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity" onClick={closeModal}></div>
          
          <div className="relative bg-[#141414] border border-white/10 w-full max-w-5xl rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in duration-300">
            
            <button onClick={closeModal} className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-red-500/20 hover:text-red-500 rounded-full flex items-center justify-center text-white z-20 transition-all">✕</button>

            {/* Modal Chap Tomon (Rasm) */}
            <div className="w-full md:w-[40%] relative h-[400px] md:h-auto overflow-hidden">
              <img src={selectedKino.rasm} className="w-full h-full object-cover scale-105" alt="" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#141414] hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent md:hidden"></div>
            </div>

            {/* Modal O'ng Tomon (Info) */}
            <div className="p-8 md:p-12 md:w-[60%] flex flex-col justify-center relative bg-noise">
              <div className="flex items-center gap-3 mb-4">
                 <span className="bg-green-600/20 text-green-500 text-xs font-black px-3 py-1 rounded-full uppercase">Premium</span>
                 <span className="text-yellow-500 font-bold flex items-center gap-1">★ {selectedKino.imdb || "8.5"}</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">{selectedKino.nomi}</h2>
              
              <div className="flex flex-wrap gap-4 mb-8 text-xs font-bold text-zinc-400">
                <span className="flex items-center gap-2">KALENDAR <span className="text-white">{selectedKino.yil || "2026"}</span></span>
                <span className="flex items-center gap-2">SIFAT <span className="text-white bg-zinc-800 px-2 rounded">4K Ultra HD</span></span>
                <span className="flex items-center gap-2">TIL <span className="text-white">UZ / RU</span></span>
              </div>

              <p className="text-zinc-400 text-base md:text-lg mb-10 leading-relaxed font-medium line-clamp-5 italic">
            {selectedKino.tavsif || "Ushbu film kinematografiya olamida yangi sahifa ochishi kutilmoqda. Eksklyuziv tarzda bizning platformada tomosha qiling."}

              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-white text-black hover:bg-green-500 hover:text-white py-4 rounded-2xl font-black transition-all transform active:scale-95 flex items-center justify-center gap-2 text-sm uppercase tracking-widest shadow-xl">
                  <span>▶</span> Tomosha qilish
                </button>
                <button className="flex-1 bg-zinc-800/50 hover:bg-zinc-700 text-white py-4 rounded-2xl font-black transition-all text-sm uppercase tracking-widest border border-white/5">
                  Treyler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Kinolar;