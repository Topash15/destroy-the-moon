import React from "react";
import "./style.css";
import icon from "../../assets/pin.png"

const shows = () => {
  const showlist = [
    { date: "12/25", location: "Bar", link: "www.bar.com" },
    { date: "12/25", location: "Bar", link: "www.bar.com" },
    { date: "12/25", location: "Bar", link: "www.bar.com" },
    { date: "12/25", location: "Bar", link: "www.bar.com" },
  ];

  return (
    <section className="shows-container">
      <div className="shows-title-div">
        <h2 className="shows-title">See Us Live!</h2>
        <p className="shows-description">
          Check out where we're playing next.
          <br />
          Can't wait to see you!
        </p>
      </div>
      <div className="shows-schedule-div">
        <table className="shows-schedule-table">
          {showlist.map((show, index) => (
            <tr className="schedule-row" key={index}>
              <td className="schedule-date">{show.date}</td>
              <td className="schedule-location">
                <p>{show.location}</p>
                  <a className="schedule-location-link" href={show.link}>
                  <img
                  className="schedule-location-icon"
                  src= {icon}
                  href={show.address}
                  alt={show.location}
                />
                  </a>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};

export default shows;
