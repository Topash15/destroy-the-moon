import React, { Component } from "react";
// import Slider from "react-slick";
import "./style.css";

// components
import Slider from "../Slider";

// photos
import HITORimage from "../../assets/HITOR-Carousel.png";
import Cherry from "../../assets/CherryMV.png";
import Merch from "../../assets/Merch-Store.png";
import MakingOf from "../../assets/MOWS.png";

const content = () => {

  const carousel = [
    { title: "HITOR", image: HITORimage, link: "https://li.sten.to/HITOR" },
    {
      title: "Cherry",
      image: Cherry,
      link: "https://www.youtube.com/watch?v=9uIL_9_m2_I",
    },
    {
      title: "Merch",
      image: Merch,
      link: "https://teespring.com/stores/destroy-the-moons-store",
    },
    {
      title: "MakingOf",
      image: MakingOf,
      link: "https://www.youtube.com/watch?v=fyyq-Z9Yg8k&feature=youtu.be",
    },
  ];

  return (
    <section className="main-content-container">
      <div className="carousel-div">
        <Slider
          options={{
            autoPlay: 4000,
            pauseAutoPlayOnHover: true,
            wrapAround: true,
            adaptiveHeight: false,
            setGallerySize: false,
            fade: true,
          }}
        >
          {carousel.map((slide, index) => (
            <div className="carousel-item" key={index}>
              <a className="carousel-link" href={slide.link}>
                <img
                  className="carousel-img"
                  src={slide.image}
                  alt={slide.title}
                ></img>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default content;