import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/layout/Pagelayout';
import About from './components/pages/about';
import Page1 from './components/pages/page1';
import Page2 from './components/pages/page2';

class App extends Component {


  render() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <h1>Home Screen</h1>
          </React.Fragment>
        )} />

        {/* THis can definitely be improved */}
        <Route path="/about" component={About} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </div>
    </Router>
  );
  }
}

export default App;
