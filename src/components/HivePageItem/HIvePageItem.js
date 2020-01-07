import React, { Component } from "react";
import HiveContext from "../../context/HiveContext";
import "./HivePageItem.css";

export default class HivePageItem extends Component {
  static defaultProps = {
    match: { params: {} }
  };
  static contextType = HiveContext;
  render() {
    const { hive } = this.context;

    return (
      <h4 className="HivePageItem__heading">
        {hive.goal_type}
        {": "}
        {hive.goal_description}
      </h4>
    );
  }
}
