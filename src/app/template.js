"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      // layout={true}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, staggerChildren:0.5 }}
    >
      {children}
    </motion.div>
  );
}