import Link from 'next/link'
import React from 'react'

function Header() {
  return (
   <header className='bg-orange-500 px-10 py-4'>
   <ul>
    <li>
        <Link href={'/'}>Asosiy</Link>
    </li>
    <li>
        <Link href={'/savatcha'}>Savatcha</Link>
    </li>
    <li>
        <Link href={'/login'}>Login</Link>
    </li>
    <li>
        <Link href={'/admin'}>Admin</Link>
    </li>
   </ul>
   </header>
  )
}

export default Header