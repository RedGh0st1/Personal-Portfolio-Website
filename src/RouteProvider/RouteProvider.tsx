import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import BlogPage from "../Pages/BlogPage/BlogPage";
import AboutPage from "../Pages/AboutPage/AboutPage";

const RouteProvider: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="*" element={<div> 404 Not Found!!!</div>} />
    </Routes>
  );
};
export default RouteProvider;
