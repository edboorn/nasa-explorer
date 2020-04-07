import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Pages

import Home from "../pages/home";
import About from "../pages/about";
import ImageSearch from "../pages/imageSearch";
import RoverImages from "../pages/roverImages";

export default function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <Router>
      <div>
      <nav>
          <h3>Nasa Explorer</h3>
          <ul className="navLinks">
            <Link style={navStyle} to="/">
              <li>Home</li>
            </Link>
            <Link style={navStyle} to="/imageSearch">
              <li>Image Search</li>
            </Link>
            <Link style={navStyle} to="/roverImages">
              <li>Rover Images</li>
            </Link>
            <Link style={navStyle} to="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/imageSearch" exact component={ImageSearch} />
          <Route path="/roverImages" exact component={RoverImages} />
          <Route path="/about" exact component={About} />
        </Switch>

      </div>
    </Router>
  );
}
