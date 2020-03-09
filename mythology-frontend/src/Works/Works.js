import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Content from "../WorksContent.js/Content";
import axios from "axios";
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
    axios
      .get(mythologyUrl)
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
      console.log("there's info");
      this.state.data.map(entity => {
        if (entity.works.includes("georgics")) {
          return (
            // console.log(entity)
            <Content name={entity.en_name} desc={entity.desc} />
            // <div className="entity-content">
            //   <p>{entity.en_name}</p>
            //   <p>{entity.desc}</p>
            //   {/* <img src= {entity[3].thumbnail}></img> */}
            // </div>
          );
        }else{
            return <div>I'm cry</div>
        }
      });
    }
    return <div>I'm trying</div>;
  }
}

export default Works;
