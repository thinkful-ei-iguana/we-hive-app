import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import HiveContext from "../../context/HiveContext";
import { Button, Section } from "../../components/Utils/Utils";
import HiveNavItem from "../../components/HiveNavItem/HiveNavItem";
import HiveApiService from "../../services/hive-api-service";
import "./HiveNavPage.css";

export default class HiveNav extends Component {
  static contextType = HiveContext;

  componentDidMount() {
    this.context.clearError();
    HiveApiService.getHives()
      .then(this.context.setHives)
      .catch(this.context.setError);
  }
  renderTypes() {
    const { hiveTypes } = this.context;

    return (
      <div className="GoalTypeNav">
        <h2>My Hives</h2>
        <ul className="GoalTypeNav__list">
          {hiveTypes.map(hive => (
            <li key={hive.id} className="goal-type">
              <NavLink
                className="GoalTypeNav__type-link"
                to={`/myhives/${hive.type}`}
              >
                {hive.type}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  renderHives() {
    const { hives = [] } = this.context;
    return hives.map(hive => (
      <HiveNavItem key={hive.id} className="goal-type" hive={hive} />
    ));
  }
  render() {
    const { error } = this.context;
    return (
      <>
        {this.renderHives()}
        <Link to={"/add-hive"}>
          <Button className="add-goal">Add hive</Button>
        </Link>
        <Link to={"/join-hive"}>
          <Button className="add-goal">Join hive</Button>
        </Link>
      </>
    );
  }
}
