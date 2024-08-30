'use client'
import React from 'react'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger)

const poppins = Poppins({subsets:['latin'], style:'normal', weight:'400'})


export default function AboutLandingPage() {
  const pathname = usePathname()
  const scopeContainer = useRef(null)

useGSAP(() => {
    const updateBackgroundPosition = (direction) => {
    const element = document.querySelector('.welcome_section');
    const currentY = parseFloat(window.getComputedStyle(element).backgroundPositionY);
    const increment = direction === 'down' ? 10 : -10; // Adjust the increment value as needed
    const newY = Math.max(0, Math.min(100, currentY + increment)); // Ensure the value stays between 0% and 100%

    gsap.to('.welcome_section', {
      backgroundPositionY: `${newY}%`,
      duration: 0.5,
      ease: 'none',
      overwrite: 'auto'
    });
  };

  ScrollTrigger.create({
    trigger: scopeContainer.current,
    start: 'top 300px',
    end: 'end ',
    scrub: 3,
    onUpdate: self => {
      if (self.direction > 0) {
        updateBackgroundPosition('down');
      } else {
        updateBackgroundPosition('up');
      }
    }
  });
}, {scope: scopeContainer.current});
  return (
    <div className={`${poppins.className} mx-auto container min-w-[100%] max-w-[100%] mt-[90px] relative`}>
        <div ref={scopeContainer} 
        className={`welcome_section 
        ${pathname==='/about'? 'bg-[url("/images/client3.jpg")] mx-auto min-w-[90%] max-w-[90%]'
         : 'bg-[url("/images/welcome_logo.png")] mx-10 min-w-[80%] max-w-[80%]'} 
        bg-cover bg-center container text-white gap-4 pt-[53px] 
        border overflow-hidden border-[#589c4b]
        rounded-md bg-[#569c4b]`}>
        <div className='flex flex-col items-start gap-x-1 w-full px-16 z-10'>
            <h1 className='text-4xl w-full'>{pathname=='/about'? 'ABOUT' : 'WELCOME TO'}</h1>
            <h1 className='text-[100px]'>FAVYSCENTS</h1>
            <p className='text-3xl w-full italic'>{pathname=='/about'?'':'Experience the Art of Fragrance'}</p>
        </div>
        <div className='shopnow overflow-hidden w-max mx-48 -z-1 block xsm:max-bp540:mx-8 mt-60 bp540:max-2xl:mt-8'>
            <Image 
            width={144}
            height={144}
            src={'/images/SHOPNOW.png'} 
            alt='shopnow_logo' />
        </div>
        {/* <h1 className='bg-[rgba(100,97,107,0.5)] p-4 shadow-md w-max rounded-xl border text-2xl text-black text-center float-right'>{`Welcome`}-{clientEmail}</h1> */}
        
    </div>
    </div>
  )
}
