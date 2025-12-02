"use client";
import { motion } from "framer-motion";

export default function ScribbleUnderline({ className = "" }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`origin-left h-[4px] bg-black mt-3 ${className}`}
    />
  );
}
