import React from "react";

// components
import Nav from "../Components/Nav";
import MainContent from "../Components/Main-Content";
import Contact from "../Components/Contact-Us"
import Hero from "../Components/Hero";

const home = () => {
  return (
    <div>
      <Nav />
      <Hero/>
      <MainContent />
      <Contact />
    </div>
  );
};

export default home;
