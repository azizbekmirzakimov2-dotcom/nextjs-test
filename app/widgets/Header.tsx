import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='bg-orange-500 shadow-md'>
      <nav className='max-w-7xl mx-auto px-10 py-4 flex items-center justify-between'>
        
   

   
        <ul className='flex items-center gap-8 text-white font-medium'>
          <li>
            <Link href={'/'} className='hover:text-black transition duration-300'>
              Asosiy
            </Link>
          </li>
          <li>
            <Link href={'/savatcha'} className='hover:text-black transition duration-300'>
              Savatcha
            </Link>
          </li>
          <li>
            <Link href={'/login'} className='hover:text-black transition duration-300'>
              Login
            </Link>
          </li>
          <li>
            <Link 
              href={'/admin'} 
              className='bg-black px-4 py-2 rounded-xl hover:bg-gray-800 transition duration-300'
            >
              Admin
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Header