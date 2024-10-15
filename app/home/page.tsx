import SignOut from "@/components/sign-out";
import Toggle from "@/components/Toggle";
import Profile from "@/components/profile";

const Home = () => {
  return (
    <main className="relative p-4">
      <div className="absolute inset-0 top-4 left-4 z-10">
        <Toggle />
      </div>
      <div className="absolute inset-0 top-4 right-4 z-10">
        <Profile />
      </div>
      <div className="mt-10">
        <div>
          <h1>Home</h1>
          <SignOut />
        </div>
      </div>
    </main>
  );
};

export default Home;
