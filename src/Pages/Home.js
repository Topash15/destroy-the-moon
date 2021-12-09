import React from "react";

// components
import Nav from "../Components/Nav";
import Carousel from "../Components/Carousel";
import Contact from "../Components/Contact-Us"
import Hero from "../Components/Hero";
import Shows from "../Components/Shows";
import Footer from "../Components/Footer"

const home = () => {
  return (
    <main>
      <Nav />
      <Hero/>
      <Carousel />
      <Shows />
      <Contact />
      <Footer />
    </main>
  );
};

export default home;
