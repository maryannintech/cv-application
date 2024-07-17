import React from "react";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import CVForm from "./components/CVForm.jsx";
import CVPreview from "./components/CVPreview.jsx";

export default function App() {
  return (
    <div>
      <Hero></Hero>
      <Nav></Nav>
      <CVForm></CVForm>
    </div>
  );
}
