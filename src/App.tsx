import Navbar from "./components/Navbar";
import Description from "./sections/Description";
import Features from "./sections/Features";
import Hero from "./sections/Hero";

function App() {
  return (
    <main className="w-full overflow-x-hidden bg-[#00072D]">
      <Navbar />
      <Hero />
      <Description />
      <Features />
    </main>
  );
}

export default App;
