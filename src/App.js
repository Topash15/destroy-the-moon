import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SplashScreen from "./Pages/Splashscreen/index";

function App() {
  return (
    <div className="App">
      <Routes>
          {/* <Route path="/splashscreen" element={<SplashScreen/>}/> */}
          <Route exact path="/" element={<SplashScreen />}/>
          <Route exact path="/home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
