import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Button, Section } from "../../components/Utils/Utils";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import ActivityForm from "../../components/ActivityForm/ActivityForm";
import "./AddActivityPage.css";

export default class AddActivityPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = HiveContext;

  componentDidMount() {
    const { hiveId } = this.props.match.params;

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

  renderHiveDesc() {
    const { hive } = this.context;

    return (
      <>
        <Section className="ActPage__hive_desc">
          <h2>
            {hive.goal_type}
            {": "}
            {hive.goal_description}
          </h2>
        </Section>
        <Section className="ActPage__target_date">
          <p className="hive_desc">Countdown to Target Date: </p>
          <Moment fromNow>{hive.target_date}</Moment>
        </Section>
      </>
    );
  }

  render() {
    const { hive, error } = this.context;
    if (error) {
      return this.renderError();
    } else {
      return (
        <div className="ActPage__main">
          {this.renderHiveDesc()}

          <Link to={`/myhives/${hive.id}/hivemind`}>
            <Button>View Hive Mind</Button>
          </Link>
          <ActivityForm />
        </div>
      );
    }
  }
}
