import Toggle from "@/components/Toggle";
import Profile from "@/components/profile";

const Home = () => {
  return (
    <main className="flex items-center justify-center relative">
      <div className="absolute inset-0 top-4 left-4 z-20 w-fit">
        <Toggle />
      </div>
      <div className="absolute inset-0 top-4 right-4 z-10">
        <Profile />
      </div>
    </main>
  );
};

export default Home;
