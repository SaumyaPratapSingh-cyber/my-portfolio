import "./app.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import GooeyCursor from "./components/CustomCursor/CustomCursor";

const App = () => {
  const location = useLocation();
  return (
    <>
      <GooeyCursor /> {/* Cursor is now always visible */}
      
      {/* Navbar will still be hidden on the resume page for a clean look */}
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