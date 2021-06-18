import React, { Component } from "react";
import Room from '../Room';
// *******Style Sheet*******
import "./Rooms.css";

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
  }

  componentDidMount () {
    const data = this.props.data;
    this.setState({
      rooms: data.items.rooms
    })
  }

  UNSAFE_componentWillReceiveProps (newProps) {
    const data = newProps.data;
    this.setState({
      rooms: data.items.rooms
    })
  }

  render() {
    return (
      <div id="room-main">
        <div className="room-top">
          <h1>Inventory Details</h1>
          <button className="room-btn">Edit Inventory</button>
        </div>
        {this.state.rooms.map((data, index) => <Room key={index} data={ this.props.data } data={data}/>)}
        
      </div>
    );
  }
}

export default Rooms;
