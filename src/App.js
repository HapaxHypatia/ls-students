import React from "react";
import './App.css';
import {Routes} from "react-router";
import {Route} from "react-router";
import {Link} from "react-router-dom";


import About from "./components/about";
import Search from "./components/search";
import logo from "./logo.png";

import NoMatch from "./components/noMatch";

function App() {
  return (
    <div className="App">
      <nav>
          <ul>
              <li><img src={logo} className="App-logo" alt="logo" /></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
      </nav>

      <Routes>
        <Route index element={<Search />} />
        <Route path="search" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
