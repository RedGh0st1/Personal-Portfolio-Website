import Hero from "../../components/Home/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default HomePage;
