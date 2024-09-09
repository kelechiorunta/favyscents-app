'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Slider from '@/app/Slider'
import Typer from './Typer'
import { Poppins } from 'next/font/google'
import { motion } from 'framer-motion'

// Define font
const poppins = Poppins({ subsets: ['latin'], style: 'italic', weight: '400' })

const texts = ["Our FavyScents", "Our Future"]

// Motion variants for animation
const containerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'backInOut',
      staggerChildren: 0.3,
      duration: 1,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, stagger: 0.3 },
  },
}

export default function LandingPage({ slides }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      className="landing bg-[url(/images/image1.png)] bg-cover bg-center max-w-full p-8 grid grid-cols-2 mt-[82px] shadow-md rounded container 
      max-lg:grid-cols-1 max-sm:p-4 max-[400px]:px-2"
    >
      <motion.div
        transition={{ stagger: 0.5, duration: 1 }}
        variants={childVariants}
        className="z-10 shadow-md rounded py-4 pl-16 container xsm:max-[400px]:p-2"
      >
        <motion.div
          transition={{ stagger: 0.5, duration: 1 }}
          variants={childVariants}
          className="flex flex-col gap-2 items-start"
        >
          <motion.p
            transition={{ stagger: 0.5, duration: 1, repeatType: 'reverse' }}
            variants={childVariants}
            className="text-7xl text-gray-400"
          >
            Welcome to{' '}
          </motion.p>
          <motion.span
            transition={{ stagger: 0.5, duration: 1 }}
            variants={childVariants}
            className="text-9xl text-white max-sm:text-8xl max-[400px]:text-6xl"
          >
            FavyScents
          </motion.span>
          <Typer texts={texts} time={3000} speed={90} />
          <motion.p
            transition={{ stagger: 0.5, duration: 1 }}
            variants={childVariants}
            className={`${poppins.className} py-4 text-white`}
          >
            Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo
          </motion.p>
          <button
            className={`${poppins.className} p-4 w-max
                 text-white rounded-md shadow-md bg-gradient-to-l
                  from-slate-900 via-slate-700 to-slate-900`}
          >
            BUY NOW
          </button>
        </motion.div>
      </motion.div>
      <div
        className="container shadow-md rounded-md mx-auto h-max max-w-[400px]
          overflow-hidden bg-white xsm:max-[400px]:rounded-md xsm:max-[400px]: xsm:max-sm:max-h-[330px]"
      >
        <Slider slides={slides && slides} seconds={7000} isVisible={isVisible} />
      </div>
    </motion.div>
  )
}

// 2. Use getStaticProps to fetch the data at build time and regenerate it
export async function getStaticProps() {
  const slides = [
    { id: 0, pic: '/images/image1.png', placeholderImg: '/images/small-image1.png' },
    { id: 1, pic: '/images/image2.png', placeholderImg: '/images/small-image2.png' },
    { id: 2, pic: '/images/image3.png', placeholderImg: '/images/small-image3.png' },
    { id: 3, pic: '/images/image4.png', placeholderImg: '/images/small-image4.png' },
    { id: 4, pic: '/images/image5.png', placeholderImg: '/images/small-image5.png' }
  ]

  return {
    props: {
      slides,
    },
    revalidate: 10, // Re-generate the page every 10 seconds if there are changes
  }
}

