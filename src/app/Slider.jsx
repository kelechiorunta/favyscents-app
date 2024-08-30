'use client'
import React, { useEffect, useRef, useState, useContext, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideContext } from '@/components/AppContext';
// import { FaArrowLeft, FaArrowRight, FaArrowCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
// import Image from 'next/image';

export default function Slider({slides, seconds}) {

  const { setSlideNo } = useContext(slideContext)
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [prevSlide, setPrevSlide] = useState(0); // Track the previous slide index

  const moveSlideForward = () => {
    setDirection(1);
    setPrevSlide(slide);
    setSlide((n) => (n + 1) % slides.length);
    seconds===10000 && setSlideNo((n) => (n + 1) % slides.length);
  };

  const moveSlideBackward = () => {
    setDirection(-1);
    setPrevSlide(slide);
    setSlide((n) => (n - 1 + slides.length) % slides.length);
    seconds===10000 && setSlideNo((n) => (n - 1 + slides.length) % slides.length);
    
  }; 
  
  const [isRunning, setIsRunning] = useState(true);

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      setIsRunning(false);  // Pause when the page is not visible
    } else {
      setIsRunning(true);   // Resume when the page is visible
    }
  }, []);

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handleVisibilityChange]);

  useEffect(() => {
    if (isRunning) {
    const timerId = setInterval(() => {
      direction === 1 ? moveSlideForward() : moveSlideBackward();
    }, seconds); // Slide changes every 3 seconds

    return () => {
      clearInterval(timerId);
    }
  };
  }, [isRunning, slide, direction]);


  return (
    <div className='mx-auto container max-w-full' >
      <div className='flex relative mx-auto container'>
        {/* <nav className=' text-white flex justify-between absolute z-0'>
            <button className='rounded p-4 bg-gray-600'  onClick={moveSlideBackward}><FaArrowLeft size={30} fill='white'/></button>
            <button className='rounded p-4 bg-gray-600' onClick={moveSlideForward}><FaArrowRight size={30} fill='white'/></button>
        </nav> */}
        
        <div className="rounded-xl mx-auto container max-w-full xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px] w-[400px] h-[400px]" style={{ overflow: 'hidden', position: 'relative'}}>
            <AnimatePresence initial={false} custom={direction}>
            {slides.length>0 && slides.map((slidepic, index) => (
                (index === slide || index === prevSlide) && (
                <motion.div
                className='rounded-xl flex flex-col items-center justify-center container max-w-full gap-y-2 xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px]'
                    key={index}
                    initial={{ x: index === slide ? (direction === 1 ? '100%' : '-100%') : (direction === 1 ? '-100%' : '100%')}}
                    animate={{ x: index === slide ? 0 : (direction === 1 ? '-100%' : '100%') }}
                    exit={{ x: index === slide ? (direction === 1 ? '-100%' : '100%') : (direction === 1 ? '-100%' : '100%')}}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute', width:'100%' }}
                >
                    {slides && slides[index]?.heroPic}
                    {slides && slides[index]?.testimonial}
                    {slides && slides[index]?.client}
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