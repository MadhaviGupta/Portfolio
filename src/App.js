import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
function App() {
  const [mode, setMode] = useState("light");
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0103";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff2f5";
    }
  };
  return (
    <>
      <div sx={{ fontFamily: "Hanken Grotesk" }}>
        <NavBar mode={mode} handleMode={handleMode} />
        <Router>
          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="about" element={<About mode={mode} />} />
            <Route path="projects" element={<Projects mode={mode} />} />
            <Route path="contact" element={<Contact mode={mode} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
