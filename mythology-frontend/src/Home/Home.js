import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import { Link, Route } from "react-router-dom";
import './Home.css'



class Home extends Component {
    render(){
        return (
          <div>
              <Container className="App">
                <Header />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Virgil_.jpg"
                  className="virgil"
                ></img>
              </Container>
          </div>
        );
    }
}

export default Home;