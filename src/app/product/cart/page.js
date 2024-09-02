'use client'
import LandingPage from '@/components/LandingPage'
import React from 'react'
import { motion } from 'framer-motion'
import CartPage from '@/components/CartPage'

export default function page() {
  return (
    <motion.div 
    initial={{ x: '100%', y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, staggerChildren: 0.5 }}
    className='container mx-auto max-w-full border-2 border-black p-4 xsm:max-md:p-0'>
      <CartPage/>
      {/* <LandingPage/> */}
    </motion.div>
  )
}
