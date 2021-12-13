import React from "react";

// components
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import AlbumContent from "../Components/AlbumContent";

const albums = () => {
  return (
    <div>
      <Nav />
      <AlbumContent />
      <Footer />
    </div>
  );
};

export default albums;