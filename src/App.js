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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
