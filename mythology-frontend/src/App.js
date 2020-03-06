import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const mythologyUrl = "https://mythology-api.herokuapp.com/list";

class App extends Component {

  componentDidMount(){
    axios.get(mythologyUrl).then(res => {
      console.log(res);
    })
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World.</p>
      </header>
    </div>
  );
  }
}

export default App;
