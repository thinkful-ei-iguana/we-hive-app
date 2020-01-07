import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HiveNavItem.css";

export default class HiveNavItem extends Component {
  render() {
    const { hive } = this.props;

    return (
      <Link to={`/myhives/${hive.id}`} className="HiveNavItem">
        <h4 className="HiveNavItem__heading">{hive.goal_description}</h4>
      </Link>
    );
  }
}
