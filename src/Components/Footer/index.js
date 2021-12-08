import React from "react";
import "./style.css";

const footer = () => {
    const links = [{text:'', link: '', logo: ''}]

  return (
    <footer className="footer-container">
      <div>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a className="footer-top" href="#top">
              Return to Top
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>Destroy the Moon</p>
        <p>Site developed by Alex Topash</p>
      </div>
    </footer>
  );
};

export default footer;
