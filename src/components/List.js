import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    return (
      <ul>
        <ListItem item="Cooking" />
        <ListItem item="Washing" />
        <ListItem item="Drilling" />
        <ListItem item="Learning" />
        <ListItem item="Cooking" />
      </ul>
    );
  }
}

export default List;
