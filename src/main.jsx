import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/variables.css";
import Tecboard from "./page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tecboard />
  </StrictMode>
);
