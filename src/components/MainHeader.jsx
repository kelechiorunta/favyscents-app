'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaHamburger } from 'react-icons/fa'
import { motion } from 'framer-motion'

const poppins = Poppins({subsets:['latin'], style:'normal', weight:'400'})

const parentVariant = {
    hidden: {opacity:0, x:0, y:-200},
    visible: {opacity:1, x:0, y:0,
    transition:{staggerChildren: 0.2, duration:0.3,
        repeatType:'reverse',
     }}
} 

const childVariant = {
    visible: { opacity: 1, x:0, 
    transition:{stagger:0.5}},
    hidden: { opacity: 0, x:20},    
}

export default function MainHeader() {
    const pathname = usePathname()
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <header className='max-w-full flex justify-between items-center text-white text-xl container
    bg-[#1e4548] py-3 px-4 z-20 sticky top-0'>
        <Image
        className='container max-w-[60px] w-[30%] h-[30%]'
        width={44}
        height={44}
        src='/images/logo.png' 
        alt='logo'/>

        <nav className={`${poppins.className} uppercase container max-w-full flex items-center justify-evenly gap-4
        xsm:max-sm:hidden`}>
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
        <nav 
        onClick={handleToggle}
        className='hamburger-menu relative max-w-full flex flex-col md:max-2xl:hidden hover:cursor-pointer'>
            <Image width={50} height={50} src={'/images/hamburger.png'} alt={'hamburger menu'}/>
            {/* <FaHamburger fill='white' size={30}/> */}
            {toggle && 
                <motion.nav 
                initial='hidden'
                animate='visible'
                variants={parentVariant}
                className='min-w-[350px] px-2 overflow-hidden max-w-full mx-auto flex flex-col absolute -right-[30%] pb-16  top-[65px] max-h-[270px] bg-white  text-black'>
                    <motion.a
                    transition={{stagger:0.3, duration:1}}
                    variants={childVariant}
                    className='min-w-[420px] max-w-full mx-auto py-4  text-xl hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out' href={'/'}>Home</motion.a>
                    <motion.a 
                    transition={{stagger:0.3, duration:1}}
                    variants={childVariant}
                    className='min-w-[420px] max-w-full mx-auto py-4  text-xl hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out' href={'/product'}>Product</motion.a>
                    <motion.a 
                    transition={{stagger:0.3, duration:1}}
                    variants={childVariant}
                    className='min-w-[420px] max-w-full mx-auto py-4  text-xl hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out' href={'/about'}>About</motion.a>
                    <motion.a 
                    transition={{stagger:0.3, duration:1}}
                    variants={childVariant}
                    className='min-w-[420px] max-w-full mx-auto py-4  text-xl hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out' href={'/contact'}>Contact</motion.a>
                </motion.nav>
            }
        </nav>
    </header>
  )
}
