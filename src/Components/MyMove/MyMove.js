import React, { Component } from "react";

// ************Images*************
import Size from "../../Assets/size.png";
import Luggage from "../../Assets/luggage.png";
import Route from "../../Assets/route.png";
import Calendar from "../../Assets/calendar.png";
import Arrow from "../../Assets/arrow.png";
import Warning from "../../Assets/warning.png";

// **********Style Sheet**********
import "./MyMove.css";

class MyMove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movingFrom: "",
      movingTo: "",
      requestId: "",
      homeSize: "",
      totalBoxes: 0,
      distance: "",
      date: "",
      isFlexible: false,
    };
  }

  componentDidMount() {
    const data = this.props.data;
    this.setState({
      movingFrom: data.moving_from,
      movingTo: data.moving_to,
      requestId: data.estimate_id,
      homeSize: data.property_size,
      totalBoxes: data.boxes_count,
      distance: data.distance,
      date: data.moving_on,
      isFlexible: data.move_date_flexible === "1" ? true : false,
    });
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    const data = newProps.data;
    this.setState({
      movingFrom: data.moving_from,
      movingTo: data.moving_to,
      requestId: data.estimate_id,
      homeSize: data.property_size,
      totalBoxes: data.boxes_count,
      distance: data.distance,
      date: data.moving_on,
      isFlexible: data.move_date_flexible === "1" ? true : false,
    });
  }

  render() {
    
    return (
      <>
        <h1 className="head-up">My Moves</h1>
        <div className="cards">
          <div className="move-head">
            <div className="up from">
              <h1>From</h1> <br /> <p>{this.state.movingFrom}</p>
            </div>
            <div className="up round">
              <img src={Arrow} alt="" />
            </div>
            <div className="up to">
              <h1>To</h1> <br /> <p>{this.state.movingTo}</p>
            </div>
            <div className="up request">
              <h1>Request#</h1> <br /> <p>{this.state.requestId}</p>
            </div>
          </div>
          <div className="move-center">
            <div className="middle home">
              <img src={Size} alt="" />
              <p>{this.state.homeSize}</p>
            </div>
            <div className="middle luggage">
              <img src={Luggage} alt="" />
              <p>{this.state.totalBoxes}</p>
            </div>
            <div className="middle navigation">
              <img src={Route} alt="" />
              <p>{this.state.distance}</p>
            </div>
            <div className="middle calander">
              <img src={Calendar} alt="" />
              <p>{this.state.date}</p>
            </div>
            <div className="middle checkbox">
              <input type="checkbox" style={{background: "#ee553b"}} checked={this.state.isFlexible} />
              <p>is flexible</p>
            </div>
            <button onClick={ this.props.clickHandler } className="middle-btn one">View move details</button>
            <button className="middle-btn two">Quotes Awaiting</button>
          </div>
          <div className="bottom">
            <img src={Warning} alt="" /> <h1>Disclaimer: </h1>{" "}
            <p> Please update your move date before two days of shifting</p>
          </div>
        </div>
      </>
    );
  }
}

export default MyMove;
