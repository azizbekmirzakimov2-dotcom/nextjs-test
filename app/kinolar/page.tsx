"use client";
import React from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { ADMIN_KINOLAR } from '../data/kinolar';

function Kinolar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const selectedId = searchParams.get('movie');
  const selectedKino = ADMIN_KINOLAR.find(k => k.id.toString() === selectedId);

 
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
    <section className="bg-[#111111] px-6 md:px-16 py-12 relative z-10">
      <h2 className="text-white text-3xl font-bold mb-8">Oskar 2026</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[10px]">
        {ADMIN_KINOLAR.map((kino) => (
          <div 
            key={kino.id} 
            className="group flex flex-col cursor-pointer"
            onClick={() => openModal(kino.id)}
          >
            <div className="relative w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden bg-zinc-900">
              <img src={kino.rasm} alt={kino.nomi} className="w-full h-full object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="mt-3 px-1 text-white">
              <h3 className="font-bold text-sm truncate">{kino.nomi}</h3>
              <p className="text-green-500 text-[11px]">Obuna</p>
            </div>
          </div>
        ))}
      </div>

     




      {selectedKino && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="relative bg-[#1a1a1a] border border-zinc-800 w-full max-w-3xl rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-red-500 z-20 text-2xl">✕</button>

            <div className="w-full md:w-2/5 h-[350px] md:h-auto">
              <img src={selectedKino.rasm} className="w-full h-full object-cover" alt="" />
            </div>

            <div className="p-8 md:w-3/5 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4">{selectedKino.nomi}</h2>
              <div className="flex gap-4 mb-6 text-sm">
                <span className="text-green-500 font-bold">2026</span>
                <span className="text-gray-400 border border-gray-600 px-2 rounded">HD</span>
                <span className="text-yellow-500">IMDb 8.5</span>
              </div>
              <p className="text-gray-300 mb-8 line-clamp-4">
                {selectedKino.tavsif || "Ushbu film haqida to'liq ma'lumot tez orada yuklanadi. Hozircha obuna bo'lish orqali tomosha qilishingiz mumkin."}
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold transition-all transform active:scale-95">
                HOZIROQ TOMOSHA QILISH
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Kinolar;