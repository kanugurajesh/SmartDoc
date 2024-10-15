"use client";

import { signIn } from "@/auth";

const SignIn = () => {
  // Handler for Google sign-in
  interface SignInEvent extends React.FormEvent<HTMLFormElement> {}

  const handleGoogleSignIn = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await signIn("google");
  };

  // Handler for GitHub sign-in
  const handleGithubSignIn = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await signIn("github");
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl mb-4">Sign in</h1>
        <form onSubmit={handleGoogleSignIn}>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full mb-3"
          >
            Sign in with Google
          </button>
        </form>
        <form onSubmit={handleGithubSignIn}>
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 w-full"
          >
            Sign in with GitHub
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
