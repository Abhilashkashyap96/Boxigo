import React, { Component } from "react";

// *******Child Components*******
import MainContent from "./Components/MainContent/MainContent";
import SideNav from "./Components/SideNav/SideNav";

// *******Style Sheet*******
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({
      loading: true,
    });
    fetch("/api_assignment.json", {
      method: "GET"
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((result) => {
            this.setState({
              loading: false,
              data: [result],
            });
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.loading && <h1>Loading...</h1>}
        <SideNav />
        <MainContent data={this.state.data}/>
      </div>
    );
  }
}

export default App;
