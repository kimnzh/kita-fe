import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Description from "./sections/Description";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Reading from "./sections/Reading";

function App() {
  return (
    <main className="w-full overflow-x-hidden bg-[#00072D]">
      <Navbar />
      <Hero />
      <Description />
      <Features />
      <Reading />
      <Profile />
      <Footer />
    </main>
  );
}

export default App;
