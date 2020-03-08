import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
  render() {
    return <Route path="/" component={Home} />;
  }
}

export default App;
