'use client'

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import styles from './Carousel.module.css'; // For custom styling

const slides = [
  { id: 0, content: '/images/image1.png' },
  { id: 1, content: '/images/image2.png' },
  { id: 2, content: '/images/image3.png' },
  { id: 3, content: '/images/image4.png' },
  { id: 4, content: '/images/image5.png' },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0); // Store the rotation angle
  const controls = useAnimation();

  // Automatically rotate slides if none are clicked
  useEffect(() => {
    if (!document.hidden){
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % slides.length;
            setActiveIndex(nextIndex);
            setRotationAngle((prevAngle) => prevAngle - 72); // Keep decreasing to ensure clockwise rotation
          }, 3000); // Change slides every 3 seconds
      
          return () => clearInterval(interval); // Clean up on component unmount
    }
    
  }, [activeIndex]);

  // Handle manual slide change
  const handleClick = (index) => {
    const newRotationAngle = rotationAngle - 72 * (index - activeIndex);
    setActiveIndex(index);
    setRotationAngle(newRotationAngle);
    controls.start({
      rotateY: newRotationAngle, // Adjust rotation based on clicked slide
      transition: { duration: 1, ease: 'easeInOut' },
    });
  };

  useEffect(() => {
    controls.start({
      rotateY: rotationAngle, // Use the rotation angle for animation
      transition: { duration: 1, ease: 'easeInOut' },
    });
  }, [rotationAngle, controls]);

  return (
    <div className={`${styles.carousel} container max-w-full min-w-[20%]`}>
      <motion.div
        className={styles.slidesContainer}
        animate={controls}
        initial={{ rotateY: 0 }}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`${styles.slide} ${(activeIndex==slide.id)? 'bg-gradient-to-r from-black via-slate-600 to-slate-900' : 'bg-gradient-to-r from-gray-900 via-slate-600 to-slate-900'}`}
            onClick={() => handleClick(index)}
            style={{
              transform: `rotateY(${72 * index}deg) translateZ(300px)`, // Positioning slides in 3D space
            }}
          >
            <Image src={slide.content} width={344} height={344} alt='slide' />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}