"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    if (!mounted) return; // Prevent action if the theme is still undefined
    toast.dismiss();
    if (theme === "light") {
      setTheme("dark");
      toast.success("Dark mode enabled");
    } else {
      setTheme("light");
      toast.success("Light mode enabled");
    }
  };

  if (!mounted) return null; // Prevent rendering before theme is set

  return (
    <div
      onClick={changeTheme}
      className={`w-16 h-9 bg-slate-200 flex rounded-full p-1 cursor-pointer items-center ${
        theme === "dark" ? "justify-end" : "justify-start"
      }`}
    >
      <Toaster />
      <motion.div
        layout
        transition={spring}
        className="w-7 h-7 bg-white rounded-full"
      />
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Toggle;