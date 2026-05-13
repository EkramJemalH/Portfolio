import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Eventify from "./pages/Eventify";
import CraigslistCaseStudy from "./pages/CraigslistCaseStudy";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/eventify" element={<Eventify />} />
        <Route path="/case-study/craigslist" element={<CraigslistCaseStudy />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;