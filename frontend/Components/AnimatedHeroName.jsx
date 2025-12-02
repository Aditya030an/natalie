"use client";
import { motion } from "framer-motion";

export default function AnimatedHeroName({ name = "NATALIE DAWSON" }) {
  return (
    <motion.h2
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="text-6xl md:text-8xl font-extrabold tracking-tight"
    >
      {name}
    </motion.h2>
  );
}
