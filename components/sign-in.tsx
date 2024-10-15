import { signIn } from "@/auth";

const SignIn = (provider: string) => {
  return (
    <form
      action={async () => {
        await signIn(provider);
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
};

export default SignIn;
