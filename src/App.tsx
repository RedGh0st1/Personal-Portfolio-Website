import "./index.css";
import RouteProvider from "./RouteProvider/RouteProvider";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App_containter">
      <Navbar />
      <RouteProvider />
    </div>
  );
}

export default App;
