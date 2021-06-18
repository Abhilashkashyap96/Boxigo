import React, { Component } from "react";

import "./style.css";

class index extends Component {
  render() {
    return (
      <div id="house-comp">
        <div className="house-details">
          <div className="house-details-top">
            <h1>House Details</h1>
            <button className="house-details-btn">Edit house details</button>
          </div>
          <h2>Existing house details</h2>
          <div className="info">
            <div className="prev-house-details">
              <h4>Floor No.</h4>
              <br />
              <p>{this.props.data.old_floor_no}</p>
            </div>
            <div className="prev-house-details">
              <h4>Elevator Available</h4>
              <br />
              <p>{this.props.data.old_elevator_availability}</p>
            </div>
            <div className="prev-house-details">
              <h4>Packing Required</h4>
              <br />
              <p>{this.props.data.packing_service}</p>
            </div>
            <div className="prev-house-details">
              <h4>Distance from truck to door</h4>
              <br />
              <p>{this.props.data.old_parking_distance}</p>
            </div>
          </div>
          <h4>Additional Information</h4>
          <br />
          <p>No additional info</p>
        </div>
        <hr />
        <div className="house-details">
          <h2>New house details</h2>
          <div className="info">
            <div className="new-house-details">
              <h4>Floor No.</h4>
              <br />
              <p>{this.props.data.new_floor_no}</p>
            </div>
            <div className="new-house-details">
              <h4>Elevator Available</h4>
              <br />
              <p>{this.props.data.new_elevator_availability}</p>
            </div>
            <div className="new-house-details">
              <h4>Packing Required</h4>
              <br />
              <p>{this.props.data.packing_service}</p>
            </div>
            <div className="new-house-details">
              <h4>Distance from truck to door</h4>
              <br />
              <p>{this.props.data.new_parking_distance}</p>
            </div>
          </div>
          <h4>Additional Information</h4>
          <br />
          <p>No additional info</p>
        </div>
      </div>
    );
  }
}

export default index;
