import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Safety from "./Safety";
import Contact from "./Contact";
import Track from "./Track";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>SCLL COVID Tracker</h1>
          <ul className="header">
            <li>< NavLink to="/">Home</NavLink></li>
            <li>< NavLink to="/Track">Track</NavLink></li>
            <li>< NavLink to="/safety">Safety</NavLink></li>
            <li>< NavLink to="/contact">Contact</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="Track" component={Track}></Route>
            <Route path="/safety" component={Safety}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;
