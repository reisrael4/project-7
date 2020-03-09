import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import './Home.css'


class Home extends Component {
  render() {
    return (
      <div>
        <Container className="App">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Virgil_.jpg"
            className="virgil"
            alt="Virgil"
          ></img>
        </Container>
      </div>
    );
  }
}

export default Home;