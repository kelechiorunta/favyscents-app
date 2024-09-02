'use client'
import Carousel from '@/components/3D Rotating Carousel/Carousel'
import React from 'react'
import { motion } from 'framer-motion'
import CartPage from '@/components/CartPage'
import AboutLandingPage from '@/components/AboutLandingPage'

export default function page() {
  return (
    <motion.div 
    initial={{ x: '100%', y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, staggerChildren: 0.5 }}
    className='container max-w-full border-2 border-black p-4 xsm:max-md:max-w-full
    xsm:max-md:p-0'>
        <div className='container mx-auto  min-w-[90%] max-w-[90%] 
        xsm:max-md:max-w-full '>
            <AboutLandingPage/>
            <div className='container -ml-24 xsm:max-md:scale-50
            xsm:max-md:mx-auto'><Carousel/></div>
        </div>
    </motion.div>
  )
}
