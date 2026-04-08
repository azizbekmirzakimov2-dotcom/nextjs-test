import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-[700px] flex items-center justify-end px-[5%] md:px-[10%]">
      {/* 1. Orqa fondagi rasm qismi */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/bg-hero.jpg')", // Rasmingiz nomi va manzili
          backgroundColor: "#f4f4f4" // Rasm yuklanguncha ko'rinib turadigan fon
        }}
      ></div>

      {/* 2. O'ng tarafdagi tilla rang blok */}
      <div className="relative z-10 bg-[#FFF3E3] p-8 md:p-16 rounded-sm max-w-[640px] shadow-sm">
        <span className="text-[#333333] font-semibold tracking-widest text-sm uppercase mb-4 block">
          New Arrival
        </span>
        
        <h1 className="text-[#B88E2F] text-4xl md:text-6xl font-extrabold leading-[1.2] mb-4">
          Discover Our <br /> New Collection
        </h1>
        
        <p className="text-[#333333] text-lg font-medium mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        
        <button className="bg-[#B88E2F] text-white px-14 py-6 font-bold uppercase hover:bg-[#967524] transition-colors duration-300">
          Buy Now
        </button>
      </div>
    </section>
  )
}

export default Hero