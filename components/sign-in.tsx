"use client";

// import { signIn } from "@/auth";
import { signIn } from "next-auth/react";

interface SignInProps {
  provider: string;
}

const SignIn = (provider: SignInProps) => {
  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signIn(provider.provider, {redirectTo: "/home"});
  };

  return (
    <form onSubmit={handleSignIn}>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full mb-3"
        type="submit"
      >
        Signin with {provider.provider}
      </button>
    </form>
  );
};

export default SignIn;
