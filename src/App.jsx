import "./app.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar.jsx"; // Added .jsx
import Home from "./pages/Home.jsx"; // Added .jsx
import About from "./pages/About.jsx"; // Added .jsx
import Skills from "./pages/Skills.jsx"; // Added .jsx
import Projects from "./pages/Projects.jsx"; // Added .jsx
import Contact from "./pages/Contact.jsx"; // Added .jsx
import Experience from "./pages/Experience.jsx"; // Added .jsx
import Resume from "./pages/Resume.jsx"; // Added .jsx
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx"; // Added .jsx

const App = () => {
  const location = useLocation();
  return (
    <>
      <CustomCursor />
      {location.pathname !== '/resume' && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;