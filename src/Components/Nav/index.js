import React from "react";
import title from "../../assets/DestroyTheMoonWhite(1).png";
import "./style.css";

const navbar = () => {
  const categories = [
    { title: "About Us", link: "/about-us" },
    { title: "Albums", link: "/albums" },
    // { title: "Gallery", link: "/gallery" },
    { title: "Contact Us", link: "/home#contact-us" },
    { title: "Merch", link: "https://destroy-the-moons-store.creator-spring.com/?"}
  ];

  return (
    <nav className="nav sticky">
      <a href="/home">
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
