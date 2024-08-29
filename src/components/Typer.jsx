'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// const texts = ["Hello, World!", "Welcome to my website", "Enjoy your stay!"];

const Typer = ({texts, time, speed}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % texts.length;
      const fullText = texts[currentIndex];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : speed);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), time);
      } else if (isDeleting && currentText.length === 6) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  return (
    <div>
      
    <div style={{ display: 'flex', color: 'white', justifyContent: 'center', alignItems: 'flex-end', height: 'auto', width: '100%'}}>
      
      <motion.span
        className='text-4xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentText}
      </motion.span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        {"*"}
      </motion.span>
    </div>
    </div>
  );
};

export default Typer;