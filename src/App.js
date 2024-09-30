import { useEffect, useState } from "react";
import { About, Contact, Home, Menu, Projects, Resume, Services } from "./components";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  const Resize = () => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768 );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  useEffect(Resize, []);
  useEffect(() => {
    AOS.init({ duration: 2000});
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Menu isMobile={isMobile}/> 
        <div className="min-h-screen flex flex-col justify-center px-6 sm:px-16 md:px-24 lg:px-30 xl:px-44 py-28">
          <Routes>
            <Route path="/" element={<Home isMobile={isMobile}/>} />
            <Route path="/about" element={<About isMobile={isMobile}/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
