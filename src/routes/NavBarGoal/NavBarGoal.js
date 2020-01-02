import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import GoalContext from "../../context/GoalContext";
import "./NavBarGoal.css";

export default class NavBarGoal extends Component {
  static contextType = GoalContext;
  render() {
    const { goals = [] } = this.context;
    const goalTypes = [
      "Events",
      "Current Goals",
      "Stretch Goals",
      "Future Goals",
      "Dream Goals",
      "Completed Goals"
    ];
    return (
      <>
        <h1>My Hive</h1>
        <ul>
          {goalTypes.map(type => (
            <li className="goal-type">
              <NavLink to={`/${type}`}>{type}</NavLink>
            </li>
          ))}
        </ul>
        <Link to={"/add-goal"}>
          <button className="add-goal">Add goal</button>
        </Link>
      </>
    );
  }
}
