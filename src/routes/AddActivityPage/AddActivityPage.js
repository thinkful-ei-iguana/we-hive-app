import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Button } from "../../components/Utils/Utils";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import ActivityForm from "../../components/ActivityForm/ActivityForm";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import "./AddActivityPage.css";

export default class AddActivityPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    history: {
      push: () => {}
    }
  };

  static contextType = HiveContext;

  redirectToTarget = hiveId => {
    const { history } = this.props;
    history.push(`/myhives/${hiveId}/hivemind`);
  };

  componentDidMount() {
    const { hiveId } = this.props.match.params;
    this.context.clearError();
    HiveApiService.getHive(hiveId)
      .then(this.context.setHive)
      .catch(this.context.setError);
  }
  renderError() {
    const { error } = this.context;
    if (error.error === "Hive doesn't exist") {
      return <p className="red">Hive not found</p>;
    } else {
      return <p className="red">There was an error.</p>;
    }
  }

  renderHiveHeading(hive) {
    if (!hive) return "";
    return (
      <>
        <div className="ActItem__hive_heading">
          <h2 className="ActItem__title">
            <span className="Goal-desc">{hive.goal_description}</span>
          </h2>

          <div className="ActItem__target_date">
            <h2 className="hive_date">
              Target Date:{" "}
              <Moment fromNow className="orange">
                {hive.target_date}
              </Moment>
            </h2>
          </div>
        </div>
      </>
    );
  }

  render() {
    const { error, hives = [] } = this.context;
    const { hiveId } = this.props.match.params;

    const hive = hives.find(act => act.id === Number(hiveId));

    if (error) {
      return this.renderError();
    } else {
      return (
        <div className="ActPage__main">
          <HeaderMain />
          {this.renderHiveHeading(hive)}

          <ActivityForm hiveId={hiveId} onRedirect={this.redirectToTarget} />
        </div>
      );
    }
  }
}
