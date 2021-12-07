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
  // optional if want custom arrows
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

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


      {/* <div className="left-column">
        <div className="schedule-container">
          <h2 className="schedule-title">Come see us live!</h2>
          <table className="schedule-table">
            <thead className="schedule-table-head">
              <tr>
                <th className="schedule-table-header">Date</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody className="schedule-table-body">
              {/* will generate table rows/data dynamically */}
              {/* <tr className="schedule-table-row">
                <td className="schedule-table-data">12/22</td>
                <td className="schedule-table-data">The Bar</td>
              </tr>
              <tr className="schedule-table-row">
                <td className="schedule-table-data">12/22</td>
                <td className="schedule-table-data">The Bar</td>
              </tr>
              <tr className="schedule-table-row">
                <td className="schedule-table-data">12/22</td>
                <td className="schedule-table-data">The Bar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="spotify-container">
          <iframe
            src="https://open.spotify.com/embed/album/2tPPTLfRq5JaV58oYapIWj?utm_source=generator"
            width="100%"
            height="200"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
      <div className="right-column"></div> */}