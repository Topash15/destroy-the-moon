import React from "react";
import "./style.css";

// photos
import HITOR from "../../assets/AlbumCovers/HITOR.png";
import Wayside from "../../assets/AlbumCovers/Wayside.png";
import DTM from "../../assets/AlbumCovers/DestroyTheMoon.png";

const albums = () => {
  const albumList = [
    {
      title: "Hope I Turn Out Right",
      description:
        "Hope I Turn Out Right is Destroy The Moon's third album, out now! Check out the tracklist and head to your favourite streaming site to listen!",
      releaseDate: "11/12/21",
      image: HITOR,
      songList: [
        "Blue T-Shirt",
        "Scary Movie",
        "The Shakes (I'm So Tired)",
        "Red Tape",
        "Cherry",
        "Off The Deep End",
        "Psychotic",
        "Odd Little Feelings",
        "Cheap Friends",
        "Roses",
        " Toys",
        "Armor",
        "Ripple",
        "Ghost Stories",
      ],
    },
    {
      title: "Wayside",
      description:
        "Wayside is Destroy The Moon's second studio album. With an assortment of new sounds, Destroy The Moon strived to deliver an energetic second album!",
      releaseDate: "10/5/18",
      image: Wayside,
      songList: [
        "I Slept Through the Apocalypse",
        "Sleeping Dogs",
        "Chemcial Forest",
        "Itch the Snitch",
        "I Don't Trust the Weather",
        "Fate of the Fool",
        "Wonderful Madness",
        "The Hero Next to Me",
        "The Optimist",
        "What Are We Gonna Do?",
        "Analytical Nightmare",
        "End of Times",
        "Summerfield",
      ],
    },
    {
      title: "Destroy the Moon",
      description: "Our first albmum",
      image: DTM,
      songList: [
        "Modern Reality",
        "Queen At The Prom",
        "Thrills",
        "Another Universe",
        "Subject of Massacre",
        "Missions to Mars",
        "Halo",
        "Lonely Girl",
        "Little Miss Do Right",
        "Promises",
        "Jet Black Heart",
        "Broken Wings",
        "Red",
        "Madeline",
        "Collision",
        "Mindless One",
      ],
    },
  ];

  return (
    <section className="albums-container">
      <ul className="albums-list">
        {albumList.map((album, index) => (
          <li className="album-list-item" key={index}>
            <div className="album-info">
              <div className="album-text">
                <h2 className="album-title">{album.title}</h2>
                <p className="album-description">{album.description}</p>
                {album.releaseDate ? (
                  <p className="album-release-date">
                    Release Date: {album.releaseDate}
                  </p>
                ) : null}
              </div>
              <img
                className="album-image"
                src={album.image}
                alt={album.title}
              />
            </div>
            <div className="tracklist-div">
              <h3>Tracklist</h3>
              <ol className="album-songs-list">
                {album.songList.map((song, index) => (
                  <li className="song-list-song">{song}</li>
                ))}
              </ol>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default albums;
