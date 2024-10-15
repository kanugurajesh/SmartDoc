"use client";

import {
  slideInFromRight,
  slideInFromTop,
  slideInFromLeft,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 overflow-hidden">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 left-16 w-52 h-48 bg-purple-600 filter blur-2xl opacity-70 mix-blend-multiply animate-blob"></div>
          <div className="absolute top-0 right-0 w-52 h-48 bg-yellow-600 filter blur-2xl opacity-70 mix-blend-multiply animation-delay-2000 animate-blob"></div>
          <div className="absolute bottom-0 right-32 w-52 h-48 bg-red-600 filter blur-2xl opacity-70 mix-blend-multiply animation-delay-4000 animate-blob"></div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop(0.5, 0.5)}
          className="text-[40px] font-medium text-center z-10 max-w-2xl flex flex-col gap-3"
        >
          <span className="flex flex-col text-3xl tracking-wide leading-tight text-center font-semibold sm:text-6xl">
            Transform Your PDF Into Knowledge
          </span>
          <p className="text-center text-lg leading-6 text-gray-600 dark:text-gray-200 font-semibold">
            Engage in seamless conversations with your PDFs using
            Retrieval-Augmented Generation (RAG)
          </p>
        </motion.div>
        <div className="flex mt-6 items-center gap-4 z-10">
          <motion.button
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.5, 0.5)}
            className="px-6 py-3 bg-black text-white border-2 border-black font-semibold rounded-full hover:bg-white hover:text-black transition-all ease-in-out duration-300"
          >
            Watch Demo
          </motion.button>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.5, 0.5)}
            onClick={() => router.push("/login")}
            className="px-6 py-3 bg-white text-black border-2 border-black font-semibold rounded-full hover:bg-black hover:text-white transition-all ease-in-out duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </main>
    </>
  );
}
