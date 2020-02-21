import React from 'react'

import NavigationBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
// import ClientTestimonial from "./components/client_testimonial";
import Tools from "./components/tools";
import Projects from "./components/projects";
import Resume from "./components/resume";
// import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div data-spy="scroll" data-target="#pb-navbar" data-offset="200">
      <NavigationBar />
      <Home />
      <About />
      <Tools />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
