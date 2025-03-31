"use client";

import { motion } from "framer-motion";
export default function AnimatedName() {
  const name = "Ravi Ranjan Kumar".split(""); // Split into letters

  return (
    <div className="flex gap-1">
      
      {name.map((char, index) => (
        <motion.span
          key={index}
          className="text-2xl md:text-5xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }} 
        >
          {char === " " ? "\u00A0" : char} 
        </motion.span>
      ))}
    </div>
  );
}
