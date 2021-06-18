import React, { Component } from "react";

// *******Images*******
import Truck from '../../Assets/truck.png'
import Profile from '../../Assets/profile.png'
import Quote from '../../Assets/quote.png'
import Logout from '../../Assets/logout.png'

// *******Style Sheet*******
import "./SideNav.css";

class SideNav extends Component {
  render() {
    return (
      <div className="leftside">
        <ul className="sidenav">
          <li> <img src={ Truck } alt="" /> MY MOVES</li>
          <li> <img src={ Profile } alt="" /> MY PROFILE</li>
          <li> <img src={ Quote } alt="" /> GET QUOTES</li>
          <li> <img src={ Logout } alt="" /> LOGOUT</li>

        </ul>
      </div>
    );
  }
}

export default SideNav;
