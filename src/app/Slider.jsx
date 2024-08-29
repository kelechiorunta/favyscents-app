'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { FaArrowLeft, FaArrowRight, FaArrowCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
// import Image from 'next/image';

export default function Slider({slides}) {

  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [prevSlide, setPrevSlide] = useState(0); // Track the previous slide index

  const moveSlideForward = () => {
    setDirection(1);
    setPrevSlide(slide);
    setSlide((n) => (n + 1) % slides.length);
  };

  const moveSlideBackward = () => {
    setDirection(-1);
    setPrevSlide(slide);
    setSlide((n) => (n - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      direction === 1 ? moveSlideForward() : moveSlideBackward();
    }, 7000); // Slide changes every 3 seconds

    return () => {
      clearTimeout(timerId);
    };
  }, [slide, direction]);


  return (
    <div >
      <div className='flex relative'>
        {/* <nav className=' text-white flex justify-between absolute z-0'>
            <button className='rounded p-4 bg-gray-600'  onClick={moveSlideBackward}><FaArrowLeft size={30} fill='white'/></button>
            <button className='rounded p-4 bg-gray-600' onClick={moveSlideForward}><FaArrowRight size={30} fill='white'/></button>
        </nav> */}
        
        <div className="rounded-xl xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px] w-[400px] h-[400px]" style={{ overflow: 'hidden', position: 'relative'}}>
            <AnimatePresence initial={false} custom={direction}>
            {slides.length>0 && slides.map((slidepic, index) => (
                (index === slide || index === prevSlide) && (
                <motion.div
                className='rounded-xl xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px] md:max-xl:h-[400px] w-[400px] xl:max-2xl:w-[400px] h-[400px]'
                    key={index}
                    initial={{ x: index === slide ? (direction === 1 ? '100%' : '-100%') : (direction === 1 ? '-100%' : '100%')}}
                    animate={{ x: index === slide ? 0 : (direction === 1 ? '-100%' : '100%') }}
                    exit={{ x: index === slide ? (direction === 1 ? '-100%' : '100%') : (direction === 1 ? '-100%' : '100%')}}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute', width:'100%' }}
                >
                    {slides && slides[index]?.heroPic}
                    {/* <Image className=' rounded-xl xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px]  sm:max-mainheader_breakpoint_four:max-w-[400px] mainheader_breakpoint_four:max-xl:h-[400px] w-[400px] xl:max-2xl:w-[400px] h-[400px]'src={slides[index].heroPic} alt={`slide${index}`} /> */}
                </motion.div>
                )
            ))}
           </AnimatePresence> 
      </div>
    </div>
</div> 
  );
}