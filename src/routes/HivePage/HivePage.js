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

    HiveApiService.getHive(hiveId)
      .then(this.context.setHive)
      .catch(this.context.setError);
    return (
      <>
        <h2>
          {this.context.hive.goal_type}
          {": "}
          {this.context.hive.goal_description}
        </h2>
      </>
    );
  }
  renderHiveDetail() {
    const { hive } = this.context;
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
    } else {
      detail = this.renderHiveDetail();
    }
    return (
      <>
        <TodaysDate />
        {detail}

        <Link to={`/myhives/${hive.id}/add-code`}>
          <Button>Add members to hive</Button>
        </Link>
        <Link to={`/myhives/${hive.id}/hive-mind`}>
          <Button>View hive-mind</Button>
        </Link>
        <ActivityForm />
      </>
    );
  }
}
