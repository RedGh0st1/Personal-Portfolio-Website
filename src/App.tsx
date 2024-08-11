import "./index.css";
import RouteProvider from "./RouteProvider/RouteProvider";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero/Hero";

function App() {
  return (
    <div className="App_container">
      <Navbar />
      <RouteProvider />
      <Hero />
    </div>
  );
}

export default App;
