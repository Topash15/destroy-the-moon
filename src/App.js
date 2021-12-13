import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SplashScreen from "./Pages/Splashscreen/index";
import About from "./Pages/AboutUs";
import Albums from "./Pages/Albums.js";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <div className="App" id="top">
      <Routes>
          {/* <Route path="/splashscreen" element={<SplashScreen/>}/> */}
          <Route exact path="/" element={<SplashScreen />}/>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/about-us" element={<About />}/>
          <Route exact path="/albums" element={<Albums />}/>
          <Route exact path="/gallery" element={<Gallery />}/>

      </Routes>
    </div>
  );
}

export default App;
