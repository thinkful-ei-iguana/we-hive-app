import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import TodaysDate from "../../components/Date/TodaysDate";
import ActivityForm from "../../components/ActivityForm/ActivityForm";

export default class HivePage extends Component {
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
  }

  componentWillUnmount() {
    this.context.clearHive();
  }
  renderHiveDetail() {
    const { hive } = this.context;
    return (
      <>
        <h2>
          {hive.goal_type}
          {": "}
          {hive.goal_description}
        </h2>
      </>
    );
  }

  render() {
    const { error, hive } = this.context;
    let detail;
    if (error) {
      detail =
        error.error === "Hive doesn't exist" ? (
          <p className="red">Hive not found</p>
        ) : (
          <p className="red">Error.</p>
        );
    } else if (!hive.id) {
      detail = <div className="loading" />;
    } else {
      detail = this.renderHiveDetail();
    }
    return (
      <>
        <TodaysDate />
        {detail}
        <Button>Add members to hive</Button>
        <ActivityForm />
      </>
    );
  }
}
