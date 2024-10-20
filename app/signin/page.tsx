import SignIn from "@/components/sign-in";

const SignInPage = () => {
    return (
        <main className="h-screen flex flex-col items-center justify-center">
            <SignIn provider="Google" />
            <SignIn provider="Github" />
        </main>
    )
}

export default SignInPage;