import Hero from "../../components/Home/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Blog from "../../components/Blog/Blog";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};
export default HomePage;
