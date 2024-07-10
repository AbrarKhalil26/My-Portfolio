import "./App.css";
import { About, Home, Menu, Projects } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Menu /> 
        <div className="min-h-screen flex flex-col justify-center px-44">
          <Routes>
            <Route path="/My-Portfolio/" element={<Home />} />
            <Route path="/My-Portfolio/about" element={<About />} />
            <Route path="/My-Portfolio/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
