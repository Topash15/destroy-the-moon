import React from "react";
import title from "../../assets/DestroyTheMoonWhite(1).png";
import "./style.css";

const navbar = () => {
  return (
    <nav className="nav">
      <img className="imgTitle" src={title} alt="Destroy the Moon"></img>
      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-link" href="">
            Albums
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
