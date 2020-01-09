import React, { Component } from "react";
import Moment from "react-moment";

import { Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import "./HiveMindPage.css";

export default class HiveMindPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    history: {
      goForward: () => {}
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
          <Button type="submit">Add Activity</Button>
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
            <div className="HiveMindPage__activity-label">
              {activity.user} created some buzz on{" "}
              <Moment format="ddd MM/DD">{activity.date_added}</Moment>
            </div>
          )}
          {activity.action && (
            <div className="HiveMindPage__activity-text">{activity.action}</div>
          )}
          {activity.notes && (
            <div className="HiveMindPage__activity-label">
              {activity.user} made a comment on{" "}
              <Moment format="ddd MM/DD">{activity.date_added}</Moment>
            </div>
          )}
          {activity.notes && (
            <div className="HiveMindPage__activity-text">{activity.notes}</div>
          )}
        </li>
      ))}
    </ul>
  );
}
