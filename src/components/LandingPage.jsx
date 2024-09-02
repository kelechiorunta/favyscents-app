'use client'
import Image from 'next/image'
import React from 'react'
import Slider from '../app/Slider'
import Typer from './Typer'
import { Poppins } from 'next/font/google'
import { motion, stagger } from 'framer-motion'

const slides = [{
    id:0, heroPic: <img
    className='rounded-md w-full h-full'
    fetchPriority='high'
    width={144}
    height={144}
    src={'/images/image1.png'} 
    alt='perfume1' />},

    {id:1, heroPic: <img
    className='rounded-md w-full h-full'
    fetchPriority='hight'
    width={144}
    height={144}
    src={'/images/image2.png'} 
    alt='perfume2' />},

    {id:2, heroPic: <img
        className='rounded-md w-full h-full'
        fetchPriority='high'
        width={144}
        height={144}
        src={'/images/image3.png'} 
        alt='perfume3' />},

    {id:3, heroPic: <img
        className='rounded-md w-full h-full'
        fetchPriority='high'
        width={144}
        height={144}
        src={'/images/image4.png'} 
        alt='perfume4' />},
    
    {id:4, heroPic: <img
        className='rounded-md w-full h-full'
        fetchPriority='high'
        width={144}
        height={144}
        src={'/images/image5.png'} 
        alt='perfume5' />}
]

const texts = ["Our FavyScents", "Our Future"]

const poppins = Poppins({subsets:['latin'], style:'italic', weight:'400'})

const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'backInOut',
        staggerChildren: 0.3, // Staggering the children with 0.3 seconds delay
        duration: 1,
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, stagger:0.3 }, // Customize each child's animation
    },
  };



export default function LandingPage() {
  return (
    <motion.div 
       initial="hidden"
       whileInView="visible"
       variants={containerVariants}
       viewport={{ once: true }}
    className='max-w-full p-8 grid grid-cols-2 mt-[88px] shadow-md rounded container 
    bg-gradient-to-tr from-green-600 via-slate-700 to-black
    max-lg:grid-cols-1 max-sm:p-4 max-[400px]:px-2'>
        <motion.div 
       transition={{stagger:0.5, duration:1}}
       variants={childVariants}
        className='shadow-md rounded py-4 pl-16 container'>
            <motion.h1 
                transition={{stagger:0.5, duration:1}}
                variants={childVariants}
                className=' flex flex-col gap-2 items-start'>
                <motion.p 
                transition={{stagger:0.5, duration:1}}
                variants={childVariants}
                className='text-7xl'>Welcome to </motion.p>
                <motion.span
                transition={{stagger:0.5, duration:1}}
                variants={childVariants}
                className='text-9xl text-white max-sm:text-8xl max-[400px]:text-6xl'>FavyScents</motion.span>
                <Typer texts={texts} time={3000} speed={90}/>
                <motion.p
                transition={{stagger:0.5, duration:1}}
                variants={childVariants} 
                className={`${poppins.className} py-4 text-white`}>
                    Ncididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo
                </motion.p>
                <button 
                className={`${poppins.className} p-4 w-max
                 text-white rounded-md shadow-md bg-gradient-to-l
                  from-slate-900 via-slate-700 to-slate-900`}>
                    BUY NOW
                </button>
            </motion.h1>
        </motion.div>
        <div className='p-4 container shadow-md rounded-full mx-auto w-auto overflow-hidden bg-white'>
            <Slider slides={slides} seconds={7000}/>
        </div>
    </motion.div>
  )
}
