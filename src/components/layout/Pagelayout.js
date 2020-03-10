import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

export default function header() {
  return (
      <div>
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
      <Typography variant="h6">NASA Exporer</Typography>
    </Toolbar>
  </AppBar>
    {/* Use marterial Nav in the future */}
    <React.Fragment>
      <Link to="/">Home</Link> | 
      <Link to="/page1">Page1</Link> |
      <Link to="/page2">Page2</Link> | 
      <Link to="/about">about</Link> |
    </React.Fragment>
    </div>
  );
}
