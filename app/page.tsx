"use client";

import Toggle from "@/components/Toggle";
import {
  slideInFromRight,
  slideInFromTop,
  slideInFromLeft,
} from "@/utils/motion";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 overflow-hidden relative">
        <div className="absolute inset-0 top-4 left-4">
          <Toggle />
        </div>
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 left-16 w-52 h-48 bg-purple-600 filter blur-2xl opacity-70 mix-blend-multiply animate-blob"></div>
          <div className="absolute top-0 right-0 w-52 h-48 bg-yellow-600 filter blur-2xl opacity-70 mix-blend-multiply animation-delay-2000 animate-blob"></div>
          <div className="absolute bottom-0 right-32 w-52 h-48 bg-red-600 filter blur-2xl opacity-70 mix-blend-multiply animation-delay-4000 animate-blob"></div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(0.5, 0.5)}
          className="text-[40px] font-medium text-center z-10"
        >
          <span className="text-gray-100">Performance</span>
        </motion.div>
      </main>
    </>
  );
}
