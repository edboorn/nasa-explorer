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
            <Link style={navStyle} to="/nasa-explorer">
              <li>Home</li>
            </Link>
            <Link style={navStyle} to="/nasa-explorer/imageSearch">
              <li>Image Search</li>
            </Link>
            <Link style={navStyle} to="/nasa-explorer/roverImages">
              <li>Rover Images</li>
            </Link>
            <Link style={navStyle} to="/nasa-explorer/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
        <Switch>
          <Route path="/nasa-explorer" exact component={Home} />
          <Route path="/nasa-explorer/imageSearch" exact component={ImageSearch} />
          <Route path="/nasa-explorer/roverImages" exact component={RoverImages} />
          <Route path="/nasa-explorer/about" exact component={About} />
        </Switch>

      </div>
    </Router>
  );
}
