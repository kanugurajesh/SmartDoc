"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await signOut({ redirectTo: "/" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black text-white hover:bg-gray-200 rounded-md hover:text-black p-3 flex items-center justify-center font-semibold cursor-pointer transition-all ease-in-out duration-300">
      <button type="submit">Sign Out</button>
    </form>
  );
}
