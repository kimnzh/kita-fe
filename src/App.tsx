import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Description from "./sections/Description";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Reading from "./sections/Reading";
import ForumPage from "./sections/forum/page"; //ForumPage"; // Pastikan file ini ada
import ScreeningPage from "./sections/screening/page"; //ScreeningPage"; // Pastikan file ini ada
import AppointmentPage from "./sections/appointment/page"; //AppointmentPage"; // Pastikan file ini ada


function App() {
  return (
    <Router>
      <main className="w-full overflow-x-hidden bg-[#00072D]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Description />
                <Features />
                <Reading />
                <Profile />
                <Footer />
              </>
            }
          />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/screening" element={<ScreeningPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;