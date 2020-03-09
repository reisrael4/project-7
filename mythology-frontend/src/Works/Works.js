import React, { Component } from "react";
// import axios from "axios";
import Container from "@material-ui/core/Container";
import "./Works.css";

const mythologyUrl = "https://mythology-api.herokuapp.com/list";

class Works extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    fetch(mythologyUrl)
      .then(res => {
        return res.json;
      })
      .then(res => {
        this.setState({ data: res.data });
        console.log(res);
        console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.data == null) {
      return (
        <Container className="entity">
          <div className="entity-content">
            <p>Hello World.</p>
          </div>
        </Container>
      );
    } else {
      let list = this.state.data.map(entity => {
        if (entity.works.includes("georgics")) {
          return (
            <Container className="entity" key={entity.works}>
              <div className="entity-content">
                <p>{entity.en_name}</p>
                <p>{entity.desc}</p>
                {/* <img src= {this.state.data[3].thumbnail}></img> */}
              </div>
            </Container>
          );
        }
        if (entity.works.includes("eclogues")) {
          return (
            <Container className="entity" key={entity.works}>
              <div className="entity-content">
                <p>{entity.en_name}</p>
                <p>{entity.desc}</p>
                {/* <img src= {this.state.data[3].thumbnail}></img> */}
              </div>
            </Container>
          );
        }
        if (entity.works.includes("aeneid")) {
          return (
            <Container className="entity" key={entity.works}>
              <div className="entity-content">
                <p>{entity.en_name}</p>
                <p>{entity.desc}</p>
                {/* <img src= {this.state.data[3].thumbnail}></img> */}
              </div>
            </Container>
          );
        }
        if (entity.works.length === 0) {
          return (
            <Container className="entity" key={entity.works}>
              <div className="entity-content">
                <p>{entity.en_name}</p>
                <p>{entity.desc}</p>
                {/* <img src= {this.state.data[3].thumbnail}></img> */}
              </div>
            </Container>
          );
        }
      });
    }
    return <div>"I'm trying"</div>;
  }
}

export default Works;
