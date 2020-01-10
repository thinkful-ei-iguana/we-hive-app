import React, { Component } from "react";
import Moment from "react-moment";
import "./AddActivityItem.css";
export default class AddActivityItem extends Component {
  render() {
    const { hive } = this.props;

    return (
      <>
        <div className="ActItem__hive_heading">
          <div className="ActItem__target_date">
            <h2 className="hive_date">Target Date: </h2>
            <h3>
              {" "}
              <Moment fromNow>{hive.target_date}</Moment>
            </h3>
          </div>
        </div>
        <h2 className="ActItem__title">Goal: {hive.goal_description}</h2>
      </>
    );
  }
}
