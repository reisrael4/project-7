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
          <Route path="/" exact component={Home} />
          <Route path="/list/work/georgics" exact component={Works} />
          <Route path="/list/work/eclogues" exact component={Works} />
          <Route path="/list/work/aeneid" exact component={Works} />
          <Route path="/list/work/unaffiliated" exact component={Works} />
        </main>
      </Container>
    );
  }
}

export default App;
