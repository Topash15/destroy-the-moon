import React from "react";
import "./style.css";

// photos
import test from "../../assets/MOWS-cropped.png";

const albums = () => {
  const albumList = [
    { title: "album1", description: "This is the description of the album", image: test, songList: ["song1", "song2"] },
  ];

  return (
    <section className="albums-container">
      <ul>
        {albumList.map((album, index) => (
          <li className="album-list-item" key={index}>
            <h2 className="album-title">{album.title}</h2>
            <p className="album-description">{album.description}</p>
            <img className="album-image" src={album.image} alt={album.title} />
            <ul className="album-songs-list">
              {album.songList.map((song, index) => (
                <li className="song-list-song">{song}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default albums;
