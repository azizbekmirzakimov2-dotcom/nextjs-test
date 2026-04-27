import React from 'react'
import Header from './widgets/Header' // Header yo'lini to'g'ri ko'rsating
import BoshSahifa from './bosh/page' // BoshSahifa yo'lini to'g'ri ko'rsating
import Kinolar from './kinolar/page'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#111111]">
    
      <Header />

 
      <BoshSahifa />
      <div className="relative z-10 -mt-20"> 
         <Kinolar />
      </div>

    
      <section className="p-10">
       
      </section>
    </main>
  )
}
