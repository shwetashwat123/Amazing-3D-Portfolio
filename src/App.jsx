import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}
export default App;