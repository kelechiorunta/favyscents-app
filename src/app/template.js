"use client";

import { motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Template({ children }) {
  const segment = useSelectedLayoutSegment()
  
  return (
    <motion.div
      // layout={true}
      initial={{ y: segment && segment.includes('1')?'-100%': 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, staggerChildren:0.5 }}
    >
      {children}
    </motion.div>
  );
}