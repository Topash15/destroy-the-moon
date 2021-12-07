import React from "react";
import "animate.css";
import "./style.css";

const splashscreen = () => {

  const redirect = () => {
    setTimeout(() => {
      window.location.assign('/home');
    }, 5000)
  }

  redirect();

  return (
    <div className="MoonContainer">
      <div
        className="animate__animated animate__hinge animate__delay-1s
          moon-div"
      >
        <svg
          id="moon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <g id="moon-full-moon">
            <path
              className="cls-1"
              d="M34,7c5-.35,8.5,0,15.75,7s7.94,12,8.13,18.25a22.65,22.65,0,0,1-6.37,16.47c-4.06,4-11.44,9.13-20.91,8.19S17,53.64,12.36,48,6.17,34,6.07,30.55s1.69-9.06,6.06-14.12S20.14,8,34,7Z"
            />
            <path
              className="cls-2"
              d="M30.57,9.24c4.19-.41,8.28-.53,11.88,1.31s8.94,8,9.81,9.06a7.8,7.8,0,0,1,1.28,2.19S51.79,23,52.45,26.05s1.81,4.31,2.31,4.72a4.36,4.36,0,0,0,1.09.63s.31,6.44-1.37,9.87S48,50.8,43.7,52.43,31.82,57.49,24,53.86,13.86,46.8,11,41,7.89,29.36,9.29,25.15,15.2,15.4,18.86,12.9,27.39,9.55,30.57,9.24Z"
            />
            <path
              className="cls-3"
              d="M54,23c.18,0,.78,1.78,1.25,3.66a6.66,6.66,0,0,1,.25,2.81,5.66,5.66,0,0,1-1.91-2.84C53.14,24.86,53.76,23,54,23Z"
            />
            <path
              className="cls-1"
              d="M46.42,15.65A10.64,10.64,0,0,1,49.2,18c-.06.22.09.81-.22.59s-2.75-2.09-2.81-2.25A.8.8,0,0,1,46.42,15.65Z"
            />
            <path
              className="cls-1"
              d="M46.32,18.86A25,25,0,0,1,49.79,22a.86.86,0,0,1-.19.59s-3.41-2.94-3.5-3.06S46.32,18.86,46.32,18.86Z"
            />
            <path
              className="cls-1"
              d="M45.82,21.24A24.39,24.39,0,0,1,49.17,24c0,.28-.09.66-.19.69s-3.72-2.28-3.66-2.56S45.64,21.15,45.82,21.24Z"
            />
            <path
              className="cls-1"
              d="M38.29,18a2.47,2.47,0,0,1,3.47,2.31,3.27,3.27,0,0,1-4.31,3C35.89,22.46,35.67,19,38.29,18Z"
            />
            <path
              className="cls-3"
              d="M38.52,18.78a1.71,1.71,0,0,1,2.4,1.6,2.26,2.26,0,0,1-3,2.05C36.86,21.89,36.7,19.49,38.52,18.78Z"
            />
            <path
              className="cls-1"
              d="M15.2,20.8c.12,0,1.19.53,1.09.63a8.79,8.79,0,0,0-2.06,3.47c-.5,1.88-.28,2.59-.59,2.63s-1,0-1.06-.19A11,11,0,0,1,13.39,24C13.92,22.8,14.86,20.93,15.2,20.8Z"
            />
            <path
              className="cls-1"
              d="M24.57,20.71c2.58-.65,6.81.72,7.44,5.69s-5.13,7.5-9.16,5S17,22.61,24.57,20.71Z"
            />
            <path
              className="cls-3"
              d="M24.94,22.57a4.17,4.17,0,0,1,5,3.85c.42,3.37-3.47,5.08-6.2,3.41S19.82,23.86,24.94,22.57Z"
            />
            <path
              className="cls-1"
              d="M14.86,33.36c.55-.24,2.09,0,2.16,2.06s-1.31,3.22-2.81,2.84S11.92,34.65,14.86,33.36Z"
            />
            <path
              className="cls-3"
              d="M15,34.49c.63-.2,1.34.53,1.25,1.44s-.91,1.94-1.87,1.56S13.2,35.08,15,34.49Z"
            />
            <path
              className="cls-1"
              d="M30,39.9c1.38-.74,2.78-.28,3.13,1.22a2.49,2.49,0,0,1-2.41,3.25A2.33,2.33,0,0,1,30,39.9Z"
            />
            <path
              className="cls-3"
              d="M30.48,40.8a1.21,1.21,0,0,1,1.94,1.06,1.57,1.57,0,0,1-2.16,1.53C29.23,42.9,29.17,41.58,30.48,40.8Z"
            />
            <path
              className="cls-1"
              d="M20.76,42.52c.13.13,0,.69.75,1.31s1.13.63,1.06.84-.12.47-.34.47a4.07,4.07,0,0,1-1.5-.94c-.5-.47-1-1.5-.75-1.59A3,3,0,0,1,20.76,42.52Z"
            />
            <path
              className="cls-1"
              d="M18.64,42.77A6.47,6.47,0,0,0,20,44.9c1,1,1.63,1.22,1.53,1.44s-.37.53-.59.44a15,15,0,0,1-2.12-2c-.59-.69-1.22-1.69-1.06-1.84S18.64,42.77,18.64,42.77Z"
            />
            <path
              className="cls-1"
              d="M16.73,43.05a19.54,19.54,0,0,0,1.88,2.88c1.09,1.22,1.66,1.34,1.59,1.53a.48.48,0,0,1-.47.38c-.31,0-1.66-1.22-2.62-2.34s-1.47-1.94-1.28-2.09A3.82,3.82,0,0,1,16.73,43.05Z"
            />
            <path
              className="cls-1"
              d="M39.11,47.43c1.44-.09,2.09.56,1.72,2.22s-1.75,1.5-2.62,1S36.48,47.58,39.11,47.43Z"
            />
            <path
              className="cls-3"
              d="M39.17,48.24A1,1,0,0,1,40,49.68a.87.87,0,0,1-1.53,0A1,1,0,0,1,39.17,48.24Z"
            />
            <path
              className="cls-1"
              d="M44.82,35.52c2.51-.59,3.72.19,4.41,2.84s-1.78,4.53-3.72,4.94-2.87.25-3.94-2.19S41.36,36.33,44.82,35.52Z"
            />
            <path
              className="cls-3"
              d="M44.54,36.46c.82-.26,2.63-.84,3.34,1.13s.63,3.19-1,4.19S44.57,43,43,41.61,41.17,37.52,44.54,36.46Z"
            />
            <path
              className="cls-1"
              d="M52.76,32a10.64,10.64,0,0,1,2.16,2.5c0,.25-.16.63-.28.56a17.28,17.28,0,0,1-2.41-2.37C52.26,32.46,52.54,32,52.76,32Z"
            />
            <path
              className="cls-1"
              d="M51.32,33.49c0,.2,3,3.22,3,3.5s-.09.66-.22.59a38.31,38.31,0,0,1-3.31-3.47C50.86,34,51.32,33.4,51.32,33.49Z"
            />
            <path
              className="cls-1"
              d="M51.17,36.4a22.32,22.32,0,0,1,2.72,3c0,.22-.16.75-.31.69s-3-2.91-3-3S51,36.36,51.17,36.4Z"
            />
          </g>
        </svg>
      </div>
      <img
        className="animate__animated animate__backInDown title"
        src={require("../../assets/DestroyTheMoonWhiteCenter.png").default}
        alt="Destroy the Moon"
      ></img>
    </div>
  );
};

export default splashscreen;
