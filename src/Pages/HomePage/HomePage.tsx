import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Home />
    </div>
  );
}
