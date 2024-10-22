"use client";

import Toggle from "@/components/Toggle";
import Profile from "@/components/profile";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";
import { deleteData } from "@/utils/deleteData";

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false); // To track when the component is mounted on the client side

  useEffect(() => {
    setMounted(true); // Set mounted to true once the component is rendered on the client
  }, []);

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const fileClick = () => {
    document.getElementById("file")?.click();
  };

  const handleUpload = async () => {
    if (!file) return toast.error("File not found!");

    toast.dismiss();
    toast.loading("Uploading file...");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      toast.dismiss();
      if (response.ok) {
        toast.success("File uploaded successfully");
      } else {
        toast.error("File upload failed");
      }
    } catch (error) {
      console.log("Error occurred", error);
      toast.error("Error occurred during upload");
    }
  };

  const handleDelete = async () => {
    const response = await deleteData();
    if (response.success) {
      toast.success("Data deleted successfully");
    } else {
      toast.error("Error occurred while deleting data");
    }
  };

  if (!mounted) {
    return null; // Prevent rendering until the theme is mounted
  }

  return (
    <main className="flex flex-col items-center justify-center relative h-screen">
      <Toaster />
      <div className="absolute inset-0 top-4 left-4 z-20 w-fit">
        <Toggle />
      </div>
      <div className="absolute inset-0 top-4 right-4 z-10">
        <Profile />
      </div>
      {theme === "light" ? (
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
          <button
            className="bg-red-600 text-white p-2 rounded-md font-semibold hover:bg-white hover:text-red-600 transition-all ease-in-out duration-300 border-2 border-red-600"
            onClick={() => handleDelete()}
          >
            Delete Data
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
