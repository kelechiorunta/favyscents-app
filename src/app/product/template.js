"use client";

"use client";

import { motion } from "framer-motion";
import { useSelectedLayoutSegment, usePathname } from "next/navigation";

export default function ProductTemplate({ children }) {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();

  // Determine if we should animate based on the segment or pathname
  const isListRoute = (segment === 'list' || segment === '0' || segment==='product' || segment===null) && pathname.includes('/product/list/');

  return (
    <motion.div
      initial={isListRoute ? { x: 0, y: '-100%', opacity: 0 } : {}}
      animate={isListRoute ? { x: 0, y: 0, opacity: 1 } : {}}
      exit={isListRoute ? { y: 0, opacity: 1 } : {}}
      transition={isListRoute ? { ease: "easeInOut", duration: 0.75, staggerChildren: 0.5 } : {}}
    >
      {children}
    </motion.div>
  );
}

