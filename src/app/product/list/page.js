'use client'

import AboutLandingPage from '@/components/AboutLandingPage'
import OurProducts from '@/components/OurProducts'
import Reviews from '@/components/Reviews'
import SearchProduct from '@/components/SearchProduct'
import React from 'react'
import { Poppins } from 'next/font/google'
// import { motion } from 'framer-motion'

const poppins = Poppins({subsets: ['latin'], weight: '400'})

export default function page() {
  return (
    <div className='bg-white container mx-4 flex flex-col min-w-[90%] max-w-[90%]
    xsm:max-md:mt-[150px] xsm:max-md:max-w-full xsm:max-md:mx-auto'>
        {/* <p className='text-black uppercase mt-24 container max-w-full'>ListPage</p> */}
        <div className={`${poppins.className} mt-24 mb-4 z-10`}><SearchProduct/></div>
        <div className='-mt-[210px] w-full mx-auto'><OurProducts/></div>
        {/* <Reviews/> */}
        {/* <AboutLandingPage/> */}
    </div>
  )
}
