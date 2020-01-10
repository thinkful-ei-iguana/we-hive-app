import React, { Component } from "react";
import Moment from "react-moment";
import "./AddActivityItem.css";
export default class AddActivityItem extends Component {
  render() {
    const { hive } = this.props;

    return (
      <>
        <div className="ActItem__hive_heading">
          <h2 className="ActItem__title">Goal: {hive.goal_description}</h2>
        </div>
        <div className="ActItem__target_date">
          <p className="hive_date">Countdown to Target Date: </p>
          <Moment fromNow>{hive.target_date}</Moment>
        </div>
      </>
    );
  }
}
