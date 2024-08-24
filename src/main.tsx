import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
const basename = import.meta.env.BASE_URL === "production" ? "/app" : "/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
