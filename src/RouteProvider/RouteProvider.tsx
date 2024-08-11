import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";

export default function RouteProvider() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<div> 404 Not Found!!!</div>} />
    </Routes>
  );
}
