import React from "react";
import Index from "../Category";

import UpArrow from '../../Assets/arrow-up.svg'
import DownArrow from '../../Assets/arrow-down.svg'


import "./styles.css";

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      totalItems: "",
      categories: [],
      show: false,
    };
  }
  showContent = () => {
    this.setState({
        show: !this.state.show
    });

  };

  componentDidMount() {
    this.mapData(this.props.data);
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    this.mapData(newProps.data);
  }

  mapData = (data) => {
    if (!data.categories) {
      data.categories = [
        {
          itemsList: data.itemsList,
        },
      ];
    }
    const categories = data.categories.map((category) => {
      if (category.itemsList && category.itemsList.all) {
        category.itemsList = category.itemsList.all.filter(
          (item) => item.qty > 0
        );
      }

      return category;
    });

    this.setState({
      title: data.roomName,
      totalItems: categories.reduce(
        (acc, category) => acc + category.itemsList.length,
        0
      ),
      categories,
    });
  };

  render() {
    return (
      <div>
        <div id="room-category">
          <div className="room">
            <h1>{this.state.title}</h1>
            <div className="circle">{this.state.totalItems}</div>
            </div>
        
                <img onClick={ this.showContent } src={ this.state.show ? UpArrow : DownArrow } alt="" />
              
        </div>
        <div className="room-details">
          { this.state.show ? this.state.categories.map((data, index) => (
            <Index key={index} data={data} />
          )) : null }
        </div>
      </div>
    );
  }
}

export default Room;
