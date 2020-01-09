import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import HiveContext from "../../context/HiveContext";
import { Button } from "../../components/Utils/Utils";
import HiveNavItem from "../../components/HiveNavItem/HiveNavItem";
import HiveApiService from "../../services/hive-api-service";
import "./HiveNavPage.css";

export default class HiveNavPage extends Component {
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
      <div className="HiveNavPage">
        <h2>My Hives</h2>
        <ul className="HiveNavPage__list">
          {hiveTypes.map(hive => (
            <li key={hive.id} className="hive-type">
              <NavLink
                className="HiveNavPage__type-link"
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
      <HiveNavItem
        key={hive.id}
        className="hive-type"
        hive={hive}
        hiveId={hive.id}
      />
    ));
  }

  render() {
    return (
      <div className="HiveNavPage__container">
        <h2>My Hives</h2>
        {this.renderHives()}
        <Link to={"/create"}>
          <Button className="create">Add hive</Button>
        </Link>
        <Link to={`/join`}>
          <Button className="join">Join hive</Button>
        </Link>
      </div>
    );
  }
}
