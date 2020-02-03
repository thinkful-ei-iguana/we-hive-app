import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import { Button } from "../../components/Utils/Utils";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import BeeIcon from "../../images/bee-icon.png";
import "./HiveMindPage.css";

export default class HiveMindPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
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

  renderHiveActivity() {
    const { activityList } = this.context;
    return (
      <div className="hivemind-text">
        <HiveActivity activityList={activityList} />
      </div>
    );
  }

  render() {
    const { hive } = this.context;

    return (
      <>
        <div className="HiveMind__page">
          <h2 className="user-welcome-heading">Hive Mind</h2>
          <h2 className="Goal-desc">{hive.goal_description}</h2>
          {hive.group_message && (
            <div className="group-message">{hive.group_message}</div>
          )}

          {this.renderHiveActivity()}
        </div>

        <Link to={`/myhives/${hive.id}`}>
          <Button type="submit" className="hive-mind-button">
            Add Activity
          </Button>
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
          {activity.action && (
            <div className="HiveMindPage__activity-label-buzz">
              <span>
                <img className="bee" src={BeeIcon} alt="bee icon" />
                {"  "}
                {activity.user} created some <span className="buzz">buzz</span>{" "}
                on <Moment format="MM/DD/YYYY">{activity.date_added}</Moment>
              </span>
            </div>
          )}
          {activity.action && (
            <div className="HiveMindPage__activity-text buzz-text">
              {activity.action}
            </div>
          )}
          {activity.notes && (
            <div className="HiveMindPage__activity-label-notes">
              {activity.user} commented on{" "}
              <Moment format="MM/DD/YYYY">{activity.date_added}</Moment>
            </div>
          )}
          {activity.notes && (
            <div className="HiveMindPage__activity-text notes-text">
              {activity.notes}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
