import React from "react";
import Lego from "./Lego";
import Navbar from "./Components/Navbar";
import Home from "./Features/Home";
import Projects from "./Features/Projects";
import About from "./Features/About";

export default function App() {
  return (
    <div className="relative w-screen h-screen flex justify-center">
      <Navbar />
      <Lego />
      <div className="w-6xl h-full">
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}
