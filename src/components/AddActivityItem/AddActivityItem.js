import React, { Component } from "react";
import Moment from "react-moment";

export default class AddActivityItem extends Component {
  render() {
    const { hive } = this.props;

    return (
      <>
        <div className="ActItem__hive_heading">
          <h2>
            {hive.goal_type}
            {": "}
            {hive.goal_description}
          </h2>
        </div>
        <div className="ActItem__target_date">
          <p className="hive_date">Countdown to Target Date: </p>
          <Moment fromNow></Moment>
        </div>
      </>
    );
  }
}
