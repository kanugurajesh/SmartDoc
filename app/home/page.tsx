"use client";

import Toggle from "@/components/Toggle";
import Profile from "@/components/profile";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [file, setFile] = useState<File | null>(null);

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
      <div className="z-30">
        <input
          type="file"
          name=""
          id="file"
          className="hidden"
          onChange={fileChange}
        />
        <div className="flex gap-2">
          <button
            className="bg-black text-white p-2 rounded-md font-semibold hover:bg-white hover:text-black transition-all ease-in-out duration-300 border-2 border-black"
            onClick={fileClick}
          >
            Upload File
          </button>
          {file && (
            <button
              className="bg-black text-white p-2 rounded-md font-semibold hover:bg-white hover:text-black transition-all ease-in-out duration-300 border-2 border-black"
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
