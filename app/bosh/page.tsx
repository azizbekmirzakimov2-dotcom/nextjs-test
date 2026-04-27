"use client"; 
import React, { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80"
];

function BoshSahifa() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
   
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >

          <img
            src={img}
            alt="Banner rasm"
            className="w-full h-full object-cover select-none"
          />
          

          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent shadow-inner" />
          
      
          <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-20 mt-20">
             <div className="max-w-3xl space-y-6">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl">
                  Yangi Kinolar Olami
                </h1>
                <p className="text-gray-200 text-lg md:text-2xl max-w-xl drop-shadow-lg leading-relaxed">
                  Eng songgi premyeralar va sara filmlarni bizning platformada yuqori sifatda tomosha qiling.
                </p>
                
                <div className="flex items-center gap-5 pt-4">
                  <button className="px-12 py-4 bg-green-500 hover:bg-green-600 text-black font-black text-lg rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20">
                    Korish
                  </button>
                  <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-2xl backdrop-blur-md border border-white/10 transition-all">
                    Batafsil
                  </button>
                </div>
             </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-12 left-12 md:left-20 flex items-center gap-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentIndex 
              ? "w-12 h-2 bg-green-500 shadow-lg shadow-green-500/50" 
              : "w-3 h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default BoshSahifa;