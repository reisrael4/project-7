import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Works from "./Works/Works";
import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <main>
          <Route path="/" component={Home} />
          <Route path="/list/work/georgics" component={Works} />
          <Route path="/list/work/eclogues" component={Works} />
          <Route path="/list/work/aeneid" component={Works} />
          <Route path="/list/work/unaffiliated" component={Works} />
        </main>
      </Container>
    );
  }
}

export default App;
