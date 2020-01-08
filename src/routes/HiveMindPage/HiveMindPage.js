import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import "./HiveMindPage.css";

export default class HiveMindPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = HiveContext;

  componentDidMount() {
    const { hiveId } = this.props.match.params;
    this.context.clearError();
    HiveApiService.getHive(hiveId)
      .then(this.context.setHive)
      .catch(this.context.setError);
    HiveApiService.getActivity(hiveId)
      .then(this.context.setActivity)
      .catch(this.context.setError);
  }
  componentWillUnmount() {
    this.context.clearHive();
  }

  renderHiveActivity() {
    const { activityList } = this.context;
    return (
      <>
        <HiveActivity activityList={activityList} />
      </>
    );
  }

  render() {
    const { hive } = this.context;

    return (
      <>
        <h2>Our Goal: {hive.goal_description}</h2>
        <h4>{hive.group_message}</h4>
        <h2>Hive Mind</h2>
        {this.renderHiveActivity()}
        <Link to={`/myhives/${hive.id}`}>
          <Button>Add Activity</Button>
        </Link>
      </>
    );
  }
}

function HiveActivity({ activityList = [] }) {
  return (
    <ul className="HiveMindPage__activity-list">
      {activityList.map(activity => (
        <li key={activity.id} className="HiveMindPage__activity">
          <div className="HiveMindPage__activity-text">
            {activity.user} created some buzz.
            <FontAwesomeIcon
              size="lg"
              icon="quote-left"
              className="HiveMindPage__quote-icon orange"
            />
          </div>
          <div className="HiveMindPage__activity-text">{activity.action}</div>
          <p>
            {activity.user} made a comment.{" "}
            <FontAwesomeIcon
              size="lg"
              icon="quote-left"
              className="HiveMindPage__quote-icon orange"
            />
            {activity.notes}
          </p>
          <p>{activity.date_added}</p>
        </li>
      ))}
    </ul>
  );
}
