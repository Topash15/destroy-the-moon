import React from "react";
import "./style.css";

// images
import Insta from "../../assets/Footer/instagram.png";
import Top from "../../assets/Footer/top.png";
import Spotify from "../../assets/Footer/spotify.png";
import Facebook from "../../assets/Footer/facebook.png";
import TikTok from "../../assets/Footer/tiktok.png";
import Apple from "../../assets/Footer/apple.png";
import TeeSpring from "../../assets/Footer/tshirt.png";
import Youtube from "../../assets/Footer/youtube.png";
import Soundcloud from "../../assets/Footer/soundcloud.png"

const footer = () => {
  const links = [
    { text: "Instagram", link: "https://www.instagram.com/destroythemoon_band/", icon: Insta },
    { text: "Spotify", link: "https://open.spotify.com/artist/08fTPY5aK0E2zRxSN1Gbkt", icon: Spotify },
    { text: "Facebook", link: "https://www.facebook.com/DestroytheMoonBand/", icon: Facebook },
    { text: "TikTok", link: "https://www.tiktok.com/@destroythemoonband", icon: TikTok },
    { text: "Apple-Music", link: "https://music.apple.com/us/artist/destroy-the-moon/1399379779", icon: Apple },
    { text: "TeeSpring", link: "https://teespring.com/stores/destroy-the-moons-store", icon: TeeSpring },
    { text: "Youtube", link: "https://www.youtube.com/channel/UCBKktqUnv31qqSoHMt-Y9VQ", icon: Youtube },
    { text: "Soundcloud", link: "https://soundcloud.com/user-660139171", icon: Soundcloud },
    { text: "Top", link: "#top", icon: Top },
  ];

  return (
    <footer className="footer-container">
      <div>
        <ul className="footer-list">
          {links.map((link, index) => (
            <li className="footer-list-item">
              <a className="footer-link" href={link.link}>
                <img className="footer-icon" src={link.icon} alt={link.text} />
              </a>
            </li>
          ))}
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
