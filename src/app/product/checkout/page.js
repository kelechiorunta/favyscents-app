'use client'
import Carousel from '@/components/3D Rotating Carousel/Carousel'
import React from 'react'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import CartPage from '@/components/CartPage'
import AboutLandingPage from '@/components/AboutLandingPage'
import { FaBackward } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import Login from '@/components/Login'

const poppins = Poppins({ subsets: ['latin'], style: 'normal', weight: '400' })

export default function page() {
    const router = useRouter();
  return (
    <motion.div 
    initial={{ x: '100%', y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, staggerChildren: 0.5 }}
    className='container mx-auto min-w-full max-w-full flex flex-col justify-center items-center border-2 shadow-xl rounded p-4 xsm:max-md:max-w-full
    xsm:max-md:p-0'>
        <div className='container p-8 mx-auto min-w-[100%] max-w-[100%] flex flex-col items-center justify-center
        xsm:max-md:max-w-full '>
            <nav className={`${poppins.className} flex xsm:max-md:justify-center items-center`}>
                <button 
                onClick={()=>router.back()}
                className='p-2 flex gap-2 shadow-xl rounded'>
                    <FaBackward fill='black' size={20}/>
                    Back
                </button>
            </nav>
            <h1 className={`${poppins.className} text-7xl animate-pulse text-black bg-white p-8 mt-24 xsm:max-md:text-[3rem]`}>
                CHECKOUT PAGE IN PROGRESS
            </h1>
            {/* <AboutLandingPage/> */}
            {/* <div className='container scale-40 xsm:max-md:scale-50
            xsm:max-md:mx-auto'><Carousel/></div> */}
            <Login/>
        </div>
    </motion.div>
  )
}
