import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
