import React, { Component } from "react";

// *******Child Components*******
import MyMove from "../MyMove/MyMove";
import Rooms from "../Rooms/Rooms";
import HouseDetails from "../HouseDetails";

// *******Style Sheet*******
import "./MainContent.css";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  clickHandler = () => {
    this.setState({
        show: !this.state.show
    });
  };

  render() {
      
    return (
      <div className="main-content">
        {this.props.data.map((data, index) => (
          <div className="container" key={index}>
            <MyMove show={ this.state.show } clickHandler={ this.clickHandler } data={data} />
            { this.state.show ? <Rooms data={data} /> : null }
            { this.state.show ? <HouseDetails data={data} /> : null }
          </div>
        ))}
      </div>
    );
  }
}

export default MainContent;
