import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";

const content = () => {
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

  // slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    <section className="main-content-container">
      <div className="left-column">
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
              <tr className="schedule-table-row">
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
      <div className="right-column">
        <div className="carousel-container">
          <div className="carousel">
            <Slider {...settings}>
              {/* will generate carousel slides dynamically */}
              <div className="carousel-item">
                <a href="#">
                  <img
                    className="carousel-img"
                    src={require("../../assets/HITOR.png").default}
                  />
                </a>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default content;
