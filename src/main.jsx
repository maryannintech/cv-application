import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import CVForm from "./components/CVForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hero></Hero>
    <Nav></Nav>
    <CVForm></CVForm>
  </React.StrictMode>
);
