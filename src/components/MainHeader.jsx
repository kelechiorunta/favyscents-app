import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({subsets:['latin'], style:'normal', weight:'400'})

export default function MainHeader() {
  return (
    <header className='max-w-full container bg-gradient-to-l
     from-slate-100 via-slate-400 to-slate-100 p-8 z-20 flex sticky top-0'>
        <nav className={`${poppins.className} uppercase container max-w-screen flex items-center justify-evenly gap-4`}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
        </nav>
    </header>
  )
}
