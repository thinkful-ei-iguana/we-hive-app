import React, { Component } from "react";

class ProgressReport extends Component {
  render() {
    return (
      <>
        <fieldset>
          <legend>Progress Report</legend>
          <label>See report from </label>
          <select id="time-frame">
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="year">Last 365 days</option>
          </select>
          <h5>I took [4] actions this [week].</h5>
          <h5>I invested [4 hrs 30 mins] in my commitments.</h5>
          <h5>Average satisfaction with progress: [7/10]</h5>
        </fieldset>
      </>
    );
  }
}

export default ProgressReport;
