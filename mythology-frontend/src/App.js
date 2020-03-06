import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const mythologyUrl = "https://mythology-api.herokuapp.com/list";

class App extends Component {
  constructor() {
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
        <div className="App">
          <header className="App-header">
            <p>Hello World.</p>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <p>{this.state.data[0].en_name}</p>
          </header>
        </div>
      );
    }
  }
}

export default App;
