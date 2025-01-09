import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/Projects";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto border-2 border-dashed ">
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
    </main>
  )
}
export default App;