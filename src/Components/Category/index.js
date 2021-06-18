import React, { Component } from "react";

import "./style.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      itemsList: [],
    };
  }

  componentDidMount() {
    const data = this.props.data;
    this.setState({
      categoryName: data.categoryName,
      itemsList: data.itemsList,
    });
  }
  render() {
    return (
      <div className="things">
        <h1>{this.state.categoryName}</h1>
        {this.props.data.itemsList.map((item) => {
          return (
            <>
              <div className="items">
                <div className="qty">
                  <p>{item.display_name}</p>
                  <p>{item.qty}</p> <br />
                </div>
                <h3>{item.type ? item.type.default_type[0] : ""}</h3>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default index;
