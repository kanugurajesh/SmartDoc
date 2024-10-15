import Toggle from "@/components/Toggle";
import Profile from "@/components/profile";

const Home = () => {
  return (
    <main className="items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 top-4 left-4 z-10">
          <Toggle />
        </div>
        <div className="absolute inset-0 top-4 right-4 z-10">
          <Profile />
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-semibold text-center">
          Welcome to the Home Page
        </h1>
        <p className="text-center mt-2">
          This is a simple home page with a toggle and profile dropdown.
        </p>
      </div>
    </main>
  );
};

export default Home;
