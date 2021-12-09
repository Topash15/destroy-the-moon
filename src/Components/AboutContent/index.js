import React from "react";
import "./style.css";

// images
import TJ from "../../assets/About/TJ.png";
import Danny from "../../assets/About/Danny.png";
import AJ from "../../assets/About/AJ.png";
import Ryan from "../../assets/About/Ryan.png";

const content = () => {
  const band = [
    { name: "TJ", description: "TJ is a TJ", image: TJ },
    { name: "Danny", description: "Danny is a Danny", image: Danny },
    { name: "AJ", description: "AJ is a AJ", image: AJ },
    { name: "Ryan", description: "Ryan is a Ryan", image: Ryan },
  ];

  return (
    <section className="about-container">
      <div className="about-band-container">
        <h2 className="about-bandname">Destroy the Moon</h2>
        <p className="about-band-description">
          We are a West Chester-based band.
        </p>
      </div>
      {band.map((member, index) => (
        <div className="about-card" key={index}>
          <div className="about-text-container">
            <h2 className="about-name">{member.name}</h2>
            <p className="about-description">{member.description}</p>
          </div>
          <div className="about-image-container">
            <img className="about-image" src={member.image} alt={member.name} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default content;
