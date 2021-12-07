import React from "react";
import title from "../../assets/DestroyTheMoonWhite(1).png";
import "./style.css";

const navbar = () => {
  const categories = [
    { title: "About us", link: "#about-us" },
    { title: "Albums", link: "/#/albums" },
    { title: "Gallery", link: "/#/gallery" },
    { title: "Contact Us", link: "#contact-us" },
    { title: "Merch", link: "/#/merch"}
  ];

  return (
    <nav className="nav sticky">
      <a href="/">
        <img
          className="imgTitle"
          src={title}
          alt="Destroy the Moon"
        ></img>
      </a>
      <ul className="nav-list">
        {categories.map((category) => (
          <li className="nav-item">
            <a className="nav-link" href={category.link}>
              {category.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default navbar;
