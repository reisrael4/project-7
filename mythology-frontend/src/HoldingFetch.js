import axios from "axios";
const mythologyUrl = "https://mythology-api.herokuapp.com/list";

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
        <Container className="App">
          {Header}
          <div className="App-header">
            <p>Hello World.</p>
          </div>
        </Container>
      );
    } else {
      return (
        <Container className="App">
          <Header />
          <div className="App-header">
            <p>{this.state.data[3].en_name}</p>
            <p>{this.state.data[3].desc}</p>
            {/* <img src= {this.state.data[3].thumbnail}></img> */}
          </div>
        </Container>
      );
    }
  }