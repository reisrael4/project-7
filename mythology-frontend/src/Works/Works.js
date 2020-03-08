import React, { Component } from "react";
import axios from "axios";
import './Works.css';


class Works extends Component{
    constructor(){
        super();
        this.state = {
          data: null
        };
    }
    componentDidMount() {
    axios.get(mythologyUrl).then(res => {
      this.setState({ data: res.data });
      console.log(res);
      console.log(this.state.data);
    });
  }

  render() {
    if (this.state.data == null) {
      return (
        <Container className="entity">
          {Header}
          <div className="entity-content">
            <p>Hello World.</p>
          </div>
        </Container>
      );
    } else {
        let list = this.state.data.map(entity => {
            if(entity.works.includes())
          return (
            <Container className="entity">
              <Header />
              <div className="entity-content">
                <p>{entity.en_name}</p>
                <p>{entity.desc}</p>
                {/* <img src= {this.state.data[3].thumbnail}></img> */}
              </div>
            </Container>
          );
        });
    }
  }
};

export default Works;
