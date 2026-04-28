"use client";
import React, { useState, Suspense } from 'react'; // 1. Suspense-ni import qildik
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { ADMIN_KINOLAR as initialData } from '../data/kinolar';

interface Kino {
  id: number;
  nomi: string;
  rasm: string;
  yil: string | number;
  imdb?: string | number;
  tavsif?: string;
  janr?: string;
  sifat?: string;
}

// 2. Asosiy mantiqni alohida komponentga oldik
function KinolarContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [kinolar, setKinolar] = useState<Kino[]>(initialData as unknown as Kino[]);
  
  const [newKino, setNewKino] = useState({ 
    nomi: "", 
    rasm: "", 
    yil: "2026", 
    imdb: "8.5", 
    tavsif: "" 
  });

  const selectedId = searchParams.get('movie');
  const selectedKino = kinolar.find(k => k.id.toString() === selectedId);

  const addKino = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKino.nomi || !newKino.rasm) return alert("Nom va Rasm majburiy!");

    const yangiObyekt: Kino = {
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

  const openModal = (id: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('movie', id.toString());
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('movie');
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="bg-[#0a0a0a] px-4 md:px-16 py-12 min-h-screen text-white font-sans">
      <div className="mb-16 p-8 bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-white/10 max-w-3xl mx-auto shadow-2xl">
        <h2 className="text-2xl font-bold mb-6">Kino Boshqaruv Paneli</h2>
        <form onSubmit={addKino} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl outline-none" placeholder="Kino nomi..." value={newKino.nomi} onChange={(e) => setNewKino({...newKino, nomi: e.target.value})} />
          <input className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl outline-none" placeholder="Rasm URL" value={newKino.rasm} onChange={(e) => setNewKino({...newKino, rasm: e.target.value})} />
          <input className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl outline-none" placeholder="Yil" value={newKino.yil} onChange={(e) => setNewKino({...newKino, yil: e.target.value})} />
          <input className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl outline-none" placeholder="IMDb" value={newKino.imdb} onChange={(e) => setNewKino({...newKino, imdb: e.target.value})} />
          <textarea className="md:col-span-2 bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl h-24" placeholder="Tavsif" value={newKino.tavsif} onChange={(e) => setNewKino({...newKino, tavsif: e.target.value})} />
          <button className="md:col-span-2 bg-green-600 py-4 rounded-2xl font-bold uppercase">Joylash</button>
        </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {kinolar.map((kino) => (
          <div key={kino.id} className="cursor-pointer" onClick={() => openModal(kino.id)}>
            <img src={kino.rasm} alt={kino.nomi} className="rounded-2xl aspect-[2/3] object-cover" />
            <h3 className="mt-2 font-bold text-sm">{kino.nomi}</h3>
          </div>
        ))}
      </div>

      {selectedKino && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90" onClick={closeModal}></div>
          <div className="relative bg-zinc-900 p-8 rounded-[32px] max-w-2xl w-full">
            <h2 className="text-3xl font-black mb-4">{selectedKino.nomi}</h2>
            <p className="text-zinc-400">{selectedKino.tavsif || "Ma'lumot yo'q"}</p>
            <button onClick={closeModal} className="mt-6 bg-white text-black px-6 py-2 rounded-full font-bold">Yopish</button>
          </div>
        </div>
      )}
    </section>
  );
}

// 3. ASOSIY EKSPORT: Next.js build xatosi bermasligi uchun Suspense ichiga olamiz
export default function Kinolar() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen text-white flex items-center justify-center">Yuklanmoqda...</div>}>
      <KinolarContent />
    </Suspense>
  );
}