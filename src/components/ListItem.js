import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <li>{item}</li>
      </div>
    );
  }
}

export default ListItem;
