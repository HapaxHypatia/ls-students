import React from "react";
import {Route, Router} from "react-router";
import App from "../App";
import About from "./about";
import logo from "../logo.png";

function Navbar() {
  return (
    <div>
        <nav>
        <ul>
            <li><img src={logo} className="App-logo" alt="logo" /></li>
            <li><a>Home</a></li>
            <li><a>About</a></li>
        </ul>
        </nav>
    </div>
  );
}

export default Navbar;
