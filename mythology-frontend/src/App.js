import React, { Component } from "react";
import "./App.css";
import Home from './Home/Home';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
render(){
  return (
    <Home />
  );
}
  
}

export default App;
