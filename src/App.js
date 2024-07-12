import { useEffect, useState } from "react";
import { About, Contact, Home, Menu, Projects, Resume, Services } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

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

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Menu isMobile={isMobile}/> 
        <div className="min-h-screen flex flex-col justify-center px-6 sm:px-16 md:px-24 lg:px-44">
          <Routes>
            <Route path="/My-Portfolio/" element={<Home isMobile={isMobile}/>} />
            <Route path="/My-Portfolio/about" element={<About />} />
            <Route path="/My-Portfolio/projects" element={<Projects />} />
            <Route path="/My-Portfolio/services" element={<Services />} />
            <Route path="/My-Portfolio/resume" element={<Resume />} />
            <Route path="/My-Portfolio/contact" element={<Contact />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
