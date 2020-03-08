import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home";
import Works from "./Works/Works";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Home} />
        {/* <Route path="/list/work/georgics" component={Works} />
        <Route path="/list/work/eclogues" component={Works} />
        <Route path="/list/work/aeneid" component={Works} />
        <Route path="/list/work/unaffiliated" component={Works} /> */}
      </div>
    );
  }
}

export default App;
