import React from "react";

import "./style.css"
import HeroImage from "../../assets/Band-Performing.png";
import HeroTitle from '../../assets/DestroyTheMoonWhiteCenter.png'

const hero = () => {
  return (
    <section className="hero-container">
        <img className="hero-title" src={HeroTitle} alt="Destroy The Moon"/>
    </section>
  );
};

export default hero;
