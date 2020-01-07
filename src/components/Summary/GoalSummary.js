import React, { Component } from "react";
import { Button } from "../Utils/Utils";

class GoalSummary extends Component {
  render() {
    return (
      <div>
        <h4>Username's Goals:</h4>
        <h5>3</h5>
        <Button>Add Goal</Button>
      </div>
    );
  }
}

export default GoalSummary;
