"use client";

import { motion } from "framer-motion";

export default function ProductTemplate({ children }) {
  return (
    <motion.div
    // layout={true}
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "circInOut", duration: 0.75, staggerChildren:0.5 }}
    >
      {children}
    </motion.div>
  );
}
