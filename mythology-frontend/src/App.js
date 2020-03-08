import React, { Component } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Header from "./Header/Header";


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
render(){
  return (
    <Container className="App">
      <Header />
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Virgil_.jpg"></img>
    </Container>
  );
}
  
}

export default App;
