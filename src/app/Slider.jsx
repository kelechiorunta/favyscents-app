'use client'
import React, { useEffect, useRef, useState, useContext, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideContext } from '@/components/AppContext';
import Image from 'next/image';
import { memo } from 'react';
// import { FaArrowLeft, FaArrowRight, FaArrowCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
// import Image from 'next/image';

function Slider({ slides, seconds, componentName }) {
  const [isVisible, setIsVisible] = useState(false);
  const { setSlideNo } = useContext(slideContext);
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [prevSlide, setPrevSlide] = useState(0); // Track the previous slide index
  const [isRunning, setIsRunning] = useState(true);
  const [imgs, setImgs] = useState([])

  // Preload small images
  const preloadSmallImages = useCallback(() => {
    const preloadedImages = slides && slides.map((_, index) => {
      const img = new window.Image(); // Use native Image object
      img.src = `/images/small-image${index + 1}.png`; 
      return { mypic: img.src }; // Return the image source as an object
    });

    setImgs(preloadedImages); // Set the state with the preloaded images
  }, [imgs]);

  // Move slide forward or backward
  const moveSlideForward = useCallback(() => {
    if (slides){
      setDirection(1);
      setPrevSlide(slide);
      setSlide((n) => (n + 1) % slides.length);
      seconds && setSlideNo((n) => (n + 1) % slides.length);
    }
  }, [direction, prevSlide, slide, seconds, slides]);

  const moveSlideBackward = useCallback(() => {
    if (slides){
      setDirection(-1);
      setPrevSlide(slide);
      setSlide((n) => (n - 1 + slides.length) % slides.length);
      seconds && setSlideNo((n) => (n - 1 + slides.length) % slides.length);
    }
  }, [direction, prevSlide, slide, seconds, slides]);

  // Handle page visibility (pause slider when not visible)
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handleVisibilityChange]);

  useEffect(() => {
    preloadSmallImages(); // Preload small images when the component mounts

    if (isRunning) {
      const timerId = setInterval(() => {
        direction === 1 ? moveSlideForward() : moveSlideBackward();
      }, seconds);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [isRunning, slide, direction]);

  return (
    <div className='mx-auto container max-w-full max-h-full '>
      <div className='flex relative mx-auto container w-max'>
        <div className="rounded-xl mx-auto container flex xsm:max-[400px]:max-w-[400px] xsm:max-sm:min-h-[300px] w-[400px] h-[400px]" style={{ overflow: 'hidden', position: 'relative' }}>
          <AnimatePresence initial={false} custom={direction}>
            {slides && slides.length > 0 &&
              slides.map((slidepic, index) => (
                (index === slide || index === prevSlide) && (
                  <motion.div
                    className={`bg-[url(${slides && slides[index]?.placeholderImg} first-line:max-w-[500px] bg-auto bg-[100px] rounded-xl flex flex-col items-center justify-center container w-max gap-y-2`}
                    key={index}
                    initial={{ x: index === slide ? (direction === 1 ? '100%' : '-100%') : (direction === 1 ? '-100%' : '100%') }}
                    animate={{ x: index === slide ? 0 : (direction === 1 ? '-100%' : '100%') }}
                    exit={{ x: index === slide ? (direction === 1 ? '-100%' : '100%') : (direction === 1 ? '-100%' : '100%') }}
                    // transition={{ duration: 0.5 }}
                    transition={{ duration: componentName==="Reviews"? 0.5 : 6.955, ease: "linear" }}
                    style={{ position: 'absolute', width: '100%' }}
                  >
                    {/* Small Image Placeholder */}
                    <div className={`bg-[url(${slides && slides[index]?.placeholderImg})] bg-cover bg-center container max-w-[400px] max-h-[400px]`}>
                      {
                        componentName==="Reviews"?
                      <>
                      {slides && slides[index]?.heroPic}
                      {slides && slides[index]?.testimonial}
                      {slides && slides[index]?.client}
                      </>
                      
                      :
                      
                        <Image
                          className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} container bg-cover bg-center rounded-md w-full min-w-[450px] min-h-[450px] h-max`}
                          loading='lazy'
                          onLoad={() => setIsVisible(true)}
                          width={244}
                          height={244}
                          src={slides && slides[index].pic}
                          alt={`perfume${index + 1}`}
                          // unoptimized // Use this prop if you're loading images that aren't optimized by Next.js
                        />
                      
                    }
                    </div>
                  </motion.div>
                )
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default memo(Slider)