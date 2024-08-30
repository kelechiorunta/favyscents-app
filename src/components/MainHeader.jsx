'use client'
import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const poppins = Poppins({subsets:['latin'], style:'normal', weight:'400'})

export default function MainHeader() {
    const pathname = usePathname()
  return (
    <header className='max-w-full text-white text-xl container bg-gradient-to-l
     from-slate-600 via-slate-700 to-slate-600 p-4 z-20 flex sticky top-0'>
        <Image
        className='container max-w-[60px] mx-auto w-[30%] h-[30%]'
        width={44}
        height={44}
        src='/images/logo.png' 
        alt='logo'/>

        <nav className={`${poppins.className} uppercase container max-w-screen flex items-center justify-evenly gap-4`}>
            <Link 
            className={`${pathname==='/' && 'active animate-bounce'}`}
            href={'/'}>
                Home
            </Link>
            <Link 
            className={`${pathname==='/product' && 'active animate-bounce'}`}
            href={'/product'}>
                Product
            </Link>
            <Link 
            className={`${pathname==='/about' && 'active animate-bounce'}`}
            href={'/about'}>
                About
            </Link>
            <Link 
            className={`${pathname==='/contact' && 'active animate-bounce'}`}
            href={'/contact'}>
                Contact
            </Link>
        </nav>
    </header>
  )
}
