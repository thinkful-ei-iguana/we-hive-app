import React, { Component } from "react";
import { Link } from "react-router-dom";
import HiveContext from "../../context/HiveContext";
import { Button } from "../../components/Utils/Utils";
import HiveNavItem from "../../components/HiveNavItem/HiveNavItem";
import HiveApiService from "../../services/hive-api-service";
import HiveTypeAccordion from "../../components/HiveTypeAccordion/HiveTypeAccordion";
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
    const { hives = [] } = this.context;

    return (
      <div className="HiveNavPage">
        <ul className="HiveNavPage__list">
          {hiveTypes.map(hiveType => (
            <li key={hiveType.id} className="hive-type">
              <HiveTypeAccordion
                id={hiveType.id}
                type={hiveType.type}
                goals={hives}
              />
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

        {this.renderTypes()}
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
