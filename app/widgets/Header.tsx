import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[#111111]/90 backdrop-blur-md z-[9999] flex items-center justify-between px-10 border-b border-gray-800">
      
   
      <nav className="flex gap-8">
        <Link href="/bosh" className="text-gray-300 text-lg font-medium hover:text-white transition-colors">
          Bosh sahifa
        </Link>
        <Link href="/admin" className="text-gray-300 text-lg font-medium hover:text-white transition-colors">
          Admin sahifa
        </Link>
      </nav>


      <div className="flex items-center gap-2">
        
    
        <div className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer text-gray-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>

        
        <div className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer text-gray-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
        </div>

 
        <div className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer text-gray-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </div>

     
        <div className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer text-white font-bold text-sm uppercase transition">
          uz
        </div>


        <Link href="/login" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
        </Link>
        
      </div>

    </header>
  )
}

export default Header