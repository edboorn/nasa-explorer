import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Pages
import Home from "../pages/home";
import About from "../pages/about";
import ImageSearch from "../pages/imageSearch";
import RoverImages from "../pages/roverImages";

export default function Nav() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/covid-explorer">
            {" "}
            Nasa Explorer{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <Link className="nav-item" to="/nasa-explorer">
                <li className="nav-link" >Home</li>
              </Link>
              <Link className="nav-item" to="/nasa-explorer/imageSearch">
                <li className="nav-link">Image Search</li>
              </Link>
              <Link className="nav-item" to="/nasa-explorer/roverImages">
                <li className="nav-link">Rover Images</li>
              </Link>
              <Link className="nav-item" to="/nasa-explorer/about">
                <li className="nav-link">About</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="container-flex"> 
        <Switch>
          <Route path="/nasa-explorer" exact component={Home} />
          <Route
            path="/nasa-explorer/imageSearch"
            exact
            component={ImageSearch}
          />
          <Route
            path="/nasa-explorer/roverImages"
            exact
            component={RoverImages}
          />
          <Route path="/nasa-explorer/about" exact component={About} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}
