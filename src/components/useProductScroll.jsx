import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useProductScroll() {
  const containerRef = useRef(null);
  const parentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [photosblog, setPhotosBlog] = useState('.photos_blog');

  useEffect(() => {
    // Ensure the gsap object is valid
    if (gsap) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // Make sure you're referencing the actual DOM node
          pin: true,
          start: 'top',
          end: ' bottom',
          scrub: 1,
          pinnedContainer: containerRef.current,
          snap: {
            snapTo: 'labels',
            duration: { min: 0.5, max: 10 },
            delay: 0.5,
            ease: 'power1.inOut',
          },
        },
      });

      tl.addLabel('start')
        .fromTo(
          containerRef.current,
          {
            backgroundColor: 'rgba(0,0,0,0)',
            opacity: 0,
          },
          {
            backgroundColor: 'rgba(0,0,25,0.7)',
            opacity: 1,
            // duration: 3,
            
          },
          'start'
        )
        .addLabel('title')
        .fromTo(
          titleRef.current,
          { x: '-100%', opacity: 0 },
          {
            x: '0%',
            opacity: 1,
            // duration: 2,
          },
          'start+=5'
        )
        .addLabel('middle')
        .fromTo(
          descriptionRef.current,
          { x: '-100%' },
          {
            x: '0%',
            opacity: 1,
            // duration: 2,
          },
          'start+=10'
        )
        .addLabel('photos')
        .fromTo(
          `${photosblog} *`,
          { opacity: 0, rotate: 0 },
          {
            opacity: 1,
            rotate: '360deg',
            stagger: 0.1,
            // duration: 5,
          },
          'start+=15'
        )
        .addLabel('end');
    }
  }, [photosblog]);

  return { containerRef, parentRef, titleRef, descriptionRef, photosblog };
}

