import React, { useState, useEffect } from "react";
import "./App.css";
import {Routes, Route, Link} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import TeamScreen from "./screens/TeamScreen";

function App() {
  console.log("App")

  return (
    <div className="App">
      <header>
        <h2>My Site</h2>
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/team">
            <button>Home</button>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="about/:pokemon" element={<AboutScreen />} />
        <Route path="team" element={<TeamScreen />} />
      </Routes>
      {/* footer */}
    </div>
  );
}

export default App;
