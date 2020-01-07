import React, { Component } from "react";
import { Link } from "react-router-dom";

class Countdown extends Component {
  render() {
    return (
      <div>
        <h4>Days until next target date:</h4>
        <h5>31 days</h5>
        <Link to="">View Goal</Link>
      </div>
    );
  }
}

export default Countdown;
