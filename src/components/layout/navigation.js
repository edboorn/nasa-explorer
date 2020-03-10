import React from 'react';
import { Link } from 'react-router-dom';

export default function header() { 
    return (
        <React.Fragment>
            <h1> Navigation Options</h1>
            <Link to="/">Home</Link>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
            <Link to="/about">about</Link>
        </React.Fragment>
    )
}