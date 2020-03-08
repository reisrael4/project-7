import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return <Route path="/" component={Home} />;
  }
}

export default App;
