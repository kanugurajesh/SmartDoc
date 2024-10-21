"use client";

import Toggle from "@/components/Toggle";
import Profile from "@/components/profile";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const { theme } = useTheme();

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const fileClick = () => {
    document.getElementById("file")?.click();
  };

  const handleUpload = async () => {
    if (!file) return toast.error("file not found!");

    const formData = new FormData();
    formData.append("file", file); // Append the selected file to FormData

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("File uploaded successfully");
      } else {
        toast.error("File upload failed");
      }

      // const data = await response.json();
    } catch (error) {
      console.log("Error occured", error);
      toast.error("Error occurred during upload");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center relative h-screen">
      <Toaster />
      <div className="absolute inset-0 top-4 left-4 z-20 w-fit">
        <Toggle />
      </div>
      <div className="absolute inset-0 top-4 right-4 z-10">
        <Profile />
      </div>
      {theme == "light" ? (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      )}
      <div className="z-30 flex flex-col gap-4">
        <input
          type="file"
          name=""
          id="file"
          className="hidden"
          onChange={fileChange}
        />
        <div className="flex gap-2">
          <button
            className="bg-black text-white p-2 rounded-md font-semibold hover:bg-white hover:text-black transition-all ease-in-out duration-300 border-2 border-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
            onClick={fileClick}
          >
            {file ? "Change File" : "Upload File"}
          </button>
          {file && (
            <button
              className="bg-black text-white p-2 rounded-md font-semibold hover:bg-white hover:text-black transition-all ease-in-out duration-300 border-2 border-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
              onClick={handleUpload}
            >
              Submit File
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
